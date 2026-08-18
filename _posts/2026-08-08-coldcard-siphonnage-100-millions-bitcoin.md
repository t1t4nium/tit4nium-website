---
title: "Coldcard : plus de 100 millions de dollars de Bitcoin siphonnés depuis des wallets matériels"
tags: [bitcoin, securite, wallet]
---

Depuis le 30 juillet, des adresses générées par les portefeuilles matériels Coldcard sont vidées en série. Au 3 août, les analystes de Galaxy Research estimaient à environ 1 800 bitcoins (plus de 100 millions de dollars) le montant déjà déplacé, réparti sur plus de 5 200 adresses. L'affaire n'est pas terminée et pose une question dérangeante pour tous les utilisateurs de cold storage.

---

## Ce qui s'est passé

La faille touche la génération des graines (seed) sur certains firmwares Coldcard. Une faiblesse dans la production des clés a permis aux attaquants de recréer des clés privées faibles à partir d'adresses déjà visibles sur la blockchain, puis de vider les portefeuilles concernés.

Le rythme est impressionnant : le premier assaut du 30 juillet a emporté plus de 1 000 bitcoins sur près de 1 200 adresses en 41 minutes. Des vagues successives ont suivi pendant le week-end, puis une quatrième le lundi 3 août. Le motif est statistiquement sans ambiguïté : autour de 14 siphonnages par bloc au pic, contre 0,3 sur une fenêtre de contrôle antérieure, soit environ 45 fois la normale.

Coinkite, le fabricant canadien, a publié un correctif pour les nouveaux portefeuilles et conseille à tous les utilisateurs ayant généré une seed sur un Coldcard de déplacer leurs fonds sans attendre.

## Ce que les victimes peuvent encore faire

Détail rare dans ce genre d'affaire : les transactions de l'attaquant utilisent le replace-by-fee (RBF). Tant qu'une transaction hostile n'est pas confirmée, une victime qui repère son adresse dans le mempool peut payer des frais supérieurs et faire partir ses pièces en premier. La fenêtre se compte en minutes, mais elle existe.

Le conseil d'Alex Thorn (Galaxy Research) tient en trois gestes : vérifier ses adresses, sortir les fonds de tout appareil potentiellement concerné, et surenchérir sur les frais si une transaction hostile apparaît.

## Et après ?

Côté juridique, une action collective se profile contre Coinkite. Le fonds 117 Partners coordonne la collecte d'informations auprès des victimes de plusieurs pays, et des plaintes individuelles ont déjà été déposées, notamment au Brésil.

Côté leçon, c'est un rappel brutal : le cold storage protège contre le vol en ligne, pas contre une faille du générateur de clés du fabricant. Un wallet matériel reste une boîte noire dont on vérifie rarement le fonctionnement interne. Les utilisateurs sérieux ont tout intérêt à regarder où leur seed a été générée, et à considérer le multisig ou la vérification indépendante de la génération de clés comme une option par défaut, pas comme une option d'expert.

## Sources

- [Coin Academy - Hack Coldcard : une quatrième vague porte les pertes vers 114 millions de dollars](https://coinacademy.fr/actu/coldcard-pertes-114-millions-hack/)
- [Fortune - Bitcoin owners rocked by $116 million hack](https://fortune.com/2026/08/03/bitcoin-owners-116-million-hack-coldcard-coinkite-exploit/)
- [The Hacker News - Coldcard Hardware Wallet Flaw Linked to $70 Million Bitcoin Theft](https://thehackernews.com/2026/08/coldcard-hardware-wallet-flaw-linked-to.html)
- [CBC - What we know about ongoing Coldcard hack](https://www.cbc.ca/news/world/bitcoin-coinkite-security-hack-9.7295582)
- [Cointribune - Une class action se profile contre Coinkite](https://www.cointribune.com/une-class-action-se-profile-contre-coinkite-apres-le-piratage-des-wallets-coldcard/)
