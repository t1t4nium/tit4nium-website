---
title: "Hermes Agent News Digest #2"
tags: [hermes-agent, news-digest]
---

Nous Research rejoint l'Open Secure AI Alliance et porte Obliteratus en skill natif Hermes.

---

## Nous Research, membre fondateur de l'Open Secure AI Alliance

NVIDIA a lancé l'Open Secure AI Alliance le 27 juillet, une coalition de 37 organisations visant à développer des technologies, outils et standards ouverts pour la sécurité des logiciels et des agents IA. Nous Research figure parmi les membres fondateurs, aux côtés d'acteurs comme Adobe, Cisco, Cloudflare, CrowdStrike, Databricks, Hugging Face, IBM, LangChain, Microsoft, Palantir, Red Hat, Salesforce, Snowflake et SpaceXAI.

L'alliance repose sur un constat : la sécurité d'un agent IA ne se limite pas à son modèle de langage. Elle dépend de toute la stack (identité, permissions, harness, garde-fous, logs, évaluation). L'approche promue est celle d'une défense ouverte, où les outils de sécurité sont inspectables, adaptables et déployables par n'importe quel défenseur, plutôt que confinés dans des systèmes propriétaires opaques.

NVIDIA a également publié le framework NOOA (NVIDIA Labs Object-Oriented Agent) en open source sur GitHub, un cadre de recherche qui permet aux harness d'agents de mieux intégrer les modèles pour faciliter le test, le traçage, l'audit et la gouvernance des comportements agentiques.

> Sources : [@NousResearch, 27 juillet 2026](https://x.com/NousResearch/status/2081774973845205482) -- [NVIDIA Blog](https://blogs.nvidia.com/blog/open-secure-ai-alliance/)

---

## Obliteratus désormais disponible en skill Hermes natif

Obliteratus, un outil open source qui identifie les poids spécifiques forçant un modèle à refuser des réponses (refusal) et les projette hors du modèle en un clic, est désormais disponible comme skill Hermes natif.

Teknium a annoncé le 25 juillet que le port natif est accessible via la commande :

```
hermes skills install official/mlops/obliteratus
```

L'outil fait partie des skills optionnels intégrés à Hermes Agent. L'approche est chirurgicale : au lieu de désactiver les garde-fous de manière large, Obliteratus cible les poids exacts responsables du comportement de refus et les neutralise sélectivement.

> Source : [@Teknium, 25 juillet 2026](https://x.com/Teknium/status/2081134153970688251)

---

## Sources

- [@NousResearch - Open Secure AI Alliance, 27 juillet 2026](https://x.com/NousResearch/status/2081774973845205482)
- [NVIDIA Blog - Industry Leaders Join Open Secure AI Alliance](https://blogs.nvidia.com/blog/open-secure-ai-alliance/)
- [@Teknium - Obliteratus skill natif Hermes, 25 juillet 2026](https://x.com/Teknium/status/2081134153970688251)
