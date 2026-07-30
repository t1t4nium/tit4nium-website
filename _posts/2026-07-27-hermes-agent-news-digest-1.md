---
title: "Hermes Agent News Digest #1"
tags: [hermes-agent, news-digest]
---

Deux annonces de taille du côté de Nous Research ce week-end, sans nouvelle release taguée mais avec pas mal de mouvement sur la branche main.

Progressive disclosure des outils MCP, 51 PRs en un week-end et intégration Buzz.

---

## Progressive disclosure pour les outils MCP et plugins

Teknium a annoncé dimanche 26 juillet une refonte de la gestion des outils MCP et plugins dans Hermes Agent. Le problème : plus vous ajoutez d'outils MCP, plus leurs descriptions consomment de tokens de contexte, jusqu'à saturer la fenêtre et dégrader la qualité des réponses.

La solution implémentée est un mécanisme de **progressive disclosure**. Concrètement :

- Tant que les descriptions des outils MCP tiennent dans moins de 5 % du contexte disponible, l'agent voit l'intégralité de leurs noms et descriptions, comme avant.
- Au-delà de ce seuil, l'agent est informé qu'il dispose de N outils MCP accessibles via une fonction unique de recherche-et-exécution. Il sait qu'ils existent, mais il doit les retrouver dynamiquement plutôt que de les avoir en permanence sous les yeux.

Le résultat annoncé : une réduction significative du coût en tokens d'entrée, sans perte mesurable de précision dans les tests internes de Nous Research.

> Source : [@Teknium, 26 juillet 2026](https://x.com/Teknium/status/2081450522608107816)

---

## 51 PRs mergées samedi

Luke The Dev (@iamlukethedev) a compilé le résultat de la journée de développement du samedi 26 juillet : **51 pull requests mergées**, dont 15 fonctionnalités et 36 correctifs de stabilité. Teknium a relayé le récapitulatif. Voici les changements notables :

**Performance**
- Démarrage du worktree 8,7× plus rapide : `hermes -w` passe de 14s à 1,8s grâce à un cache parallélisé.
- Timeouts de compression adaptatifs : les modèles lents ne sont plus pénalisés uniformément.

**Stabilité et récupération**
- Récupération de session hors ligne : une base `state.db` corrompue se répare sans réinitialisation destructive.
- Base SQLite automatiquement sécurisée : les builds vulnérables de SQLite sont patchées à la mise à jour.

**Interface et commandes**
- File d'attente pour `/goal` : les commandes s'empilent si l'agent est occupé au lieu de disparaître.
- Routage des slash commands corrigé : les commandes ciblent désormais la session active, pas une session aléatoire.
- Liens `@session` cliquables : navigation directe vers une session depuis le chat.

**Intégrations**
- Génération d'images Codex restaurée.
- Support des providers stream-only : les modèles auxiliaires qui ne produisent que du streaming fonctionnent désormais sans accroc.
- Phase 3 de l'interactivité relay : validations et invites de clarification natives Telegram/Discord avec cycle d'accusé de réception.

> Source : [Luke The Dev relayé par @Teknium, 26 juillet 2026](https://x.com/Teknium/status/2081525680156955111)

---

## Intégration communautaire Hermes + Buzz

Une intégration communautaire permet d'utiliser Hermes Agent dans [Buzz](https://github.com/amanning3390/buzz), l'agent builder de Block (ex-Square). L'intégration officielle est annoncée comme « à venir », mais ce fork communautaire fonctionne dès maintenant.

> Source : [@mr_r0b0t relayé par @Teknium, 27 juillet 2026](https://x.com/Teknium/status/2081588817878822930)

---

## Sources

- [@Teknium - Progressive disclosure MCP/plugins, 26 juillet 2026](https://x.com/Teknium/status/2081450522608107816)
- [@Teknium - 51 PRs Saturday (Luke The Dev), 26 juillet 2026](https://x.com/Teknium/status/2081525680156955111)
- [@Teknium - Intégration Buzz, 27 juillet 2026](https://x.com/Teknium/status/2081588817878822930)
- [Dépôt GitHub - Intégration Buzz community](https://github.com/amanning3390/buzz)
