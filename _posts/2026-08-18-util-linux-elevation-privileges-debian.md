---
title: "util-linux : des élévations de privilèges corrigées dans un paquet présent partout"
tags: [debian, securite, mise-a-jour]
---

Le 14 août, Debian a publié la DSA-6442-1 pour util-linux. Le paquet corrige plusieurs vulnérabilités qui peuvent mener à une élévation de privilèges. Rien de spectaculaire dans le CVSS, mais c'est exactement le genre d'advisory qu'il ne faut pas laisser traîner.

## Ce qui cloche

util-linux fait partie de la base de toute installation Debian : mount, fdisk, su, blkid, dmesg, tous ces outils que l'on utilise sans y penser tournent avec. Un défaut qui permet une élévation de privilèges dans ce paquet n'exige pas un service exposé sur le réseau : il suffit d'un accès local, même limité, pour potentiellement passer root. C'est la chaîne classique : un pied dans la porte via un autre vecteur, puis l'escalade pour prendre le contrôle.

La DSA-6442-1 regroupe cinq CVE (CVE-2026-13595, CVE-2026-27456, CVE-2026-53612, CVE-2026-53613, CVE-2026-53614) corrigées dans la version 2.41.5-0+deb13u1 pour trixie.

## Pourquoi ça passe sous le radar

Les advisories qui font la une sont celles des gros composants exposés au réseau. util-linux est l'inverse : un composant local, omniprésent, jamais mis en avant. Personne ne surveille activement la sortie d'une DSA sur mount. Résultat, ce genre de paquet se retrouve en retard de plusieurs semaines sur les machines mises à jour « au fil de l'eau ».

La semaine du 11 au 18 août illustre bien le rythme : Debian a publié une salve d'advisories, de postgresql-17 (DSA-6438-1) et chromium (DSA-6436-1) le 13, à zip et unzip (DSA-6439-1, DSA-6440-1) et util-linux le 14, docker.io et neutron le 16, ironic le 17, expat (DSA-6446-1) le 18. Derrière, il y a un volume constant qu'aucune machine ne rattrape à la main.

## Que faire

Rien d'exotique, la routine :

```bash
sudo apt update && sudo apt upgrade
```

Et si le paquet est déjà dans une version plus récente, rien à faire. Sur une machine qui tourne en continu, c'est le cas d'usage d'`unattended-upgrades` : il applique les mises à jour de sécurité sans attendre que quelqu'un y pense. Un serveur à jour se mesure au fait que cette commande ne retourne plus rien à appliquer.

## La leçon

Les paquets de base méritent les mises à jour autant que les gros services exposés. Une élévation de privilèges dans util-linux n'est pas un risque que l'on peut différer sous prétexte que « ça ne concerne pas un service exposé » : c'est précisément le composant que l'on voudrait le plus fiable, parce qu'il a les droits. Le réflexe correct n'est pas de surveiller les DSA une par une, c'est d'automatiser l'application et de vérifier après coup qu'elle a eu lieu.

## Sources

- [DSA-6442-1 util-linux : liste Debian](https://lists.debian.org/debian-security-announce/2026/msg00353.html) (14 août 2026)
- [Debian Security Information : advisories récents](https://www.debian.org/security/)
- [LinuxSecurity : DSA-6442-1](https://linuxsecurity.com/advisories/debian/debian-dsa-6442-1-util-linux)
