---
title: "Relier deux agents IA par tunnels SSH : aucune interface exposée"
tags: [hermes, a2a, securite]
---

En août, j'ai connecté mon agent Hermes de supervision à un agent distant sur un VPS via le protocole A2A (Agent2Agent, Linux Foundation). Le point qui m'a occupé, ce n'était pas le protocole lui-même, mais son exposition : aucune interface d'administration ne devait être accessible depuis Internet. Voici comment, sans ouvrir un seul port.

## Le problème

A2A est du HTTP : deux agents s'échangent des tâches par des appels JSON-RPC 2.0, chacun exposant une Agent Card. Deux options de transport s'offrent alors : laisser le service écouter sur le réseau (avec ou sans TLS), ou le confiner.

J'ai fait un état des risques avant de brancher quoi que ce soit. Le dashboard de l'agent distant et l'interface A2A, exposés tels quels sur le VPS, c'est une surface d'attaque injustifiable : une interface d'administration accessible de l'extérieur, sans authentification HTTP ni TLS solide, c'est une porte ouverte. La décision est tombée vite : tout reste en loopback, et le seul point d'entrée est une connexion SSH authentifiée et chiffrée.

## Ce qui n'a pas marché

La tentation initiale était de faire simple : ouvrir un port, binder A2A dessus, et s'appuyer sur un token Bearer. Ça marche techniquement, mais ça pose deux problèmes. Le transport en clair (HTTP sans TLS) expose le trafic et le token en transit. Et un port ouvert sur un VPS public, même protégé par un token, c'est une surface que je n'ai pas envie de défendre à distance. Le token est la dernière ligne, pas la première : on ne met pas un service d'administration derrière un simple secret partagé si on peut le mettre derrière une connexion SSH.

## Ce qui a marché

Deux tunnels SSH en sens opposé, montés dans un service systemd utilisateur :

```
Machine locale (derrière NAT)           VPS public
  agent A2A 127.0.0.1:9900              agent A2A 127.0.0.1:9900
  forward -L 9902:127.0.0.1:9900  ◀──▶  reverse -R 9901:127.0.0.1:9900
  (reverse 127.0.0.1:9901)              (forward 127.0.0.1:9902)
```

- `-L` (forward) : l'agent local appelle l'agent distant via `127.0.0.1:9902`, le tunnel achemine vers le 9900 du VPS.
- `-R` (reverse) : le VPS écoute sur `127.0.0.1:9901` et achemine vers l'A2A local. L'agent distant peut ainsi appeler l'agent local, même si la machine locale est derrière une box NAT. C'est ce qui rend la supervision réactive : l'agent distant peut alerter au lieu de n'être sondé qu'à heure fixe.

Le service (extrait) :

```ini
ExecStart=/usr/bin/ssh -N -T \
  -o ServerAliveInterval=30 -o ServerAliveCountMax=3 \
  -o ExitOnForwardFailure=yes -o BatchMode=yes \
  -L 127.0.0.1:9902:127.0.0.1:9900 \
  -R 127.0.0.1:9901:127.0.0.1:9900 \
  example.com
Restart=always
RestartSec=5
```

Le SSH apporte l'authentification (clé privée) et le chiffrement au niveau du transport. Côté VPS, `GatewayPorts` reste à sa valeur par défaut (`no`) : le bind du `-R` reste sur loopback, rien n'est exposé sur le réseau. Les tokens par paire vivent dans `~/.hermes/.env`.

Le dashboard distant est lui aussi bindé sur `127.0.0.1` et accessible uniquement par un tunnel SSH distinct ouvert depuis la machine qui a le navigateur. Aucun de ces services n'a d'adresse routable.

## Ce que j'en retiens

Quand on expose un service d'administration ou d'automatisation, la question à se poser n'est pas « quel auth je mets devant ? » mais « pourquoi un port est-il ouvert du tout ? ». Un tunnel SSH inversé derrière une box, c'est la même fonctionnalité sans aucune surface réseau : pas de port à défendre, pas de certificat à renouveler, pas de service à patcher à distance. Le token Bearer reste utile en deuxième couche, mais il n'est plus la porte d'entrée.

Le point qui mérite attention : si une machine tourne avec les approbations désactivées, un credential compromis vaut exécution de commandes sans confirmation. D'autant plus de raison de garder tout en loopback et de protéger les tokens.

## Liens

- [Documentation du setup](https://github.com/t1t4nium/hermes-agent-doc/blob/main/a2a-agents-tunnel-ssh.md)
