---
title: "Choisir un modèle pour ses agents : ce que les indices de coding ne montrent pas"
tags: [llm, agentique, benchmark]
---

Depuis que j'ai basculé de DeepSeek V4 Flash 0731 vers V4 Pro, j'ai une impression constante : Pro sort de bien meilleurs résultats en coding et en agentique que Flash. Pourtant, sur les indices agrégés, ils sont quasi à égalité. Le 17 août, j'ai creusé pourquoi, et la réponse vaut pour tout choix de modèle pour des agents. Résumé de la méthode et de la leçon.

## Le problème

Sur Artificial Analysis, l'indice Coding met DeepSeek V4 Pro 0813 et Flash 0731 dans un mouchoir de poche : 68,8 contre 69,1, agentique 49,6 contre 48,4. À lire ces moyennes, ils sont interchangeables sur le coding. Or dans mon usage réel, Pro traite des cas que Flash n'arrive pas à finir proprement (refactor multi-fichiers, bug subtil, tâche longue). Si les benchmarks disent équivalent et que le terrain dit le contraire, l'un des deux ment.

## Ce que j'ai vérifié

La ligne des paramètres actifs explique tout. Flash, c'est 284B de paramètres dont 13B actifs par token. Pro, c'est 1600B dont 49B actifs. À chaque token, Pro fait traverser près de quatre fois plus de capacité de calcul. Ce n'est pas un détail marketing : « Flash » est la convention de l'industrie pour une ligne rapide et bon marché, optimisée pour le débit et le coût au détriment du plafond de capacité.

Le second chiffre, c'est la verbosité. Sur l'index, Flash émet 210M de tokens de raisonnement contre 130M pour Pro : 60 % de chaîne de pensée en plus, et Artificial Analysis le classe explicitement « very verbose ». Flash rattrape son plafond de 13B actifs en pensant plus longtemps. Ça passe sur les tâches faciles et moyennes, qui dominent la moyenne du benchmark. Mais chaque token de Flash ne traverse que 13B de paramètres : penser plus longtemps ne remplace pas penser plus profondément.

Dernier piège de méthode : ces indices sont mesurés à effort de raisonnement maximal. En production, on ne monte pas tout à max (coût, latence), on tourne à l'effort par défaut, « high » chez les deux. Au même effort high, l'écart de capacité 49B contre 13B se creuse, parce que le rattrapage par verbosité de Flash est réduit.

## Ce que j'en retiens

- Un indice agrégé est une moyenne sur un jeu fixe de tâches. Il compare bien les modèles sur le coding moyen, il ne montre pas ce qui se passe sur les cas durs, nouveaux ou long-horizon, ceux qui sortent de la distribution du benchmark. Or le coding réel est fait de ces cas-là.
- La capacité par token (paramètres actifs) borne la profondeur. La verbosité (test-time compute) est un levier distinct, que les modèles peuvent pousser pour compenser, mais pas au-delà de leur plafond.
- Concrètement, je réserve Flash au volume et au coût : tâches parallèles, haut débit, ce qui est borné et répétitif, où sa verbosité reste rentable. Pro va sur les tâches qui exigent de la profondeur : architecture, refactor délicat, débogage de cause racine, séquence longue. Les deux ont leur place, mais pour des raisons différentes de ce que laissent penser les indices.

La prochaine fois qu'un modèle se vante de scorer aussi bien qu'un plus gros sur le coding, je regarde d'abord deux lignes que l'indice écrase : les paramètres actifs et la verbosité. C'est là que se cache la vraie différence.

## Sources

- [Artificial Analysis - DeepSeek V4 Pro](https://artificialanalysis.ai/models/deepseek-v4-pro) : indices Coding et Agentic, paramètres actifs, verbosité
- [Hugging Face - DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) et [DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) : spec MoE (13B et 49B actifs)
