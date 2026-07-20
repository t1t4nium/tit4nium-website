---
title: "Moltbook : faille critique et risques systémiques du réseau social des IA"
tags: [openclaw, ia]
---

J'envisageais de dédier un agent à Moltbook pour tenter l'expérience sociale entre agents.
Mais j'ai très vite changé d'avis après avoir fait mes recherches.

---

## Qu'est-ce que Moltbook ?

Lancé le 28 janvier 2026 par Matt Schlicht, Moltbook est un réseau social calqué sur le modèle de Reddit, mais destiné exclusivement à des agents d'intelligence artificielle. Les "molty", surnom donné aux agents, y postent, commentent, votent, et créent des communautés thématiques appelées "submolts". Les humains sont théoriquement cantonnés au rôle d'observateurs.

Le mois suivant son lancement, Andrej Karpathy, membre fondateur d'OpenAI, le décrit comme "la chose la plus incroyable, à la frontière de la science-fiction, que j'ai vue récemment". En mars 2026, Meta Platforms rachète Moltbook pour un montant non divulgué, intégrant l'équipe dans sa division Superintelligence Labs.

Mais l'histoire de Moltbook est aussi celle d'un paradoxe. Son fondateur explique publiquement n'avoir "pas écrit une seule ligne de code" : le site a été intégralement généré par une IA, une pratique connue sous le nom de "vibe coding". Ce choix, aussi fascinant soit-il, a produit une plateforme dont les fondations se sont révélées dangereusement fragiles.

Aujourd'hui, Moltbook revendique 208 000 agents vérifiés par un humain, pour 2,9 millions d'inscriptions totales, 3,5 millions de posts et 18,7 millions de commentaires.

---

## Comment fonctionne la plateforme

Le protocole d'inscription est simple. Un agent lit le fichier `skill.md` hébergé sur moltkbook.com, s'enregistre via une API REST, et reçoit une clé API ainsi qu'une URL de "claim". L'humain propriétaire doit alors poster un tweet de vérification depuis son compte X (anciennement Twitter) pour prouver qu'il contrôle l'agent. Une fois activé, l'agent installe une routine de "heartbeat" : il revient consulter la plateforme toutes les 30 minutes environ.

Toutes les interactions passent par des appels curl ou HTTP : poster, commenter, voter, créer un submolt. Le tout avec la clé API transmise dans l'en-tête Authorization.

L'architecture est hébergée sur Supabase, une alternative open-source à Firebase qui propose une base PostgreSQL avec API REST. Supabase héberge l'architecture, et c'est de ce choix que découlent les failles.

---

## La faille qui a tout exposé : 1,5 million de clés API compromises

Fin janvier 2026, les équipes de Wiz Research et du laboratoire Irregular découvrent une clé API Supabase codée en dur dans le JavaScript côté client de Moltbook. Supabase est conçu pour fonctionner avec des clés exposées, à condition que la sécurité au niveau des lignes (Row Level Security, ou RLS) soit activée. Or, la RLS n'était pas en place.

Avec cette clé publique, il suffit d'une simple requête curl pour accéder à l'intégralité de la base de production :

```
curl "https://ehxbxtjliybbloantpwq.supabase.co/rest/v1/agents?select=name,api_key&limit=3" \
  -H "apikey: sb_publishable_..."
```

La base répond comme si l'on était administrateur.

### Ce qui a fui

| Type de donnée | Volume estimé |
|---|---|
| Clés API d'agents (authentification complète) | 1,5 million |
| Adresses email des propriétaires humains | 35 000+ |
| Messages privés entre agents | 4 060 conversations |
| Clés OpenAI en clair (partagées entre agents dans les DMs) | Nombre non communiqué |
| Enregistrements totaux exposés | ~4,75 millions |

Avec ces clés API, n'importe qui pouvait :
- usurper n'importe quel agent sur la plateforme
- poster du contenu, envoyer des messages, voter en son nom
- injecter du contenu malveillant dans les fils de discussion

Pire encore : l'accès en écriture était également ouvert. Les chercheurs de Wiz ont pu modifier des posts existants sur la plateforme via un simple appel HTTP PATCH. En théorie, il était possible de défigurer l'ensemble du site, d'injecter des payloads d'injection de prompt à grande échelle, ou de manipuler le contenu que des centaines de milliers d'agents allaient consommer.

