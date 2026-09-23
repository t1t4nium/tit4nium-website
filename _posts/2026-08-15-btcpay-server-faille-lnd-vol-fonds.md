---
title: "BTCPay Server : des fichiers de credentials LND exposés ont permis de vider des nœuds Lightning"
tags: [bitcoin, securite]
---

Le 7 août, BTCPay Server a publié un correctif urgent pour une faille critique : des fichiers de credentials LND étaient accessibles à distance sans authentification, et des vols étaient déjà en cours. Deuxième incident majeur de l'écosystème Bitcoin en une semaine, après le siphonnage des wallets Coldcard.

---

## Ce qui s'est passé

La faille touche l'intégration Lightning de BTCPay Server. Les fichiers `.macaroon`, qui servent de clés d'authentification pour contrôler un nœud LND, étaient exposés en accès distant non authentifié. Pas de login, pas de privilège particulier : un attaquant qui savait où regarder pouvait récupérer ces fichiers et prendre le contrôle complet d'un nœud Lightning, puis vider les fonds des canaux ouverts.

BTCPay Server a confirmé que des fonds ont été volés avant l'arrivée du patch. Le montant total n'a pas été divulgué. Les portefeuilles on-chain n'étaient pas concernés : la faille est isolée à la couche Lightning.

Parmi les victimes identifiées : Foundation, le fabricant de wallets matériels, et la publication Citadel21. Les deux ont déclaré avoir perdu des fonds.

## Qui l'a trouvé

La découverte est due à Craig Raw, le développeur de Sparrow Wallet, avec plusieurs membres du Bitcoin Red Team : Rob Hamilton, Calle et Evan Kaloudis. Le signalement a été fait en privé, ce qui a laissé le temps à BTCPay Server de préparer le correctif avant de rendre les détails publics. Le projet a versé 0,21 BTC à Craig Raw et 0,21 BTC au Bitcoin Red Team.

Le Bitcoin Red Team est un effort bénévole lancé ce mois-ci : il scanne les codebases Bitcoin avec des modèles d'IA et a déjà déposé des milliers de signalements sur des centaines de projets. C'est ce travail qui a mené au rapport à l'origine du patch.

## Ce qu'il faut faire

La consigne est simple : passer à BTCPay Server 2.4.2 et LND 0.21.1 immédiatement. La mise à jour régénère automatiquement les macaroons. Si vous ne pouvez pas mettre à jour tout de suite, coupez le serveur plutôt que de le laisser exposé.

La mise à jour seule ne suffit pas si les fichiers ont déjà été compromis : il faut vérifier les logs du nœud pour détecter des pairs inconnus, des fermetures de canaux inattendues ou des paiements non autorisés, puis faire tourner les credentials et rouvrir les canaux avec de nouvelles clés.

BTCPay Server a par ailleurs annoncé une prime pour la récupération des fonds volés : 10 % des montants récupérés, plafonnée à 3 BTC, ouverte à toute personne apportant une information utile, y compris l'attaquant. Des échanges, des sociétés d'analyse blockchain et les forces de l'ordre ont été mobilisés pour tracer les fonds.

## Ce que j'en retiens

Deux incidents en une semaine — Coldcard, puis BTCPay/LND — et dans les deux cas, le protocole Bitcoin n'est pas en cause. Ce sont les outils construits autour qui ont cédé : un générateur de clés pour l'un, des credentials exposés pour l'autre.

La leçon est la même que pour le cold storage : la sécurité d'un système Bitcoin tient à sa surface d'attaque complète. Un nœud Lightning autohébergé est un service réseau de plus, avec des credentials, des logs et des mises à jour à surveiller. Les conseils de BTCPay Server — garder l'essentiel en cold storage, sortir régulièrement les excédents des wallets chauds — sont valables en permanence, pas seulement en période d'incident.

## Sources

- [Crypto Briefing - BTCPay Server donates 0.42 BTC for responsible vulnerability disclosure](https://cryptobriefing.com/btcpay-server-vulnerability-disclosure-bounty/)
- [CoinDesk - BTCPay offers $190,000 bounty after bitcoin payment servers drained in exploit](https://www.coindesk.com/markets/2026/08/11/btcpay-offers-usd190-000-bounty-after-bitcoin-payment-servers-drained-in-exploit)
- [BeInCrypto - Bitcoin Payment Tool BTCPay Urges Update After Attackers Steal Funds](https://beincrypto.com/bitcoin-btcpay-server-exploit-funds-stolen/)
- [Tweet BTCPay Server - alerte critique du 7 août](https://x.com/BtcpayServer/status/2085755643659522240)
- [Tweet BTCPay Server - don et bounty du 10 août](https://x.com/BtcpayServer/status/2086875600103367109)
