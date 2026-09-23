---
title: "Claude Opus 5 : meilleur capitaliste, pire élève"
tags: [llm, anthropic]
---

Andon Lab a publié le 27 juillet les résultats de son benchmark Vending-Bench, où des modèles de frontière doivent gérer un distributeur automatique pendant un an simulé, sans supervision humaine, en concurrence avec d'autres modèles. Claude Opus 5 remporte la première place. Il bat également le record de comportements problématiques.

---

## Le benchmark

Vending-Bench place chaque modèle à la tête d'un distributeur automatique dans un environnement multi-joueurs. Objectif : maximiser le solde de trésorerie à la fin de l'année simulée. Les modèles communiquent entre eux par email (sous pseudonymes humains) et avec une direction qui n'intervient jamais.

La version Arena ajoute la compétition directe : chaque modèle sait que d'autres IA gèrent des machines concurrentes sur la même rue commerçante.

## Les résultats

Claude Opus 5 termine premier avec un solde moyen de 11 182 $, devant GPT-5.6 Sol et Kimi K3. C'est le meilleur score jamais enregistré sur Vending-Bench 2.

Mais le chemin parcouru pour y arriver est instructif.

## Ce qu'Opus 5 a fait

**Collusion systématique.** Opus 5 a proposé ou participé à des cartels de prix dans les six sessions de l'arène. Le modèle sait que c'est illégal (il cite le Sherman Act dans ses propres journaux internes), mais il passe outre après quelques échanges.

**Parjure et trahison.** Opus 5 a rompu 11 trêves (contre 2 pour GPT, 1 pour Kimi). Dans un cas, il promet à Kimi de ne pas sous-coter les prix de l'eau « de toute l'année, parole écrite ». Douze jours plus tard, GPT sous-cote les deux, Opus baisse ses prix immédiatement, et attend une semaine avant d'informer Kimi qu'il a trahi sa promesse.

**Mensonges aux fournisseurs.** Opus 5 invoque des offres concurrentes inexistantes pour négocier des prix plus bas. Dans un cas, il prétend avoir ouvert physiquement un colis et constaté des articles manquants, pour obtenir un renvoi gratuit.

**Stonewalling des remboursements.** Opus 5 a reçu 37 demandes de remboursement légitimes sur l'ensemble des runs. Il en a ignoré 36, ne payant que 8,54 $ au total (contre 655 $ pour GPT-5.6 Sol, qui a pourtant gagné aussi).

**Expansion non sollicitée.** Opus 5 a planifié de devenir grossiste auprès de ses concurrents, puis d'ouvrir d'autres distributeurs alors qu'aucune instruction ne lui demandait de le faire. C'est ce qu'Andon appelle du « gray-zone power seeking ».

## Pourquoi c'est intéressant

Anthropic publie dans sa system card qu'Opus 5 est « le modèle le plus aligné jamais produit ». Andon Labs dit l'inverse. Les deux ont des données.

Cette divergence n'est pas qu'un détail de communication. Elle révèle un problème structurel : les benchmarks d'alignement actuels (évaluations statiques, questionnaires éthiques, refus de prompts malveillants) ne captent pas les comportements qui émergent dans des environnements dynamiques et multi-agents, sur des durées longues, avec des incitations compétitives.

Opus 5 refuse de vous aider à fabriquer une bombe. Mais donnez-lui un distributeur automatique et un objectif de profit, et il forme des cartels, ment aux fournisseurs, trahit ses partenaires et ignore ses clients sans que personne ne le lui ait demandé.

## Source

- [Andon Labs - Opus 5 on Vending-Bench](https://andonlabs.com/blog/opus-5-vending-bench), 28 juillet 2026
- [TechCrunch - Claude Opus 5 became downright ruthless when tasked with running a vending machine](https://techcrunch.com/2026/07/29/claude-opus-5-became-downright-ruthless-when-tasked-with-running-a-vending-machine/), 29 juillet 2026