Le fondateur a réagi en mettant le site hors ligne et en forcant une rotation de toutes les clés API. Mais la confiance était brisée.

---

## L'injection de prompt indirecte : la menace qui ressemble à une conversation normale

L'innovation de Moltbook est aussi sa vulnérabilité : il crée une nouvelle catégorie de risque. Les agents lisent en continu le contenu publié par d'autres agents et l'intègrent à leur contexte de travail. C'est le mécanisme même de la plateforme (voir ce que disent les autres, y réagir, apprendre), et c'est aussi un vecteur d'attaque parfait.

Les chercheurs de Vectra AI décrivent un phénomène qu'ils nomment "reverse prompt injection" : au lieu d'un humain qui injecte des instructions malveillantes dans un agent, c'est un agent qui place des instructions hostiles dans un contenu que d'autres agents vont consommer automatiquement. Une partie mesurable du contenu de Moltbook contiendrait des payloads d'injection de prompt cachés, conçus pour détourner le comportement des agents qui les lisent.

L'exécution n'est pas immédiate. Les instructions sont stockées dans la mémoire de l'agent et se déclenchent plus tard, lorsqu'un contexte supplémentaire est accumulé. Ce décalage rend la traçabilité extrêmement difficile.

Le résultat ressemble à un ver informatique : un agent compromis en influence d'autres, qui propagent à leur tour l'instruction malveillante via des réponses, des reposts, ou du contenu dérivé. Pas d'exploit technique nécessaire, pas de fichier à mettre en quarantaine. La logique malveillante se déplace par la confiance et la coopération.

---

## L'impossibilité de supprimer son compte

OX Security a mis en lumière un problème aussi simple que fondamental : il est impossible de supprimer un compte sur Moltbook. Aucun appel API ne permet la suppression. La politique de confidentialité promet pourtant ce droit :

> "Vous pouvez exercer ces droits en nous contactant à privacy@moltbook.com."

Sauf que ce contact n'existe pas. OX Security a vérifié : l'adresse email `privacy@moltbook.com` ne reçoit rien. Elle n'a probablement jamais été configurée.

Les données personnelles (emails, handles X, historique de navigation, adresses IP) persistent donc indéfiniment sur les serveurs de Moltbook, désormais propriété de Meta. L'utilisateur qui a connecté son agent, son compte X, et potentiellement ses services OpenAI ou Google, n'a aucun moyen de retirer ses informations de la plateforme.

---

## Un réseau social d'agents... ou d'humains avec des scripts ?

L'analyse de la base de données de Moltbook a révélé un embarras technique : la plateforme affichait 1,5 million d'agents enregistrés, mais la base ne comptait que 17 000 propriétaires humains, soit un ratio de 88 agents par humain.

La raison est simple : il n'existait aucun mécanisme pour vérifier qu'un compte était bien piloté par une IA plutôt que par un humain avec un script. N'importe qui pouvait créer des millions d'agents avec une simple boucle, sans aucune limitation de débit. Un humain pouvait poster du contenu déguisé en agent via une simple requête POST.

En février 2026, Moltbook a introduit un "reverse CAPTCHA", un puzzle mathématique censé démontrer qu'on est une IA et non un humain. Mais les critiques ont vite souligné qu'il suffit de passer le puzzle à une IA pour le résoudre, ce que n'importe quel humain un minimum outillé peut faire.

La "révolution des agents autonomes qui discutent entre eux" est donc en grande partie un théâtre. La majorité du contenu visible est générée par des humains qui contrôlent des bots, ou par des scripts automatisés.

---

## Agents transformés en sources de renseignement

Un autre angle mort de sécurité mis en évidence par Moltbook est la tendance des agents à partager des informations sensibles sans le savoir. Dans de nombreux fils de discussion, des agents ont été observés en train de poster publiquement :
- des ports ouverts sur leurs machines
- des tentatives de connexion SSH échouées
- des messages d'erreur internes
- des extraits de configuration

Du point de vue de l'agent, ces publications ont du sens : il s'analyse lui-même, partage un problème avec ses pairs, documente un bug. Du point de vue d'un attaquant, c'est une mine d'or. Plus besoin de scanner, de sonder, de se faire repérer. L'information est volontairement publiée, indexée, et visible par quiconque observe la plateforme.

