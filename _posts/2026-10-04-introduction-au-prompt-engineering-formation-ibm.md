---
title: "Introduction au prompt engineering : ce que j'ai retenu de la formation IBM"
tags: [ia-generative, ibm, feedback]
---

J'ai suivi [Introduction to Prompt Engineering](https://www.edx.org/learn/artificial-intelligence/ibm-introduction-to-prompt-engineering), le deuxième cours de la spécialisation [Generative AI for Cybersecurity](https://www.edx.org/certificates/professional-certificate/ibm-generative-ai-for-cybersecurity) d'IBM. Là où le premier cours posait le décor de l'IA générative, celui-ci passe à la pratique : comment bien formuler ce qu'on demande à un modèle pour obtenir exactement ce qu'on veut en retour.

Le cours s'adresse à tout le monde. Pas besoin de coder, pas de prérequis en intelligence artificielle. On y apprend ce qu'est un prompt, comment le structurer, et surtout une boîte à outils de techniques pour tirer le meilleur des modèles de langage. Les termes techniques restent en anglais, et je les explique au fil de l'eau.

Si vous avez lu [mon résumé du premier cours](/blog/introduction-a-lia-generative-formation-ibm/), vous avez déjà les repères de base. Ce post les prolonge et entre dans le concret. À la fin, vous saurez pourquoi une question bien tournée vaut mieux qu'une question vague, et vous aurez plusieurs façons de l'améliorer.

## Sommaire

