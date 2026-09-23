---
title: "Confinement d'un agent autonome : le restreindre à un dossier de travail"
tags: [hermes-agent, securite]
---

Un agent IA autonome a, par défaut, accès à tout ce que l'utilisateur peut lire et écrire sur la machine. Pour une installation desktop, c'est beaucoup : l'agent peut toucher à des fichiers qui n'ont rien à voir avec la tâche demandée. J'ai passé la session du 20 août à restreindre Hermes Agent à un dossier de travail précis, et à comprendre ce qu'un tel confinement couvre réellement.

## Le problème

Le but était simple : que l'agent ne puisse pas sortir d'un dossier de travail, ni lire ni écrire en dehors. Sur le papier, ça ressemble à une option de sandbox. En pratique, il faut distinguer deux choses que le terme de confinement mélange souvent : la capacité d'écrire des fichiers, et la capacité d'exécuter des commandes. Ce ne sont pas les mêmes mécanismes, et ils ne se configurent pas au même endroit.

## Ce qui ne suffit pas

La première approche naturelle, c'est de compter sur les règles d'approbation des commandes. Elles existent, mais elles ne confinent pas : elles demandent un avis humain avant une commande jugée dangereuse. C'est un contrôle ponctuel, pas une clôture. Et un agent en mode débridé (yolo) les contourne par définition.

L'autre réflexe, restreindre le répertoire de travail, ne limite pas non plus l'accès au disque : l'agent peut lire un fichier en dehors du dossier de travail, à condition que ce ne soit pas un chemin protégé. Le répertoire de travail et la frontière d'écriture sont deux paramètres indépendants.

## Ce qui marche pour l'écriture

Le levier qui confine réellement l'écriture, c'est la variable d'environnement `HERMES_WRITE_SAFE_ROOT`. Quand elle est définie, les outils `write_file` et `patch` ne peuvent cibler que les chemins situés dans les préfixes listés. Tout ce qui est en dehors est bloqué en dur, sans passer par la demande d'approbation et sans possibilité de dérogation depuis l'interface. Plusieurs dossiers se séparent par `:` sur Unix.

```bash
export HERMES_WRITE_SAFE_ROOT=/path/to/project:/home/you/.hermes
```

Deux détails importants à connaître avant de s'en servir.

D'abord, si on pointe la racine sur un dossier de projet, l'agent ne peut plus écrire l'état interne de l'outil (fichiers de cron, skills, config) qui vit en dehors de ce préfixe. Il faut donc ajouter explicitement le répertoire de la maison de l'agent dans la liste, sinon on casse des fonctions sans rapport avec le confinement.

Ensuite, la frontière ne s'applique qu'aux écritures via `write_file` et `patch`. Les commandes exécutées dans le terminal restent un autre sujet : une commande comme `rm` ou `mv` n'est pas filtrée par `HERMES_WRITE_SAFE_ROOT`. Pour cloisonner réellement une installation desktop, le plus solide reste l'isolation de conteneur (Docker), où le conteneur lui-même devient la frontière et où les contrôles de commandes host sont sautés par construction.

## Ce que j'en retiens

1. Le confinement se raisonne par surface, pas par intention. Deux mécanismes distincts (écriture de fichiers, exécution de commandes), deux réglages différents, et aucun des deux ne remplace l'autre.
2. Les chemins sensibles restent protégés quoi qu'il arrive : pointer `HERMES_WRITE_SAFE_ROOT` sur `$HOME` ne permet pas d'écrire `~/.ssh/id_rsa` ou un `.env`. Il y a une liste de chemins interdits qui s'applique en plus, sans contournement.
3. Pour un agent qui doit rester dans un dossier précis, `HERMES_WRITE_SAFE_ROOT` est la réponse correcte à l'écriture. Pour la lecture et l'exécution en isolation stricte, il faut un conteneur. Le choix se joue sur le niveau de menace qu'on veut écarter.

## Sources

- [Hermes Agent - Security : File Write Safety, HERMES_WRITE_SAFE_ROOT](https://hermes-agent.nousresearch.com/docs/user-guide/security)
- [Hermes Agent - Référence des variables d'environnement : HERMES_WRITE_SAFE_ROOT](https://hermes-agent.nousresearch.com/docs/reference/environment-variables)
