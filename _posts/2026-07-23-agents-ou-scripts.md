---
title: "Agents ou scripts : la différence n'est pas dans l'automatisation"
tags: [hermes-agent, ia, automation]
---

Je travaille actuellement sur un service d'automatisation par agents IA pour des petites structures. En documentant les cas d'usage possibles, je suis tombé sur une distinction qui mérite d'être posée noir sur blanc.

---

## Le problème

Quand on parle d'automatisation par IA, on entend souvent la même rengaine : "un agent, c'est un script qui appelle un LLM". Techniquement, c'est vrai. Mais ça rate l'essentiel.

Un script automatisé, même avec API OpenAI, fait toujours la même chose de la même façon. Si le contexte change, il casse.

Un agent, lui, prend des décisions. Il évalue, adapte, recommence autrement si la première tentative échoue. C'est cette couche de raisonnement qui fait la différence.

---

## Exemple concret

Prenez un script de veille concurrentielle classique :
- Il scrape une URL toutes les heures
- Il stocke le résultat dans un fichier
- Si le format change, il plante

Maintenant, un agent qui fait la même tâche :
- Il reçoit une instruction vague : "surveille les annonces de mes concurrents"
- Il choisit les sources, les formats, la fréquence
- Si une page change de structure, il adapte sa méthode d'extraction
- Il détecte ce qui est pertinent et ce qui est du bruit
- Il résume, synthétise, et alerte uniquement sur ce qui mérite attention

La différence, c'est **l'autonomie décisionnelle**.

---

## Où j'en suis

J'ai cartographié 8 services potentiels où cette différence a de la valeur pour des TPE/PME : support client, extraction documentaire, SEO local, prospection partenaires, veille concurrentielle, audit de contenu, génération de rapports, et modération.

L'étape suivante, c'est de transformer ces scenarios en démonstrateurs fonctionnels. Pas des slides. Des vrais pipelines qui tournent.

---

## Ce que j'en retiens

Vendre un agent IA, ce n'est pas vendre un script qui appelle une API. C'est vendre une capacité d'adaptation. Le client n'a pas besoin de savoir comment fonctionne le raisonnement, mais il doit sentir la différence entre un outil qui exécute et un outil qui décide.

La difficulté n'est pas technique. Faire un appel API, c'est trois lignes de Python. La difficulté, c'est de concevoir le bon périmètre d'autonomie : assez large pour être utile, assez contraint pour ne pas dérailler.
