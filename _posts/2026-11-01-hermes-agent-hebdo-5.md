---
title: "Hermes Agent Hebdomadaire #5"
tags: [hermes-agent, news-digest]
---

Cinquième édition de l'hebdomadaire, qui reprend les actualités les plus marquantes de la semaine du lundi 26 octobre au dimanche 1er novembre 2026. Au sommaire : l'ouverture de la bêta mobile officielle sur iOS et Android pendant NousCon, Hermes Agent devenu blueprint officiel de NemoClaw chez NVIDIA, la refonte des abonnements qui inclut un agent cloud, le runtime de passerelle unifié, le plugin officiel Advanced Delegation, GPT-6.1 Terra, hermes webapp qui porte Desktop dans le navigateur et le plugin ElevenLabs SFX.

## La bêta mobile officielle ouvre sur iOS et Android

Le 30 octobre, pendant NousCon 2026 à New York, Nous Research a ouvert la bêta de son application mobile officielle. La page d'inscription propose deux accès : iOS par TestFlight, Android par Firebase App Distribution. L'application se connecte à la passerelle Hermes que l'on fait déjà tourner sur sa machine. C'est un client, pas un agent séparé : il sert à discuter en continu, approuver les appels d'outils et gérer ses bots et ses routines depuis n'importe où. Teknium a confirmé que les bêtas iPhone et Android ont démarré ensemble le jour de NousCon. Aucune date de sortie générale n'est annoncée. De son côté, iamlukethedev continue de construire Herald, son client communautaire, au motif que plus il y a de clients, plus les gens font tourner leur agent eux-mêmes.

