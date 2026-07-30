---
title: "Hermes Agent News Digest #3"
tags: [hermes-agent, news-digest]
---

Streaming TTS accéléré, Hermes en tête du benchmark Composio, et -50% sur GPT Terra/Luna dans le Nous Portal.

---

## Le TTS en streaming arrive dans Hermes Agent

Teknium a annoncé le 29 juillet que les appels vocaux dans Hermes Agent sont désormais nettement plus rapides. La plupart des backends TTS supportés diffusent maintenant la synthèse vocale en streaming (chunk par chunk) au lieu d'attendre le fichier audio complet.

Résultat : un temps de réponse vocale beaucoup plus court, qui se rapproche d'une conversation en temps réel. L'annonce ne précise pas si cette fonctionnalité est déjà disponible sur la branche stable ou si elle nécessite la branche main, mais le mécanisme semble opérationnel côté API.

> Source : [@Teknium, 29 juillet 2026](https://x.com/Teknium/status/2082339029375426914)

---

## Hermes Agent est le harness le plus rapide, selon le benchmark Composio

Composio a publié le 29 juillet les résultats d'un benchmark comparant trois harnesses d'agents autonomes : Hermes Agent, Kimi Code et Claude Code. Les chiffres :

- **Taux de réussite** : 22/28 pour Kimi Code, 21/28 pour Hermes, 20/28 pour Claude Code
- **Temps médian par tâche** : 179 s pour Hermes, 297 s pour Kimi Code, 348 s pour Claude Code

Hermes est le harness le plus rapide (179 s médianes, presque deux fois plus vite que Claude Code). Kimi Code obtient le meilleur taux de réussite et la meilleure efficacité token. Les trois se tiennent en termes de scores bruts, mais l'écart de temps est significatif.

Teknium a relayé ces résultats en soulignant que le harness le plus rapide (Hermes) et le plus économe en tokens (Kimi Code) étaient différents, ce qui suggère des compromis architecturaux distincts entre les approches.

> Source : [@Composio relayé par @Teknium, 29 juillet 2026](https://x.com/composio/status/2082452274140311565)

---

## GPT Terra et Luna a -50 % dans le Nous Portal

Nous Research a annoncé le 28 juillet un partenariat avec OpenRouter pour proposer GPT-5.6 Terra et Luna à 50 % de réduction pendant une durée limitée dans le Nous Portal.

L'offre est accessible depuis portal.nousresearch.com. Teknium a confirmé la promotion en partageant le visuel de l'annonce. Aucune date de fin explicite n'a été communiquée.

> Source : [@NousResearch relayé par @Teknium, 28 juillet 2026](https://x.com/Teknium/status/2082138543204528518)

---

## Sources

- [@Teknium - TTS streaming, 29 juillet 2026](https://x.com/Teknium/status/2082339029375426914)
- [@Composio relayé par @Teknium - Benchmark harness, 29 juillet 2026](https://x.com/composio/status/2082452274140311565)
- [@Teknium - GPT Terra/Luna -50% dans Nous Portal, 28 juillet 2026](https://x.com/Teknium/status/2082138543204528518)