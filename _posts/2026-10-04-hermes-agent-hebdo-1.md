---
title: "Hermes Agent Hebdomadaire #1"
tags: [hermes-agent, news-digest]
---

Première édition de l'hebdomadaire, qui reprend les actualités les plus marquantes de la semaine du lundi 28 septembre au dimanche 4 octobre 2026. Au sommaire : le partenariat avec OpenAI qui amène Sign in with ChatGPT sur Nous Portal, la plateforme NVIDIA Open Agent Safety avec NemoClaw, Hermes Desktop dans le navigateur, l'arrivée de Claude Sonnet 5.5, les packs de langue par plugins, le traçage des exécutions avec NeMo Relay, l'annonce de NousCon 2026 et le SDK Hermes Gadget pour appareils ESP32.

## Sign in with ChatGPT arrive sur Nous Portal

Nous Research a annoncé le 29 septembre un partenariat avec OpenAI pour intégrer Sign in with ChatGPT à Nous Portal. On peut désormais se connecter au portail avec son compte ChatGPT et utiliser son abonnement dans Hermes Agent, avec une visibilité et des contrôles complets depuis les réglages de ChatGPT. La page du portail précise qu'aucun abonnement Nous payant n'est requis : connecter un compte ChatGPT éligible suffit pour bénéficier de l'inférence prise en charge. witcheer résume l'intérêt d'un seul sign-in : l'abonnement ChatGPT déjà payé devient celui de l'agent, qui répond de partout, exécute des tâches planifiées en notre absence et retient notre façon de travailler. La connexion reste distincte de la connexion Codex de `hermes model`, qui associe chaque installation à un code d'appareil et garde la session sur la machine.

