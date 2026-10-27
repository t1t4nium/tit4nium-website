---
title: "Maîtriser l'IA générative pour la cybersécurité : ce que j'ai retenu de la formation IBM"
tags: [ia-generative, securite, ibm, feedback]
---

En septembre, j'ai suivi le troisième et dernier cours de la spécialisation [Generative AI for Cybersecurity](https://www.edx.org/certificates/professional-certificate/ibm-generative-ai-for-cybersecurity) d'IBM. Les deux premiers posaient les bases : [ce qu'est l'IA générative]({% link _posts/2026-10-02-introduction-a-lia-generative-formation-ibm.md %}), puis [comment bien formuler un prompt]({% link _posts/2026-10-06-introduction-au-prompt-engineering-formation-ibm.md %}). Celui-ci entre dans le coeur du sujet : comment cette technologie sert concrètement la cybersécurité.

Le cours se déroule en trois temps. D'abord la matière : ce qui distingue l'IA générative de l'IA classique, et les risques qu'un grand modèle de langage introduit. Ensuite la pratique : le triage des alertes, l'analyse des journaux, les playbooks, la gestion des vulnérabilités, le tout au sein des outils SIEM, SOAR et UEBA. Enfin les questions éthiques, des biais à la militarisation de l'IA.

Comme pour les précédents, pas de prérequis. On peut suivre sans coder. Les termes techniques restent en anglais et je les explique au fil de l'eau. Si vous avez lu mon résumé du cours de prompt engineering, vous savez déjà comment on s'adresse à un modèle. Ici, on regarde ce qu'on peut en tirer dans un centre de sécurité.

## Sommaire

