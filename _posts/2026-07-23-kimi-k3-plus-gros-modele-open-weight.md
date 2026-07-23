---
title: "Kimi K3 : 2,8 trillions de paramètres, open weight, et ce que ça change"
tags: [llm, open-source]
---

Moonshot AI, startup pékinoise soutenue par Alibaba, a dévoilé le 16 juillet **Kimi K3**, présenté comme le plus gros modèle d'IA en poids ouverts (open weight) jamais publié. Les poids complets sont annoncés pour le 27 juillet, mais la fiche technique est déjà sur la table.

---

## La fiche technique

| Spécification | Valeur |
|---|---|
| Paramètres | 2,8 trillions (2 800 milliards) |
| Contexte | 1 million de tokens |
| Licence | Open weight (téléchargeable librement) |
| Distribution | 27 juillet 2026 |

Pour donner une échelle : le précédent record open weight, Llama 3.1 405B, fait 405 milliards de paramètres. Kimi K3 est **7 fois plus gros**.

---

## Benchmarks

Selon VentureBeat, les benchmarks internes de Moonshot placent Kimi K3 au coude-à-coude avec Claude Opus 4.8 et GPT-5.5. Le modèle se classe dans le top 3 sur six bancs d'essai de code, et en tête sur SWE Marathon et Program Bench.

Deux innovations techniques soutiennent la performance :

- **MuonClip** : un optimiseur qui améliore l'efficacité de l'entraînement. Moonshot affirme que Kimi K3 a nécessité 5 fois moins de calcul que ce qu'exigerait un modèle de cette taille avec des méthodes standards.
- **KTransformers** : une couche d'inférence optimisée, publiée en open source sur GitHub, qui permet de faire tourner le modèle sur du matériel accessible (4x RTX 4090, soit 96 Go de VRAM cumulée).

---

## Ce que ça signifie

Kimi K3 n'est pas un incident isolé. C'est le signal le plus fort à date que la course aux modèles géants, considérée comme réservée aux labos américains aux budgets milliardaires, est aussi une réalité côté chinois, et open source par-dessus le marché.

Le positionnement de Moonshot est stratégique : publier en open weight, c'est s'assurer une adoption massive par la communauté open source, là où OpenAI et Anthropic gardent leurs meilleurs modèles derrière des API payantes. Le contexte 1M de tokens ouvre la porte à des usages (analyse de codebases entières, traitement de documents longs) qui étaient jusqu'ici le domaine réservé de Gemini ou Claude.

Le coût d'inférence avancé par Moonshot est aussi un signal : 10-15 % du coût de GPT-5.5 pour des performances comparables. Si ces chiffres tiennent dans la réalité, ça change la donne économique pour le déploiement de LLMs en production.

---

## Sources

- [Journal du Coin - Guerre des IA : La Chine sort le plus gros modèle IA open source au monde, Kimi K3](https://journalducoin.com/technologies/kimi-k3-chine-gros-modele-ia-open-source-monde/), 17 juillet 2026
- [VentureBeat - China's Moonshot AI releases Kimi K3, the largest open-source model ever](https://venturebeat.com/technology/chinas-moonshot-ai-releases-kimi-k3-the-largest-open-source-model-ever-rivaling-top-u-s-systems/), 16 juillet 2026
- [Simon Willison - A quote from Kimi K3](https://simonwillison.net/2026/Jul/17/kimi-k3/), 17 juillet 2026
- [Kimi K3 sur Hacker News](https://news.ycombinator.com/item?id=48935342)
