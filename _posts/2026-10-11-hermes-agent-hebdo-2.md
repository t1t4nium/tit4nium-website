---
title: "Hermes Agent Hebdomadaire #2"
tags: [hermes-agent, news-digest]
---

Deuxième édition de l'hebdomadaire, qui reprend les actualités les plus marquantes de la semaine du lundi 5 au dimanche 11 octobre 2026. Au sommaire : la série B de 90 millions de dollars de Nous Research, la release v0.21.6 et ses corrections de sécurité, le lancement de Hermes Index, l'arrivée sur le Microsoft Store, les PC ASUS ProArt RTX Spark, le mono-répôt des plugins officiels, le modèle stealth MISSINGNO. et le catalogue matériel The Hermes Workshop.

## Une série B de 90 millions de dollars pour Nous Research

Nous Research a confirmé le 7 octobre une levée de fonds de série B de 90 millions de dollars, pour une valorisation de 1,5 milliard de dollars, d'abord rapportée par le Wall Street Journal. Le tour est mené par Robot Ventures, avec la participation de Nvidia, M12 (Microsoft), Samsung Next, Union Square Ventures, Y Combinator et Menlo Ventures. La levée porte le financement total de la société, fondée en 2023, à 158 millions de dollars.

Hermes Agent a été cloné plus de 24 millions de fois et, selon les estimations internes de la société, génère environ 2,5 % de l'usage mondial de jetons. Le capital financera l'entrée de Nous Research sur le marché de l'entreprise avec « Hermes for Businesses », qui permettra de déployer des agents personnalisés gérant des workflows en plusieurs étapes tout en gardant les données privées, ainsi que le développement d'une application mobile. Le Wall Street Journal rapporte un revenu annualisé d'environ 36 millions de dollars à la mi-septembre, avec l'objectif de dépasser 100 millions avant la fin de 2026.

Sur le billet publié par la société, Dillon Rolnick, directeur général, replace la levée dans la mission de Nous : construire une alternative ouverte et vérifiable à la centralisation de l'IA, un modèle d'« user-alignment » qui adhère à la vision du monde de son utilisateur plutôt qu'à celle imposée par une entité.

