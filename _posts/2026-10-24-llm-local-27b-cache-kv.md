---
title: "J'ai fait tenir un 27B sur 12 Go de VRAM. Le cache KV était le vrai goulot."
tags: [llm-local, benchmark, feedback, hermes-agent]
---

Depuis la [troisième tentative](/blog/llm-local-avec-gpu-troisieme-tentative/), ma tour fait tourner un Qwen3 14B en Q4_K_M sur la RTX 3060 12 Go. Environ 9 Go dans la VRAM, 64k de contexte, ça marche. Mais je voulais un modèle plus capable, et je me suis demandé jusqu'où on peut pousser une carte de 12 Go.

Spoiler : la limite n'était pas le modèle. **C'était le cache KV.**

---

## Le modèle qui ne devait pas tenir

Un 27B, en Q4_K_M, ne tient pas dans 12 Go de VRAM. Alors j'ai pris la quantification la plus agressive du dépôt [unsloth](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) : Qwen3.8-27B en IQ3_XXS, 3,06 bits par poids, 10,17 Go. Il reste environ 1,6 Go de libre sur la carte.

Le modèle charge, l'inférence répond. Je me dis que le plus dur est fait. Puis je regarde la vitesse de génération : 1,4 t/s. Inutilisable en interactif.

## 1,4 t/s : le cache KV ne tenait pas

Il n'y a pas que les poids du modèle. À 64k de contexte, il faut aussi stocker le cache KV, c'est-à-dire les clés et les valeurs de l'attention pour chaque token du contexte.

J'avais laissé le cache KV en q8_0, soit environ 2,1 Go à 64k. Or il ne restait que 1,6 Go de VRAM. Le cache débordait en mémoire unifiée CUDA, et le serveur passait son temps à déplacer des pages entre la RAM système et le GPU. Résultat : 1,4 t/s.

Ce qui m'a surpris, c'est que le préfill ne bougeait pas, environ 440 t/s comme avant. Le problème n'apparaissait qu'à la génération. Un effet de seuil, pas une dégradation progressive.

## La solution : quantifier le cache KV en q4_0

Deux flags dans le service systemd :

```
-ctk q4_0 \
-ctv q4_0 \
```

Le cache KV tombe à environ 1,1 Go à 64k. Il tient dans les 1,6 Go restants, et la génération remonte à 13,2 t/s.

| Cache KV | Génération à 60k | Note |
|---|---|---|
| q8_0 | ~1,4 t/s | le cache déborde, la mémoire unifiée sature |
| q4_0 | ~13,2 t/s | le cache tient dans la VRAM |

13,2 t/s, c'est largement assez pour un agent qui enchaîne des requêtes courtes. Pas du débit de lecture, mais pour du tool-calling et du code, ça suit sans attendre.

## Ce que j'en retiens

La leçon tient en une phrase : sur une carte avec peu de VRAM, **la quantification du cache KV compte autant que celle des poids.**

J'ai longtemps regardé la taille du modèle comme le seul critère. À grand contexte, c'est faux. Le cache KV à 64k, c'est 1 à 2 Go de plus à caser. Sur 12 Go, ça change tout. Si modèle et cache ne tiennent pas dans la VRAM, le débordement en mémoire unifiée divise la génération par dix.

Et une remarque sur le modèle : la IQ3_XXS reste étonnamment bonne pour du tool-calling et du code. Il y a quelques mois, je n'aurais pas cru un 27B utilisable sur cette carte.

## Pour reproduire

Le setup complet est dans mon dépôt [local-llm](https://github.com/t1t4nium/local-llm/tree/main/RTX-3060-12G-llama.cpp).
