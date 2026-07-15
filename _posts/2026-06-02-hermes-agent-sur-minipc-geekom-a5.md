---
title: "J'ai voulu faire tourner un LLM local sur un mini PC. Ça n'a pas marché."
tags: [hermes-agent, debian, llm-local]
permalink: /llm-local-minipc-crash-test/
---

Je me suis offert un **GEEKOM A5 Mini PC** avec un objectif ambitieux : faire tourner un modèle local pour mon agent Hermes, pour des raisons de sécurité et de confidentialité.

La config était prometteuse : Ryzen 5 7430U, 64 Go de RAM, Debian 13.
L'objectif : charger un Qwen 2.5 72B en Q4_K_M (~40 Go).

Spoiler : ça n'a pas marché comme prévu. Voici pourquoi.

---

### Première tentative : Ollama

J'ai commencé par installer [Ollama](https://ollama.com), comme tout le monde.

```bash
ollama pull qwen2.5:14b
```

Rapidement, quatre obstacles se sont dressés :

**1. Contexte insuffisant.** Hermes Agent exige 64 000 tokens de contexte minimum. Ollama bride le contexte selon la RAM détectée. Avec 16 Go au départ, je n'avais que 4 096 tokens. Même après l'upgrade à 64 Go, il a fallu forcer `OLLAMA_CONTEXT_LENGTH=65536` dans le service systemd.

**2. Les modèles Qwen2.5 sont bridés en usine.** Les GGUF packagés par Ollama pour les Qwen2.5 (7b, 14b, 32b) ont un contexte câblé en dur à 32 768 tokens. Impossible à contourner, même avec un Modelfile.

**3. Le bug stream + outils.** Ollama plante quand on combine `stream=true` avec des définitions d'outils et Hermes envoie ~25 outils avec `stream=True`. Résultat : l'API devenait inerte, seul un redémarrage du service la débloquait.

**4. La détection de routes Hermes.** Même avec `api_mode: chat_completions`, Hermes sonde des routes spécifiques à Ollama avant d'envoyer la requête. Si elles manquent (proxy LiteLLM), Hermes abandonne sans même tenter l'appel.

| Modèle | RAM | Résultat |
|--------|-----|----------|
| qwen2.5:7b | 16 Go | Contexte 32K bloqué |
| qwen2.5:14b | 16 Go | Contexte 32K bloqué |
| mistral-small:22b | 64 Go | Contexte 128K OK mais lent |
| llama3.3:70b | 64 Go | Trop lent pour usage temps réel |

### Le détour par llama.cpp

J'ai fini par installer [llama.cpp server](https://github.com/ggml-org/llama.cpp) directement sur le GEEKOM pour contourner le bug Ollama. Compilation CPU-only (pas de GPU). J'ai téléchargé un Carnice 9B en Q4_K_M (~5,6 Go).

**Ça répondait. Mais pas dans des délais raisonnables.** Sans GPU, l'inférence se traînait à 1-3 tokens par seconde. Une requête avec outils prenait plusieurs minutes. Trop lent pour un usage interactif, mais ça prouvait que le concept tenait.

### La conclusion

Le GEEKOM A5 a été recyclé en station de travail. Pour faire tourner Hermes Agent avec un modèle cloud, il est parfait. Pour de l'inférence locale, il a buté sur la même limite que mon premier setup : **pas de GPU dédié.**

La leçon est simple : la RAM ne suffit pas. Un LLM local pour un agent autonome, ça a besoin d'un GPU. Le CPU-only, c'est faisable pour du traitement par lots, pas pour du temps réel.

Mais l'exploration valait le coup. Je sais maintenant où se trouve la vraie limite, et je peux viser juste pour la prochaine config.
