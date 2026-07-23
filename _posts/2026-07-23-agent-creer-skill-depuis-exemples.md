---
title: "Demander à un agent de créer une skill à partir d'exemples d'usage"
tags: [hermes-agent, skill, workflow]
---

Petit cas d'école pour couvrir la création de skill par l'agent.

J'avais besoin de récupérer des posts X (Twitter) sans passer par l'API. J'ai donné trois exemples concrets à Hermes et je lui ai demandé d'explorer et de documenter le reste tout seul. Résultat : une skill complète et testée.

Plutôt que de décrire la fonctionnalité, j'ai montré ce que je voulais. Cette approche est mon réflexe pour tout besoin outil.

---

Setup :

- Hermes Agent v0.19.0
- Modèle : DeepSeek V4 Flash
- Niveau de thinking : medium

---

## Le problème

J'utilise [Nitter](https://nitter.net), un front-end alternatif libre à Twitter/X. Pas de clé API, pas de rate limiting agressif, pas de tracking. Mais je n'avais pas de procédure standardisée pour m'en servir dans Hermes.

Je connaissais quelques patterns d'URL. J'ai balancé des exemples et laissé l'agent faire le reste.

## Le prompt

Voici ce que j'ai envoyé, presque mot pour mot :

```
Écris une skill pour récupérer un post X (Twitter) depuis [Nitter](https://nitter.net/). Cela permet de contourner l'usage de l'API de X.
Exemples :
- pour un article https://x.com/wandermist/status/2071930382581195105 ===> https://nitter.net/i/article/2071930382581195105.
- pour un status https://x.com/Teknium/status/2079968155204808961 ===> https://nitter.net/Teknium/status/2079968155204808961.
Il est également possible de suivre un compte X : https://nitter.net/Teknium/rss.
Explore les autres possibilités, teste-les et documente-les avec des exemples.
```

C'est tout. Trois exemples, une instruction ouverte.

## Ce que l'agent a fait

Hermes a chargé la skill `nitter-x-post` (qui n'existait pas encore, il l'a créée), puis a enchaîné :

1. **Test de chaque URL donnée** : les deux status tweets et l'article dans leur rendu Nitter.
2. **Test du flux RSS** : pour vérifier que le format Atom était utilisable.
3. **Exploration du profil utilisateur** : `/Teknium` pour la bio, les stats, le pinned tweet.
4. **Test des pages spécialisées** : `/Teknium/media`, `/Teknium/following`.
5. **Recherche des instances alternatives** : parce que nitter.net peut être down.
6. **Documentation de la liste d'instances** : récupérée depuis le wiki GitHub de Nitter.

Chaque test a été fait avec `web_extract`, pas avec un navigateur. Résultat : 8 patterns d'URL documentés et vérifiés, 8 instances alternatives, des scripts de conversion et de fallback.

## La skill obtenue

Voici le fichier complet que l'agent a produit `~/.hermes/skills/social-media/nitter-x-post` :

````markdown
---
name: nitter-x-post
description: Récupérer des posts X (Twitter) via Nitter -- contourne l'API X, pas de clé requise.
category: social-media
trigger: lien x.com, twitter.com, Nitter, tweet, post X, status Twitter, récupérer tweet
---

# Skill : Récupérer un post X (Twitter) via Nitter

