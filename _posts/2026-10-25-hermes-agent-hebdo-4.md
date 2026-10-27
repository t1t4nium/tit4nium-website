---
title: "Hermes Agent Hebdomadaire #4"
tags: [hermes-agent, news-digest]
---

Quatrième édition de l'hebdomadaire, qui reprend les actualités les plus marquantes de la semaine du lundi 19 au dimanche 25 octobre 2026. Au sommaire : la release stable v0.22.3 et son train de correctifs jusqu'à la v0.22.5, la démonstration de Hermes Agent qui clôt le keynote GTC Berlin de Jensen Huang, Herald, l'application Hermes Bots, sur iPhone et Android, le plugin Cua Spaces, le plugin Meshy avec son mois de Pro à un dollar, et les modèles Kimi K3.1 Pro et Beam 1.0 sur le Nous Portal.

## v0.22.3, une release stable qui regroupe 620 pull requests

Nous Research a publié le 21 octobre la release stable v0.22.3. C'est une release de correctifs qui rassemble les quelque 620 pull requests fusionnées depuis v0.22.2 dans une version stable pour le CLI et l'installateur, l'application du Microsoft Store, Docker et Hermes Cloud. Mesurée au commit 5b147ab036d, la fenêtre depuis v0.22.2 compte 2 911 commits sans fusion sur 4 206 fichiers modifiés, environ 620 pull requests fusionnées et 326 tickets fermés. Les notes listent, sans entrer dans le détail, ce qui a atterri dans la fenêtre : le CLI classique retrouve un agencement rafraîchi, les plugins déclarent des clients OAuth que Hermes connecte et rafraîchit, `hermes plugins update` propose toutes les mises à jour disponibles, un compte à rebours /loop s'affiche en direct dans le CLI et le TUI, le transfert des sujets privés Telegram devient opt-in, le catalogue des capacités fait son entrée, l'auto-prune des sessions revient en opt-in, et Nemotron 3.5 Bolt rejoint le runtime local. Les notes complètes et curées de cette fenêtre arriveront avec la v0.23.0.

> Sources : [Dépôt GitHub de Hermes Agent, Hermes Agent v0.22.3, 21 octobre 2026](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.3)

## v0.22.5, délégation branchable et import-agent

Teknium a publié le 22 octobre la release de correctifs v0.22.5, qui regroupe les 81 pull requests fusionnées depuis v0.22.4 dans une version stable pour la release GitHub, le Microsoft Store, Docker et Hermes Cloud. Deux changements ressortent : les backends de délégation deviennent branchables, les sous-agents se routent par carte de modèles ou par profil, changeable par session ; et `hermes import-agent` arrive, avec la migration OpenClaw. La release refait aussi la connexion Nous autour du device login simple, fait retenir à `hermes update` une release stable qu'il refuse au lieu de la proposer, prend en charge les plans à fenêtre d'usage, sort `hermes mcp serve` et le backend Singularity du coeur vers les plugins, et fait passer Desktop à Electron 44 et Pillow 13. Entre les deux, v0.22.4 du 21 octobre a surtout retiré les pastilles de suggestion du composeur de Desktop et ajouté bubblewrap, Singularity/Apptainer, mcp-serve, agent-importers, inbox et workflow-record au catalogue. Les notes complètes arriveront avec la v0.23.0.

> Sources : [Dépôt GitHub de Hermes Agent, Hermes Agent v0.22.5, 22 octobre 2026](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.5) et [Dépôt GitHub de Hermes Agent, Hermes Agent v0.22.4, 21 octobre 2026](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.4)

## La démonstration Hermes clôt le keynote GTC Berlin de Jensen Huang

Nous Research a signalé le 21 octobre que Jensen Huang a clos son keynote GTC Berlin 2026 par une démonstration de Hermes Agent. Il a introduit le sujet en disant que la façon de construire un agent est de demander à un agent de le construire, puis il a installé et configuré un Hermes personnalisé en une seule requête avant de s'en servir. tonbistudio salue la reconnaissance de Hermes par Jensen dans ce keynote et rappelle que l'open source est le seul moyen de vraiment posséder ses agents et de garder le contrôle des outils disponibles.