> Sources : [@NousResearch, We've partnered with @OpenAI, 29 septembre 2026](https://x.com/NousResearch/status/2104996715501904173), [@witcheer, the ChatGPT plan you already pay for, 29 septembre 2026](https://x.com/witcheer/status/2105000476097884288) et [Nous Portal](https://portal.nousresearch.com/)

## NVIDIA Open Agent Safety, avec NemoClaw pour les agents Hermes

Jensen Huang a annoncé le 28 septembre la plateforme NVIDIA Open Agent Safety, présentée avec plus de cent partenaires industriels. Elle réunit OpenShell et Sentry. OpenShell applique les principes d'isolation d'un navigateur web au déroulement d'un agent : chaque session est mise en sandbox, chaque ressource est mesurée et chaque permission est vérifiée par l'exécution avant d'agir. Sentry est une conception de référence de surveillance hors bande qui tourne sur les DPU BlueField-4 et peut mettre en quarantaine un agent qui tente de sortir des limites définies, en quelques millisecondes. Le lien avec l'écosystème Hermes passe par NemoClaw, la pile de référence open source de NVIDIA pour faire tourner des agents dans les sandboxes OpenShell. Elle propose d'exécuter des agents Hermes en combinant la boucle compétences et mémoire de Nous Research avec les contrôles d'exécution d'OpenShell.

> Sources : [@JensenHuang, NVIDIA Open Agent Safety Platform, 28 septembre 2026](https://x.com/JensenHuang/status/2104499465055023424), [Building More Secure Agent Systems in the Open, NVIDIA Developer Forums, 28 septembre 2026](https://forums.developer.nvidia.com/t/building-more-secure-agent-systems-in-the-open/379140) et [NVIDIA NemoClaw](https://www.nvidia.com/en-us/ai/nemoclaw/)

## Hermes Desktop dans le navigateur avec hermes webapp

Bear a présenté le 27 septembre sa pull request mise à jour : `hermes webapp` sert la véritable application Desktop depuis l'hôte Hermes, avec la discussion, les fichiers, Git, un terminal qui survit à un rafraîchissement et la connexion pour les liaisons distantes. Teknium a confirmé le 28 septembre l'arrivée prochaine pour tous. La pull request 93508 ajoute un mode hébergé dans le navigateur et authentifié pour le vrai moteur de rendu de Hermes Desktop. Ce n'est pas le tableau de bord web : il sert l'espace de travail Desktop centré sur la discussion. Les capacités natives d'Electron sont absentes ou échouent explicitement plutôt que d'être imitées, et les liaisons non locales restent fermées par défaut derrière l'authentification configurée.

> Sources : [@BearHuddleston, Hermes Desktop, in any browser, 27 septembre 2026](https://x.com/BearHuddleston/status/2104109388780744775), [@Teknium, Coming soon to all!, 28 septembre 2026](https://x.com/Teknium/status/2104522071757967852) et [feat(webapp): serve Desktop renderer in browsers, PR #93508](https://github.com/NousResearch/hermes-agent/pull/93508)

## Claude Sonnet 5.5 disponible dans Hermes Agent

yeahfortommy a annoncé le 28 septembre que Claude Sonnet 5.5 est en ligne dans Hermes Agent. L'arrivée figure aussi dans la liste des pull requests fusionnées le 28 septembre, qui ajoute anthropic/claude-sonnet-5.5 aux catalogues OpenRouter et Nous Portal. witcheer a invité le lendemain à donner un retour précoce sur le modèle dans Hermes Agent.

> Sources : [@yeahfortommy, Claude Sonnet 5.5 is live in Hermes Agent, 28 septembre 2026](https://x.com/yeahfortommy/status/2104700597530214739) et [@witcheer, give us your early feedback on Sonnet 5.5, 29 septembre 2026](https://x.com/witcheer/status/2104805758428733793)

## Des packs de langue pour toutes les surfaces via plugins

Teknium a annoncé le 1er octobre qu'on peut désormais ajouter des langues entières sur toutes les surfaces de Hermes via un plugin, en plus des seize déjà prises en charge. La mécanique passe par la déclaration `provides_locales` dans le fichier `plugin.yaml` d'un plugin. Un pack peut ajouter une langue d'interface ou réécrire la formulation d'une langue existante pour toutes les surfaces à la fois : le cœur Python, l'interface TUI et l'application Desktop. Aucun code Python n'est requis, il suffit de déclarer la langue et de fournir les fichiers YAML correspondants dans le dossier `locales/` du plugin. Les catalogues sont superposables et partiels : un pack ne traduit que ce qu'il fournit, le reste retombe sur le catalogue de base ou sur l'anglais. witcheer résume l'annonce d'une phrase : l'agent parle maintenant n'importe quelle langue.

> Sources : [@Teknium, You can now add full new languages across all of Hermes' surfaces via Plugin, 1er octobre 2026](https://x.com/Teknium/status/2105520243481411791), [@witcheer, your Hermes Agent now speaks any language, 1er octobre 2026](https://x.com/witcheer/status/2105525651729940685) et [Build a Hermes Plugin, Ship a language pack, documentation Hermes Agent](https://hermes-agent.nousresearch.com/docs/developer-guide/plugins)

## Tracer les exécutions de Hermes Agent avec NeMo Relay

NVIDIA et Nous Research ont publié le 30 septembre un tutoriel commun qui montre comment tracer et évaluer les exécutions de Hermes Agent avec NeMo Relay. Hermes Agent intègre NeMo Relay nativement et représente ses sessions, tours, appels de modèle et appels d'outils dans la hiérarchie de portées de NeMo Relay. Une exécution produit trois représentations : le flux ATOF, journal JSONL des débuts et fins de portées avec identifiants et horodatages ; la trajectoire ATIF, enregistrement JSON pas à pas des interactions, appels d'outils et observations ; et des spans OpenTelemetry étiquetés OpenInference, à ouvrir dans un outil compatible comme Arize Phoenix. Les auteurs prolongent avec une étude de cas Hermes ToolPerf qui compare, sur 108 exécutions, une révision de base et une révision corrigée. witcheer résume le gain : une exécution de Hermes Agent laisse une trace complète, chaque appel de modèle, appel d'outil, nouvelle tentative et erreur étant horodaté.

> Sources : [Tracing Agent Harness Behavior with NVIDIA NeMo Relay, blog technique NVIDIA, 30 septembre 2026](https://developer.nvidia.com/blog/tracing-agent-harness-behavior-with-nvidia-nemo-relay/), [@NVIDIAAI, We worked with @NousResearch/@Teknium, 30 septembre 2026](https://x.com/NVIDIAAI/status/2105330651654508734) et [@witcheer, with NeMo Relay, a Hermes Agent run leaves a full trace, 30 septembre 2026](https://x.com/witcheer/status/2105333798661742882)

## NousCon 2026, le 30 octobre à New York

Nous Research a annoncé le 29 septembre la tenue de NousCon 2026 le vendredi 30 octobre à New York, de 18 h à minuit. Au programme, découvrir l'avenir de Hermes Agent, rencontrer l'équipe Nous Research et toucher du silicium, sous le mot d'ordre « technological optimism in times of great worry ». L'inscription est soumise à l'approbation de l'hôte et l'adresse exacte n'est communiquée qu'après inscription.

> Sources : [@NousResearch, NousCon 2026, October 30th, NYC, 29 septembre 2026](https://x.com/NousResearch/status/2105043777706754213) et [NousCon 2026, page Luma](https://luma.com/y0y9ngkm)

## Hermes Gadget, un SDK ouvert pour appareils vocaux ESP32

adolandev a présenté le 4 octobre Hermes Gadget, un SDK ouvert pour petits appareils qui dialoguent avec son propre Hermes. Le principe tient dans son slogan : maintenir un bouton, poser sa question, écouter la réponse. On parle, Hermes écoute, réfléchit et répond à voix haute, pendant que l'écran montre ce qu'il est en train de faire. Le dépôt hermes-gadget-sdk, publié en version v0.1.0 le 4 octobre, détaille le projet : un cœur d'appareil portable en C++17 avec un portage firmware ESP32 et un simulateur de bureau, un plugin de plateforme Hermes, le protocole de communication, l'outillage et la documentation. L'appareil se couple comme un téléphone, il affiche un code que l'on approuve sur l'hôte Hermes, puis s'authentifie avec sa propre clé. Le plugin s'installe via `hermes plugins install` et s'intègre à `hermes gateway setup`. Le projet se présente comme non officiel et non affilié à Nous Research. Teknium a salué la sortie d'un sobre « We got ESP32 at home ».

> Sources : [@adolandev, Hermes Gadget is an open SDK for a small device, 4 octobre 2026](https://x.com/adolandev/status/2106624035090059630), [@Teknium, We got ESP32 at home, 4 octobre 2026](https://x.com/Teknium/status/2106632146484162773) et [Adolanium/hermes-gadget-sdk, dépôt GitHub](https://github.com/Adolanium/hermes-gadget-sdk)

## Licence

Sous licence CC BY 4.0. [hermes-agent-news-fr](https://github.com/t1t4nium/hermes-agent-news-fr)
