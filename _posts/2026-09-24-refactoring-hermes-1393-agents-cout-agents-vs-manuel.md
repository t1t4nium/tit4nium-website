---
title: "25 000 dollars pour nettoyer un million de lignes : 1 393 agents contre un chantier de deux ans"
tags: [hermes-agent, agent-ia, feedback]
---

J'en parlais déjà dans mon [quotidien Hermes Agent #52 du 16 septembre](https://github.com/t1t4nium/hermes-agent-news-fr/blob/main/2026/2026-09-16-hermes-agent-news-digest-52.md). Le 15 septembre, Nous Research a publié un billet signé Teknium qui raconte comment Hermes Agent a nettoyé son propre dépôt. Le déroulé est intéressant, mais ce sont les chiffres de coût qui m'ont fait relire le billet deux fois.

## Le chantier

Hermes Agent, c'était plus d'un million de lignes de Python hors tests, dont un fichier `gateway/run.py` de 34 847 lignes. Le genre de dette qu'une équipe repousse indéfiniment parce qu'il y a toujours plus urgent : une fonctionnalité à sortir, un bug à corriger.

Le 2 septembre, Teknium envoie la demande à son agent habituel. Objectif : baisser d'au moins 30 % le nombre de lignes, éclater les fichiers monstres, unifier les fonctions utilitaires, réduire les chaînes de conditions. Le 4 septembre, la pull request est fusionnée. Baisse réelle : 34,4 %.

## Ce que ça a coûté

Côté agents, l'exécution principale :

- environ 19 heures actives
- 1 393 sous-agents, jusqu'à 218 en parallèle
- environ 19 300 dollars de coût de modèle
- environ 25 000 dollars au total avec les sessions de suivi, hors temps de relecture humaine

Côté manuel, l'équipe estime le même chantier entre 150 000 et 1,8 million de dollars pour une petite équipe, sur deux mois à deux ans.

Autrement dit, le refactoring par les agents coûte de six à soixante-douze fois moins cher que l'estimation basse du travail manuel, et il tient en deux jours là où le manuel démarre à deux mois. Même en rajoutant la relecture humaine que le coût agent laisse de côté, l'ordre de grandeur ne bouge pas.

## Ce que ça dit de nous

Je ne vais pas faire semblant que ce chiffre me laisse indifférent. Un développeur expérimenté, même très bon, ne rivalise pas avec 1 393 agents qui travaillent en parallèle sur un refactoring mécanique. Pas sur ce genre de tâche. Sur le volume, la vitesse, la constance, l'agent gagne.

Et ça ne va pas ralentir. La question n'est donc plus de savoir si les agents codent mieux ou moins bien que nous, mais de savoir quand on accepte de s'approprier l'outil avant d'être complètement dépassés par lui.

## Le combo qui reste gagnant

Le développeur expérimenté qui se forme aux bonnes pratiques avec l'IA et les agents n'est pas en concurrence avec l'agent codeur. Il le pilote. C'est là que la combinaison devient puissante.

C'est lui qui définit le périmètre et les garde-fous. Dans ce nettoyage, les contrôles portaient sur les interfaces : schéma JSON d'un outil inchangé, sortie de `--help` identique octet par octet, commit obligatoire après chaque étape vérifiée.

C'est lui qui repère ce que les tests ne voient pas. Deux régressions ont échappé aux tests existants avant la fusion : des noms publics supprimés au motif qu'aucun appel interne ne les utilisait, alors que des extensions externes peuvent les importer, et une réécriture automatisée de `suppress()` qui a modifié la gestion des exceptions à environ 65 endroits.

C'est lui qui décide ce qu'on accepte de perdre. Le découpage a un coût : plus de modules, plus de dépendances d'importation, des points d'entrée plus lents à charger.

Le refactoring par 1 393 agents n'a pas supprimé le rôle du développeur. Il l'a déplacé, du code lui-même vers la supervision, le jugement et les limites. C'est exactement là qu'il faut aller, et le plus tôt possible.

## Sources

- [Refactoring Hermes with 1,393 agents, Teknium, blog Nous Research, 15 septembre 2026](https://nousresearch.com/refactoring-hermes-with-1393-agents)
- [PR #102117, dépôt hermes-agent, 4 septembre 2026](https://github.com/NousResearch/hermes-agent/pull/102117)