- [De l'IA conventionnelle à l'IA générative](#conventionnelle-generative)
- [Ce que l'IA générative apporte à la cybersécurité](#apports)
- [Les risques des grands modèles de langage](#risques-llm)
- [Se protéger contre les attaques sur les LLM](#se-proteger)
- [L'analytique de cybersécurité](#analytique)
- [Le coût d'une violation de données](#cout-violation)
- [Réponse aux incidents et analyse forensique](#reponse-incidents)
- [Playbooks et synthèse de rapports](#playbooks)
- [La gestion des vulnérabilités](#vulnerabilites)
- [SIEM, SOAR et UEBA](#siem-soar-ueba)
- [Des prompts pour le travail quotidien](#prompts)
- [Le futur de la cybersécurité](#futur)
- [Éthique et considérations](#ethique)
- [À retenir](#a-retenir)
- [Outils](#outils)
- [Glossaire](#glossaire)

## De l'IA conventionnelle à l'IA générative {#conventionnelle-generative}

Le cours s'ouvre sur une distinction simple. L'IA conventionnelle travaille dans un cadre fixe : des règles prédéfinies, des jeux de données connus, des tâches bien décrites. Elle excelle dans l'exécution, mais elle reste cantonnée à ce qu'on lui a appris. L'IA générative, elle, crée du contenu nouveau : du texte, des images, des simulations. Surtout, elle s'adapte et apprend en continu.

Cette différence change tout en sécurité. Face à des menaces qui évoluent sans cesse, un système adaptatif vaut mieux qu'un système figé. Le cours en tire quatre conséquences :

1. La création automatisée de playbooks, ces plans d'action qu'on déroule pendant un incident.
2. La surveillance continue, avec des recommandations d'ajustement au fil du temps.
3. Un temps de réponse réduit, grâce à l'analyse et à la recommandation automatisées.
4. Une analyse des menaces plus créative, capable de repérer des motifs subtils qu'un système à règles laisserait passer.

Ce que je retiens : l'IA conventionnelle n'est pas obsolète. Elle fait très bien le travail bien défini. L'IA générative est meilleure là où le terrain bouge.

## Ce que l'IA générative apporte à la cybersécurité {#apports}

Le cours passe en revue les grands cas d'usage, et ils couvrent presque tout le métier.

Le renseignement sur les menaces (threat intelligence) profite de l'analyse des données historiques : le modèle repère des motifs, établit des tendances et extrapole à partir des incidents passés. Un directeur de la sécurité (CISO) peut ainsi anticiper les menaces au lieu de les subir.

La planification de la réponse aux incidents change aussi. Le modèle simule des scénarios d'attaque réalistes pour entraîner les équipes. Résultat : quand un vrai incident arrive, les réflexes sont déjà là.

Viennent ensuite la chasse aux menaces dynamique, qui analyse en continu les données réseau et système à la recherche de motifs suspects, et les alertes de sécurité automatisées, qui préviennent les administrateurs en temps réel.

Deux usages me semblent les plus utiles au quotidien :
- L'évaluation des vulnérabilités : le modèle simule des attaques pour trouver les faiblesses avant que quelqu'un d'autre ne les exploite.
- Et l'analyse du comportement des utilisateurs : en apprenant ce qui est normal, le modèle repère les écarts qui trahissent une menace interne, ce risque venu d'un employé ou d'un compte autorisé.

Enfin, la gestion des politiques et de la conformité : l'IA générative aide à rédiger des politiques de sécurité et à les aligner sur les exigences réglementaires.

## Les risques des grands modèles de langage {#risques-llm}

Avant de parler d'usage, le cours pose les risques. Un grand modèle de langage (LLM) est un réseau de neurones entraîné sur d'énormes quantités de texte pour prédire le mot suivant. GPT-3 affiche 175 milliards de paramètres, GPT-4 de l'ordre de 1 000 milliards. Ces chiffres impressionnent, mais le modèle reste un système informatique comme un autre : il peut être compromis.

Le cours liste les risques principaux :

- La fuite de données : le modèle révèle des informations sensibles, par accident ou par malveillance.
- L'injection de prompt : une entrée conçue pour manipuler le modèle, contourner ses garde-fous et le connecter à d'autres outils.
- Le sandboxing inadéquat : un manque d'isolation qui laisse le modèle toucher à ce qu'il ne devrait pas.
- L'hallucination : une réponse fausse mais présentée avec assurance.
- La SSRF (server-side request forgery), qui pousse le modèle à exécuter des requêtes non prévues vers des ressources restreintes.
- Les attaques DDoS, qui saturent le service.
- Le poisoning de données : des données d'entraînement manipulées qui introduisent des portes dérobées.
- La violation du droit d'auteur, quand le modèle reproduit des textes protégés de trop près.
- Les biais, qui méritent qu'on s'y arrête.

Les biais sont un risque à part, parce qu'ils sont insidieux. Le cours en distingue plusieurs. Le biais machine vient des données d'entraînement elles-mêmes, qui perpétuent les stéréotypes. Le biais de disponibilité fait préférer au modèle le contenu le plus répandu en ligne, au détriment des points de vue minoritaires. Le biais de confirmation renforce ce que l'utilisateur croit déjà. Le biais de sélection apparaît quand les données ne représentent pas toute la population. Et le biais d'automatisation, le plus préoccupant d'après le cours, désigne notre tendance à faire confiance aux sorties d'une IA sans les vérifier.

## Se protéger contre les attaques sur les LLM {#se-proteger}

La bonne nouvelle, c'est que le cours donne les parades pour chaque risque.

Contre l'injection de prompt, plusieurs réflexes simples. Séparer les parties de l'entrée avec des caractères spéciaux ou des triples backticks, pour que le modèle distingue l'instruction de la donnée à traiter. Nettoyer l'entrée avant de l'envoyer, en retirant les caractères nocifs. Tenir une liste de blocage des mots et phrases connus pour poser problème. Et débiaiser les prompts pour écarter les stéréotypes.

Contre la fuite de données : un filtrage strict et sensible au contenu, des techniques d'anonymisation pendant l'entraînement, des audits réguliers des réponses, et la journalisation des interactions.

Contre le sandboxing inadéquat : isoler le modèle des systèmes critiques, limiter son accès aux ressources sensibles, restreindre ses capacités au strict nécessaire, et revoir régulièrement les contrôles d'accès.

Contre l'exécution de code non autorisée : valider et nettoyer les entrées utilisateur, garder un sandboxing solide, et ne jamais exposer au modèle des fonctions système.

Ce chapitre se lit comme une check-list, et c'est ce qui le rend utile : chaque risque a sa contre-mesure, et la plupart sont du bon sens de sécurité appliqué à l'IA.

## L'analytique de cybersécurité {#analytique}

Le cours consacre une vidéo entière à l'analytique de cybersécurité, la discipline qui transforme les journaux d'événements, les paquets réseau et le comportement des utilisateurs en alertes exploitables.

Quatre types d'analyse reviennent en boucle :
- L'analyse descriptive répond à la question "que s'est-il passé ?" en regardant les données historiques.
- L'analyse diagnostique répond à "pourquoi ?" en cherchant les causes.
- L'analyse prédictive répond à "que va-t-il se passer ?" avec des modèles statistiques.
- Et l'analyse prescriptive répond à "que faire ?" en recommandant des contre-mesures.

S'ajoutent l'analyse comportementale, le renseignement sur les menaces et l'évaluation du cyber-risque.

Ces analyses s'appuient sur une panoplie d'outils que le cours nomme :
- le SIEM (gestion des informations et événements de sécurité),
- l'UEBA (analyse du comportement des utilisateurs et entités),
- l'EDR (détection et réponse sur les points de terminaison),
- l'analyse du trafic réseau, la sécurité cloud, la sécurité IoT,
- la réponse aux incidents et la gestion des vulnérabilités.

Les bénéfices sont concrets : détection des menaces, prévention des pertes de données, alerte précoce, réduction des faux positifs, réponse aux incidents plus rapide, conformité facilitée, coûts réduits et passage à l'échelle.

## Le coût d'une violation de données {#cout-violation}

Un chiffre m'a marqué, tiré du rapport [Cost of a Data Breach Report 2023](https://www.ibm.com/reports/data-breach) d'IBM : en 2023, le coût moyen mondial d'une violation de données a atteint 4,45 millions de dollars, en hausse de 15 % sur trois ans. Et il s'écoule en moyenne 277 jours entre l'intrusion et le confinement d'une violation, un délai qui ne bouge pas malgré les progrès techniques.

Le rapport identifie les deux vecteurs principaux : le phishing et le compromis d'identifiants. Il note aussi que 82 % des violations concernaient des données stockées dans le cloud.

La donnée qui intéresse notre sujet : l'IA et l'automatisation réduisent le coût d'une violation de 1,76 million de dollars en moyenne.

Le cours en tire des recommandations simples :
- déployer les bons outils,
- tenir un plan de réponse aux incidents,
- adopter le zéro confiance (zero trust),
- intégrer la sécurité au développement (DevSecOps),
- et connaître sa surface d'attaque.

## Réponse aux incidents et analyse forensique {#reponse-incidents}

La réponse aux incidents (IR) est la méthode systématique pour gérer un incident de sécurité. Le cours la décompose en étapes : la préparation (une équipe, des rôles, un plan), l'identification, le confinement pour limiter les dégâts, l'éradication de la cause racine, la récupération, puis les leçons apprises pour la prochaine fois.

L'analyse forensique vient après : elle collecte, préserve et analyse les preuves numériques pour reconstituer ce qui s'est passé, identifier l'attaquant, et nourrir d'éventuelles procédures judiciaires.

L'IA générative aide sur les deux fronts. Elle détecte les anomalies dans le trafic, fournit du renseignement sur les menaces en temps réel, automatise le triage des alertes, apprend le comportement normal du système pour repérer les écarts, accélère l'extraction des preuves, et simule des incidents pour entraîner les équipes. Le cours insiste sur un point : l'IA ne remplace pas l'analyste, elle l'augmente. Elle traite le volume, pas le jugement.

## Playbooks et synthèse de rapports {#playbooks}

Un playbook de réponse est un plan détaillé des actions à mener pendant un incident précis. La plupart des organisations ont un plan général, et le complètent par des playbooks par type d'incident : malware, phishing, DDoS, et ainsi de suite.

L'IA générative automatise leur création : elle analyse les données d'incidents passés, repère les schémas et génère des stratégies de réponse. Elle fait aussi de la modélisation adaptative des menaces, en apprenant en continu pour garder les playbooks à jour face aux dernières techniques.

Deuxième usage majeur : la synthèse des rapports. Un analyste croule sous des rapports volumineux. L'IA générative en extrait les détails critiques et produit des résumés concis. Le cours liste les bénéfices : extraction efficace de l'information, compréhension contextuelle (distinguer un événement de routine d'une vraie violation), charge de travail allégée, décision plus rapide et réponse aux incidents améliorée.

## La gestion des vulnérabilités {#vulnerabilites}

La gestion des vulnérabilités est un processus continu en quatre étapes :
- identifier les failles,
- les catégoriser par criticité,
- les corriger (correctifs, configuration, mises à jour),
- puis surveiller en continu.

Les méthodes traditionnelles ont des limites que le cours expose sans détour. Elles sont manuelles, donc lentes et sujettes à l'erreur. Elles sont réactives : elles ne traitent une vulnérabilité qu'après sa découverte, laissant la porte ouverte aux attaques zero-day. Et elles manquent de contexte, en ne reliant pas une faille à l'impact qu'elle aurait sur l'activité.

L'IA change la donne sur chaque point. Elle automatise le balayage, l'évaluation et la planification. Elle priorise intelligemment, en croisant gravité, probabilité d'exploitation et impact métier. Elle surveille en continu, réduisant la fenêtre d'exposition. Elle prédit, en analysant l'historique pour anticiper les prochaines failles. Le cours conclut sur une mise en garde utile : l'IA n'est pas une solution autonome, mais un complément aux systèmes existants.

## SIEM, SOAR et UEBA {#siem-soar-ueba}

C'est le coeur technique du cours. Trois acronymes à connaître.

Le SIEM (Security Information and Event Management) collecte et agrège les journaux de tout le système d'information, corrèle les événements et lève des alertes. Le SOAR (Security Orchestration, Automation and Response) orchestre la réponse : il automatise les tâches répétitives et coordonne les outils. L'UEBA (User and Entity Behavior Analytics) surveille le comportement des utilisateurs et des entités pour repérer les menaces internes et les comptes compromis.

L'apprentissage automatique renforce le SIEM de plusieurs façons. Il apprend le comportement normal à partir des données historiques, détecte des menaces complexes ou inconnues que les règles statiques ratent, réduit les faux positifs, et ajoute de l'analyse prédictive.

Le cours prend [IBM QRadar](https://www.ibm.com/products/qradar-siem) comme exemple de SIEM. QRadar agrège et corrèle les événements de sources diverses, assure la surveillance en temps réel et s'intègre avec l'EDR d'IBM. La suite supporte nativement [MITRE ATT&CK](https://attack.mitre.org/) et [Sigma](https://github.com/SigmaHQ/sigma), deux références pour décrire les tactiques d'attaque et partager des règles de détection.

Une lecture du cours liste pas moins de 25 cas d'usage de l'IA générative dans ces trois outils.

Je retiens les plus parlants :
- détection des menaces en temps réel,
- détection d'anomalies,
- réponse automatisée aux incidents,
- corrélation des événements,
- chasse aux menaces automatisée,
- détection de fraude,
- détection de phishing,
- prévention des pertes de données (DLP),
- et surveillance de la conformité.

## Des prompts pour le travail quotidien {#prompts}

Les démonstrations du cours collent un e-mail ou un bout de code et demandent une analyse. Cela fonctionne, mais c'est rudimentaire. Pour tirer vraiment parti d'un modèle, on applique ce que le cours de prompt engineering enseignait : donner un rôle, découper la demande, préciser le format de sortie. Voici trois prompts construits sur ce principe, pour trois tâches courantes.

Analyser un code suspect. Le modèle reçoit un rôle, trois questions numérotées et une sortie attendue.

````
Tu es un analyste en réponse aux incidents. Le code Python ci-dessous a été
récupéré sur un poste compromis.

Analyse-le et réponds en trois parties numérotées :
1. le comportement malveillant exact du programme ;
2. les actifs qu'il peut compromettre (fichiers, comptes, données) ;
3. les indicateurs de compromission (IoC) qu'il laisse derrière lui.
Termine par la liste des mesures d'atténuation recommandées.

```python
<coller le code>
```
````

Trier des alertes. La demande fixe une échelle de priorité, impose une justification, ordonne les étapes et précise un livrable.

```
Voici cinq alertes remontées par notre SIEM. Pour chacune, attribue une priorité
parmi Critique, Élevé, Moyen ou Faible, et justifie ton choix en une phrase.
Classe-les ensuite de la plus prioritaire à la moins prioritaire. Rédige enfin
un e-mail destiné à l'administrateur système pour la seule alerte la plus
critique, en précisant l'action immédiate à mener.

Les alertes :
- <alerte 1>
- <alerte 2>
- <alerte 3>
- <alerte 4>
- <alerte 5>
```

Rédiger un rapport d'incident et un playbook. Le rôle est posé, la structure du rapport est imposée, et le playbook est borné en nombre d'étapes.

````
Tu es un analyste de réponse aux incidents. À partir du scénario d'attaque ci-dessous,
rédige un rapport d'incident au format standard, avec les sections : titre, résumé,
chronologie, impact, actions de réponse, leçons apprises et recommandations.
Rédige ensuite un playbook de réponse à ce type d'incident, en dix étapes maximum,
classées par ordre chronologique.

Scénario d'attaque :

```
<coller le scénario>
```
````

La différence avec les prompts naïfs tient en trois points : un rôle qui oriente la réponse, une demande découpée en étapes, et un format de sortie précis. C'est le prompt engineering appliqué à la cybersécurité.

## Le futur de la cybersécurité {#futur}

Le cours se projette, et certains points méritent d'être connus.

La transition des mots de passe vers les clés d'accès (passkeys), portée par le standard [FIDO](https://fidoalliance.org/). Une passkey repose sur un secret qui reste sur votre appareil, jamais transmis. Résultat : plus rien à voler par phishing, ce qui tombe bien puisque les e-mails de phishing générés par IA deviennent de plus en plus convaincants.

Les deepfakes, ces contenus audio ou vidéo qui imitent une personne, se répandent. Le cours prend une position que je trouve honnête : compter sur la détection est une impasse, car la technologie des deepfakes s'améliore plus vite que les détecteurs. Mieux vaut construire des mécanismes de sécurité qui ne dépendent pas de ce qu'on peut voir ou entendre.

Côté hallucinations, le cours mise sur le RAG (retrieval-augmented generation, ou génération augmentée par récupération), qui branche le modèle sur une base de documents pour ancrer ses réponses.

Les lectures vont plus loin vers la défense autonome : des agents qui apprennent de chaque attaque, des GAN (réseaux antagonistes génératifs) qui simulent la création de malwares pour mieux les détecter, des honeynets polymorphes qui piègent les attaquants dans des environnements factices, des réseaux de neurones graphiques pour prédire les mouvements d'un attaquant, et l'authentification continue par biométrie comportementale. C'est de la prospective, mais elle donne une idée de la direction.

## Éthique et considérations {#ethique}

Le dernier module change de registre, et c'est le plus inconfortable.

Le cours décrit une course aux armements de l'IA, une concurrence féroce entre entreprises pour sortir le meilleur modèle. Selon Statista, le marché mondial de l'IA devrait peser près de 1 500 milliards de dollars d'ici 2030. Cette course déborde du monde de l'entreprise : des nations s'y engagent, et la crainte d'armes autonomes létales a poussé des leaders du domaine à demander leur interdiction aux Nations unies.

La militarisation est déjà une réalité. Le cours cite une étude de Check Point selon laquelle les cybercriminels utilisent de plus en plus l'IA générative pour créer des malwares et des e-mails de phishing convaincants, et une recherche de BlackBerry où 51 % des décideurs IT pensent que l'IA générative servira à mener des cyberattaques.

L'innovation non sécurisée a aussi un coût. Le cours rappelle deux épisodes : l'action de Google a plongé de 100 milliards de dollars après une erreur de Bard lors de sa première démonstration publique, et celle de Microsoft a chuté de plus de 7,5 % après le comportement erratique de Bing Chat.

Sur le fond, les préoccupations éthiques se recoupent : les biais qui discriminent, le manque de transparence des modèles boîtes noires, la vie privée face à la surveillance, et la vulnérabilité aux attaques adversariales. Le cours illustre avec des scénarios parlants, comme ce système de détection entraîné sur des données biaisées qui signale systématiquement une région du monde, ou cette réponse autonome qui interrompt un service par erreur.

La réponse tient en deux principes. La sécurité dès la conception (security by design), intégrée à chaque étape du développement. Et la supervision humaine, qui garde un humain dans la boucle pour les décisions sensibles.

## À retenir {#a-retenir}

L'IA générative se distingue de l'IA conventionnelle par sa capacité à créer et à s'adapter, ce qui en fait un outil adapté à des menaces qui évoluent sans cesse. Ses applications couvrent tout le métier : renseignement sur les menaces, réponse aux incidents, chasse aux menaces, alertes, évaluation des vulnérabilités et analyse des comportements.

Mais un LLM est un système comme un autre, avec ses risques propres : fuite de données, injection de prompt, sandboxing inadéquat, hallucination, SSRF, poisoning et biais. Le cours a le mérite de donner une parade pour chacun, du nettoyage des entrées à l'isolation du modèle.

Côté pratique, l'IA générative renforce les outils du quotidien d'un centre de sécurité : le SIEM pour corréler les événements, le SOAR pour automatiser la réponse, l'UEBA pour repérer les menaces internes, la réponse aux incidents et la gestion des vulnérabilités. Les chiffres du rapport IBM donnent la mesure : 1,76 million de dollars économisés par violation grâce à l'IA et à l'automatisation.

Enfin, le volet éthique rappelle que cette technologie est à double usage. Les mêmes capacités qui défendent servent à attaquer, et les biais comme le manque de transparence demandent une vigilance constante.

Ce que je retiens avant tout : l'IA générative est un multiplicateur de force pour l'analyste sécurité, pas un remplaçant. Elle absorbe le volume et la routine, et rend l'humain plus rapide sur ce qui compte. Le jugement, lui, reste du côté humain.

## Outils {#outils}

Le tableau ci-dessous regroupe les outils cités dans ce post.

| Nom | Description | Lien |
|---|---|---|
| ChatGPT (OpenAI) | assistant de conversation utilisé dans les démonstrations du cours | [chatgpt.com](https://chatgpt.com) |
| IBM QRadar SIEM | SIEM qui agrège et corrèle les événements de sécurité, exemple central du cours | [ibm.com](https://www.ibm.com/products/qradar-siem) |
| IBM watsonx.ai | plateforme IBM pour entraîner et déployer des modèles de fondation | [ibm.com](https://www.ibm.com/watsonx) |
| Polymer | protection des données (DLP) pour les applications d'IA et SaaS | [polymerhq.io](https://www.polymerhq.io/) |

## Glossaire {#glossaire}

| Terme | Traduction | Définition |
|---|---|---|
| Generative AI | IA générative | IA capable de créer du contenu nouveau (texte, images, simulations) plutôt que de seulement classifier ou prédire. |
| Conventional AI | IA conventionnelle | IA classique qui travaille dans un cadre de règles prédéfinies et de données connues. |
| Large language model (LLM) | Grand modèle de langage | Réseau de neurones entraîné sur d'énormes quantités de texte pour prédire le mot suivant et générer du langage. |
| Prompt | Invite / requête | L'instruction qu'on donne à un modèle pour obtenir une réponse. |
| Prompt injection | Injection de prompt | Entrée malveillante qui manipule un modèle pour contourner ses garde-fous ou exécuter des actions non prévues. |
| Hallucination | Hallucination | Réponse factuellement fausse mais présentée comme vraie par le modèle. |
| Data leak | Fuite de données | Révélation involontaire ou malveillante d'informations sensibles par un modèle. |
| Sandboxing | Isolation (bac à sable) | Fait d'isoler un modèle du reste du système pour limiter ce qu'il peut toucher. |
| SSRF (Server-Side Request Forgery) | Falsification de requête côté serveur | Vulnérabilité qui pousse un modèle à exécuter des requêtes non prévues vers des ressources restreintes. |
| DDoS (Distributed Denial of Service) | Déni de service distribué | Attaque qui sature un service pour le rendre indisponible. |
| Data poisoning | Empoisonnement de données | Introduction de données manipulées dans l'entraînement pour fausser le comportement du modèle. |
| Bias | Biais | Tendance d'un modèle à reproduire des préjugés ou des déséquilibres présents dans ses données d'entraînement. |
| SIEM (Security Information and Event Management) | Gestion des informations et des événements de sécurité | Outil qui collecte et corrèle les journaux pour détecter des incidents. |
| SOAR (Security Orchestration, Automation and Response) | Orchestration, automatisation et réponse | Plateforme qui orchestre et automatise la réponse aux incidents. |
| UEBA (User and Entity Behavior Analytics) | Analyse du comportement des utilisateurs et entités | Analyse du comportement pour repérer les menaces internes et les comptes compromis. |
| EDR (Endpoint Detection and Response) | Détection et réponse sur les points de terminaison | Outil qui surveille les appareils pour détecter et répondre aux menaces. |
| XDR (Extended Detection and Response) | Détection et réponse étendues | Extension de l'EDR qui corrèle les signaux sur plusieurs couches de sécurité. |
| Incident response | Réponse aux incidents | Méthode pour identifier, contenir, éradiquer et récupérer d'un incident de sécurité. |
| Forensic analysis | Analyse forensique | Collecte et analyse de preuves numériques pour comprendre un incident. |
| Playbook | Playbook / plan d'action | Plan détaillé des actions à mener lors d'un incident. |
| Triage | Triage | Priorisation des alertes selon leur gravité et leur impact. |
| Vulnerability management | Gestion des vulnérabilités | Processus pour identifier, prioriser et corriger les failles. |
| Threat hunting | Chasse aux menaces | Recherche proactive de menaces qui n'ont pas déclenché d'alerte. |
| Threat intelligence | Renseignement sur les menaces | Collecte et analyse d'informations sur les menaces et leurs auteurs. |
| IoC (Indicator of Compromise) | Indicateur de compromission | Indice technique qui suggère qu'un système a été compromis. |
| TTP (Tactics, Techniques and Procedures) | Tactiques, techniques et procédures | Façon de décrire comment un attaquant opère. |
| RAG (Retrieval-Augmented Generation) | Génération augmentée par récupération | Technique qui branche un modèle sur une base de documents pour ancrer ses réponses et réduire les hallucinations. |
| Passkey | Clé d'accès | Identifiant basé sur la cryptographie qui remplace le mot de passe et résiste au phishing. |
| Deepfake | Hypertrucage | Contenu audio ou vidéo synthétique imitant une personne réelle. |
| GAN (Generative Adversarial Network) | Réseau antagoniste génératif | Deux réseaux qui s'affrontent, un générateur et un discriminateur, pour produire du contenu réaliste. |
| False positive | Faux positif | Alerte signalant une menace qui n'existe pas. |
| Alert fatigue | Fatigue des alertes | Épuisement des équipes face à trop d'alertes, qui les rend moins attentives aux vraies menaces. |
| Zero-day | Zéro-day | Vulnérabilité inconnue, exploitée avant qu'un correctif existe. |
| Phishing | Hameçonnage | Tentative d'obtenir des informations sensibles en se faisant passer pour une source légitime. |
| Ransomware | Rançongiciel | Logiciel malveillant qui chiffre les données et exige une rançon. |
| Zero trust | Zéro confiance | Approche qui ne fait confiance à aucun utilisateur ou appareil par défaut. |
| DevSecOps | DevSecOps | Intégration de la sécurité à chaque étape du développement logiciel. |
| Security by design | Sécurité dès la conception | Principe qui intègre la sécurité dès le début du développement. |
| Explainability | Explicabilité | Capacité à expliquer comment un modèle prend ses décisions. |
| Dwell time | Temps de séjour | Durée entre l'intrusion d'un attaquant et sa détection. |
| APT (Advanced Persistent Threat) | Menace persistante avancée | Attaquant sophistiqué qui s'installe durablement dans un réseau. |
| Insider threat | Menace interne | Risque venu d'un utilisateur autorisé, par malveillance ou par négligence. |
