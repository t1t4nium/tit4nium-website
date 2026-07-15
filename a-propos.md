---
layout: page
nav_title: about
nav_order: 2
title: /about
permalink: /about/
description: "Qui se cache derrière tit4nium ? Ingénieur, bidouilleur, curieux."
---

<div class="about-header">
  <img src="{% link assets/images/avatar.jpeg %}" alt="Avatar" class="about-avatar" width="64" height="64">
  <div>
    <h1>/home/tit4nium</h1>
    <p style="color: var(--text-muted); font-family: var(--font-mono); font-size: 0.85rem;">
      UID: 1000 &middot; SHELL: /usr/bin/bash &middot; uptime: <span id="uptime">calcul…</span>
    </p>
  </div>
</div>

Je suis **tit4nium**. Ce blog est mon journal de bord technique, un endroit où je note ce que j'expérimente, ce que j'apprends, ce que je casse et comment je le répare.

## Domaines

- **Agents IA / LLM** : déploiement, automatisation, agents autonomes, inference locale et cloud
- **Linux & FreeBSD** : administration système, durcissement, optimisation, auto-hébergement
- **Open source** : contributions, retours d'expérience, alternatives aux solutions propriétaires
- **Sécurité** : sécurité informatique, protection de la vie privée

## Ce que je fais

Ingénieur par expérience, bidouilleur par plaisir. J'aime comprendre ce qui se passe sous le capot. Si un logiciel ne fait pas ce que je veux, j'ouvre le code. Si un système résiste, je trouve le chemin. Je contribue à des projets open source, je répare des trucs et propose des améliorations.

Je suis du genre à préférer un vieux laptop qui fait le même travail qu'un serveur à 50 €/mois. À documenter mes échecs autant que mes réussites. À croire que le bon outil est celui qu'on maîtrise, pas celui qu'on installe en deux clics.

De la vieille école, j'adhère à la philosophie [KISS](https://fr.wikipedia.org/wiki/Principe_KISS), je préfère la simplicité à l'overengineering.

## Contact

{% for link in site.social_links %}
- **{{ link.label }}** : <a href="{{ link.url }}">{{ link.url }}</a>
{% endfor %}