- [Ce qu'est un prompt](#prompt)
- [L'ingénierie des prompts](#ingenierie)
- [Rédiger un bon prompt](#rediger)
- [Le schéma de persona](#persona)
- [Les techniques texte-à-texte](#techniques-texte)
- [L'approche d'entretien](#entretien)
- [La chaîne de pensée](#chaine-de-pensee)
- [L'arbre de pensée](#arbre-de-pensee)
- [La méthode des playoffs](#playoffs)
- [Les prompts multimodaux](#multimodal)
- [Les prompts pour générer des images](#images)
- [Choisir sa technique](#choisir)
- [Les outils d'ingénierie des prompts](#outils-ingenierie)
- [À retenir](#a-retenir)
- [Outils](#liste-outils)
- [Glossaire](#glossaire)

## Ce qu'est un prompt {#prompt}

Un prompt, c'est tout ce qu'on fournit à un modèle génératif pour obtenir une sortie. On peut le voir comme une instruction adressée au modèle. C'est lui qui oriente la créativité du modèle et détermine en grande partie la qualité de ce qu'il produit.

Un prompt peut être une simple question, ou une suite d'instructions qui affine la réponse étape par étape. Il peut contenir du contexte, des exemples, ou une entrée partielle. À partir de ces requêtes en langage naturel, le modèle rassemble des informations, tire des inférences et propose une réponse.

Le cours oppose deux façons de demander la même chose. Le prompt naïf pose la question de la manière la plus simple possible. Le prompt travaillé ajoute le contexte nécessaire. Demander "l'histoire d'un homme riche issu d'une petite ville" produit une sortie générique. Demander "rédige une courte histoire sur les luttes et les réussites d'un agriculteur devenu un homme d'affaires riche et influent en dix ans" raconte l'histoire réellement voulue.

Un prompt bien structuré repose sur 4 éléments :
1. **L'instruction** précise la tâche à exécuter.
2. **Le contexte** encadre cette instruction et la rend pertinente.
3. **Les données d'entrée** servent de référence au modèle.
4. **Et l'indicateur de sortie** décrit ce qu'on attend du résultat : le ton, le style, la longueur.

Par exemple, dans un prompt demandant un essai de 600 mots sur les effets du réchauffement climatique sur la vie marine, l'instruction fixe la tâche, le contexte précise les phénomènes à couvrir, les données d'entrée fournissent des relevés de température, et l'indicateur de sortie fixe les 600 mots et les critères d'évaluation.

## L'ingénierie des prompts {#ingenierie}

L'ingénierie des prompts (prompt engineering), c'est le travail de conception de prompts efficaces pour obtenir la réponse voulue. Elle mêle analyse critique, créativité et un peu de technique. Il ne s'agit pas seulement de poser la bonne question, mais de la formuler dans le bon contexte, avec les bonnes informations et une attente claire du résultat.

Le cours décrit ce travail comme un processus itératif en 5 étapes :
1. D'abord, définir l'objectif, c'est-à-dire savoir ce que le modèle doit générer ;
2. Ensuite, rédiger un premier prompt ;
3. Puis le tester ;
4. Analyser la réponse obtenue ;
5. Enfin, l'affiner en ajoutant de la précision ou du contexte.

Les trois dernières étapes se répètent jusqu'à ce que le résultat convienne.

Un exemple du cours rend la chose concrète. Un capitaine veut des prévisions météo précises dans l'Atlantique. Le prompt "prévisions météorologiques de l'océan Atlantique" ne suffit pas. On précise alors les coordonnées, la période visée, et la sortie attendue : régime des vents, hauteur des vagues, probabilités de précipitations, couverture nuageuse, tempêtes possibles.

Pourquoi ce travail compte ? Il permet d'exploiter le potentiel du modèle sans le réentraîner, d'obtenir des réponses plus nuancées, de comprendre ses limites au fil des itérations, et d'éviter les contenus nuisibles qu'un prompt mal conçu pourrait déclencher.

## Rédiger un bon prompt {#rediger}

Le cours résume les bonnes pratiques en 4 dimensions :
1. La clarté d'abord : un langage simple et direct, sans terminologie qui embrouille le modèle comme l'utilisateur. Un prompt vague produit une réponse qui ne correspond pas à l'intention.
2. Ensuite le contexte : une brève introduction des circonstances, des personnes, des lieux ou des événements qui orientent la compréhension.
3. Puis la précision : définir clairement la demande et le type de réponse attendu, en donnant des exemples quand c'est utile.
4. Enfin le jeu de rôle, que je détaille plus bas.

La même logique s'applique au format du prompt. Une demande peut être posée comme une question ("quels sont les bénéfices des réservoirs d'eau ?"), comme une affirmation ("discute des bénéfices des réservoirs d'eau") ou comme une instruction ("liste les cinq principaux bénéfices"). Le format change la nature de la réponse. L'instruction convient bien à un résumé ou une liste, l'affirmation à une complétion de texte, la question à l'extraction d'une information précise.

On peut aussi contraindre la sortie. Pour un tweet ou un SMS, le cours montre qu'on précise la longueur directement dans le prompt : "rédige l'annonce de mon nouveau poste de lead data scientist chez ABCTech en un message de la longueur d'un tweet".

## Le schéma de persona {#persona}

C'est la première vraie technique du cours, et probablement celle qui donne le plus de résultats pour le moins d'effort. Elle consiste à demander au modèle d'adopter un rôle.

Prenez une question naïve :

```
Quelle est la meilleure façon de se remettre en forme ?
```

La réponse est correcte mais générique : des conseils de bon sens qu'on trouve partout. Maintenant, ajoutez une persona :

```
Agis comme un expert du fitness et dis-moi quelle est la meilleure façon de me remettre en forme.
```

La réponse devient plus structurée et plus précise. Le cours montre ensuite comment enrichir la persona avec un qualificatif et un format de réponse attendu :

```
Tu agiras comme un expert du fitness à jour des dernières recherches et tu fourniras des instructions très détaillées, étape par étape, en réponse à mes questions.
```

La limite reste la personnalisation : le programme proposé s'adresse à un débutant générique, sans savoir s'il a 20 ou 80 ans, ni ses contraintes physiques. C'est là que l'approche d'entretien prendra le relais.

La persona peut aussi être une personne connue. Le cours demande d'abord une liste de dix titres d'articles pour promouvoir un livre sur le dressage des chiens, puis la même demande "dans le style du marketeur [Seth Godin](https://fr.wikipedia.org/wiki/Seth_Godin)". La différence est frappante. Les titres naïfs sont fade ; ceux inspirés de Godin parlent de communauté, de tribu, de changement de perspective. Quelques mots ajoutés, un résultat nettement plus intéressant.

## Les techniques texte-à-texte {#techniques-texte}

Avant d'aborder les grandes approches du module 2, le cours passe en revue des techniques plus fines qui améliorent la fiabilité des modèles de langage.

La spécification de tâche consiste à dire explicitement ce qu'on attend.

La guidance contextuelle ajoute le contexte qui évite une réponse trop générique : demander "rédige un court paragraphe sur New York en mettant en avant ses monuments emblématiques" vaut mieux que "rédige un court paragraphe sur New York".

L'expertise de domaine emploie le vocabulaire spécialisé quand on veut une réponse précise dans un domaine comme la médecine ou le droit.

Deux techniques méritent l'attention :
- La mitigation des biais consiste à demander explicitement une réponse neutre, par exemple "rédige un paragraphe sur les traits de leadership sans privilégier un genre".
- Et le cadrage (framing) contraint la réponse dans des limites : "fournis un résumé en 100 mots de l'article en te concentrant sur ses conclusions".

Le cours introduit ensuite 2 notions qui reviennent partout :
- Le zero-shot, c'est demander quelque chose sans fournir d'exemple : "identifie l'adjectif dans cette phrase".
- Le few-shot, c'est fournir un ou plusieurs exemples pour montrer le format attendu.

Un point intéressant venu des témoignages d'experts : les exemples n'ont pas besoin d'être parfaits, seulement d'être correctement formatés. Le modèle s'en sert pour comprendre la structure qu'on veut, pas le fond.

Enfin, la boucle de rétroaction utilisateur : on ne s'arrête pas à la première réponse, on ajuste. "Rends-le plus humoristique", et le modèle révise. Cette itération simple est le ciment de toutes les autres techniques.

## L'approche d'entretien {#entretien}

L'approche d'entretien (interview pattern) retourne la logique : au lieu de tout préciser dans un seul prompt, on demande au modèle de poser des questions une à une pour cerner notre besoin. Chaque question s'appuie sur la précédente, et plus on fournit d'informations, meilleur est le résultat.

Le cours combine cette approche avec la persona. Le prompt d'instruction devient :

```
Tu agiras comme un expert du fitness à jour des dernières recherches et tu fourniras des instructions très détaillées, étape par étape, en réponse à mes questions. Tu m'intervieweras en me posant toutes les questions nécessaires pour générer la meilleure réponse possible à mes requêtes.
```

À la question "crée un programme de gym pour perdre du poids et prendre de la force", le modèle ne répond pas directement : il interroge sur l'âge, les blessures, l'équipement disponible, les jours disponibles, les objectifs. Une fois les réponses données, il produit un plan réellement personnalisé. Là où le schéma de persona seul donnait un programme générique, l'entretien comble le trou.

Le même principe sert à créer un article de blog. On indique au modèle :

```
Tu agiras comme un expert en SEO et en marketing de contenu. Tu m'intervieweras en me posant une à une toutes les questions nécessaires pour générer la meilleure réponse possible à mes requêtes.
```

Le modèle demande alors qui est le public cible, quels sont ses problèmes, avant de rédiger. La qualité de nos réponses compte autant que la qualité du prompt initial.

## La chaîne de pensée {#chaine-de-pensee}

La chaîne de pensée (chain of thought, ou CoT) consiste à décomposer une tâche complexe en petites étapes, pour que le modèle raisonne au lieu de répondre d'un bloc. C'est le même réflexe qu'on a quand on se parle à soi-même pour attaquer un problème difficile.

Le cours distingue deux variantes. Le few-shot CoT fournit un exemple complet avec sa solution détaillée, puis pose une question similaire. Le modèle imite le raisonnement de l'exemple. Le cours illustre avec un menu italien : on montre comment maximiser la satiété pour 30 dollars en privilégiant l'article le moins cher par unité, puis on pose un problème analogue avec des poissons d'aquarium.

Le zero-shot CoT ne fournit aucun exemple. On ajoute simplement une phrase qui invite le modèle à raisonner pas à pas. La formulation, "Let's think step by step" en anglais, vient d'un article de [Kojima et ses collègues](https://arxiv.org/abs/2205.11916) :

```
Pensons étape par étape.
```

Le cours note honnêtement que ces mots sont utiles mais pas magiques. Ils fonctionnent mieux combinés avec d'autres techniques, et sur certains modèles ils peuvent même produire une mauvaise réponse. Leur vrai intérêt est la rapidité : obtenir un raisonnement détaillé sans préparer d'exemple.

La chaîne de pensée a ses limites. Décomposer ralentit le modèle, ce qui gêne pour des chatbots qui doivent répondre vite. Elle complique inutilement des problèmes simples. Et une erreur au début se propage jusqu'à la réponse finale. Mais pour explorer un sujet en profondeur, elle est précieuse : au lieu de demander "qu'est-ce que l'exploration spatiale ?", on liste une douzaine d'angles à couvrir, du Spoutnik au tourisme spatial, et le modèle développe chacun d'eux.

## L'arbre de pensée {#arbre-de-pensee}

L'arbre de pensée (tree of thought, ou ToT) va plus loin que la chaîne. Au lieu d'un raisonnement linéaire, le modèle explore plusieurs pistes en parallèle, les évalue, et converge vers la plus prometteuse. C'est ainsi qu'un humain raisonne face à un choix : on pèse plusieurs options avant de trancher.

Le cours donne un exemple parlant avec la planification d'une collecte de fonds. Le prompt demande d'énumérer trois types d'événements, puis pour chacun d'analyser les bénéfices, les difficultés et les ressources, avant de comparer et de choisir le plus réaliste :

```
Tu planifies un événement de collecte de fonds pour une école.
Suis cette structure :

Liste trois types d'événements différents (étiquette-les A, B, C).

Pour chaque événement, liste :
    a. Les principaux bénéfices
    b. Les difficultés probables
    c. Les ressources nécessaires

Compare les trois événements et choisis le plus réalisable. Explique pourquoi il est meilleur que les autres.
```

Le modèle répond avec une course de plaisir, une vente de pâtisseries et une soirée cinéma, puis recommande la vente de pâtisseries pour sa barrière d'entrée basse. Le cours montre la même technique pour un plan de repas familial à petit budget, pour diagnostiquer une baisse de ventes, ou pour une reconversion professionnelle.

Cette approche a aussi ses limites. Elle peut surgénérer, c'est-à-dire explorer trop de branches et diluer la réponse. Elle peut traiter toutes les pistes comme égales alors que certaines pèsent plus lourd. Et elle peut donner une fausse assurance : un raisonnement bien construit sur des faits erronés paraît crédible. Utilisée avec discernement, elle reste un cadre puissant pour les décisions qui comportent de l'incertitude.

## La méthode des playoffs {#playoffs}

La méthode des playoffs, présentée dans un article d'[Andrew Best](https://andrewbestai.substack.com/p/new-killer-chatgpt-prompt-the-playoff-9f8), emprunte la structure d'un tournoi sportif. On génère plusieurs réponses à la même question, on les associe en paires, on garde la meilleure de chaque paire, et on répète jusqu'à ce qu'une gagnante émerge.

Le cours l'illustre avec quatre slogans pour une gamme de produits écologiques. On compare "Écologique. La Terre d'abord." à "Vert aujourd'hui, plus vert demain.", puis les deux autres entre eux, puis les deux vainqueurs. À chaque tour, on justifie le choix par des critères comme la clarté ou l'impact émotionnel.

L'intérêt est la comparaison systématique : au lieu de juger une réponse dans l'absolu, on la confronte à une autre. La limite est le coût. C'est chronophage, et l'évaluation repose sur un jugement humain, donc subjectif. Le cours la recommande quand la qualité de la réponse prime sur la rapidité. Le glossaire relie cette méthode au comparison prompting (faire évaluer plusieurs sorties côte à côte) et au self-reflection prompting (demander au modèle de critiquer ses propres sorties).

## Les prompts multimodaux {#multimodal}

La communication humaine est multimodale : on parle, on montre, on désigne. Longtemps, un modèle ne savait traiter qu'un seul format. Les prompts multimodaux combinent plusieurs types d'entrée, typiquement du texte et une image, dans une même requête.

Le cours cite GPT-4 d'OpenAI, Gemini de Google et ImageBind de Meta comme exemples de modèles multimodaux. Les bénéfices sont concrets. Une image seule peut être ambiguë, mais accompagnée d'un texte elle devient claire. Un seul modèle fait alors la légende d'image, le résumé de document ou la narration à partir d'un visuel.

Un exemple parlant : on téléverse un rapport de ventes semestriel avec ses graphiques, et on demande :

```
Génère un résumé du document joint, analyse les graphiques et les images, et donne-moi les 5 points clés de ce rapport.
```

Le modèle lit les chiffres du texte et les tendances des graphiques en même temps, puis en tire cinq points clés. Un modèle purement textuel passerait à côté des graphiques. Le cours montre aussi la génération d'une histoire à partir d'une image, ou la création d'une légende et de hashtags pour un post marketing.

## Les prompts pour générer des images {#images}

Pour les images, le cours recense 5 techniques qui améliorent le rendu :
1. Les modificateurs de style influencent le style artistique sans changer le contenu : "art de bande dessinée", "style néon punk", "isométrique", "origami".
2. Les amplificateurs de qualité renforcent la netteté et le rendu : "haute résolution", "hyper-détaillé", "mise au point nette", "couleurs complémentaires".
3. La répétition consiste à répéter un mot pour insister sur une idée et la rendre plus mémorable.
4. Les termes pondérés attribuent un poids positif ou négatif à certains mots pour renforcer ou atténuer une émotion. Le modèle accepte des poids comme "chaleureux +10, crépitant +8" ou "coloré -6, exotique +10".
5. Enfin, la correction des générations déformées utilise des prompts négatifs pour éviter les défauts classiques : les mains ou les pieds distordus, la pixellisation.

Ces techniques ne se limitent pas aux images : la logique des modificateurs et des poids se retrouve dans d'autres usages.

## Choisir sa technique {#choisir}

Face à toutes ces approches, comment choisir ? Les témoignages d'experts du cours convergent vers quelques questions simples. Quelle est la tâche exacte : générer du texte, du code, une image ? Quelle est la capacité du modèle utilisé, puisque chaque modèle vise des cas d'usage différents ? Quelle quantité de contexte et de données doit-on fournir ?

Un fil rouge revient sans cesse. La clarté d'abord : plus on décrit précisément ce qu'on veut, moins la sortie sera générique, et moins on risque l'hallucination, cette réponse inventée que le modèle présente comme vraie. L'équilibre ensuite : trop spécifique, on bride le modèle ; trop ouvert, on se disperse. Et la connaissance du modèle : des modèles comme Llama ont des syntaxes précises à respecter.

Une formule revient dans plusieurs témoignages, et elle vaut pour les humains comme pour les machines : si on pose la mauvaise question, on obtient la mauvaise réponse.

## Les outils d'ingénierie des prompts {#outils-ingenierie}

Des outils spécialisés aident à rédiger, tester et optimiser les prompts. Le cours décrit leurs fonctionnalités communes : suggérer des prompts, aider à les structurer, les affiner itérativement, atténuer les biais, fournir des bibliothèques de prompts prêts à l'emploi.

Le plus détaillé est le Prompt Lab d'[IBM watsonx.ai](https://www.ibm.com/watsonx), la plateforme d'IBM pour entraîner et déployer des modèles de fondation. Il propose un mode structuré avec trois sections : l'instruction, des exemples, et une zone d'essai. Il expose aussi les paramètres du modèle. Le décodage glouton choisit à chaque étape le token le plus probable, tandis que l'échantillonnage introduit de l'aléatoire pour les usages créatifs. La température, top-k et top-p contrôlent ce degré d'aléatoire. Une pénalité de répétition réduit le texte répétitif, et des critères d'arrêt fixent la longueur de la sortie. Le Prompt Lab inclut aussi des garde-fous, des mesures de sécurité qui empêchent le modèle de produire du contenu nuisible.

Le cours cite ensuite d'autres outils. Spellbook de Scale AI, un environnement pour créer et comparer des prompts, aujourd'hui plus proposé par Scale. Dust, une interface web pour enchaîner des prompts. PromptPerfect, un optimiseur de prompts pour différents modèles, arrêté depuis septembre 2026 après le rachat de son éditeur. OpenAI Playground pour tester les modèles d'OpenAI, Playground (anciennement Playground AI) pour générer des images, LangChain pour construire et enchaîner des prompts en Python, et PromptBase, un marché où acheter et vendre des prompts.

## À retenir {#a-retenir}

Un prompt est une instruction adressée à un modèle, et sa qualité détermine en grande partie celle de la réponse. Un bon prompt s'appuie sur quatre éléments : l'instruction, le contexte, les données d'entrée et l'indicateur de sortie. L'ingénierie des prompts est un travail itératif : on définit l'objectif, on rédige, on teste, on analyse, on affine, et on recommence.

Les techniques s'empilent sans se concurrencer. La persona donne un rôle au modèle. L'entretien lui fait poser des questions pour personnaliser la réponse. La chaîne de pensée décompose un problème en étapes. L'arbre de pensée explore plusieurs pistes et choisit la meilleure. La méthode des playoffs compare des réponses en tournoi. Le zero-shot et le few-shot règlent la quantité d'exemples à fournir.

Au-delà du texte, les prompts multimodaux combinent texte et image, et cinq techniques améliorent la génération d'images : modificateurs de style, amplificateurs de qualité, répétition, termes pondérés et prompts négatifs. Et des outils comme le Prompt Lab d'IBM exposent les paramètres du modèle pour affiner le résultat.

Ce que j'en retiens avant tout : il n'y a pas une seule bonne façon de prompter. Il y a un répertoire de techniques, et l'expérience qui consiste à savoir laquelle choisir. Le fil conducteur reste le même que pour le premier cours : l'IA propose, c'est l'humain qui choisit, vérifie et affine.

## Outils {#liste-outils}

Le tableau ci-dessous regroupe les outils et modèles cités dans ce post.

| Nom | Description | Lien |
|---|---|---|
| IBM watsonx.ai / Prompt Lab | plateforme IBM pour entraîner des modèles et tester des prompts | [ibm.com](https://www.ibm.com/watsonx) |
| Spellbook (Scale AI) | IDE pour créer et comparer des prompts, plus proposé par Scale | [scale.com](https://scale.com) |
| Dust | interface web pour rédiger et enchaîner des prompts | [dust.tt](https://dust.tt) |
| PromptPerfect | optimiseur de prompts, arrêté en septembre 2026 | [promptperfect.jina.ai](https://promptperfect.jina.ai) |
| OpenAI Playground | outil web pour tester les modèles d'OpenAI | [platform.openai.com](https://platform.openai.com/playground) |
| Playground | génération d'images et outils de design, ex Playground AI | [playground.com](https://playground.com) |
| LangChain | bibliothèque Python pour construire et enchaîner des prompts | [langchain.com](https://www.langchain.com) |
| PromptBase | marché pour acheter et vendre des prompts | [promptbase.com](https://promptbase.com) |
| ChatGPT | assistant de conversation d'OpenAI | [chatgpt.com](https://chatgpt.com) |
| Gemini (Google) | assistant multimodal de Google | [gemini.google.com](https://gemini.google.com) |
| GPT-4 (OpenAI) | grand modèle de langage d'OpenAI | [openai.com](https://openai.com) |
| DALL-E (OpenAI) | génération d'images à partir de texte | [openai.com](https://openai.com/index/dall-e-3/) |
| Stable Diffusion | modèle d'images open source | [stability.ai](https://stability.ai) |
| Midjourney | génération d'images à partir de texte | [midjourney.com](https://www.midjourney.com) |
| ImageBind (Meta) | modèle multimodal de Meta | [ai.meta.com](https://ai.meta.com) |

## Glossaire {#glossaire}

| Terme | Traduction | Définition |
|---|---|---|
| Prompt | Invite / requête | L'instruction ou la question qu'on donne à un modèle pour obtenir une réponse. |
| Prompt engineering | Ingénierie des prompts | Le travail de conception de prompts efficaces pour obtenir la réponse voulue. |
| Persona | Persona / rôle | Personnage ou rôle qu'on demande au modèle d'adopter, comme un expert ou un métier. |
| Zero-shot prompting | Invite sans exemple | Demander quelque chose au modèle sans lui fournir d'exemple. |
| One-shot prompting | Invite avec un exemple | Fournir un seul exemple pour guider la réponse. |
| Few-shot prompting | Invite avec quelques exemples | Fournir deux ou trois exemples pour montrer le format attendu. |
| Chain of thought | Chaîne de pensée | Décomposer une tâche complexe en étapes pour que le modèle raisonne pas à pas. |
| Tree of thought | Arbre de pensée | Faire explorer plusieurs pistes en parallèle, les évaluer et choisir la meilleure. |
| Interview pattern | Approche d'entretien | Demander au modèle de poser des questions une à une pour cerner le besoin. |
| Playoff method | Méthode des playoffs | Comparer plusieurs réponses en tournoi pour retenir la meilleure. |
| Multimodal prompt | Prompt multimodal | Prompt qui combine plusieurs types d'entrée, comme du texte et une image. |
| Style modifier | Modificateur de style | Descripteur qui influence le style artistique d'une image générée. |
| Quality booster | Amplificateur de qualité | Terme qui améliore la netteté et le rendu, comme "4k" ou "hyper-détaillé". |
| Weighted term | Terme pondéré | Mot auquel on attribue un poids positif ou négatif pour renforcer ou atténuer un élément. |
| Negative prompt | Prompt négatif | Ce qu'on demande au modèle de ne pas inclure, pour corriger les défauts d'une image. |
| Token | Jeton | Unité de texte que le modèle manipule, un mot ou une partie de mot. |
| Temperature | Température | Paramètre qui contrôle l'aléatoire de la génération, de prévisible à créatif. |
| Top-k / Top-p | Top-k / Top-p | Paramètres qui limitent le choix des tokens à chaque étape de la génération. |
| Greedy decoding | Décodage glouton | Choisir à chaque étape le token le plus probable, pour une sortie déterministe. |
| Hallucination | Hallucination | Réponse inventée mais présentée comme vraie par le modèle. |
| Guardrail | Garde-fou | Mécanisme de sécurité qui empêche le modèle de produire du contenu nuisible. |
| Large language model (LLM) | Grand modèle de langage | Modèle entraîné sur d'énormes quantités de texte pour comprendre et générer le langage. |
