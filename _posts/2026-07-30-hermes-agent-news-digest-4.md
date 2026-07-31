---
title: "Hermes Agent News Digest #4"
tags: [hermes-agent, news-digest]
---

Release patch v0.19.1, FLUX 3 Preview dans Hermes Agent, intégration officielle avec Buzz et voice activation.

---

## Hermes Agent v0.19.1 (v2026.7.30) : la consolidation d'un mois de travail

Le 30 juillet, Nous Research a tagué Hermes Agent v0.19.1, une release patch qui rassemble en une version stable les plus de 1 000 pull requests mergées depuis v0.19.0 (20 juillet). L'objectif affiché : fournir un point de référence fiable aux consommateurs en aval - images Docker, déploiements hébergés, installations fraîches.

La fenêtre couverte est massive : environ 2 789 commits, 4 748 fichiers modifiés, 442 000 insertions et 392 000 suppressions sur la branche main. Le contenu est dominé par les correctifs et les opérations de récupération sur la gateway, le sous-système vocal, l'application desktop et l'installateur, ainsi que par du travail de plateforme : canal Buzz/Nostr, génération et livraison vidéo FLUX 3, fiabilité des médias Telegram et régressions du mode vocal.

Les notes de version complètes et curatées de cette fenêtre seront publiées avec v0.20.0. En attendant, la mise à jour se fait avec `hermes update` (ou le script d'installation pour une installation fraîche).

> Source : [Release Hermes Agent v0.19.1 (v2026.7.30)](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.7.30)

---

## FLUX 3 Preview disponible dans Hermes Agent

Nous Research a annoncé le 30 juillet que FLUX 3 Preview, le modèle de génération vidéo de Black Forest Labs, est désormais disponible au public, exclusivement dans Hermes Agent, et gratuitement sur tous les abonnements payants du Nous Portal pendant 48 heures.

Pour accompagner le lancement, un concours de courts-métrages est ouvert : les participants doivent créer un film avec FLUX 3 en taguant @NousResearch et @bfl_ai, avant le 1er août 19 h PT. Les trois meilleures entrées sont récompensées : un an de génération FLUX 3 gratuite (20 générations/jour) plus 2 000 $ de crédits Portal et un hoodie pour le premier, 1 000 $ de crédits pour le deuxième, 500 $ pour le troisième.

Côté offres : les 100 premiers inscrits avec le code L1YSMYDB obtiennent un mois gratuit de Nous Portal Plus avec accès complet à la génération vidéo, et les 25 premières mises à niveau avec le code KEQHYO3X bénéficient de 20 $ de réduction. L'accès à la fonctionnalité se fait via `hermes update`.

L'événement de lancement Black Forest Labs × Nous Research se tient ce vendredi 31 juillet à San Francisco.

> Sources : [@NousResearch, 30 juillet 2026](https://x.com/NousResearch/status/2082911477904654741) — [@NousResearch, événement Black Forest Labs × Nous, 31 juillet 2026](https://x.com/NousResearch/status/2082211638107623921)

---

## L'intégration officielle avec Buzz est arrivée

Le [digest #1]({% link _posts/2026-07-27-hermes-agent-news-digest-1.md %}) mentionnait un fork communautaire permettant d'utiliser Hermes Agent dans Buzz, en attendant une intégration officielle annoncée « à venir ». Elle est maintenant disponible.

Nous Research a annoncé le 29 juillet qu'Hermes Agent « runs Buzz » : le workspace auto-hébergeable de Block (ex-Square) réunit humains et agents dans les mêmes canaux de messagerie et le même codebase. Trois modes d'utilisation sont proposés :

- Buzz Desktop détecte automatiquement une installation Hermes et la fait tourner en local ;
- un pont relay donne à l'agent une identité hébergée dans les canaux ;
- la connexion via la Hermes Gateway permet d'utiliser Buzz comme plateforme externe complète : canaux, messages directs, threads, réactions et livraison cron.

Teknium précise que ces intégrations profondes sont accessibles en avance via `hermes update`, avant la prochaine release. La documentation est disponible sur hermes-agent.nousresearch.com/docs/integrations/buzz.

Côté communautaire, tonbistudio a publié le dépôt buzz-skills avec deux skills : hermes-in-buzz, pour configurer la connexion d'une instance Hermes distante à l'app Buzz locale via la gateway, et buzz-media-attachments, pour attacher vidéos et médias au format attendu par Buzz.

> Sources : [@Teknium, 29 juillet 2026](https://x.com/Teknium/status/2082593054805073960) — [@NousResearch, 29 juillet 2026](https://x.com/NousResearch/status/2082592619473854815) — [@tonbistudio, 30 juillet 2026](https://x.com/tonbistudio/status/2082895822845530113)

---

## Voice activation : « Hey Hermes »

Hermes Agent dispose maintenant de l'activation vocale. En prononçant le wake word, Hermes ouvre une nouvelle session et écoute la commande, sans les mains, dans le CLI, le TUI ou l'application desktop.

La détection est locale et désactivée par défaut : il faut activer l'écoute via l'icône oreille dans la zone de saisie du GUI. Le système reconnaît également les noms de profils, ce qui permet d'activer une conversation vocale avec le bon profil. La documentation dédiée est disponible sur hermes-agent.nousresearch.com/docs/user-guide/features/wake-word.

> Source : [@Teknium, 29 juillet 2026](https://x.com/Teknium/status/2082510413162553674)

---

## Sources

- [Release Hermes Agent v0.19.1 (v2026.7.30)](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.7.30)
- [@NousResearch - FLUX 3 Preview, 30 juillet 2026](https://x.com/NousResearch/status/2082911477904654741)
- [@NousResearch - Événement Black Forest Labs × Nous, 31 juillet 2026](https://x.com/NousResearch/status/2082211638107623921)
- [@Teknium - Intégration Buzz, 29 juillet 2026](https://x.com/Teknium/status/2082593054805073960)
- [@NousResearch - Hermes Agent now runs Buzz, 29 juillet 2026](https://x.com/NousResearch/status/2082592619473854815)
- [@tonbistudio - buzz-skills, 30 juillet 2026](https://x.com/tonbistudio/status/2082895822845530113)
- [@Teknium - Voice activation, 29 juillet 2026](https://x.com/Teknium/status/2082510413162553674)
