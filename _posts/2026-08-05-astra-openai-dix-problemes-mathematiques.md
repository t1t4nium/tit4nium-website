---
title: "Astra, le prochain modèle d'OpenAI, résout dix problèmes ouverts de mathématiques"
tags: [openai, llm]
---

Le 1er août, OpenAI a annoncé qu'une version interne d'Astra, son prochain
modèle majeur, avait résolu ou fait avancer dix problèmes ouverts en
mathématiques et en informatique théorique. Le coût total en tokens, aux
tarifs de l'API Sol, est de l'ordre de 2 000 dollars. Les preuves sont
formalisées en Lean et publiées sur GitHub.

## Ce qui a été annoncé

Les dix résultats couvrent des domaines variés : empilement de sphères en
haute dimension, codes binaires et sphériques, existence de groupes
non-sofiques, réfutation de la conjecture de rigidité de Connes, bornes
inférieures pour le permanent en complexité arithmétique, théorème de
répétition parallèle quantique, dureté d'approximation du plus proche
vecteur en cryptographie lattice, conjecture de volume d'Ehrhart, nombres
de Ramsey multicolores (problème 183 d'Erdős) et conjectures de nombre
extremal (problèmes 146 et 180 d'Erdős).

Plusieurs sont des problèmes centraux de leur communauté. La construction
de groupes non-sofiques, par exemple, répond à une question ouverte
fondamentale en théorie des groupes. La réfutation de la conjecture de
rigidité de Connes touche aux algèbres de von Neumann.

Ce n'est pas un coup isolé : en mai, OpenAI avait déjà partagé une
réfutation de la conjecture d'Erdős sur la distance unitaire, obtenue
pendant l'évaluation d'un modèle non publié. La publication d'août
systématise l'approche.

## Ce qui change par rapport aux annonces précédentes

La transparence est inhabituelle, et c'est le point qui compte :

- chaque argument est formalisé dans un certificat Lean, vérifiable
  mécaniquement, dans le dépôt [openai/ten-proofs](https://github.com/openai/ten-proofs) ;
- un document décrit le raisonnement du modèle pour chaque solution
  ([reasoning-walkthroughs.pdf](https://cdn.openai.com/pdf/reasoning-walkthroughs.pdf)) ;
- les manuscrits ont été préparés par des humains avec le même modèle.

Un certificat Lean n'est pas une affirmation : c'est une preuve que la
machine peut vérifier. C'est la différence entre « le modèle a trouvé » et
« le modèle a trouvé, et voici la preuve formelle ».

## Ce qu'il faut garder en tête

Simon Willison, qui a commenté l'annonce le 1er août, pose la question qui
fâche : OpenAI ne dit rien sur le nombre de problèmes sur lesquels ils ont
dépensé 2 000 dollars sans aboutir. Le chiffre de 2 000 dollars par
problème résolu ne dit rien du taux de réussite global.

Le mouvement de fond, lui, est clair. Terence Tao parlait en juin d'une
transition vers la « big mathematics » : des collaborations à grande
échelle entre humains et machines, où l'humain garde la partie créative et
la machine fait le gros du travail technique. L'annonce d'OpenAI est une
illustration concrète de ce programme, avec un coût marginal qui rend la
démarche reproductible par des laboratoires bien plus petits.

Pour un lecteur technique, le réflexe est simple : ne pas prendre les
résultats pour argent comptant, mais vérifier les certificats Lean. Ils
sont publics, et c'est exactement le genre de source qui résiste à la
relecture.

Sources :

- [OpenAI - Ten advances in mathematics and theoretical computer science](https://openai.com/index/ten-advances-in-mathematics/), 1er août 2026
- [openai/ten-proofs - certificats Lean](https://github.com/openai/ten-proofs)
- [Simon Willison - Ten advances in mathematics](https://simonwillison.net/2026/Aug/1/ten-advances-in-mathematics/), 1er août 2026
