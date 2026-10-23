---
title: "Hermes Agent Hebdomadaire #3"
tags: [hermes-agent, news-digest]
---

Troisième édition de l'hebdomadaire, qui reprend les actualités les plus marquantes de la semaine du lundi 12 au dimanche 18 octobre 2026. Au sommaire : la release v0.22.0, la plus grande fenêtre jamais livrée, la correction v0.22.2 qui rattrape un v0.22.1 parti du mauvais commit, le partenariat de lancement avec NVIDIA autour de RTX Spark, le score de Nemotron 3.5 Super VL sur Hermes Bench, le plugin officiel REA, le coup d'envoi de l'application mobile, la skill officielle Anatomy et le plugin phone-harness.

## v0.22.0, la release du seuil

Nous Research a publié la release v0.22.0, datée du 13 octobre 2026 et baptisée The Threshold Release. C'est la plus grande fenêtre livrée par Hermes, environ 2,5 fois le cycle v0.21.0 : quelque 24 200 commits, environ 6 080 pull requests fusionnées, environ 15 600 fichiers modifiés, environ 7 180 issues fermées et environ 2 520 contributeurs. Elle rassemble et documente entièrement les releases de correctifs v0.21.1 à v0.21.7. Les temps forts :

- Un premier lancement qui se règle tout seul : une installation desktop neuve ouvre un court chat de configuration, carte par carte, qui tourne sur un modèle d'essai gratuit (nous/welcome, une fois par utilisateur du système), sans clé d'API.
- Des connecteurs pour agir dans ses applications : Gmail, Linear et Notion passent par la passerelle d'outils Nous, avec une identité gratuite réservée aux connecteurs et plusieurs comptes nommés par application.
- Des modèles locaux en un clic : Hermes installe et entretient llama.cpp pour CPU, CUDA, Metal, Vulkan ou ROCm, note chaque modèle du catalogue selon le GPU et la RAM, et propose le plus lourd qui tient sur la machine.
- Un catalogue de 600 plugins relus, chacun épinglé à un commit vérifié, avec le déplacement des fournisseurs de mémoire, de Home Assistant, Spotify et Langfuse vers le catalogue.
- La vague de modèles Claude 5.5 et GPT-6 : Claude Fable 5.1, Opus, Sonnet et Haiku 5.5, GPT-6 Astra, Sol et Luna, GPT-6.1 Sol et Gemini 4 Argon, sur Nous Portal, OpenRouter et les routes natives.
- La connexion aux sites avec son gestionnaire de mots de passe : 1Password, Bitwarden et le coffre chiffré de Hermes, sans que le modèle voie jamais le mot de passe.
- Voir et piloter ses sous-agents en direct, avec leur tâche, leur temps écoulé et leur transcript, plus des boutons Steer et Stop.
- Plus léger en tout point : le code passe d'environ 1,06 million à 698 000 lignes (moins 34 %), et environ 2 100 jetons quittent le prompt fixe.

> Sources : [Hermes Agent v0.22.0, release GitHub NousResearch, 13 octobre 2026](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.0)

## v0.22.2, la release que v0.22.1 devait être

Nous Research a publié v0.22.2 le 15 octobre 2026. v0.22.1 était parti du mauvais commit : il embarquait un travail de passerelle pas encore prêt, et l'application Microsoft Store pouvait rester bloquée sur `Connecting.`. v0.22.2 est donc la release que v0.22.1 devait être. Un défaut connu subsiste : les sessions qui ont tourné sous la passerelle 0.22.1 ne peuvent pas être supprimées en 0.22.2.

Deux correctifs sont mis en avant : la passerelle redémarre après un reboot, car au redémarrage Linux peut attribuer un PID précoce à un processus sans rapport que la passerelle confondait avec une passerelle déjà active ; et les longs tours en modèle local survivent sur portable, car les minuteries de blocage sautent le temps où la machine dormait, un serveur local récupéré reçoit une nouvelle tentative au lieu d'un disjoncteur, et la compression ne dépasse plus son délai pendant que le serveur lit une longue conversation.

La release embarque aussi, depuis v0.22.0 : le bundle Microsoft Store scindé dans sa propre voie de build, Nemotron 3.5 Super VL avec des paramètres par défaut dans la liste NVIDIA NIM, deux packs de langue (coréen et portugais brésilien) et plusieurs plugins au catalogue.

> Sources : [Hermes Agent v0.22.2, release GitHub NousResearch, 15 octobre 2026](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.2)

## Hermes Agent, partenaire de lancement de RTX Spark

Nous Research a annoncé le 16 octobre que Hermes Agent est partenaire de lancement de RTX Spark, la gamme de NVIDIA pour la nouvelle génération de portables. Sur ces machines, on choisit Hermes dans le flux d'installation des agents intégré à Windows, on suit le nouvel onboarding génératif, et l'agent tourne en local sur le portable ou dans le cloud. witcheer précise que, sur les nouveaux portables RTX Spark, Hermes Agent est déjà présent dans l'installation des agents sous Windows.

