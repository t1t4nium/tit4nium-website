---
title: "SCTPhantom : une faille SCTP vieille de 18 ans dans le kernel Linux, root et évasion de conteneur"
tags: [linux, securite, kernel]
---

Le 4 août 2026, l'équipe CVE du kernel Linux a publié CVE-2026-64564, une faille découverte par l'équipe sécurité de Tencent (TencentOS Security Team). Surnommée SCTPhantom, elle touche l'implémentation SCTP du kernel : un use-after-free qui permet à un utilisateur local non privilégié de passer root, et de s'échapper d'un conteneur vers l'hôte. Le code fautif a été introduit avec Linux 2.6.25, il y a près de dix-huit ans.

## Ce qui cloche

SCTP est un protocole de transport alternatif à TCP, pensé pour la téléphonie et les réseaux qui exigent plusieurs chemins simultanés. La faille est dans le traitement des chunks ASCONF, le mécanisme (RFC 5061) qui permet à une association SCTP d'ajouter, supprimer ou reconfigurer des chemins réseau à la volée.

Le kernel valide une opération DEL-IP en se basant sur l'adresse source du paquet, mais un pointeur en cache se réfère à l'adresse utilisée pour sélectionner le chemin réseau. En construisant une séquence ASCONF ordonnée (spécifier une adresse, la supprimer, puis envoyer une suppression wildcard), un attaquant fait supprimer au kernel un transport dont une référence périmée subsiste dans les pointeurs actifs de l'association. Une opération socket ultérieure déréférence cette mémoire libérée : use-after-free classique.

## Pourquoi ça compte

La chaîne d'exploitation complète a été montée par les chercheurs de Tencent avec Corvus AI, leur pipeline de recherche de vulnérabilités autonome. Elle transforme le bug mémoire en escalade de privilèges complète : reprise de la mémoire libérée via un ring buffer de socket packet, fuite d'une adresse kernel pour neutraliser KASLR, puis second use-after-free avec des données de clé d'authentification SCTP contrôlées par l'attaquant pour finir sur commit_creds, sans shellcode ni chaîne ROP.

Les tests couvrent Ubuntu 24.04, Debian 13 et Rocky Linux 9, sur des kernels de 5.14 à une release candidate 7.2 : root à chaque fois. La même faille permet l'évasion conteneur vers l'hôte, y compris avec les profils seccomp par défaut (six tentatives réussies sur huit). Le score CVSS v4.0 est de 8.5.

Le détail qui fait réfléchir : la découverte initiale est le travail d'un système autonome, pas d'un humain. Corvus AI a fait une partie du travail mécanique (navigation dans l'arbre du kernel, itération sur le PoC, boot et collecte des rapports sanitizers), et les chercheurs ont orchestré le reste.

## Que faire

Le correctif est en amont depuis le commit 9b2854f86f0b (« sctp: don't free the ASCONF's own transport in DEL-IP processing »), backporté sur les branches stables 6.6.148, 6.12.101, 6.18.42 et 7.1.6.

Côté Debian, la faille est traitée par DSA-6415-1 : trixie (13) est corrigé en 6.12.101-1. Les kernels plus anciens, comme la 5.10 de bullseye, sont toujours listés vulnérables.

Vérifier sa version :

```
uname -r
```

Sous Debian 13, un `apt update && apt upgrade` doit amener linux-image-amd64 en 6.12.101 ou plus, suivi d'un reboot. Les environnements multi-locataires et les serveurs qui font tourner des conteneurs avec du SCTP chargé sont les premiers à patcher.

## La leçon

Une faille de dix-huit ans qui dort dans un protocole peu utilisé, c'est le scénario habituel : le code vieillit, personne ne le relit, et quand quelqu'un (ou quelque chose) s'y attarde, l'exploitation est directe. Le SCTP est rarement nécessaire sur un serveur standard ; moins de surface, moins de risques. Et côté patch, ne pas attendre le point release : le fix est sorti en août pour un kernel de la branche stable, il se récupère dès maintenant.

## Sources

- [Tencent Zhuque Lab - SCTPhantom: An 18-Year-Old SCTP ASCONF Transport Use-After-Free](https://matrix.tencent.com/en/2026/08/06/sctphantom-CVE-2026-64564)
- [Cyber Security News - 18-Year-Old Linux Kernel SCTP Vulnerability Lets Attackers Gain Full Root on Host](https://cybersecuritynews.com/18-year-old-linux-kernel-sctp-vulnerability/)
- [The Hacker News - 18-Year-Old Linux SCTP Flaw Could Let Local Users Gain Root and Escape Containers](https://thehackernews.com/2026/08/18-year-old-linux-sctp-flaw-could-let.html)
- [Debian Security Tracker - CVE-2026-64564 / DSA-6415-1](https://security-tracker.debian.org/tracker/CVE-2026-64564)
