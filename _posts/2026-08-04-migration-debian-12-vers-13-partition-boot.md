---
title: "Migrer Debian 12 vers 13 : ce que la partition /boot m'a appris"
tags: [debian, mise-a-jour, linux]
---

Début 2026, j'ai migré mes machines de Debian 12 (bookworm) vers Debian 13
(trixie). La montée en version s'est bien passée, sauf un point : la
partition `/boot` saturée en toute fin d'upgrade, avec une erreur
`initramfs-tools` qui a failli tout faire échouer. Retour sur ce qui s'est
passé et ce que j'ai changé depuis.

## Le problème

En fin de montée de version, `initramfs-tools` régénère l'initrd du nouveau
noyau. Sauf que la partition `/boot` était pleine. Résultat :

```
update-initramfs: Generating /boot/initrd.img-6.12.57+deb13-amd64
zstd: error 70 : Write error : cannot write block : No space left on device
E: mkinitramfs failure cpio 141
update-initramfs: failed for /boot/initrd.img-6.12.57+deb13-amd64 with 1.
```

L'upgrade s'interrompt en plein milieu, avec des paquets à moitié configurés.
Classique sur les machines où `/boot` a été dimensionnée à l'époque où les
initrd pesaient 30 Mo.

## Ce qui n'a pas marché

Relancer bêtement la configuration d'`initramfs-tools` ne suffit pas : tant
que la partition est pleine, la génération échoue à nouveau. La cause,
c'est l'accumulation des anciens noyaux : chaque paquet `linux-image` garde
son initrd, et rien ne les purge automatiquement. Après plusieurs années de
mises à jour, la place est consommée par des noyaux dont plus personne ne se
sert.

## Ce qui a marché

Libérer l'espace en supprimant les anciens noyaux, en gardant celui qui
tourne.

Identifier les noyaux installés, à l'exception du noyau courant :

```bash
dpkg -l | tail -n +6 | grep -E 'linux-image-[0-9]+' | grep -Fv $(uname -r)
```

Purger les anciens (ceux avec le flag `ii` dans la sortie) :

```bash
dpkg --purge linux-image-6.1.0-40-amd64
```

Puis retenter l'installation et la configuration d'`initramfs-tools` :

```bash
apt-get install -f
```

Cette fois la génération de l'initrd passe, et l'upgrade peut se terminer.

## Ce que j'en retiens

Deux réflexes pour les prochaines migrations :

1. Vérifier l'espace libre sur `/boot` avant de lancer une montée de version
   majeure, pas après. Un `df -h /boot` prend deux secondes et évite une
   interruption en plein upgrade.
2. Nettoyer les anciens noyaux régulièrement, pas seulement en cas de panne.
   Sur une machine avec des noyaux installés à la main, le tri manuel reste
   nécessaire.

La procédure d'upgrade officielle est documentée sur le site Debian. La
partition `/boot` n'y est pas un piège majeur, mais c'est le genre de détail
qui transforme une migration de 40 minutes en après-midi de dépannage.

Sources :

- Notes personnelles d'upgrade (debian.md)
- [DebianUpgrade](https://wiki.debian.org/DebianUpgrade)
