---
title: "Linux à 10 % de parts de marché ? C'était surtout des bots IA"
tags: [linux, libre, bots]
---

Le 9 août 2026, un post Reddit et un fil Hacker News annonçaient la nouvelle tant attendue : Linux aurait dépassé les 10 % de parts de marché sur desktop en Amérique du Nord. Le screenshot de StatCounter montrait Linux à 10,65 %, contre 3,56 % en mai. En deux mois, la part aurait presque triplé. Trop beau pour être vrai, et pour cause : c'était en grande partie une illusion statistique.

---

## Ce qui cloche dans les chiffres

StatCounter ne compte pas des utilisateurs, il compte des pages vues. Sa méthodologie est publique : plus de 3 milliards de pages vues par mois sur environ un million de sites, et il l'assume, les statistiques sont basées sur les pages vues, pas sur les visiteurs uniques.

Le screenshot qui a fait le tour des réseaux contenait d'ailleurs une aberration flagrante : l'entrée OS X, un système remplacé par macOS en 2016, culminait à 21,14 % pendant que macOS pointait à 8,6 %. Un OS vieux de dix ans ne peut pas avoir plus d'utilisateurs que son successeur. C'est le genre de détail qui indique une reclassification d'algorithme plutôt qu'un vrai mouvement de marché.

## Le vrai responsable : les bots

L'analyse de Mayank Parmar sur Windows Latest (3 août) recoupe les données de StatCounter avec Cloudflare Radar, qui sait filtrer le trafic humain du trafic automatisé. Le résultat est sans appel :

- Trafic humain uniquement : Linux à environ 4,7 % en Amérique du Nord, Windows à 65 %, macOS à 28 %.
- Avec les bots : Linux monte à 16 % en moyenne, avec des pics quotidiens à 26 %, pendant que Windows retombe dans les 50.

Les bots d'indexation et les scrapers d'IA tournent massivement sur des serveurs Linux. Chaque requête qu'ils envoient à un site équipé du compteur StatCounter est comptée comme une visite d'un prétendu utilisateur Linux desktop. Comme les parts sont calculées sur une échelle de 100 %, ce qui gonfle Linux fait mécaniquement baisser Windows.

La corrélation est presque parfaite : sur le trafic automatisé, Linux et Windows évoluent en miroir avec une corrélation de -0,91.

## Ce n'est pas la première fois

StatCounter a déjà produit ce genre d'anomalie : Windows 7 qui "gagnait" des utilisateurs en 2025, Google qui "perdait" dix points au profit de ChatGPT, un chiffre ensuite corrigé. En juin 2026, un autre pic viral de Linux avait déjà été démenti puis corrigé par StatCounter lui-même.

## Ce qu'il faut retenir

Linux desktop progresse vraiment, mais lentement : environ 4,7 % de trafic humain, et 4,01 % des joueurs sur Steam, poussé par le Steam Deck et Proton. C'est une croissance réelle, pas une conquête éclair.

Le reste, c'est du bruit : des bots qui se font passer pour des humains et des métriques pensées pour les webmasters, pas pour mesurer le marché des OS. La prochaine fois qu'un gros chiffre Linux fait le tour du web, vérifier d'où il vient avant de célébrer.

## Sources

- [Windows Latest - Linux didn't just eat 10% of Windows market share, AI bots are inflating the numbers](https://www.windowslatest.com/2026/08/03/linux-didnt-just-eat-10-of-windows-market-share-ai-bots-are-inflating-the-numbers/)
- [Goodtech - Linux à 11,9 % de parts de marché PC : l'illusion causée par les bots IA](https://goodtech.info/linux-10-percent-parts-de-marche-statcounter-bots-ia/)
- [PCWorld - No, Linux didn't actually hit 10% market share. Blame bots](https://www.pcworld.com/article/3204830/linux-didnt-actually-hit-10-percent-market-share-blame-bots.html)
- [StatCounter - Desktop OS market share](https://gs.statcounter.com/os-market-share/desktop/worldwide/)
