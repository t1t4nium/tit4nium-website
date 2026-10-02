---
title: "Introduction à l'IA générative : ce que j'ai retenu de la formation IBM"
tags: [ia-generative, ibm, feedback]
---

J'ai suivi [Introduction to Generative AI](https://www.edx.org/learn/computer-science/ibm-introduction-to-generative-ai), le premier cours de la spécialisation [Generative AI for Cybersecurity](https://www.edx.org/certificates/professional-certificate/ibm-generative-ai-for-cybersecurity) d'IBM. C'est un cours d'entrée : peu de prérequis, une approche par les concepts plutôt que par les maths. On y apprend ce qu'est l'IA générative, ce qui la distingue de l'IA classique, d'où elle vient, ce qu'elle sait faire et quels outils existent aujourd'hui.

Plutôt que de garder ces notes pour moi, j'en tire un résumé que vous pouvez lire d'une traite. Le ton est volontairement simple : les termes techniques restent en anglais, et je les explique au fil de l'eau. L'objectif, c'est que vous ressortiez avec le vocabulaire et les repères, pas avec une liste de produits.

Ce cours s'adresse à qui veut comprendre le sujet sans entrer dans le détail. Pas besoin de savoir coder, pas besoin de connaître l'apprentissage automatique. Si vous utilisez déjà ChatGPT ou Midjourney, ce résumé vous donnera les mots pour dire ce qui se passe sous le capot.

## Sommaire

