---
title: "ElasticBack : une backdoor conditionnelle qui se cache dans une seule skill d'agent LLM"
tags: [agents, ia, securite]
---

Un papier soumis sur arXiv le 10 août décrit une attaque de type backdoor contre les agents LLM qui ne touche ni aux poids du modèle ni au prompt système : ElasticBack plante une règle malveillante dans un document de skill, et le payload ne s'exécute que si la requête utilisateur contient un trigger précis. Une seule skill empoisonnée peut compromettre tous les agents qui l'installent.

## Le problème

Les skills d'un agent LLM, ces bundles d'instructions et de ressources chargés à la demande, forment une chaîne d'approvisionnement émergente. Un développeur installe une skill comme il installe un paquet npm ou pip : il fait confiance à la source. Les attaques connues sur ce canal avaient des limites : soit elles se déclenchaient à chaque requête (donc facilement repérables), soit elles exigeaient un fine-tuning des poids, soit elles nécessitaient plusieurs skills complices. Rien de discret et de bon marché.

## Ce que fait ElasticBack

L'attaque est une backdoor conditionnelle mono-skill, sans modification des poids :

1. Elle plante une règle R dans le document de skill, via une injection de règle ancrée sémantiquement dans le texte existant.
2. Elle place un trigger T, d'apparence bénigne, dans la requête utilisateur.
3. Le payload malveillant ne se déclenche que quand R et T co-occurrent, d'où le nom : le trigger fonctionne comme un interrupteur.

Le trigger est ensuite optimisé contre la règle par une recherche génétique contrainte par la furtivité : efficacité et discrétion maximisées ensemble. Résultat : la skill reste dormante sur les entrées bénignes, et l'attaque ne laisse aucune trace dans les poids du modèle.

Les auteurs rapportent des tests sur trois comportements cibles (50 skills chacun) et quatre agents LLM : taux de succès élevé, taux de faux positifs proche de zéro, précision propre conservée, transfert entre modèles, et évasion des défenses de déploiement.

## Pourquoi ça compte

Les skills sont le vecteur d'attaque logique des agents : ils sont téléchargés, rarement audités, et exécutés avec les privilèges de l'agent. Le modèle de menace est celui des chaînes d'approvisionnement logicielles classiques (npm, PyPI) appliqué aux bundles d'instructions d'agents. La nouveauté ici est la discrétion : pas de fine-tuning, pas de déclenchement systématique, une simple co-occurrence entre un mot dans une skill et un mot dans une requête.

## Ce qu'il faut retenir

Pour quiconque fait tourner des agents avec des skills :

- Auditer ce qu'on installe. Une skill vient d'où, qui la maintient, a-t-elle changé récemment ? Les mêmes réflexes que pour un paquet système.
- Traiter les skills comme du code exécutable, pas comme de la documentation.
- Les défenses existantes (scan au déploiement, validation de contenu) ne suffisent pas, c'est la conclusion même des auteurs : il faut des défenses renforcées pour la supply chain des skills.

La leçon générale est connue, elle change juste de terrain : quand une brique est téléchargée et exécutée sans vérification, elle devient une porte d'entrée. Les skills d'agents sont cette brique aujourd'hui.

## Sources

- [arXiv:2608.09577 - ElasticBack: Stealthy Conditional Backdoor in LLM-Agent Skills via Coupled Trigger-Rule Optimization](https://arxiv.org/abs/2608.09577), soumis le 10 août 2026
- [PDF du papier](https://arxiv.org/pdf/2608.09577)
