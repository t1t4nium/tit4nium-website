---
title: "DebConf26 clôturée à Santa Fe, DebConf27 au Japon en septembre 2027"
tags: [debian, debconf, conference]
---

L'annonce officielle est tombée le 7 août sur debian.org : DebConf26, qui s'est tenue à Santa Fe en Argentine, est terminée, et la prochaine édition est déjà annoncée. DebConf27 aura lieu à Asahikawa, sur l'île d'Hokkaido, au Japon, du 5 au 11 septembre 2027. C'est la deuxième fois que la conférence des développeurs et contributeurs Debian se déroulera au Japon, et la première à Hokkaido.

## Ce qui s'est passé à Santa Fe

La conférence s'est étalée sur deux semaines en juillet : le DebCamp, la session de développement, du 13 au 19 juillet, puis la conférence proprement dite du 20 au 25 juillet. Le bilan publié par le projet : plus de 270 participants venus de 35 pays, et environ 90 événements cumulés, dont 27 talks, 21 short talks, 29 sessions BoF (réunions informelles entre développeurs et utilisateurs) et 8 ateliers.

Trois points ressortent du compte rendu :

- Le sprint Go. Une semaine entière du DebCamp a été dédiée à l'audit, la mise à jour et la modernisation de l'écosystème Go dans Debian, en lien avec le passage de `dh-golang` à `GO111MODULE=on` par défaut dans Experimental. C'est une transition qui va toucher tous les paquets Go de l'archive.
- Le track en espagnol. Pour rendre la conférence accessible aux participants locaux, une partie du programme était en espagnol, comme à DebConf19 au Brésil.
- L'accueil des nouveaux contributeurs. Un sprint d'onboarding a eu lieu chaque jour du DebCamp, et une demi-douzaine de nouveaux contributeurs ont suivi le parcours d'apprentissage du packaging.

Les vidéos sont archivées : environ 70 heures d'enregistrements sont disponibles sur le site de la conférence et sur l'archive meetings-archive.debian.net.

## Pourquoi ça compte

DebConf, c'est le moment où le projet se retrouve en présentiel : les décisions techniques discutées en ligne depuis un an se règlent autour d'une table, les nouveaux contributeurs passent le pas, et les équipes (noyau, packaging, infrastructure, sécurité) font leur point annuel. Le sprint Go est un exemple concret : ce genre de travail collectif ne se fait pas par listes de diffusion interposées.

Pour l'utilisateur Debian, l'intérêt est indirect mais réel : ce qui se décide à DebConf (transitions, politiques de packaging, support matériel) arrive dans les releases suivantes. Le passage à `GO111MODULE=on` pour `dh-golang`, par exemple, prépare l'avenir du packaging Go dans l'archive.

## Sources

- [Debian News — DebConf26 closes in Santa Fe and DebConf27 announced](https://www.debian.org/News/2026/20260807)
- [DebConf26](https://debconf26.debconf.org/)
- [DebConf27 (wiki)](https://wiki.debian.org/DebConf/27)
