---
title: "J'ai transformé un vieux laptop en agent IA autonome avec Hermes"
tags: [hermes-agent, debian, auto-hebergement]
---

J'avais un vieil HP EliteBook 820 G1 qui prenait la poussière. Core i5 de 2014, 8 Go de RAM, SSD 240 Go. Rien d'excitant.

Je me suis demandé si cette brique pouvait servir à quelque chose d'utile. La réponse : un agent IA autonome, tournant 24/7 avec des modèles dans le cloud.

Spoiler : ça a marché. Voici comment.

---

### Pourquoi un vieux laptop ?

J'aurais pu prendre un VPS. Mais j'avais envie de quelque chose que je contrôle physiquement, chez moi, sans abonnement mensuel. Le HP traînait, il était déjà payé, et vu le prix des agents cloud, un vieux processeur qui ronronne est vite rentabilisé.

Première étape : le sécuriser et le rendre fiable. J'ai désactivé au BIOS tout ce qui était inutile (WiFi, Bluetooth, lecteur de cartes, haut-parleurs, micro, caméra) et activé le redémarrage automatique après coupure de courant.

### Debian, épurée

Rien de fancy. Debian 13, swap de 4 Go, partition racine pour le reste. Pas de mot de passe root, tout passe par sudo. J'ai désactivé la mise en veille sur fermeture de l'écran : sur un vieux portable qui sert de serveur, le couvercle reste fermé, et il ne faut pas que le système se mette en veille en le fermant.

### Installation de l'agent

L'installation elle-même a été étonnamment simple :

```bash
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
```

J'ai choisi un modèle cloud via Nous Portal. J'ai commencé par un modèle gratuit dont j'ai oublié le nom, avant de passer au MiniMax M2.7 qui offrait un bien meilleur rapport qualité/prix.

Puis la gateway pour la messagerie : j'ai branché Telegram. Le laptop de 2014 venait de devenir un agent IA que je pouvais joindre depuis mon téléphone et mon PC.

### Donner une personnalité à son agent

J'ai écrit un fichier `SOUL.md` pour lui donner du caractère :

> *Tu es Hermès alias 4ether, un agent IA autonome. Tu travailles toujours en français. Tu es patient et bienveillant. En cas de doute, tu demandes des précisions. tit4nium est ton administrateur. tit4nium et Maggie sont tes amis.*

Ça peut sembler anecdotique, mais c'est ce qui transforme un outil technique en assistant avec lequel on a envie d'interagir.

### Ce que ce vieux laptop m'a permis de faire

Avec cette configuration minimale :

- Créer et automatiser la gestion de sites Jekyll
- Mettre en place une veille quotidienne automatisée sur l'IA et les cryptos
- Avoir un assistant disponible 24/7, chez moi, sans abonnement VPS

Pour un coût matériel de zéro euro (le laptop était déjà là) et juste le prix des appels API.

### Ce que j'ai retenu

Un vieux laptop avec 8 Go de RAM et un processeur de 2014, c'est suffisant pour faire tourner un agent IA avec des modèles cloud. Pas besoin de GPU, pas besoin d'un serveur à 20 €/mois.

La clé : choisir le bon usage. L'inférence dans le cloud, l'automatisation sur la machine locale. Chaque chose à sa place.

Ce premier setup m'a donné confiance pour aller plus loin. Le GEEKOM A5 est venu après, avec des ambitions plus grandes et des leçons plus douloureuses, mais c'est une autre histoire.

---

### Appendix, commandes et configs clés

Pour mémoire :

```bash
# Désactiver la mise en veille à la fermeture de l'écran
mkdir -p /etc/systemd/logind.conf.d
cat > /etc/systemd/logind.conf.d/custom.conf << EOF
[Login]
HandleLidSwitch=ignore
EOF
systemctl restart systemd-logind

# Optimisations système
# /etc/fstab : ajouter noatime
# UUID=<UUID> / ext4 errors=remount-ro,noatime 0 1

# /etc/sysctl.d/custom.conf
vm.swappiness=10

# Installation Hermes Agent
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash

# Installation et configuration de la gateway
sudo env PATH=$PATH hermes gateway install --system
hermes gateway setup
```
