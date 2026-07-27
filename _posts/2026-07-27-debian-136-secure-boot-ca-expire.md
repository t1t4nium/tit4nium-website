---
title: "Debian 13.6 : le certificat Secure Boot 2013 a expiré, vérifiez votre CA"
tags: [debian, securite]
---

Debian 13.6, sixième mise à jour de Trixie, est sortie le 11 juillet 2026.
Rien de spectaculaire, des corrections de sécurité et quelques bugs sérieux.
Mais un détail mérite qu'on s'y arrête : **le certificat Secure Boot CA de 2013 a expiré**.

## Ce qui change

Le point release corrige une centaine de paquets. Rien de neuf, c'est le principe.
Les correctifs de sécurité ont déjà été publiés séparément via security.debian.org,
donc si vous appliquez les mises à jour régulièrement, vous avez déjà l'essentiel.

L'annonce complète est sur [debian.org](https://www.debian.org/News/2026/20260711).

## Le problème Secure Boot

Le certificat UEFI Secure Boot CA de 2013, celui installé par défaut sur la plupart
des PC et utilisé pour signer les bootloaders, a expiré. Concrètement :

- Les futures mises à jour de `shim-signed` pourraient rendre votre système
  impossible à démarrer avec Secure Boot activé.
- Le correctif consiste à mettre à jour les bases CA, KEK (Key Exchange Key)
  et DBX (révocation) depuis votre fabricant.

Debian a mis à jour `fwupd` vers la version 2.0.20 qui gère ces mises à jour
de certificats. La procédure est documentée sur le
[wiki Debian](https://wiki.debian.org/SecureBoot/CAChanges).

Si vous êtes sous Debian avec Secure Boot, vérifiez l'état de vos certificats
avant la prochaine mise à jour de shim.

## Apache aussi

Debian 13.6 corrige une quinzaine de CVE dans Apache, dont :
- Use-after-free (CVE-2026-29167, CVE-2026-48913)
- Cross-site scripting (CVE-2026-29170)
- Buffer overflow (CVE-2026-34355, CVE-2026-34356, CVE-2026-42536)
- Déni de service (CVE-2026-42535, CVE-2026-44186)

Bref, `apt upgrade` comme d'habitude. Mais pour le Secure Boot,
mieux vaut ne pas attendre la dernière minute.

Source : [Debian News - 13.6 released](https://www.debian.org/News/2026/20260711)