> Sources : [@NousResearch, Hermes Agent is a launch partner for nvidia's RTX Spark, 16 octobre 2026](https://x.com/NousResearch/status/2111130297907470840) et [@witcheer, RTX Spark laptops, 16 octobre 2026](https://x.com/witcheer/status/2111151153136418945)

## Nemotron 3.5 Super VL noté 63,44 sur Hermes Bench

Nous Research a déclaré le 15 octobre que Hermes Agent est le meilleur endroit pour utiliser les nouveaux modèles Nemotron 3.5 Super VL et Bolt de NVIDIA. D'après Nous Research, NVIDIA a mesuré Super VL sur Hermes Bench avec un score de 63,44 et, face à des modèles locaux comparables, le modèle affiche jusqu'à 5 fois le débit en jetons.

NVIDIA décrit Super VL comme un modèle ouvert qui combine raisonnement et usage d'outils avec la compréhension du texte, des images, des documents et de la vidéo, pour des agents au long cours : 120 milliards de paramètres au total, dont 12 milliards actifs.

> Sources : [@NousResearch, Hermes Agent is the best place to use the new NVIDIA Nemotron 3.5 Super VL and Bolt models, 15 octobre 2026](https://x.com/NousResearch/status/2110786024024445201) et [@NVIDIAAI, Meet NVIDIA Nemotron 3.5 Super VL, 15 octobre 2026](https://x.com/NVIDIAAI/status/2110749836450713896)

## REA, le plugin officiel pour rétro-ingénierer des programmes

Teknium a annoncé le 15 octobre le plugin officiel REA (Reverse Engineer Anything). L'installation tient en deux commandes, `hermes plugins install rea` puis `hermes plugins enable rea`, qui livrent le serveur MCP REA plus une skill qui en détaille l'usage. Le plugin inspecte des exécutables et bibliothèques natifs, des assemblages .NET, des applications Electron et JavaScript, des paquets Android, des images de firmware, des captures réseau et navigateur, et le comportement en cours d'exécution de programmes. REA renvoie des preuves structurées, code décompilé, graphes d'appels, graphes d'application et captures, que Hermes explique ou réutilise comme base.

Le paquet, signé morluto (licence MIT), épingle rea-agents@6.4.0 et expose environ 170 outils. La décompilation native exige un moteur à fournir soi-même, Ghidra, Hopper, IDA, JADX ou Binwalk, que REA n'installe pas. Un budget d'appel par serveur propre à REA est prévu avec Hermes v0.23.0.

> Sources : [@Teknium, Check out the new official plugin I created for Hermes Agent, 15 octobre 2026](https://x.com/Teknium/status/2110736682207355062), [@witcheer, point Hermes Agent at an app and ask how it works, 15 octobre 2026](https://x.com/witcheer/status/2110740283805581507) et [rea, catalogue de plugins Hermes Agent](https://hermes-agent.nousresearch.com/docs/plugins/rea)

## Le chantier de l'application mobile démarre

fl_rn_st a annoncé le 13 octobre rejoindre Nous Research pour construire le mobile, et Teknium lui a répondu en lançant le coup d'envoi de l'application mobile. La fiche de poste Software Engineer, Mobile décrit un poste à distance qui possède l'expérience téléphone de bout en bout : les applications iOS et Android natives, la couche cross-platform qui les sous-tend, et le backend qui rend l'agent rapide dans la poche. L'offre demande de livrer des applications iOS ou Android en production, en Swift ou Kotlin, et d'être à l'aise avec React Native.

> Sources : [@fl_rn_st, I'm joining @NousResearch to build mobile, 13 octobre 2026](https://x.com/fl_rn_st/status/2110120909566853515), [@Teknium, Welcome Florian, the mobile app kickoff begins, 13 octobre 2026](https://x.com/Teknium/status/2110143163939877187) et [Software Engineer, Mobile, nousresearch.com/careers](https://nousresearch.com/careers/software-engineer-mobile)

## Anatomy, une skill officielle pour dessiner des machines en SVG

Teknium a annoncé le 11 octobre qu'Anatomy devient une skill optionnelle officiellement intégrée à Hermes Agent. La skill génère des illustrations isométriques détaillées et interactives de machines et de systèmes complexes : des SVG soignés, avec des shaders WebGL et des effets 3D en option. On la trouve parmi les skills optionnelles du catalogue, ou on l'installe avec `hermes skills install official/creative/anatomy`.

C'est le portage sous licence MIT du projet wheresryan22/anatomy, signé Ryan, dont le dépôt d'origine compte 5 000 étoiles, 370 forks et 87 commits. iamlukethedev situe l'ajout dans la chaîne de production : après la recherche, l'architecture, le code et les tests vient maintenant le prototypage.

> Sources : [@Teknium, Anatomy skill is now an officially integrated optional skill in Hermes Agent, 11 octobre 2026](https://x.com/Teknium/status/2109351160843035106), [@iamlukethedev, Turn ideas into wireframes and interactive prototypes, 11 octobre 2026](https://x.com/iamlukethedev/status/2109367161487823117) et [wheresryan22/anatomy, dépôt GitHub](https://github.com/wheresryan22/anatomy)

## phone-harness, la main sur un vrai téléphone

witcheer a présenté le 15 octobre phone-harness, un plugin du catalogue qui donne à Hermes Agent le contrôle d'un vrai téléphone en une seule installation. L'agent voit l'écran, tape, glisse et saisit du texte, ce qui fonctionne avec les applications qui n'ont ni API ni plugin propre.

Le plugin, maintenu par ShawnPana, n'expose qu'un outil, phone_exec. Le modèle écrit un court script Python, le plugin l'exécute sur le téléphone et renvoie ce qu'il a affiché. Chaque appel demande une approbation avant de s'exécuter, et l'auto-exécution par classificateur est désactivée par défaut. L'agent ne saisit jamais de mot de passe, de code PIN ni de code 2FA. L'installation passe par `hermes plugins install ShawnPana/phone-harness/integrations/hermes` ; iPhone demande les droits Accessibilité et Enregistrement d'écran, Android un adb.

> Sources : [@witcheer, Hermes Agent can use your real phone the way you do, 15 octobre 2026](https://x.com/witcheer/status/2110664477301743817) et [phone-harness, catalogue de plugins Hermes Agent](https://hermes-agent.nousresearch.com/docs/plugins/phone-harness)

## Licence

Sous licence CC BY 4.0. [hermes-agent-news-fr](https://github.com/t1t4nium/hermes-agent-news-fr)
