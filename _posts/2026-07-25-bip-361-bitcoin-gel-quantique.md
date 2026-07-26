---
title: "BIP-361 : geler 420 milliards de dollars de Bitcoin contre la menace quantique"
tags: [bitcoin, securite]
---

Jameson Lopp, développeur Bitcoin de longue date, a publié le 14 avril une proposition qui agite la communauté : le **BIP-361**. L'idée est simple sur le papier et brutale dans ses conséquences : rendre progressivement inutilisables les adresses Bitcoin qui n'auront pas migré vers un format résistant à la cryptographie quantique.

5,6 millions de bitcoins, 420 milliards de dollars au cours actuel seraient concernés, dont le fameux 1,1 million de BTC attribué à Satoshi Nakamoto.

---

## Le calendrier du gel

Le BIP-361 se déploie en trois phases :

1. **3 ans après activation** : interdiction d'envoyer de nouveaux bitcoins vers les adresses « héritées » (formats antérieurs à Taproot).
2. **5 ans après activation** : désactivation totale des signatures ECDSA et Schnorr historiques. Tout bitcoin resté sur une adresse vulnérable devient impossible à dépenser pour son propriétaire légitime.
3. **Phase 2 (encore incomplète)** : mécanisme de récupération par preuve à divulgation nulle de connaissance (ZK-proof) pour les détenteurs capables de prouver qu'ils détiennent la phrase de récupération.

Le motif : des travaux en recherche quantique début 2026 suggèrent qu'un ordinateur suffisamment puissant pourrait théoriquement casser une signature ECDSA de Bitcoin en une dizaine de minutes. Plus de 34 % des bitcoins en circulation ont déjà révélé leur clé publique sur la blockchain, ce qui ouvre la porte à ce type d'attaque.

## Même l'auteur n'est pas fan

Lopp l'a dit lui-même dans une interview reprise par Bankless : il ne pense pas que cette mesure doive être appliquée maintenant. C'est un exercice de réflexion adversariale, pas un appel à l'action urgent.

> « Je sais que les gens n'aiment pas cette proposition. Moi non plus, je ne l'aime pas. Mais je l'ai écrite parce que je déteste encore plus l'alternative. »

L'alternative : un attaquant quantique vide en silence des millions de bitcoins dormants sans que personne puisse réagir, faute d'avoir anticipé.

La communauté n'a pas accueilli l'argument à bras ouverts. Marty Bent (TFTC) qualifie la proposition de « ridicule ». Phil Geiger (Metaplanet) résume : « Il faudrait voler l'argent des gens pour éviter qu'on le leur vole. »

## Le vrai débat

BIP-361 rouvre une question aussi vieille que Bitcoin : jusqu'où peut-on modifier les règles de consensus pour protéger le réseau sans trahir sa promesse fondatrice, la propriété absolue et inaliénable de ses avoirs ?

Une proposition concurrente, le **BIP-360**, mise sur une migration volontaire plutôt qu'un couperet automatique.

Ce qui se joue dépasse la technique. C'est un test grandeur nature de la capacité de Bitcoin à évoluer sans jamais toucher aux fonds d'un autre sans son consentement. Ethereum planche sur des chantiers similaires avec une philosophie de gouvernance très différente.

## Sources

- [Journal du Coin - BIP-361 : geler 420 milliards de dollars en BTC](https://journalducoin.com/bitcoin/bip-361-sur-bitcoin-la-proposition-qui-veut-geler-420-milliards-de-dollars-en-btc/)
- [Bankless - Bitcoin Developer Coalition Floats BIP-361](https://www.bankless.com/read/news/bitcoin-developer-coalition-floats-bip-361-to-freeze-quantum-vulnerable-wallets)
- [Yahoo Finance - BIP-361 Could Freeze Millions of Bitcoins](https://finance.yahoo.com/news/bip-361-could-freeze-millions-113215715.html)
- [BIP-360 - Post-Quantum Migration (alternative)](https://github.com/bitcoin/bips/blob/master/bip-0360.mediawiki)
