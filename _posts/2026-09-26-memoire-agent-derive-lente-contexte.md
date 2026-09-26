---
title: "Mémoire d'agent : la dérive lente et silencieuse qui pollue le contexte"
tags: [agent-ia, hermes-agent, memoire, feedback]
---

Un agent IA ne déraille pas d'un coup. Il dévie lentement. Une note écrite un jour à propos d'un projet précis se retrouve chargée dans toutes les sessions suivantes, même sans rapport avec ce projet. Une hypothèse fausse, retenue à un moment, reste dans le contexte et oriente les réponses pendant des semaines. On ne s'en aperçoit pas tout de suite, et c'est exactement le problème : la dérive est lente, silencieuse, et quand on la remarque, on ne comprend plus pourquoi l'agent se comporte comme il le fait.

J'ai vécu cette dérive. Ce post fait le point sur ce que la recherche en dit, sur ce que la documentation de Hermes Agent recommande, et sur les règles que j'ai fini par me donner pour garder la main.

## Le problème : une mémoire qui se pollue sans bruit

De mon expérience, les agents écrivent de temps en temps dans leur mémoire persistante des choses qui ne concernent qu'un projet ou un contexte précis. En conséquence, ces notes se retrouvent injectées dans le contexte de toutes les sessions, quel que soit le projet en cours. La mémoire est chargée en entier à chaque session, donc une note de projet pollue le contexte partout, tout le temps.

Le pire, c'est que l'erreur est rare et inoffensive sur le moment. L'agent sait la plupart du temps quoi écrire, où et comment. Mais il se trompe de temps en temps, c'est inévitable, et l'utilisateur ne s'en aperçoit pas forcément tout de suite. Lentement, le comportement dévie, le contexte se pollue au fil des sessions, et on aboutit à des comportements inattendus et incompréhensibles.

Ce que je décris là n'est pas une intuition personnelle. La recherche lui a donné un nom et une explication.

## Ce que dit la recherche

Le champ est récent, l'essentiel des travaux date de 2025 et 2026, et il converge sur plusieurs points qui recoupent exactement mon vécu.

### La mémoire d'un agent est un système d'état, pas une boîte à notes

Le travail le plus directement utile est le survey « Always-On Agents » (arXiv:2606.30306). Son point de départ : les agents sont conçus et évalués comme des systèmes épisodiques, une tâche puis remise à zéro, alors que les agents réels sont « always-on », leur comportement dépendant d'un état accumulé. Cette persistance est utile, mais elle introduit des défaillances qu'un agent épisodique ne connaît pas :

- une mémoire périmée peut supplanter une observation fraîche, car rien ne la marque comme expirée ;
- une mémoire empoisonnée, écrite au cours d'une interaction ordinaire, peut persister et s'activer bien plus tard ;
- une mémoire non pertinente ou fausse peut parasiter la recherche et évincer les preuves courantes ;
- une consolidation avec perte peut supprimer l'identifiant ou la date précis dont une action future a besoin, en laissant un résumé qui obtient pourtant un bon score de rappel.