[Nitter](https://github.com/zedeus/nitter) est un front-end alternatif libre et open-source pour Twitter/X, axé sur la vie privée et les performances. Pas besoin d'API key.

## URLs supportées -- Patterns documentés

### Status tweet individuel
```
https://nitter.net/{username}/status/{id}
https://nitter.net/Teknium/status/2079968155204808961
```
Retourne : texte du tweet, métriques (réponses, reposts, likes, vues), date, média(s), et les réplies.

### Article (thread longue)
```
https://nitter.net/i/article/{id}
https://nitter.net/i/article/2071930382581195105
```
Rendu propre et lisible d'un thread long, avec toutes les images embarquées.

### Profil utilisateur
```
https://nitter.net/{username}
https://nitter.net/Teknium
```
Retourne : bio, stats (tweets, following, followers, likes), pinned tweet, timeline récente.

### RSS feed (suivre un compte)
```
https://nitter.net/{username}/rss
https://nitter.net/Teknium/rss
```
Flux Atom/RSS complet des tweets récents. Idéal pour watcher en cron ou via un lecteur RSS. Contient le texte intégral, les images, les retweets, les liens.

### Tweets & Replies
```
https://nitter.net/{username}/with_replies
https://nitter.net/Teknium/with_replies
```

### Média uniquement
```
https://nitter.net/{username}/media
https://nitter.net/Teknium/media
```
Supporte trois vues :
- `?view=timeline` (timeline, défaut)
- `?view=grid` (grille)
- `?view=gallery` (gallerie)

### Abonnements (Following)
```
https://nitter.net/{username}/following
https://nitter.net/Teknium/following
```

### Abonnés (Followers)
```
https://nitter.net/{username}/followers
https://nitter.net/Teknium/followers
```

### À propos
```
https://nitter.net/{username}/about
https://nitter.net/Teknium/about
```

### Recherche (instable selon l'instance)
```
https://nitter.net/search?q={query}
https://nitter.net/search?q=Hermes+agent
```
⚠️  Peut retourner une erreur 500 selon l'instance.

## Conversion depuis x.com / twitter.com

Remplacer simplement le domaine :

| Source | Cible |
|---|---|
| `https://x.com/user/status/123` | `https://nitter.net/user/status/123` |
| `https://twitter.com/user/status/123` | `https://nitter.net/user/status/123` |

**Script de conversion automatique :**
```python
import re

def x_to_nitter(url: str, instance: str = "nitter.net") -> str:
    \"\"\"Convert a twitter.com or x.com URL to the equivalent Nitter URL.\"\"\"
    url = re.sub(r'https?://(x\\.com|twitter\\.com)', f'https://{instance}', url)
    return url
```

## Instances alternatives

Quand `nitter.net` est down ou lent :

| URL | Pays | Notes |
|---|---|---|
| `https://xcancel.com/` | 🇺🇸 | Alternative populaire |
| `https://nitter.poast.org/` | 🇺🇸 | |
| `https://nitter.privacyredirect.com/` | 🇫🇮 | |
| `https://nitter.tiekoetter.com/` | 🇩🇪 | |
| `https://nitter.catsarch.com/` | 🇺🇸/🇩🇪 | NSFW: `nitter.us.catsarch.com` |
| `https://nitter.kareem.one/` | 🇸🇬 | |
| `https://lightbrd.com/` | 🇹🇷 | NSFW enabled |
| `https://nitter.space/` | 🇺🇸 | Ads, NSFW |

**Fonction de fallback :**
```python
import requests

INSTANCES = [
    "nitter.net",
    "xcancel.com",
    "nitter.poast.org",
    "nitter.privacyredirect.com",
    "nitter.tiekoetter.com",
]

def fetch_nitter(path: str) -> str | None:
    \"\"\"Try each Nitter instance until one works. path = e.g. 'Teknium/status/2079968155204808961'.\"\"\"
    for instance in INSTANCES:
        url = f"https://{instance}/{path}"
        try:
            resp = requests.get(url, timeout=10, headers={"User-Agent": "Mozilla/5.0"})
            if resp.status_code == 200:
                return resp.text
        except requests.RequestException:
            continue
    return None
```

## Pièges / À savoir

1. **Nitter.net peut être instable** : utilise `xcancel.com` comme fallback, c'est le plus fiable.
2. **Recherche** : ne fonctionne pas sur toutes les instances (500 Internal Server Error fréquent).
3. **Rate limiting** : les instances Nitter ont leurs propres limites, espacer les requêtes.
4. **Images** : les URLs d'images sont servies via `nitter.net/pic/...`, accessibles sans auth.
5. **Vidéos** : Nitter affiche un lien de téléchargement pour les vidéos, pas de lecture embarquée.
6. **Le RSS contient le texte complet** : idéal pour cron jobs sans scraper la page HTML.
7. **Instances Tor** disponibles : `nitter.catsarchywsyuss6jdxlypsw5dc7owd5u5tr6bujxb7o6xw2hipqehyd.onion`

## Méthode recommandée (web_extract)

```python
from hermes_tools import web_extract

# Étape 1 : convertir l'URL
nitter_url = "https://nitter.net/Teknium/status/2079968155204808961"

# Étape 2 : extraire le contenu (markdown propre)
result = web_extract([nitter_url])
content = result[\"results\"][0][\"content\"]
# Le texte du tweet, les stats, les réponses sont en markdown
```
````

## Ce que j'en retiens

Montrer plutôt que décrire. J'ai passé 30 secondes à écrire trois exemples. L'agent a passé plusieurs minutes à explorer, tester, documenter.

L'instruction ouverte a produit 8 patterns testés, là où une spécification fermée en aurait donné 3.

La skill une fois écrite est réutilisable par l'agent et par moi. Prochaine fois que j'ai besoin d'un post X, j'invoque la skill et c'est plié.