> Sources : [@NousResearch, As reported in the @WSJ, we have raised a Series B, 7 octobre 2026](https://x.com/NousResearch/status/2107874963382538469), [TechCrunch, Nous Research confirms it hit $1.5B valuation, 7 octobre 2026](https://techcrunch.com/2026/10/07/nous-research-confirms-it-hit-1-5b-valuation-launches-ai-agents-for-business-users/) et [Nous Research, A Note on Our Fundraise, 7 octobre 2026](https://nousresearch.com/a-note-on-our-fundraise)

## Release v0.21.6 : correctifs et durcissements de sécurité

Nous Research a publié le 8 octobre la release v0.21.6 de Hermes Agent. C'est une release de correctifs, la première produite par la nouvelle chaîne de release stable : une référence de tentative unique, une image Docker testée et un tag de réception à la publication. Elle roule environ 2 100 pull requests dans une release stable pour Docker et Hermes Cloud, sur une fenêtre de 8 867 commits hors merge depuis la v0.21.5. Les notes complètes et organisées arriveront avec la v0.22.0.

La release liste plusieurs changements de la fenêtre, sans les documenter ici : la transcription en direct pendant que l'on parle, les tours vocaux routés vers leur propre modèle, les plugins tiers exécutés dans un hôte de plugin par profil, les modèles favoris et épinglés en tête du sélecteur de Desktop, les modèles locaux dans hermes model, des packs de langue empilables, un hermes status orienté résumé, et GPT-6.1 Sol, Claude Sonnet 5.5 et Haiku 5.5 au catalogue.

La release corrige aussi plusieurs problèmes de sécurité, signalés par Tenable Research (TRA-725 à TRA-728) : des en-têtes X-Forwarded-For falsifiés pouvaient réinitialiser la limite de débit de la connexion par mot de passe, des requêtes de connexion non authentifiées pouvaient écrire des valeurs non bornées dans le journal d'audit, et la connexion native pouvait envoyer les codes de connexion vers une redirection non loopback, ce qui permettait une prise de session. D'autres durcissements concernent les filtres git des dépôts non fiables et l'expéditeur de la passerelle email.

> Source : [Hermes Agent v0.21.6, release GitHub, 8 octobre 2026](https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.6)

## Hermes Index : classer les modèles par score et par coût

Nous Research a lancé le 6 octobre Hermes Index, un classement qui note les modèles sur ce qu'ils accomplissent dans Hermes Agent et sur ce que chaque tâche coûte. L'index combine quatre suites exécutées dans le même harnais Hermes Agent : Hermes Bench, TerminalBench 4, TerminalBench Science et SkillsBench. Hermes Bench est une nouvelle suite maison de 150 tâches réparties en 25 catégories.

La page du classement publie les résultats complets. Claude Opus 5.5 mène avec un index de 63,31 pour 4,99 dollars par tâche, devant GPT 6 Astra (56,25 pour 11,61 dollars) et Claude Sonnet 5.5 (53,14 pour 2,82 dollars). Plus bas, DeepSeek V4.1 Flash atteint 36,91 pour 0,26 dollar par tâche et Ling 3.0 Flash 21,56 pour 0,054 dollar. Nous identifie six modèles sur la frontière de Pareto, ceux qu'aucun autre ne bat à la fois sur le prix et sur le score : Claude Opus 5.5, Claude Sonnet 5.5, GPT 6 Sol, DeepSeek V4.1 Flash, GPT 6 Luna et Ling 3.0 Flash.

Le classement signale aussi les fuites de benchmark : certains agents ont trouvé le dépôt public de SkillsBench et réutilisé ses solutions publiées, d'où l'affichage d'un score propre à côté du score brut pour les modèles concernés.

> Sources : [@NousResearch, Introducing Hermes Index, 6 octobre 2026](https://x.com/NousResearch/status/2107592255124951360), [@Teknium, We just launched Hermes Index!, 6 octobre 2026](https://x.com/Teknium/status/2107596615477604808) et [Hermes Index, portal.nousresearch.com/bench](https://portal.nousresearch.com/bench)

## Hermes Agent arrive sur le Microsoft Store

Nous Research a annoncé le 8 octobre que Hermes Agent est désormais en ligne, et mis en avant, sur le Microsoft Store, pour une installation en un clic sous Windows. Le MSIX autonome requiert Windows 11 22H2 ou plus récent et intègre Python, Node et les dépendances de base, sans clonage ni compilation au premier lancement. Les alias d'exécution exposent hermes, hermes-agent et hermes-acp. La variante du Store utilise l'identité de paquet du Partner Center et les mises à jour du Store, sans passer par le flux de sideload.

> Sources : [@NousResearch, Hermes Agent is now live (and featured) in the Microsoft Store, 8 octobre 2026](https://x.com/NousResearch/status/2108231536772596193) et [Windows (Native) Guide, documentation Hermes Agent](https://hermes-agent.nousresearch.com/docs/user-guide/windows-native)

## Hermes sur les PC ASUS ProArt RTX Spark

ASUS a annoncé le 8 octobre ses PC Windows ProArt RTX Spark, avec Hermes Agent en couche agent. Les portables ProArt P16 et P14 et le mini PC ProArt GR1X embarquent NVIDIA RTX Spark, qui réunit un GPU Blackwell RTX, un CPU Grace et jusqu'à 128 Go de mémoire unifiée, pour jusqu'à 1 pétaflop de calcul IA en FP4. La gamme est pensée pour l'IA locale : faire tourner de grands modèles sans dépendre du cloud.

Hermes Agent, présenté comme l'expert créatif personnalisé, pilote ComfyUI et MuseTree sur la machine, travaille sur les fichiers locaux et garde les workflows sur l'appareil. Les précommandes ont ouvert le 7 octobre pour une disponibilité au 16 octobre ; les portables démarrent à 2 599,99 dollars aux États-Unis, et le GR1X arrivera plus tard dans l'année.

> Sources : [ASUS Pressroom, ASUS ProArt RTX Spark Windows PCs Available for Immediate Pre-Order, 8 octobre 2026](https://press.asus.com/news/press-releases/asus-proart-rtx-spark-p16-p14-ai-pcs/) et [@Teknium, Enjoy Hermes Agent on your new @ASUS RTX Spark, 8 octobre 2026](https://x.com/Teknium/status/2108111237427187873)

## Un mono-répôt pour les plugins officiels

Teknium a annoncé le 11 octobre la consolidation des plugins officiels de Hermes Agent dans un mono-répôt unique, NousResearch/hermes-official-plugins, qui rassemble les plugins first-party construits et maintenus par Nous Research. Le dépôt compte neuf plugins : Home Assistant, Spotify, Claude Subscription DirectSDK, Telegram Business Mode, Memory Wiki, Blender, Snyk, TouchDesigner et Accent Picker. Chaque répertoire forme un plugin autonome, que le catalogue installe par couple dépôt plus sous-répertoire à un commit épinglé, via un clone épars sans historique.

La migration est pensée pour ne rien demander : les utilisateurs des plugins intégrés au cœur reçoivent le plugin automatiquement à la mise à jour, et ceux qui l'ont installé depuis le catalogue suivent le mono-répôt au prochain hermes plugins update. Les anciens dépôts sont archivés. La CI teste chaque plugin contre le cœur actuel sur Linux, macOS et Windows.

> Sources : [@Teknium, We are consolidating the official plugins for Hermes Agent into the following mono-repo, 11 octobre 2026](https://x.com/Teknium/status/2109177877543682419) et [Hermes Official Plugins, dépôt GitHub NousResearch](https://github.com/NousResearch/hermes-official-plugins)

## MISSINGNO., un modèle stealth en accès libre

Nous Research a annoncé le 10 octobre un modèle « stealth » présenté comme « Wild MISSINGNO. » : un modèle de code et de raisonnement agentique, décrit comme très économe en jetons, gratuit pour une durée limitée sur Nous Portal. Dans Hermes Agent, hermes setup --portal ouvre la connexion, puis /model stealth/missingno sélectionne le modèle dans n'importe quelle conversation ; ajouter --global en fait le modèle par défaut. Le message évoque 262 K de contexte et l'appel d'outils.

> Sources : [@NousResearch, Wild MISSINGNO. appeared!, 10 octobre 2026](https://x.com/NousResearch/status/2109012611555840069) et [@witcheer, a wild model on Nous Portal, here's how to catch it in Hermes Agent, 10 octobre 2026](https://x.com/witcheer/status/2109016297375666268)

## The Hermes Workshop : un catalogue de 330 appareils ouverts

Teknium a présenté le 6 octobre un catalogue de matériel ouvert, The Hermes Workshop, à l'adresse teknium.io/hermes-devices. La page recense 330 appareils et outils, 1697 idées d'usage et 30 familles, chacun décrit avec son intérêt et la façon précise dont Hermes Agent s'y connecte. La règle de la page : un appareil expose une interface locale réelle, REST, MQTT, MCP, SCPI, série, ROS 2 ou un firmware que Hermes peut réécrire et flasher, sans cloud fournisseur quand on peut l'éviter.

Hermes écrit le YAML ESPHome et les macros Klipper, flashe les cartes en OTA, surveille imprimantes et réseaux par des cron et mémorise les particularités de chaque appareil dans un skill. La section « first wave » propose un banc de départ : HA Green et ZBT-2 en colonne vertébrale, deux cartes Hermes Gadget en interphone, OpenWrt One pour le réseau, un parc d'impression Klipper, des corps Reachy Mini et SO-101, et des oreilles RTL-SDR et Meshtastic.

> Sources : [@Teknium, Just made this cool catalog with a ton of open platform hardware, 6 octobre 2026](https://x.com/Teknium/status/2107301976291909994) et [The Hermes Workshop, teknium.io/hermes-devices](https://teknium.io/hermes-devices)

## Licence

Sous licence CC BY 4.0. [hermes-agent-news-fr](https://github.com/t1t4nium/hermes-agent-news-fr)