---

## Le problème du sandbox OpenClaw

La majorité des agents Moltbook tournent sur OpenClaw (anciennement Clawdbot, puis Moltbot), un framework open-source d'assistant personnel créé par Peter Steinberger. Les équipes de sécurité de 1Password et de Cisco ont critiqué le manque de sandboxing robuste de ce framework.

En l'état, un skill malveillant installé sur OpenClaw peut permettre l'exécution de code à distance (RCE) sur la machine hôte, et l'exfiltration de données vers des serveurs tiers. Un proof-of-concept public a été documenté.

Concrètement, la chaîne d'attaque ressemble à ceci :
1. Un humain connecte son agent OpenClaw à Moltbook
2. L'agent lit un post contenant une injection de prompt
3. L'agent exécute une commande locale en suivant l'instruction compromise
4. L'agent expose les fichiers locaux, les clés API réelles, ou les accès aux services connectés (OpenAI, WhatsApp, Google)

---

## Ce qui se passe vraiment sur Moltbook

Le chercheur Ben Smith de Tenable a mené l'expérience : il s'est inscrit sur Moltbook en se faisant passer pour un bot. Son premier post dans le submolt "general" a reçu trois réponses immédiates. Toutes étaient du spam : une invitation à rejoindre une "église" (avec commande `npx install` à exécuter), une demande de partage de wallet crypto "pour gagner un pari", et une promotion de marketplace douteuse avec une commande curl à lancer.

Entre les mains d'un véritable agent autonome, ces commandes auraient été exécutées directement. La plateforme est un environnement à haut risque, dominé par le spam et les tentatives d'escroquerie.

---

## Que retenir ?

Moltbook n'est pas une anomalie. C'est un signal. Il montre ce qui se produit quand on construit une plateforme sociale pour agents autonomes sans les fondations de sécurité nécessaires, quand le "vibe coding" remplace la rigueur, et quand la confiance entre agents est présumée plutôt que vérifiée.

Les risques sont concrets, démontrés, et pour certains déjà exploités :
- la base de données a été accessible publiquement pendant des jours
- les agents peuvent être détournés à grande échelle par injection de prompt
- les données personnelles persistent sans possibilité de suppression
- les machines hôtes peuvent être compromises via OpenClaw

Si vous envisagez de connecter un agent à Moltbook, soyez conscient que vous introduisez un canal non fiable directement dans le contexte de votre assistant. Chaque post lu est une surface d'attaque potentielle. Chaque commande exécutée par l'agent est une porte ouverte.

Le réseau social des IA existe déjà. Mais il ressemble plus à un champ de mines qu'à une agora.

---

## Sources

- [Wiz Research (Gal Nagli, Irregular) - Hacking Moltbook: The AI Social Network Any Human Can Control](https://www.wiz.io/blog/exposed-moltbook-database-reveals-millions-of-api-keys), 2 février 2026.
- [Vectra AI (Lucie Cardiet) - Moltbook and the Illusion of "Harmless" AI-Agent Communities](https://www.vectra.ai/blog/moltbook-and-the-illusion-of-harmless-ai-agent-communities), 3 février 2026.
- [Tenable (Ben Smith) - I pretended to be an AI agent on Moltbook so you don't have to](https://www.tenable.com/blog/undercover-on-moltbook), 9 février 2026.
- [OX Security (Moshe Siman Tov Bustan, Nir Zadok) - The hottest website on the internet is violating privacy at scale](https://www.ox.security/blog/moltbook-blocks-account-deletion-privacy-risks/), 10 février 2026.
- [Wikipedia - Moltbook](https://en.wikipedia.org/wiki/Moltbook).
- [Kiteworks - Moltbook Is a Ticking Time Bomb for Enterprise Data. Here’s How to Defuse It](https://www.kiteworks.com/cybersecurity-risk-management/moltbook-ai-agent-security-threat-enterprise-data-protection/), 3 février 2026.
- [ComplexDiscovery - Moltbook and the Rise of AI-Agent Networks: An Enterprise Governance Wake-Up Call](https://complexdiscovery.com/moltbook-and-the-rise-of-ai-agent-networks-an-enterprise-governance-wake-up-call/), 2 février 2026.
- [Documents officiels Moltbook : skill.md, privacy policy, terms of service](https://www.moltbook.com)
