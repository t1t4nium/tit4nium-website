---
title: "Debian 11 Bullseye : dernier mois de support LTS, il faut migrer"
tags: [debian, mise-a-jour]
---

Debian 11, alias bullseye, sorti le 14 août 2021, voit son support LTS s'arrêter
le 31 août 2026. Il reste moins d'un mois. Après cette date, plus aucun
correctif de sécurité gratuit pour cette release. C'est le moment de vérifier
ce qui tourne encore dessus.

## Où on en est

Le support régulier de bullseye s'était terminé le 14 août 2024, date à
laquelle l'équipe LTS (Long Term Support) avait pris le relais pour deux ans.
Cette période s'achève le 31 août 2026. C'est confirmé dans l'annonce du
12 juillet 2026, qui acte aussi la fin du support régulier de Debian 12
(bookworm) et son passage sous la responsabilité de l'équipe LTS jusqu'au
30 juin 2028.

Concrètement, au 1er septembre 2026 :

- plus de mises à jour de sécurité pour bullseye ;
- les dépôts `bullseye-lts` s'arrêtent ;
- toute faille découverte ensuite reste non corrigée sur ces machines.

## Ce qui change pour bookworm

Autre nouvelle de la même annonce : Debian 12 passe en LTS jusqu'au 30 juin
2028. Les architectures supportées en LTS sont désormais amd64, i386, arm64,
armhf et ppc64el (le support ppc64el est une première en LTS). Si vous êtes
sur bookworm, vous n'êtes pas pressés, mais le compte à rebours a commencé.

## Que faire

La voie recommandée : migrer en deux étapes, bullseye vers bookworm, puis
bookworm vers trixie. Les montées de version in-place ne se font pas en sautant
des étapes. Pour une migration 11 vers 13, il faut donc deux dist-upgrade
successifs, avec leurs pièges (paquets retirés, dépôts tiers à réorienter,
configuration à revoir).

Points de contrôle avant de migrer :

1. Lister les machines encore sous bullseye (`lsb_release -a` ou
   `/etc/os-release`).
2. Supprimer ou re-pointer les dépôts tiers qui ne supportent plus bullseye.
3. Faire une sauvegarde et un snapshot avant chaque étape.
4. Prévoir l'espace disque : une migration qui échoue en cours de route se
   rattrape, mais pas sans place libre.

Le 31 août n'est pas une date magique : rien ne s'éteint à minuit. Mais la
prochaine CVE sur un service exposé ne préviendra pas avant de tomber sur une
machine bullseye.

Sources :

- [Debian News - Security support for Bookworm handed over to the LTS team](https://www.debian.org/News/2026/20260712)
- [Debian Releases](https://www.debian.org/releases/)
