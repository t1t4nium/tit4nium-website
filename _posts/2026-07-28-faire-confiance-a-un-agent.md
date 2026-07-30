---
title: "Faire confiance à un agent : les leçons de trois mois de production"
tags: [hermes-agent, agent, production]
---

Ça fait trois mois que je fais tourner Hermes Agent quotidiennement en mode autonome. Cron jobs, pipelines de veille, génération de contenu, surveillance de marché. Voici ce que j'ai appris sur la confiance qu'on peut accorder à un agent.

---

## Le problème

Un script, tu sais ce qu'il va faire. Tu l'écris, tu le testes, il reproduit le même comportement à l'identique tant que l'environnement ne change pas.

Un agent, c'est différent. Tu lui donnes un objectif, il décide comment l'atteindre. Chaque exécution peut emprunter un chemin différent. Et parfois, il fait des trucs que t'avais pas prévus.

Pas dans le sens "Skynet se réveille". Dans le sens : il essaie d'écrire un fichier au mauvais endroit, où il passe trois appels API là où un seul suffisait, ou il interprète une instruction floue d'une façon créative que t'avais pas anticipée.

---

## Ce qui marche

**Les tâches à périmètre étroit** : un agent qui doit surveiller un flux RSS, extraire les articles pertinents, les synthétiser et déposer le résultat à un chemin fixe. Ça tient. Le périmètre est assez contraint pour que les décisions de l'agent restent dans le domaine du raisonnable, et le processus est suffisamment guidé (contexte de session, instructions claires) pour éviter les dérapages.

**Les pipelines avec vérification** : l'agent propose, l'humain valide. C'est le modèle que j'utilise pour l'instant.

**Les watchdogs longs** : des agents qui tournent en fond, surveillent un état, et alertent si un seuil est dépassé. Pas de modification, pas d'écriture, juste de l'observation et du reporting.

---

## Ce qui coince

**Les boucles de raisonnement excessives** : un agent peut passer 10 appels API à tourner autour d'un problème simple alors qu'un script le résoudrait en une ligne. Le coût cognitif et monétaire n'est pas nul.

**Les décisions créatives non sollicitées** : donne à un agent un objectif vague ("optimise ce processus"), et il peut réécrire ta config, réorganiser tes fichiers, ou changer des paramètres sans te demander. Pas par malice. Parce que c'était le chemin le plus logique vu de sa fenêtre de contexte.

**La reproductibilité** : un agent qui réussit une tâche aujourd'hui peut échouer demain sur le même input, parce que le modèle a "décidé" d'une autre approche. C'est inhérent à la nature probabiliste du truc, mais en production, c'est un défaut.

---

## Ce que j'en retiens

La confiance dans un agent ne se décrète pas. Elle se construit par un périmètre :

1. **Instructions explicites** : plus l'objectif est précis, moins l'agent dérive. Les agents n'aiment pas le vide, ils le remplissent avec leur propre interprétation.
2. **Vérification humaine systématique** : l'agent propose, l'humain dispose. C'est contraignant, mais c'est la seule façon d'avoir un filet de sécurité tant que les mécanismes de confinement ne sont pas matures.
3. **Ségrégation des permissions** : un agent qui écrit des fichiers ne devrait pas pouvoir déployer. Un agent qui lit des données ne devrait pas pouvoir les modifier. Ça paraît évident, mais c'est facile à oublier quand on configure un pipeline.

[L'incident OpenAI/Hugging Face]({% link _posts/2026-07-28-agent-openai-pirate-hugging-face.md %}) rappelle une chose : si le labo le plus sophistiqué du monde n'arrive pas à garder ses agents dans leur sandbox, le problème est structurel, pas accidentel. En attendant que des mécanismes de confinement fiables émergent, le bon réflexe, c'est de considérer qu'un agent peut faire n'importe quoi dans son périmètre, et de concevoir le périmètre en conséquence.
