---
title: "Flash bâcle, Pro coûte cher : l'angle mort des benchmarks"
tags: [llm, benchmark, hermes]
---

Je fais tourner un agent IA au quotidien. Une partie du travail est de
l'automatisation répétitive et peu exigeante, l'autre est du codage réel, du
débogage, et des sessions longues où l'agent enchaîne des dizaines d'appels
d'outils. Pendant des mois, pour des raisons de coût, je suis resté sur un
modèle de la gamme « flash ». J'ai fini par le constater noir sur blanc : sur
les tâches exigeantes, il bâcle.

---

## Le problème

Le modèle flash a un défaut précis. Sous pression, il cherche à aller plus vite
que la musique. Sur une tâche exigeante, il sort un résultat moyen, parfois
médiocre, là où on attendait de la rigueur. J'ai récemment basculé sur le
modèle « pro » de la même gamme, et la différence est nette. Mais le pro coûte
nettement plus cher. La question est donc devenue : existe-t-il un modèle
meilleur que le flash, et moins cher que le pro ?

---

## L'analyse

J'ai comparé les modèles sur deux axes : le prix réel au million de tokens, et
les indices Artificial Analysis, qui séparent trois dimensions : l'intelligence,
le coding, et l'agentic. Et là, surprise : le flash et le pro sont quasiment à
égalité sur l'indice de coding agrégé (69,1 contre 68,8), alors que dans la
pratique le pro me semble clairement supérieur. D'où vient cet écart entre le
chiffre et le ressenti ?

La réponse tient en trois points.

D'abord, « flash » n'est pas un nom de code marketing. C'est une gamme optimisée
pour la vitesse et le coût, avec beaucoup moins de paramètres actifs : 13
milliards pour le flash contre 49 pour le pro. Chaque token traverse 13 milliards
de paramètres au lieu de 49, et le plafond de profondeur s'en ressent.

Ensuite, le flash atteint sa quasi-parité sur l'indice agrégé uniquement en
émettant environ 60 % de tokens de raisonnement en plus (210 millions contre 130).
Plus de tokens ne compense pas moins de profondeur : penser plus longtemps n'est
pas penser plus profond quand chaque pensée est moins riche.

Enfin, l'indice agrégé fait une moyenne sur un jeu de tâches fixe, et la moyenne
masque la queue de distribution. Le flash colle au pro sur les tâches faciles et
moyennes, qui dominent la moyenne, mais il s'effondre sur les tâches dures et
nouvelles. Or le travail réel, c'est justement la queue.

---

## Le comparatif

Voici les trois modèles, avec leurs prix réels (listés, hors promo) et leurs
indices.

| Modèle | Prix in/out ($/M) | Intelligence | Coding | Agentic |
|---|---|---|---|---|
| DeepSeek V4 Flash 0731 | 0,14 / 0,28 | 51,8 | 69,1 | 48,4 |
| Google Gemini 3.7 Flash | 0,38 / 1,88 | 56,0 | 76,1 | 45,1 |
| DeepSeek V4 Pro 0813 | 1,32 / 3,96 | 53,2 | 68,8 | 49,6 |

Gemini 3.7 Flash est le juste milieu pour le modèle principal. Il est plus
profond que le pro en intelligence (56 contre 53,2) et en coding (76,1 contre 68,8),
pour un prix nettement inférieur (0,38/1,88 contre 1,32/3,96). Deux autres
candidats ont été écartés : GPT-5.6 Luna (output plus cher que le pro, hors promo)
et Muse Spark 1.2 (prix comparable au pro).

Il y a un compromis, et un seul : l'agentic. 45,1 contre 48,4 pour le flash et
49,6 pour le pro. C'est le seul axe où il recule.

Ces quelques points de moins ne se voient que sur la queue dure : les très
longues tâches d'orchestration. Les signaux qui doivent alerter sont le
ressassage (l'agent repropose ce qui a déjà été écarté), la perte du fil sur
une session longue, les appels d'outil ratés non corrigés, les boucles où il
retente la même action sans changer d'approche. Sur les tâches courtes et
bornées, cet écart est invisible. Le bon test, c'est la variation : si ces
comportements augmentent sur les tâches longues par rapport à la base de départ,
on a trouvé la limite. Sinon, elle reste théorique.

---

## La répartition des rôles en pratique

La solution ne consiste pas à tout pousser sur un seul modèle à tout faire. Pour
concilier budget et robustesse, j'ai découpé l'architecture en trois niveaux :

1. **Le cerveau principal** : confié à un modèle capable de profondeur (Gemini 3.7 Flash) pour le raisonnement, le code dur, le débogage et l'arbitrage.
2. **La délégation (sous-agents)** : confiée à DeepSeek V4 Flash 0731. Quand le planificateur principal découpe un problème et délègue des sous-tâches bornées et parallèles (recherche ciblée, vérification, exécution unitaire), la profondeur maximale n'est pas requise. Le coût minimal et le débit priment.
3. **Les tâches auxiliaires** : compression de contexte, génération de titres, extraction web, analyse d'outils. DeepSeek V4 Flash 0731 tourne sur la quasi-totalité de ces tâches de fond pour écraser la facture sans perte fonctionnelle. La seule exception concerne l'analyse d'images et la vision, confiée à un modèle multimodal dédié (MiniMax M3), le modèle Flash étant purement textuel.

---

## Ce que j'en retiens

L'indice agrégé est un piège. Il masque la queue de distribution, qui est
exactement là où vit la différence entre un modèle qui tient et un modèle qui
bâcle. Se fier à la moyenne, c'est conclure que le flash vaut le pro, alors que
dans le travail réel ils ne se valent pas.

Le mot « flash » dans le nom ne dit rien de la profondeur. Le vrai critère, c'est
le nombre de paramètres actifs et l'indice d'intelligence, pas le nom de la gamme.
Un modèle peut s'appeler flash et être plus profond qu'un pro.

Le moins cher et le plus cher sont deux pièges symétriques : l'un bâcle, l'autre
surpaie. Le juste milieu existe, mais il faut le chercher dans les sous-dimensions,
pas dans la moyenne, et comparer des prix réels, pas des prix promo d'entrée.
