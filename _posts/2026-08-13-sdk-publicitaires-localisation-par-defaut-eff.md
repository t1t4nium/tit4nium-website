---
title: "SDK publicitaires Android : l'EFF identifie quatre bibliothèques qui partagent la localisation par défaut"
tags: [vie-privee, android]
---

Mi-2026, l'Electronic Frontier Foundation a publié une enquête sur les SDK publicitaires Android. Verdict : au moins quatre bibliothèques envoient la position précise des utilisateurs à des régies publicitaires sans que le développeur ait à configurer quoi que ce soit. Les données finissent chez des courtiers en données de localisation.

---

## Le problème

Sous Android, quand une application obtient la permission d'accéder à la localisation, tous les SDK embarqués dans l'application reçoivent la même permission. Pas de permission séparée pour les SDK. Si un SDK publicitaire est configuré pour collecter la localisation par défaut, il l'envoie sans que le développeur (ni l'utilisateur) le sachent nécessairement.

Les données de localisation collectées par l'écosystème publicitaire sont revendues à des courtiers en données. Ces données ont servi à traquer des militaires américains, des organisateurs syndicaux, ou à identifier un prêtre gay via son téléphone. Ce n'est pas un problème de confort, c'est un problème de sécurité réelle.

## Ce que l'enquête a trouvé

L'EFF a passé en revue la documentation de dizaines de SDK publicitaires Android. Quatre partagent la localisation par défaut :

**InMobi** (2+ milliards d'utilisateurs revendiqués). La documentation SDK précise que les signaux de localisation sont envoyés automatiquement, et recommande explicitement aux développeurs de ne pas désactiver l'envoi car « les impressions enrichies de données de localisation génèrent généralement des revenus plus élevés. »

**BidMachine** (600 millions d'utilisateurs). Le SDK collecte la localisation par défaut. L'EFF a démontré, captures réseau à l'appui, que des applications comme QR Scanner (50+ millions de téléchargements) et GPS Speedometer (10+ millions) envoient des coordonnées précises à BidMachine. Après contact de l'EFF, BidMachine a mis à jour sa documentation, mais pas le comportement par défaut du SDK.

**Verve/HyBid** (1,5 milliard d'utilisateurs). La localisation est activée par défaut. Particularité : le SDK est open source. Verve précise qu'il arrondit les coordonnées à deux décimales et n'utilise que la localisation réseau, pas le GPS. Mais même approximative, une localisation répétée dans le temps révèle des déplacements.

**Huawei Petal Ads** (85 000+ applications). Le guide d'intégration commence par recommander d'obtenir la permission de localisation pour augmenter les revenus. La méthode pour désactiver l'envoi par défaut (`setRequestLocation`) est cachée dans la dernière section d'un guide de conformité, pas dans la doc principale.

## Ce que ça signifie

1. Les permissions Android sont tout-ou-rien pour les SDK. Si l'utilisateur accepte la localisation pour une fonction (le GPS Speedometer en a besoin pour fonctionner), les SDK embarqués y ont aussi accès.
2. Les defaults des SDK publicitaires sont conçus pour maximiser la collecte, pas la vie privée. Les incitations financières sont mises en avant, pas les instructions pour désactiver.
3. Les données de localisation alimentent un marché opaque de courtiers en données, utilisé par des gouvernements et des entités privées pour du tracking à grande échelle.

## Quoi faire

**Développeur** : vérifier les paramètres de localisation de chaque SDK embarqué. Ne pas se fier aux valeurs par défaut. Les SDK open source (comme HyBid) au moins se vérifient.

**Utilisateur** : sur Android, accorder la permission de localisation uniquement aux applications qui en ont strictement besoin pour fonctionner. Vérifier régulièrement quelles applications y ont accès dans Paramètres > Applications > Permissions.

**Source** : [EFF — Developers: Beware of Ad Libraries that Betray Your Users' Location Privacy](https://www.eff.org/deeplinks/2026/07/developers-beware-ad-libraries-betray-your-users-location-privacy) (4 août 2026)