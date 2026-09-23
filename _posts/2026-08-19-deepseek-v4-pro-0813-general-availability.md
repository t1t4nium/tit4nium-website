---
title: "DeepSeek V4 Pro 0813 passe en GA : version épinglée, prix officiels, hausse annoncée"
tags: [llm-deepseek, llm]
---

Le 12 août 2026, DeepSeek a fait passer DeepSeek-V4-Pro en disponibilité générale sans annonce tapageuse : le modèle a été épinglé sur la page de prix officielle comme version servie derrière l'API `deepseek-v4-pro`, et OpenRouter a daté la liste du même jour. C'est une version pin, pas une nouvelle architecture. Trois choses en ressortent : les prix listés, un avertissement de hausse, et des poids désormais disponibles.

## Ce que change la GA

DeepSeek-V4-Pro-0813 remplace la preview d'avril. La fenêtre de contexte reste identique à Flash-0731 : 1M d'entrée, 384K de sortie max. Le thinking est activé par défaut avec un effort `high`, et les niveaux demandés se replient : `medium` et `xhigh` retombent tous deux sur `high`, seuls `low` et `max` sont mappés 1 pour 1. La chaîne de raisonnement revient dans `reasoning_content`, et sur les tours avec appel d'outil il faut la repasser dans la requête, sinon l'API répond 400.

C'est la même mécanique que Flash-0731 qui avait gradué le 31 juillet : DeepSeek date ses builds API (Flash-0731, Pro-0813) et les épingle, sans communiqué de lancement. Le modèle est décrit comme la version officielle qui « supersedes the preview version, with greatly enhanced agentic capabilities ».

## Les prix listés (et la hausse qui vient)

Tarifs officiels par million de tokens, depuis la page de prix DeepSeek :

| | Pro 0813 | Flash 0731 |
|---|---|---|
| Entrée cache miss | $0,435 | $0,14 |
| Entrée cache hit | $0,003625 | $0,0028 |
| Sortie | $0,87 | $0,28 |
| Concurrence | 500 | 2500 |

Pro coûte environ trois fois le prix listé de Flash et a cinq fois moins de concurrence. L'écart entre cache hit et cache miss est d'environ 120x sur Pro : les boucles multi-tours qui ratent le cache le paient au prix fort. C'est le point à régler avant de monter du trafic Pro, la liste ne paraît avantageuse que si les hits restent nombreux.

Le point le plus important pour qui prévoit : la page de prix officielle écrit explicitement qu'une hausse significative des prix API arrive, sans date ni nouveau tarif. Personne ne peut citer de montant ou de calendrier, il n'y en a pas. Budget pour un saut de prix après l'annonce.

## Les poids sont là

La preview d'avril était déjà en open weight (MIT). Les poids du 0813 sont maintenant publiés sur Hugging Face sous `deepseek-ai/DeepSeek-V4-Pro-0813`, licence MIT, environ 1,7T de paramètres pour 893 Go. L'auto-hébergement redevient possible sans attendre une énième preview. Les premiers retours de benchmarks communautaires montrent un bond net sur l'agentique par rapport à la preview, mais ce sont des mesures tierces à lire avec prudence : DeepSeek n'a pas publié de carte de bench propre au 0813.

## Ce qu'il faut retenir

- Si vous appelez `deepseek-v4-pro`, vous êtes déjà sur le 0813 : l'ID API n'a pas changé, la version derrière a bougé.
- Recalibrez vos coûts au effort par défaut `high`, et passez `reasoning_content` sur les tours d'outils.
- Cachez vos boucles : l'écart hit/miss à 120x est la variable de coût dominante.
- Une hausse de prix est annoncée, sans date ni montant. Planifiez en conséquence.

## Sources

- [Page de prix officielle DeepSeek](https://api-docs.deepseek.com/quick_start/pricing), version épinglée 12 août 2026
- [Simon Willison - DeepSeek V4 Pro 0813 (on OpenRouter)](https://simonwillison.net/2026/Aug/12/deepseek-v4-pro-0813/), 12 août 2026
- [Hugging Face - deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) (MIT, ~1,7T, 893 Go)
- [LLM Stats - DeepSeek-V4-Pro-0813: Pro Leaves Preview](https://llm-stats.com/blog/research/deepseek-v4-pro-0813-launch)