> Sources : [@iamlukethedev, The official Hermes app is open for beta on iOS and Android, 31 octobre 2026](https://x.com/iamlukethedev/status/2116661188495085748) et [Hermes Mobile Beta, page d'inscription Nous Research](https://hermes-agent.nousresearch.com/mobile)

## Hermes Agent, blueprint officiel de NemoClaw chez NVIDIA

iamlukethedev a annoncé le 1er novembre que NVIDIA a fait de Hermes Agent un blueprint officiel de NemoClaw, l'un des trois harnesses retenus avec OpenClaw et LangChain Deep Agents. Le billet technique de NVIDIA, publié le 30 octobre par Nicola Sessions, détaille l'assemblage : un blueprint réunit quatre composants autour du harness choisi, les modèles ouverts Nemotron pour le raisonnement, les outils NeMo dont NeMo Relay pour observer et améliorer l'exécution, et OpenShell, le runtime sécurisé qui gouverne l'accès de l'agent aux fichiers, au réseau, aux identifiants et aux outils. La pile ne remplace pas l'agent : on garde Hermes Agent tel quel, et le blueprint assemble ce qui l'entoure sans avoir à le réécrire. Le dépôt communautaire embarque aussi une recette « Chief of Staff » à mémoire, bâtie comme un profil Hermes déployable.

> Sources : [@iamlukethedev, NVIDIA just made Hermes Agent an official NemoClaw blueprint, 1er novembre 2026](https://x.com/iamlukethedev/status/2116699490111652086) et [Build Specialized Agents on a Stack You Control with NVIDIA NemoClaw, blog technique NVIDIA, 30 octobre 2026](https://developer.nvidia.com/blog/build-specialized-agents-on-a-stack-you-control-with-nvidia-nemoclaw/)

## La refonte des abonnements avec agent cloud inclus

Nous Research a annoncé le 27 octobre la refonte des abonnements Hermes Agent. Chaque nouveau plan payant inclut désormais un agent cloud toujours allumé, sans laisser l'ordinateur portable ouvert. La consommation ne se compte plus en un bloc de crédits mensuel : elle passe sur des limites quotidiennes et hebdomadaires, avec une allocation mensuelle en plus. Teknium précise que tous les paliers payants du Nous Portal reçoivent une instance Hermes Agent et l'ordinateur qui va avec, connectable en un clic depuis Desktop et les applications de messagerie. iamlukethedev résume : hébergement d'un agent cloud inclus, limites quotidiennes et hebdomadaires, et des prix revus à la hausse. Les abonnés peuvent basculer vers les nouveaux plans depuis la page de facturation du portail.

> Sources : [@NousResearch, We've revamped Hermes Agent subscriptions, 27 octobre 2026](https://x.com/NousResearch/status/2115120531611787323), [@Teknium, All nous portal paid tier subs now come with a Hermes Agent instance, 27 octobre 2026](https://x.com/Teknium/status/2115128618372522495), [@iamlukethedev, Hermes Agent plans just changed, 28 octobre 2026](https://x.com/iamlukethedev/status/2115234013707460741) et [Nous Portal, page facturation](https://portal.nousresearch.com/billing)

## Un seul runtime de passerelle pour toutes les sessions locales

Le 1er novembre, iamlukethedev a fait le compte d'octobre : malgré sa propre conférence, Nous a fusionné 130 pull requests dans Hermes en octobre. Il en retient une de taille, la pull request #106742 signée teknium1 et fusionnée le 14 octobre : une seule passerelle possède désormais chaque session locale, du CLI classique à la TUI, au Desktop, à l'API, à ACP, aux bots et au cron, tous réunis dans un seul runtime. Avant elle, chaque surface lançait son propre agent sur le même state.db, et plusieurs pouvaient écrire la même conversation en même temps. Désormais, chaque profil a un processus de passerelle unique qui possède ses sessions, et toutes les surfaces s'y attachent comme client. Une conversation ouverte dans n'importe quelle surface est une seule conversation, avec une seule file FIFO, une seule file durable et un seul rédacteur.

> Sources : [@iamlukethedev, Last day of October, 1er novembre 2026](https://x.com/iamlukethedev/status/2116753893631864933) et [Unified gateway runtime, PR #106742, dépôt hermes-agent, fusionnée le 14 octobre 2026](https://github.com/NousResearch/hermes-agent/pull/106742)

## Advanced Delegation, deux modes pour les sous-agents

Nous Research a présenté le 26 octobre le plugin officiel Advanced Delegation, qui ajoute deux modes de délégation au delegate_task intégré. Les routes de modèles laissent l'agent choisir par tâche une route nommée que l'on définit (rapide, profonde, locale). Les routes de profils font tourner le sous-agent comme l'un de ses profils Hermes, avec le modèle, les identifiants, les skills et le SOUL.md de ce profil. Seuls le nom et la description d'une ligne arrivent au modèle : le fournisseur, l'identifiant du modèle, le point d'accès et la clé ne deviennent jamais des paramètres d'outil. iamlukethedev résume : pas besoin du gros modèle pour chaque sous-agent, une route rapide pour les recherches, une route profonde pour le dur, ou la main à un profil entier. Le plugin exige Hermes 0.22.5 au minimum et se configure via hermes delegation config.

> Sources : [@NousResearch, With the new Advanced Delegation modes plugin, 26 octobre 2026](https://x.com/NousResearch/status/2114753914939863260), [@iamlukethedev, Not every subagent needs the big model, 26 octobre 2026](https://x.com/iamlukethedev/status/2114793203564240951) et [advanced-delegation, catalogue de plugins Hermes Agent](https://hermes-agent.nousresearch.com/docs/plugins/advanced-delegation)

## GPT-6.1 Terra disponible dans Hermes Agent

Teknium a annoncé le 27 octobre que GPT-6.1 Terra, le modèle qu'OpenAI vient de lancer, est disponible dans Hermes Agent via le Nous Portal et OpenRouter. OpenAI le présente comme un modèle d'usage ordinateur rapide et moins cher : il lit ce qui est à l'écran, agit entre les applications, écrit naturellement et tient la journée de travail grâce à son efficacité.

> Sources : [@Teknium, 6.1 Terra now available in Hermes Agent, 27 octobre 2026](https://x.com/Teknium/status/2114920088357032109) et [@OpenAI, GPT-6.1 Terra: delivering fast and capable computer use, 26 octobre 2026](https://x.com/OpenAI/status/2114780711664398349)

## hermes webapp, Desktop dans le navigateur

tonysimons a annoncé le 26 octobre que la pull request de BearHuddleston est fusionnée : hermes webapp porte le vrai Hermes Desktop dans n'importe quel navigateur, depuis son propre hôte. Chat, fichiers, git, un terminal qui survit aux rafraîchissements et la connexion à distance. Teknium a relayé le lendemain en invitant à l'essayer tôt, en passant le canal de release sur main au lieu de stable.

> Sources : [@tonysimons, hermes webapp brings the REAL Hermes Desktop to ANY browser, 26 octobre 2026](https://x.com/tonysimons/status/2114598038568116579) et [@Teknium, Give it a try early by switching your release channel, 27 octobre 2026](https://x.com/Teknium/status/2114919004632764585)

## ElevenLabs SFX, des bruitages depuis Desktop

Teknium a présenté le 27 octobre le plugin officiel ElevenLabs SFX, qui poursuit la suite de capacités Game Dev Studio pour Hermes Agent. Il génère des effets sonores depuis Hermes Desktop, avec lecture en boucle, variations en un clic et une bibliothèque de tous les sons produits. Le plugin ajoute un unique outil, elevenlabs_sound_effect, qui transforme une description texte en fichier audio de 0,5 à 30 secondes, en boucle parfaite si demandé. Il exige la clé ELEVENLABS_API_KEY, la même que pour la voix ElevenLabs, et chaque génération est facturée par ElevenLabs, environ 10 crédits par seconde.

> Sources : [@Teknium, Introducing the ElevenLabs SFX plugin, 27 octobre 2026](https://x.com/Teknium/status/2115219694622040322), [@NousResearch, Generate SFX with ElevenLabs straight from Hermes Desktop, 27 octobre 2026](https://x.com/NousResearch/status/2115220372228612579) et [elevenlabs-sound-effects, catalogue de plugins Hermes Agent](https://hermes-agent.nousresearch.com/docs/plugins/elevenlabs-sound-effects)

## Licence

Sous licence CC BY 4.0. [hermes-agent-news-fr](https://github.com/t1t4nium/hermes-agent-news-fr)
