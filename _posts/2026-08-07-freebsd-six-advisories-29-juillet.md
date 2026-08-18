---
title: "FreeBSD : six advisories le 29 juillet, WireGuard et escalade de privilèges en tête"
tags: [freebsd, securite, mise-a-jour]
---

Le 29 juillet 2026, FreeBSD a publié six advisories de sécurité d'un coup :
FreeBSD-SA-26:50.kqueue, 51.ktimer, 52.if_wg, 53.ktrace, 54.sysvsem et
55.elf. Toutes affectent toutes les versions supportées, c'est-à-dire les
branches 14.x et 15.x.

## La plus gênante : WireGuard (SA-26:52.if_wg, CVE-2026-58085)

Le driver wg(4), l'implémentation kernel de WireGuard, ne vérifie pas le
résultat de la validation MAC après déchiffrement d'un paquet. Concrètement,
un paquet avec un tag Poly1305 invalide est accepté au lieu d'être rejeté.

Un attaquant distant qui peut envoyer des paquets UDP vers un endpoint
WireGuard, et qui devine les bornes de la fenêtre de rejeu, peut injecter des
paquets forgés ou modifiés dans le tunnel. Pas de workaround : si vous utilisez
wg(4), il faut patcher.

## La plus classique : le core dump ELF (SA-26:55.elf, CVE-2026-58088)

Le code qui compte les segments d'un core dump ELF itère deux fois sur la
table des segments de la mémoire virtuelle. Un processus qui partage son
espace d'adressage via rfork(2) peut modifier la table entre les deux passes.
Le kernel écrit alors des en-têtes de programme hors du buffer alloué : une
écriture hors bornes sur le heap du kernel, potentiellement exploitable en
escalade de privilèges par un utilisateur local. Workaround : `sysctl
kern.coredump=0`.

## Un contexte chargé

Ces six advisories s'ajoutent à un mois de juin 2026 déjà record : 25
advisories publiées en juin, la plus grosse salve mensuelle de l'histoire du
projet. Les correctifs du 29 juillet sont disponibles pour 15.1-RELEASE-p2,
15.0-RELEASE-p12 et 14.4-RELEASE-p8.

## Que faire

- Installations pkgbase : `pkg upgrade -r FreeBSD-base`, puis reboot.
- Installations classiques : `freebsd-update fetch`, `freebsd-update install`,
  puis reboot.

Sources :
- https://www.freebsd.org/security/advisories/
- https://www.freebsd.org/security/advisories/FreeBSD-SA-26:52.if_wg.asc
- https://www.freebsd.org/security/advisories/FreeBSD-SA-26:55.elf.asc
