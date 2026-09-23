---
title: "FreeBSD comme plateforme de reverse engineering : la communauté s'y met"
tags: [freebsd]
---

Un fil des forums FreeBSD, ouvert le 20 juillet 2026 dans la section
"Userland Programming and Scripting", relance la question de l'utilisation de
FreeBSD pour le reverse engineering. L'auteur, resora, dit utiliser FreeBSD
comme système de bureau principal et le trouver aussi bon pour le développement
que pour l'analyse de binaires.

Le constat de départ est simple : la Ports Collection couvre déjà l'essentiel
de la boîte à outils. Ghidra, Cutter, Rizin, radare2, YARA, YARA-X, capa et
binwalk sont tous packagés. resora a en plus réussi à compiler Detect It Easy
(DIE), l'outil d'identification de type de fichiers, et propose d'en faire un
port officiel. Le bug est ouvert : [Bug 297334, security/detect-it-easy]
(https://bugs.freebsd.org/bugzilla/show_bug.cgi?id=297334).

Les réponses apportent des compléments utiles :

- LordInateur rappelle que les jails et bhyve, pilotés par cbsd ou un autre
  orchestrateur, font un sandbox local pratique pour l'analyse. Pour les outils
  sans port natif, comme BinaryNinja, il passe par bhyve ou la compat Linux,
  avec un succès variable.
- kpedersen, qui a créé le port radare2 en 2011 (bug 159805), confirme que
  l'outil se mérite : il l'apprend encore. Un participant renvoie vers un
  tutoriel pas à pas sur un crackme simple pour démarrer.
- MG décrit un usage concret : l'analyse des échanges USB de touchscreens et de
  lecteurs de cartes avec les outils de base, pour se passer d'un pilote kernel
  dédié.

Le fil propose trois objectifs : lister les outils de reverse engineering
disponibles sur FreeBSD, partager les workflows, et porter les outils manquants
dans la Ports Collection. C'est un chantier communautaire ouvert, et le port
Detect It Easy en est le premier livrable concret.

Sources :
- Fil du forum : https://forums.freebsd.org/threads/freebsd-as-a-reverse-engineering-platform.103332/
- Bug 297334 : https://bugs.freebsd.org/bugzilla/show_bug.cgi?id=297334
- Archives de la liste freebsd-ports-bugs : https://mail-archive.freebsd.org/cgi/getmsg.cgi?fetch=1847918+0+archive/2026/freebsd-ports-bugs/20260810.freebsd-ports-bugs