> Sources : [@NousResearch, Jensen closed his GTC Berlin 2026 keynote with this Hermes Agent demo, 21 octobre 2026](https://x.com/NousResearch/status/2113010017645244623) et [@tonbistudio, Incredible to see Hermes recognized by Jensen in this keynote, 22 octobre 2026](https://x.com/tonbistudio/status/2113102215028342998)

## Herald, l'application Hermes Bots, sur iPhone et Android

L'application Hermes Bots, baptisée Herald, a franchi toutes les étapes cette semaine. iamlukethedev l'a envoyée en review chez Apple le 21 octobre, après avoir reçu plus de 200 retours des testeurs. Le lendemain, elle passait en bêta publique sur TestFlight, puis elle arrivait sur Android le 23 octobre. La mise en place reste la même : lancer une commande sur son ordinateur, scanner le QR code, et les bots Hermes arrivent dans la poche. Herald comprend les notes vocales, les conversations de groupe, les approbations, un tableau Kanban, un écran pour les bots et l'Apple Watch.

> Sources : [@iamlukethedev, Herald is now in public beta on TestFlight, 22 octobre 2026](https://x.com/iamlukethedev/status/2113196811825664372) et [@iamlukethedev, Herald is on Android, 23 octobre 2026](https://x.com/iamlukethedev/status/2113434773901472088)

## Cua Spaces, une machine isolée pour Hermes

Nous Research a annoncé le 22 octobre le plugin Cua Spaces. Il donne à Hermes son propre espace Linux, macOS ou Windows sur le matériel déjà possédé, et toute l'équipe peut l'ouvrir, regarder en direct, intervenir et rendre la main pendant que Hermes continue. iamlukethedev précise que le plugin déplace le terminal, les fichiers et l'exécution du code de Hermes vers une machine isolée, tandis que Hermes reste sur l'ordinateur. Une seule ligne de configuration suffit, `hermes config set terminal.backend cua`, et à la fin de la tâche l'espace est supprimé.

> Sources : [@NousResearch, Your team and your Hermes can now share a computer, 22 octobre 2026](https://x.com/NousResearch/status/2113391397760041329), [@iamlukethedev, The Cua Spaces plugin moves Hermes's terminal, files and code runs, 22 octobre 2026](https://x.com/iamlukethedev/status/2113400693642150221) et [@witcheer, when a task needs a computer, 23 octobre 2026](https://x.com/witcheer/status/2113484931024245176)

## Meshy, le plugin 3D officiel et un mois de Pro à un dollar

Nous Research a annoncé le 22 octobre le plugin officiel Meshy pour Hermes Agent. On demande un coffre au trésor de 70 millions de polygones pour Godot, ou on transforme la photo d'une tasse en modèle à imprimer, et l'agent fait le travail via le serveur MCP de Meshy, avec les modèles rendus dans la conversation. Le lendemain, Meshy offrait aux utilisateurs de Hermes un mois de plan Pro, accès API et 1 000 crédits compris, pour un dollar, alors que ce plan est normalement facturé 20 dollars par mois. Le plugin permet de transformer un prompt ou une photo en modèle 3D, de le texturer, de lui ajouter un rig, de l'animer et de le préparer à l'impression.

> Sources : [@NousResearch, Hermes Agent now has an official plugin for MeshyAI, 22 octobre 2026](https://x.com/NousResearch/status/2113077994315034967), [@NousResearch, Meshy is offering Hermes users a month of Pro for $1, 22 octobre 2026](https://x.com/NousResearch/status/2113375941431009526) et [Meshy, grille tarifaire](https://www.meshy.ai/pricing)

## Kimi K3.1 Pro sur le Nous Portal

witcheer a signalé le 24 octobre que Kimi K3.1 Pro est déjà sur le Nous Portal, à une commande `hermes model` dans Hermes Agent. Il cite Artificial Analysis, qui place le modèle en quatrième position de son Intelligence Index avec un score de 55, et relève de nets gains en performance agentique. Le modèle de raisonnement de Kimi Moonshot gagne 11 points sur Kimi K3 et sera le modèle open weights en tête une fois ses poids publiés.

> Sources : [@witcheer, Kimi K3.1 Pro is already on Nous Portal, 24 octobre 2026](https://x.com/witcheer/status/2113865988693508269) et [@ArtificialAnlys, Kimi K3.1 Pro launches at 4th on the Artificial Analysis Intelligence Index, 23 octobre 2026](https://x.com/ArtificialAnlys/status/2113688083145314416)

## Beam 1.0, gratuit sur Nous Portal pendant une semaine

witcheer a annoncé le 20 octobre Beam 1.0 de Reflection, gratuit sur Nous Portal pendant une semaine. Le modèle est open-weight, 501 milliards de paramètres au total dont 23 milliards actifs par jeton, avec un contexte de 262 000 jetons sur la version gratuite, l'appel d'outils intégré et le raisonnement réglable de bas à haut. Pour le lancer : `hermes chat --provider nous -m reflection/beam-1.0-501b-a23b:free`.

> Sources : [@witcheer, Beam 1.0 from Reflection for free on Nous Portal!, 20 octobre 2026](https://x.com/witcheer/status/2112541414147903742) et [@yeahfortommy, Beam is FREE in Nous Portal for one week, 20 octobre 2026](https://x.com/yeahfortommy/status/2112536403200323783)

## Licence

Sous licence CC BY 4.0. [hermes-agent-news-fr](https://github.com/t1t4nium/hermes-agent-news-fr)