- [Ce qu'est l'IA générative](#definition)
- [Les briques de base](#briques)
- [D'où elle vient](#histoire)
- [Ce qu'elle sait faire](#capacites)
- [Où elle s'applique](#applications)
- [Le potentiel économique](#economie)
- [Les outils du quotidien](#outils)
  - [Génération de texte](#outils-texte)
  - [Génération d'images](#outils-images)
  - [Génération audio et vidéo](#outils-audio-video)
  - [Génération de code](#outils-code)
- [L'IA multimodale](#multimodal)
- [Les agents IA et l'IA agentique](#agents)
- [À retenir](#a-retenir)
- [Outils](#liste-outils)
- [Glossaire](#glossaire)

## Ce qu'est l'IA générative {#definition}

L'intelligence artificielle, c'est au fond la simulation de l'intelligence humaine par des machines. Un modèle d'IA apprend à partir de grandes quantités de données existantes. Cette phase d'apprentissage s'appelle l'entraînement.

Le cours distingue deux approches.

D'un côté, l'IA discriminative. Elle apprend à distinguer des classes de données. On lui donne des exemples étiquetés, elle prédit la classe d'un nouvel élément. Le filtre anti-spam de votre messagerie en est l'exemple type : il trie le courrier légitime du spam. L'IA discriminative excelle dans la classification, mais elle ne comprend pas le contexte et ne crée rien de neuf.

De l'autre, l'IA générative. Elle apprend à générer du nouveau contenu à partir de ses données d'entraînement. Elle démarre avec un prompt, c'est-à-dire une entrée qui peut être du texte, une image, une vidéo. En sortie, elle produit du texte, des images, de l'audio, de la vidéo, du code ou des données. Elle peut répondre dans le même format que la demande (du texte vers du texte) ou dans un format différent (du texte vers une image, d'une image vers une vidéo).

Le cours donne une image parlante de la différence. À l'IA discriminative, vous demandez : cette image représente-t-elle un nid ou un œuf ? À l'IA générative, vous demandez : dessine un nid contenant trois œufs. La première imite nos capacités d'analyse et de prédiction, la seconde va un cran plus loin et imite nos capacités créatives.

## Les briques de base {#briques}

Les modèles discriminatifs et génératifs sont tous deux construits avec de l'apprentissage profond (deep learning), qui consiste à entraîner des réseaux de neurones artificiels sur de vastes quantités de données. Un réseau de neurones est un ensemble de petites unités de calcul, les neurones, agencées de façon à imiter le traitement de l'information par le cerveau humain.

Les compétences créatives de l'IA générative reposent sur quelques grandes familles de modèles :

- les GAN (generative adversarial networks), qui opposent deux réseaux, un générateur et un discriminateur, jusqu'à produire des résultats très réalistes ;
- les VAE (variational autoencoders), qui compressent puis reconstruisent les données ;
- les transformers, une architecture qui traite des séquences et qui est à la base des modèles de langage modernes ;
- les modèles de diffusion, entraînés à retirer progressivement du bruit pour produire des images de haute qualité.

Au-dessus de ces briques, le cours introduit les modèles de fondation : des modèles aux capacités larges, qu'on adapte ensuite pour créer des modèles ou des outils plus spécialisés. Une catégorie particulière de modèles de fondation, les LLM (large language models), est entraînée à comprendre le langage humain et à générer du texte.

## D'où elle vient {#histoire}

L'IA générative n'est pas née avec ChatGPT. Ses racines remontent aux origines de l'apprentissage automatique. À la fin des années 1950, quand les scientifiques ont proposé le machine learning, ils exploraient déjà des algorithmes capables de créer de nouvelles données. Les années 1990 et l'essor des réseaux de neurones ont apporté des avancées, puis le début des années 2010 et l'apprentissage profond, porté par de grands jeux de données et davantage de puissance de calcul, ont accéléré le mouvement.

Deux dates ressortent. En 2014, [Ian Goodfellow](https://fr.wikipedia.org/wiki/Ian_Goodfellow) et ses collègues introduisent les GAN, ce qui transforme le domaine. En 2017, l'article [Attention Is All You Need](https://arxiv.org/abs/1706.03762) ouvre une nouvelle ère en posant l'architecture des transformers. En 2018, OpenAI lance GPT (Generative Pre-trained Transformer), un LLM basé sur les transformers.

La suite est une accélération continue : GPT-3 puis GPT-4, PaLM (Pathways Language Model) de Google, LLaMA de Meta. Pour les images, Stable Diffusion et DALL-E. Et sur le marché des outils, ChatGPT et Gemini pour le texte, DALL-E et Midjourney pour les images, Synthesia pour la vidéo, Copilot et AlphaCode pour le code.

## Ce qu'elle sait faire {#capacites}

Le cours recense sept grandes capacités :

- La génération de texte, d'abord, portée par les LLM, qui produisent des réponses claires et adaptées au contexte.
- La génération d'images, qui synthétise des images artistiques ou réalistes, parfois difficiles à distinguer de vraies photos.
- La génération audio, de la composition musicale à la synthèse vocale, en passant par l'imitation de voix.
- La génération vidéo, qui transforme une description textuelle ou une image en vidéo.
- La génération de code, capable de produire des fonctions et des programmes entiers.
- La génération et l'augmentation de données, qui crée des données synthétiques pour enrichir des jeux de données et rendre les modèles plus robustes.
- La création de mondes virtuels avec des environnements réalistes, des avatars et des personnalités numériques.

Le cours résume l'ampleur du champ en une phrase : tout ce que l'esprit humain est capable de concevoir est un cas d'usage potentiel.

## Où elle s'applique {#applications}

Les domaines d'application couvrent presque toutes les industries. Le cours en détaille quelques-uns.

En informatique et dans le DevOps, l'IA générative réduit l'effort de codage manuel et accélère les tâches répétitives. Des outils comme GitHub Copilot ou DeepCode de Snyk relisent le code pour en améliorer la qualité. D'autres, comme Watson AIOps d'IBM, surveillent les journaux système et détectent des anomalies avant la panne.

Dans le divertissement, elle crée de la musique, des scénarios, des vidéos et des jeux. Elle traduit et personnalise les contenus. On voit même apparaître des influenceurs virtuels.

Dans l'éducation, elle corrige des devoirs, fournit des retours immédiats, adapte le rythme à chaque apprenant et rend les contenus accessibles dans plusieurs langues. Duolingo utilise GPT-3 pour corriger la grammaire et générer des exercices.

Dans la banque et la finance, elle détecte les risques, évalue le crédit, analyse le sentiment des marchés et alimente des chatbots de service client. KAI-GPT se présente comme le premier LLM pensé pour la banque, et BloombergGPT analyse l'actualité pour la gestion de portefeuille.

Dans la santé, elle génère des images médicales synthétiques pour entraîner des modèles, y compris pour des maladies rares où les données manquent. Elle accélère la découverte de médicaments en générant de nouvelles molécules. Le cours cite DeepMind et la prédiction de la structure 3D des protéines, ainsi qu'un tutorat médical conversationnel via des outils comme Rasa.

Dans les ressources humaines, elle automatise les offres d'emploi, le tri des candidatures et la planification des entretiens. Watsonx Orchestrate, Talenteria ou Leena AI illustrent ce créneau.

## Le potentiel économique {#economie}

Le cours s'appuie sur deux cabinets pour chiffrer l'impact.

[Gartner](https://www.gartner.com/en/topics/generative-ai) range les opportunités en trois catégories : des opportunités de revenus (nouveaux produits, nouveaux canaux), des opportunités de coûts et de productivité (aider les employés à produire plus vite), et des opportunités de risque (mieux repérer les transactions suspectes ou le code défectueux). Gartner liste aussi les industries les plus touchées : pharmacie, industrie, médias, architecture, ingénierie, automobile, aérospatiale, défense, santé, électronique et énergie.

McKinsey, dans son rapport [Le potentiel économique de l'IA générative : la prochaine frontière de la productivité](https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier), estime que l'IA générative actuelle et les technologies voisines pourraient automatiser des activités représentant 60 à 70 % du temps de travail des employés. La moitié des activités professionnelles actuelles pourrait être automatisée entre 2030 et 2060. Et ce potentiel touche aussi le travail intellectuel, longtemps associé aux diplômes et aux compétences acquises.

## Les outils du quotidien {#outils}

Le cours passe ensuite en revue les outils, par type de contenu.

### Génération de texte {#outils-texte}

Les LLM interprètent le contexte, la grammaire et la sémantique pour produire un texte cohérent. Deux outils dominent : ChatGPT, qui repose sur GPT, et Google Gemini, propulsé par la famille de modèles multimodaux de Google DeepMind.

Le cours note une différence d'usage : ChatGPT tient mieux la conversation et le fil d'un échange, tandis que Gemini s'appuie sur Google Search et Google Scholar pour chercher l'actualité récente.

Autour de ces deux poids lourds gravitent des outils spécialisés : Jasper et Copy.ai pour le marketing, WriteSonic pour les articles, Resoomer pour résumer un texte, Brand24 ou Repustate pour l'analyse de sentiment, LanguageWeaver pour la traduction.

Un point mérite l'attention : beaucoup d'outils collectent et examinent les données qu'on leur confie pour s'améliorer. Le cours recommande donc de ne pas y partager d'informations sensibles. Il cite aussi des alternatives qui tournent en local, sans connexion internet, comme GPT4ALL, H2O.ai ou PrivateGPT, pour ceux qui veulent garder la main sur leurs données.

### Génération d'images {#outils-images}

La génération d'images dépasse le simple "texte vers image". Les modèles savent aussi traduire une image d'un domaine à un autre (un croquis en photo réaliste), transférer le style d'une image à une autre, pratiquer l'inpainting (reconstruire les parties manquantes d'une image) et l'outpainting (étendre l'image au-delà de ses bords).

Côté modèles, DALL-E d'OpenAI s'intègre aux modèles GPT et génère des images haute résolution dans plusieurs styles. Stable Diffusion est un modèle de diffusion texte-image open source. StyleGAN de NVIDIA sépare le contenu du style, ce qui permet de contrôler finement des caractéristiques comme la pose ou l'expression.

Côté outils, on trouve Craiyon, Magnific, Picsart, Fotor et Midjourney. Certains s'intègrent par API dans d'autres logiciels. Adobe Firefly, entraîné sur du contenu sous licence et du domaine public, accepte les prompts dans plus de 100 langues et s'intègre à Photoshop et Illustrator.

### Génération audio et vidéo {#outils-audio-video}

Les outils audio se répartissent en trois familles : la génération de parole, la création musicale et l'amélioration audio.

La génération de parole repose sur la synthèse vocale, ou TTS (text-to-speech), qui convertit le texte en audio. Les outils comme LOVO, Synthesia, Murf.ai ou Listnr offrent des bibliothèques de voix et de langues, jusqu'au clonage de sa propre voix. C'est utile pour l'accessibilité, par exemple pour les personnes malvoyantes ou dyslexiques.

Pour la musique, AudioCraft de Meta, Suno, AIVA ou Magenta de Google composent à partir d'un prompt. Pour nettoyer un enregistrement, Descript ou Audo AI suppriment le bruit de fond.

Côté vidéo, Runway a été utilisé dans la post-production du film Everything Everywhere All at Once. Sora d'OpenAI et Synthesia permettent de créer des vidéos à partir de texte, d'images ou de clips existants, avec des avatars personnalisés. Dans le cours il est dit que le marché de la musique générée par IA, estimé à 229 millions de dollars en 2022, pourrait atteindre 2,66 milliards en 2032, soit une croissance annuelle de 28,6 %.

### Génération de code {#outils-code}

Les générateurs de code comprennent le langage naturel et produisent du code adapté au contexte. Ils génèrent des extraits, complètent un code partiel, optimisent du code existant, le traduisent d'un langage à un autre et rédigent la documentation.

ChatGPT et Gemini s'en sortent bien pour le code simple, le débogage et l'apprentissage d'un langage. Le cours est honnête sur leurs limites : ils peinent sur le code volumineux ou complexe, peuvent produire un code techniquement correct mais qui ne fait pas ce qu'on attend, et leur connaissance s'arrête aux données d'entraînement. Un framework sorti après l'entraînement du modèle lui sera inconnu.

Pour du code, mieux vaut un outil dédié : GitHub Copilot, entraîné sur du code public, ou PolyCoder, un générateur open source précis en C. IBM propose Watsonx Code Assistant, et d'autres comme Amazon Q Developer, Tabnine ou Replit complètent le tableau.

Le cours rappelle enfin que ces outils s'utilisent avec prudence : ils peuvent reproduire des vulnérabilités de sécurité ou des biais présents dans leurs données d'entraînement.

## L'IA multimodale {#multimodal}

Longtemps, chaque outil ne savait traiter qu'un seul format : un modèle de texte lisait et écrivait du texte, un modèle d'image ne travaillait que sur les images. L'IA multimodale change la donne : un seul modèle comprend et génère plusieurs types de contenu à la fois.

Prenez l'exemple du cours : vous photographiez une recette manuscrite et vous demandez au modèle de la transformer en liste de courses avec des substitutions d'ingrédients. Un modèle multimodal lit l'image, reconnaît le texte et produit une réponse écrite, en une seule requête. Un modèle purement textuel en serait incapable.

GPT-4o d'OpenAI traite texte, image et audio dans une même interaction. Gemini de Google va du texte à la vidéo en passant par le code. L'intérêt pratique est simple : plus besoin de jongler entre des outils spécialisés, et l'IA devient accessible sans bagage technique.

## Les agents IA et l'IA agentique {#agents}

Le cours trace une ligne nette entre deux façons de faire travailler l'IA.

L'IA générative est réactive. Elle attend votre prompt, génère un contenu, puis s'arrête. C'est une machine sophistiquée de reconnaissance de motifs, qui a appris les relations statistiques entre les mots, les pixels ou les ondes sonores.

L'IA agentique est proactive. Elle part souvent d'une requête, mais elle poursuit ensuite un objectif à travers une série d'actions : percevoir son environnement, décider, agir, apprendre du résultat, puis recommencer, avec un minimum d'intervention humaine.

La différence se voit sur un exemple concret. Un chatbot à qui vous dites "organise un week-end à la montagne" vous décrit quelques destinations. Un agent IA vérifie les prix des vols et des hôtels, compare quelques options et vous propose un programme, sans que vous ayez à demander chaque étape.

Les deux approches partagent une base commune : les LLM. Ce sont eux qui fournissent le raisonnement des agents. Le cours donne un nom à ce raisonnement : la chaîne de pensée (chain of thought). L'agent décompose une tâche complexe en petites étapes, un peu comme on se parlerait à soi-même pour attaquer un problème difficile.

Un agent IA, c'est donc un système qui vise un but, rassemble et organise de l'information, se connecte à d'autres outils, et soulage les tâches répétitives. Le cours insiste sur un point qui revient souvent ici : la supervision humaine reste indispensable. L'information générée peut être incomplète ou fausse, et une relecture avant diffusion évite bien des erreurs.

À terme, le cours prévoit que les systèmes les plus puissants ne seront ni purement génératifs ni purement agentiques, mais des collaborateurs capables de choisir quand générer et quand agir.

## À retenir {#a-retenir}

L'IA générative crée du contenu neuf à partir de ce qu'elle a appris, là où l'IA discriminative se contente de classer. Elle s'appuie sur quatre grandes briques (GAN, VAE, transformers, modèles de diffusion) et sur des modèles de fondation comme les LLM. Son histoire démarre bien avant ChatGPT, mais c'est l'arrivée des GAN en 2014 et des transformers en 2017 qui l'ont propulsée.

Elle sait générer du texte, des images, de l'audio, de la vidéo, du code et des données, et elle s'applique à peu près partout, du DevOps à la santé. Le potentiel économique est chiffré en dizaines de pourcents de temps de travail automatisables.

Pour s'en servir au quotidien, on dispose d'outils par type de contenu : ChatGPT et Gemini pour le texte, DALL-E et Stable Diffusion pour les images, une palette audio et vidéo, et des assistants de code comme GitHub Copilot. Et la direction que prend le domaine est claire : des modèles de plus en plus multimodaux, et des agents qui enchaînent les étapes vers un objectif.

Le fil rouge du cours, et ce que j'en retiens avant tout : l'IA génère des possibilités, mais c'est l'humain qui choisit, vérifie et affine.

## Outils {#liste-outils}

Le tableau ci-dessous regroupe les outils et modèles cités dans ce post, avec un lien vers chacun.

| Nom | Description | Lien |
|---|---|---|
| Adobe Firefly | génération et retouche d'images, intégré à Photoshop | [adobe.com](https://www.adobe.com/products/firefly.html) |
| AIVA | composition musicale | [aiva.ai](https://www.aiva.ai) |
| AlphaCode | génération de code par DeepMind | [deepmind.google](https://deepmind.google/blog/competitive-programming-with-alphacode/) |
| Amazon Q Developer | assistant de code d'AWS | [aws.amazon.com](https://aws.amazon.com/q/developer/) |
| AudioCraft | suite de modèles audio de Meta | [ai.meta.com](https://ai.meta.com/resources/models-and-libraries/audiocraft/) |
| Audo AI | nettoyage audio, suppression du bruit | [audo.ai](https://www.audo.ai) |
| BloombergGPT | LLM de Bloomberg pour la finance | [bloomberg.com](https://www.bloomberg.com/company/press/bloomberggpt-50-billion-parameter-llm-tuned-finance/) |
| Brand24 | analyse de sentiment | [brand24.com](https://brand24.com) |
| ChatGPT | génération de texte et conversation, par OpenAI | [chatgpt.com](https://chatgpt.com) |
| Copy.ai | contenu marketing | [copy.ai](https://www.copy.ai) |
| Craiyon | génération d'images gratuite | [craiyon.com](https://www.craiyon.com) |
| DALL-E | génération d'images par OpenAI | [openai.com](https://openai.com/index/dall-e-3/) |
| DeepCode (Snyk) | revue de code assistée par IA | [snyk.io](https://snyk.io/platform/deepcode-ai/) |
| Descript | montage audio et vidéo | [descript.com](https://www.descript.com) |
| Duolingo | apprentissage des langues (utilise GPT-3) | [duolingo.com](https://www.duolingo.com) |
| Fotor | retouche et génération d'images | [fotor.com](https://www.fotor.com) |
| Gemini (Google) | assistant multimodal de Google | [gemini.google.com](https://gemini.google.com) |
| GitHub Copilot | assistant de code, intégré à l'éditeur | [github.com](https://github.com/features/copilot) |
| GPT (OpenAI) | famille de modèles de langage (GPT-3, GPT-4, GPT-4o) | [openai.com](https://openai.com) |
| GPT4ALL | chatbot local respectueux de la vie privée | [gpt4all.io](https://gpt4all.io) |
| H2O.ai | plateforme IA et chatbot local | [h2o.ai](https://h2o.ai) |
| Jasper | contenu marketing | [jasper.ai](https://www.jasper.ai) |
| KAI-GPT (Kasisto) | LLM pensé pour la banque | [kasisto.com](https://kasisto.com) |
| LanguageWeaver | traduction automatique | [languageweaver.com](https://www.languageweaver.com) |
| Leena AI | automatisation des RH | [leena.ai](https://leena.ai) |
| LLaMA (Meta) | famille de modèles ouverts de Meta | [ai.meta.com](https://ai.meta.com/llama/) |
| Listnr | synthèse vocale | [listnr.ai](https://listnr.ai) |
| LOVO | synthèse vocale | [lovo.ai](https://lovo.ai) |
| Magenta (Google) | génération musicale | [magenta.withgoogle.com](https://magenta.withgoogle.com) |
| Magnific | amélioration d'images | [magnific.ai](https://magnific.ai) |
| Midjourney | génération d'images | [midjourney.com](https://www.midjourney.com) |
| Murf.ai | synthèse vocale | [murf.ai](https://murf.ai) |
| PaLM (Google) | grand modèle de langage de Google | [research.google](https://research.google/blog/pathways-language-model-palm-scaling-to-540-billion-parameters-for-breakthrough-performance/) |
| Picsart | création d'images | [picsart.com](https://picsart.com) |
| PolyCoder | générateur de code open source | [github.com](https://github.com/VHellendoorn/Code-LMs) |
| PrivateGPT | IA locale sur documents privés | [github.com](https://github.com/zylon-ai/private-gpt) |
| Rasa | agents conversationnels | [rasa.com](https://rasa.com) |
| Replit | environnement de code avec IA | [replit.com](https://replit.com) |
| Repustate | analyse de sentiment | [repustate.com](https://www.repustate.com) |
| Resoomer | résumé de texte | [resoomer.com](https://resoomer.com) |
| Runway | génération vidéo | [runwayml.com](https://runwayml.com) |
| Sora (OpenAI) | génération vidéo à partir de texte | [openai.com](https://openai.com/sora) |
| Stable Diffusion | modèle d'images open source | [stability.ai](https://stability.ai) |
| StyleGAN (NVIDIA) | génération d'images par style | [github.com](https://github.com/NVlabs/stylegan) |
| Suno | création musicale | [suno.com](https://suno.com) |
| Synthesia | vidéo avec avatars | [synthesia.io](https://www.synthesia.io) |
| Tabnine | complétion de code | [tabnine.com](https://www.tabnine.com) |
| Talenteria | recrutement assisté par IA | [talenteria.com](https://www.talenteria.com) |
| Watson AIOps (IBM) | surveillance et détection d'anomalies | [ibm.com](https://www.ibm.com/products/watson-aiops) |
| Watsonx Code Assistant (IBM) | assistant de code d'IBM | [ibm.com](https://www.ibm.com/products/watsonx-code-assistant) |
| Watsonx Orchestrate (IBM) | automatisation des tâches | [ibm.com](https://www.ibm.com/products/watsonx-orchestrate) |
| WriteSonic | rédaction d'articles | [writesonic.com](https://writesonic.com) |

## Glossaire {#glossaire}

| Terme | Traduction | Définition |
|---|---|---|
| Generative AI | IA générative | IA capable de créer de nouveaux contenus (texte, image, audio, vidéo) à partir de ce qu'elle a appris. |
| Discriminative AI | IA discriminative | IA qui distingue et classe des données, sans rien créer. |
| Machine learning | Apprentissage automatique | Approche où la machine apprend à partir de données au lieu d'être programmée explicitement. |
| Deep learning | Apprentissage profond | Sous-ensemble du machine learning qui entraîne des réseaux de neurones artificiels. |
| Neural network | Réseau de neurones | Modèle de calcul inspiré du cerveau, composé de petites unités appelées neurones. |
| GAN (generative adversarial network) | Réseau antagoniste génératif | Modèle qui oppose un générateur et un discriminateur pour produire des contenus réalistes. |
| VAE (variational autoencoder) | Auto-encodeur variationnel | Modèle qui compresse puis reconstruit les données, utile pour en générer de nouvelles. |
| Transformer | Transformeur | Architecture qui traite des séquences, à la base des modèles de langage modernes. |
| Diffusion model | Modèle de diffusion | Modèle entraîné à retirer progressivement du bruit, très utilisé pour générer des images. |
| Foundation model | Modèle de fondation | Modèle large et polyvalent, qu'on adapte ensuite à des usages précis. |
| Large language model (LLM) | Grand modèle de langage | Modèle de fondation entraîné sur d'énormes quantités de texte pour comprendre et générer le langage. |
| Generative pre-trained transformer (GPT) | Transformeur génératif pré-entraîné | Famille de LLM d'OpenAI construite sur l'architecture des transformers. |
| Natural language processing (NLP) | Traitement du langage naturel | Branche de l'IA qui traite le langage humain. |
| Prompt | Invite / requête | L'instruction ou la requête qu'on fournit au modèle pour guider sa réponse. |
| Fine-tuning | Affinage | Le fait d'adapter un modèle déjà entraîné à une tâche précise avec un jeu de données ciblé. |
| Multimodal AI | IA multimodale | Modèle qui comprend et génère plusieurs types de contenu (texte, image, audio, vidéo) dans un même système. |
| AI agent | Agent IA | Système qui vise un objectif et enchaîne plusieurs étapes, plutôt que de répondre à une seule question. |
| Agentic AI | IA agentique | Approche proactive, où l'IA perçoit, décide et agit vers un but. |
| Chain of thought | Chaîne de pensée | Technique où le modèle décompose un problème en étapes logiques pour raisonner. |
| Text-to-speech (TTS) | Synthèse vocale | Conversion de texte en parole. |
| Inpainting | Reconstruction d'image | Reconstruction des parties manquantes ou abîmées d'une image. |
| Outpainting | Extension d'image | Extension d'une image au-delà de ses bords d'origine. |
| Data augmentation | Augmentation de données | Données générées artificiellement pour enrichir un jeu d'entraînement. |