Le survey propose six axes pour diagnostiquer chaque élément d'état : autorité (qui peut l'écrire), périmètre, mutabilité, provenance, récupérabilité et actionnabilité. Deux de ces axes correspondent à ce que j'ai appris à la dure : le périmètre (une note ne doit pas déborder de son domaine) et l'autorité (qui a le droit d'écrire dans la mémoire).

Le survey « Memory for Autonomous LLM Agents » (arXiv:2603.07670) formalise la mémoire comme une boucle écrire-gérer-lire, et met en garde sur un point qui me parle : la précision prime sur le rappel. Un rappel périmé ou halluciné peut être pire que pas de rappel du tout. Il nomme aussi un mode de défaillance que j'ai vécu sans le savoir : la « retrieval pollution », la pollution de la recherche par des notes hors sujet.

### Le contexte est une discipline, pas un fourre-tout

Un courant parallèle propose de traiter la gestion du contexte comme une discipline à part entière. Le papier « Context Engineering » (arXiv:2603.09619) propose cinq critères de qualité pour tout contenu placé dans le contexte d'un agent : pertinence, suffisance, isolation, économie et provenance. Deux de ces critères fondent directement les règles de tri usuelles. L'isolation justifie de ne pas laisser une note propre à un projet fuiter dans toutes les sessions. L'économie justifie de ne charger en permanence que ce qui le mérite, car chaque ligne injectée coûte des tokens et dilue le signal.

Le même constat ressort des travaux quantitatifs. « Less Context, Better Agents » (arXiv:2606.10209) montre que conserver sélectivement les interactions récentes pertinentes, et résumer ou écarter le reste, améliore à la fois la performance et l'efficacité, face à la pratique de garder l'historique complet. Le fil conducteur est constant : moins de contexte, mieux choisi, vaut mieux que plus de contexte non trié.

### Les fichiers de contexte ont un effet incertain, mais des règles nettes

Sur les fichiers AGENTS.md, la recherche est plus tranchante et plus surprenante. L'étude de l'équipe de Martin Vechev à l'ETH Zurich, « Evaluating AGENTS.md » (arXiv:2602.11988), aboutit à un constat contre-intuitif : fournir un fichier de contexte n'améliore pas, en général, le taux de réussite, tout en augmentant le coût d'inférence de plus de 20 % en moyenne. La nuance est capitale : les instructions sont bien suivies, mais les vues d'ensemble du dépôt, pourtant recommandées par les fournisseurs de modèles, ne servent à rien. Un fichier de contexte n'a de valeur que pour encoder des pratiques de codage non standard.

Un second papier, « Configuration Smells in AGENTS.md Files » (arXiv:2606.15828), catalogue six défauts récurrents, dont les trois plus fréquents : la fuite de lint (62 % des fichiers), le gonflement du contexte (42 %) et la fuite de skill (35 %). La fuite de skill désigne précisément le fait de placer dans AGENTS.md ce qui devrait être une compétence à chargement progressif, gonflant le contexte de façon permanente.

Un troisième, « On the Impact of AGENTS.md Files » (arXiv:2601.20404), obtient un résultat en apparence opposé : la présence d'un fichier est associée à un temps d'exécution plus bas (environ 29 %) et une consommation de tokens de sortie réduite (17 %), à taux de réussite comparable. Les deux études ne se contredisent pas tout à fait, l'une mesure le succès, l'autre l'efficacité. Mais leur lecture conjointe mène à une conclusion nette : l'effet d'un fichier de contexte ne dépend pas de sa seule présence, mais de ce qu'on y met.

### Les skills sont de la mémoire procédurale, pas des notes

Sur les compétences réutilisables, la littérature est plus mince, mais elle pose une distinction solide. La taxonomie de CoALA (arXiv:2309.02427) sépare la mémoire de travail, la mémoire épisodique (les événements), la mémoire sémantique (les faits) et la mémoire procédurale (les routines). Les skills relèvent de cette dernière.

La définition la plus utile vient de « Demystifying Agent Skills » (arXiv:2608.14036) : une compétence n'est pas un simple enregistrement d'une exécution passée, mais une description compacte de quoi faire, quoi vérifier et quels pièges éviter. C'est la formulation savante du principe « des leçons, pas des journaux ». Le survey « Agent Skills » (arXiv:2602.12430) ajoute un chiffre qui justifie la prudence : 26,1 % des compétences publiées par la communauté contiennent des vulnérabilités, d'où son cadre de gouvernance du cycle de vie fondé sur la provenance.

## Hermes Agent face à la recherche

La documentation officielle de Hermes Agent est, sur ce point, étonnamment alignée avec la recherche, même si les correspondances sont des analogies plutôt que des validations explicites. Aucun papier ne teste les choix précis de Hermes, deux fichiers plafonnés écrits par l'agent, instantané figé, approbation optionnelle.

La taxonomie de Hermes est une instanciation simplifiée de CoALA. MEMORY.md correspond à la mémoire sémantique augmentée d'épisodique, USER.md à une mémoire sémantique dédiée à l'utilisateur, et les skills à la mémoire procédurale. Le mécanisme de MEMORY.md et USER.md est proche du « core memory » de MemGPT (arXiv:2310.08560) : un bloc résident plafonné, géré par outil, avec consolidation à l'approche de la limite.

Le chemin d'écriture de Hermes applique la plupart des recommandations du survey de référence. La déduplication automatique, le plafond strict qui force la consolidation, le filtrage par pertinence (les règles « à mémoriser » et « à éviter ») et le scan de sécurité correspondent terme à terme aux bonnes pratiques de arXiv:2603.07670. L'approbation optionnelle des écritures (write_approval) et la possibilité de rejeter une entrée correspondent à ce que le survey sur la souveraineté mnésique appelle l'autorisation d'écriture et la réversibilité, deux primitives de gouvernance.

Le point le plus intéressant est l'instantané figé. Hermes injecte la mémoire une fois au démarrage de la session et ne la rafraîchit plus, pour préserver le cache de préfixe. La recherche valide ce souci de coût, mais insiste en retour sur la fraîcheur comme risque central : un rappel périmé vaut pire que pas de rappel. Hermes pousse d'ailleurs les frontières de session comme le moment où la mémoire « paie », et sa documentation recommande `/new` aux frontières naturelles, ce qui correspond précisément à la boucle décrite par la littérature : oublier, puis se rappeler depuis la mémoire, puis rechercher dans l'historique.

La distinction entre MEMORY.md et AGENTS.md, qui a motivé mes propres règles, trouve aussi un appui dans la recherche. Elle recoupe d'une part la colonne « qui écrit quoi » de la documentation officielle (l'utilisateur écrit AGENTS.md, l'agent écrit MEMORY.md), et d'autre part la règle empirique des papiers sur les fichiers de contexte : un fichier de contexte vaut par ses instructions non standards, et tout ce qui fait doublon est du bruit.

## Mes règles et leur adéquation avec la recherche

Partant de mon vécu, j'ai fini par me donner des règles strictes, et je les ai vérifiées contre la recherche. Elles tiennent.

La règle principale : la mémoire persistante ne porte que du transversal. Un fait d'environnement global, une préférence durable, une leçon qui vaut dans toutes les sessions, oui. La structure, une convention ou une configuration d'un projet précis, non, elles vont dans l'AGENTS.md de ce projet. Une procédure réutilisable, non, elle va dans une skill.

Cette règle correspond terme à terme à ce que la recherche appelle l'isolation et l'économie, à la non-expansion du périmètre du survey Always-On, et à la retrieval pollution du survey mémoire. Je n'ai rien inventé, j'ai mis un nom sur une intuition que la recherche a ensuite confirmée.

La règle sur les skills découle de la même logique : une skill ne contient pas de contexte, seulement du savoir-faire réutilisable et des références. C'est exactement la définition de la mémoire procédurale, et la phrase de « Demystifying Agent Skills » : quoi faire, quoi vérifier, quels pièges éviter, rien de plus.

La règle sur les fichiers : AGENTS.md est rédigé par moi, l'agent le modifie seulement quand je le lui demande, et le fichier est protégé par une approbation. SOUL.md porte l'identité, rien de technique. Ces règles recoupent les papiers sur les fichiers de contexte, qui insistent sur la concision et sur le non-standard.

Enfin, j'ai activé l'approbation des écritures de mémoire (`write_approval` à `true`). C'est la réponse directe au cas « l'agent a retenu une fausse hypothèse sur moi » : chaque écriture, y compris celles de la revue d'arrière-plan, attend un oui ou un non avant d'entrer dans la mémoire. C'est la primitive d'autorité que la recherche identifie comme le parent pauvre du domaine.

## Recommandations pour garder la main

De tout cela, je tire des recommandations pratiques, valables pour Hermes Agent et, dans l'esprit, pour n'importe quel agent qui transporte de l'état entre sessions.

1. Séparer strictement les domiciles. Transversal dans la mémoire, scopé à un projet dans AGENTS.md, procédure réutilisable dans une skill. La frontière la plus utile est celle-ci : ce qui ne vaut pas dans toutes les sessions n'a pas sa place dans la mémoire persistante.

2. Activer l'approbation des écritures de mémoire. C'est le garde-fou le plus efficace contre la dérive lente. Une erreur rare devient visible et réversible au lieu de s'accumuler en silence.

3. Auditer, pas seulement quand ça casse. La mémoire et les skills se relisent, se consolident et se nettoient à intervalles réguliers, pas seulement quand un comportement incompréhensible apparaît.

4. Privilégier la précision sur le rappel. Mieux vaut une mémoire courte et sûre qu'une mémoire longue et incertaine. Un rappel périmé fait plus de mal que pas de rappel.

5. Créer des frontières de session. La mémoire ne se rafraîchit qu'au démarrage d'une session. Clore une session à la fin d'une tâche, au changement de sujet, au début d'une journée, permet à la boucle oublier-rappeler de se déclencher et aux nouvelles entrées d'être lues.

6. Évaluer avant de déployer. Un fichier de contexte ne vaut pas par sa présence mais par son contenu. Retirer ce que l'agent peut déduire seul, garder les invariants non standards. Chaque ligne doit justifier son existence.

La conclusion tient en une phrase : la mémoire d'un agent est une question de tri et de contrôle, pas de volume. Ce qui la pollue, ce n'est pas que le bruit extérieur, c'est aussi ce que l'agent y écrit lui-même, petit à petit, sans qu'on le voie.

## Sources

Mémoire persistante :

- [Always-On Agents: A Survey of Persistent Memory, State, and Governance in LLM Agents](https://arxiv.org/abs/2606.30306), arXiv:2606.30306
- [Cognitive Architectures for Language Agents (CoALA)](https://arxiv.org/abs/2309.02427), Sumers et al., arXiv:2309.02427
- [MemGPT: Towards LLMs as Operating Systems](https://arxiv.org/abs/2310.08560), Packer et al., arXiv:2310.08560
- [Memory for Autonomous LLM Agents: Mechanisms, Evaluation, and Emerging Frontiers](https://arxiv.org/abs/2603.07670), arXiv:2603.07670
- [Memory in the Age of AI Agents](https://arxiv.org/abs/2512.13564), arXiv:2512.13564
- [A Survey on the Evolution of LLM Agent Memory](https://arxiv.org/abs/2605.06716), arXiv:2605.06716
- [A Survey on the Security of Long-Term Memory in LLM Agents: Toward Mnemonic Sovereignty](https://arxiv.org/abs/2604.16548), arXiv:2604.16548
- [Reliability Engineering for Persistent Agent Memory](https://arxiv.org/abs/2609.05510), arXiv:2609.05510

Fichiers de contexte :

- [Evaluating AGENTS.md: Are Repository-Level Context Files Helpful for Coding Agents?](https://arxiv.org/abs/2602.11988), Gloaguen et al. (ETH Zurich), arXiv:2602.11988
- [Configuration Smells in AGENTS.md Files](https://arxiv.org/abs/2606.15828), dos Santos et al., arXiv:2606.15828 (IEEE SCAM 2026)
- [On the Impact of AGENTS.md Files on the Efficiency of AI Coding Agents](https://arxiv.org/abs/2601.20404), Lulla et al., arXiv:2601.20404

Context engineering :

- [Context Engineering: From Prompts to Corporate Multi-Agent Architecture](https://arxiv.org/abs/2603.09619), Vishnyakova, arXiv:2603.09619
- [Less Context, Better Agents: Efficient Context Engineering for Long-Horizon Tool-Using LLM Agents](https://arxiv.org/abs/2606.10209), arXiv:2606.10209
- [A Survey of Context Engineering for Large Language Models](https://arxiv.org/abs/2507.13334), arXiv:2507.13334

Compétences :

- [Demystifying Agent Skills: Why They Work, Until They Don't](https://arxiv.org/abs/2608.14036), arXiv:2608.14036
- [Agent Skills for Large Language Models: Architecture, Acquisition, and ...](https://arxiv.org/abs/2602.12430), arXiv:2602.12430
- [Managing Procedural Memory in LLM Agents](https://arxiv.org/abs/2606.23127), arXiv:2606.23127
- [Adaptation of Agentic AI: A Survey of Post-Training, Memory, and Skills](https://arxiv.org/abs/2512.16301), arXiv:2512.16301

Documentation Hermes Agent :

- [Mémoire persistante](https://hermes-agent.nousresearch.com/docs/user-guide/features/memory)
- [Quel fichier fait quoi](https://hermes-agent.nousresearch.com/docs/user-guide/which-file-does-what)

Guides de praticiens :

- [Standardize project context with AGENTS.md and Agent Skills](https://developers.redhat.com/articles/2026/07/27/standardize-project-context-agentsmd-and-agent-skills), Red Hat Developer, 2026
