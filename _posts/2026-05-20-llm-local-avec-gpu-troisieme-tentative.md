---
title: "J'ai monté un LLM local avec GPU. La troisième tentative est la bonne."
tags: [llm-local, hermes-agent, debian]
---

Après avoir fait de mon GEEKOM A5 ma station de travail quotidienne, je me suis retrouvé avec ma tour, Core i5-10600K, 16 Go RAM, sans affectation. L'idée a germé tout seul : et si je la transformais en serveur d'inférence locale ? Je me suis donc offert quatre barrettes de 16 Go RAM et une RTX 3060 12 Go.

Mon objectif : un LLM local assez rapide pour un usage interactif avec Hermes Agent. Du temps réel, pas du batch ni un jouet.

Spoiler : après deux échecs instructifs, celui-ci tient la route.

---

## Ce que j'avais déjà appris

**[Premier essai :](/blog/vieux-laptop-agent-ia-autonome/)** un vieux laptop HP comme agent cloud. Ça marchait, mais l'inférence était déportée chez un fournisseur. Pas idéal pour les données sensibles.

**[Deuxième essai :](/blog/llm-local-minipc-crash-test/)** un GEEKOM A5 (Ryzen 5, 64 Go RAM, zéro GPU) avec llama.cpp en CPU-only. Résultat : 1-3 tokens/s. Une requête avec outils prenait plusieurs minutes. Utilisable pour du batch, pas pour une conversation.

La leçon était claire : **la RAM ne suffit pas. Il faut un GPU.**

---

## La config qui change tout

- Intel Core i5-10600K (6 coeurs / 12 threads, 4.1 GHz)
- 4x16 Go RAM DDR4 3200Mhz
- NVIDIA RTX 3060 12 Go VRAM
- 500 Go NVMe + 1 To HDD

### Linux

Debian 13 (trixie), comme mes autres machines. Rien d'exotique. Deux optimisations systématiques :

- `vm.swappiness=10` pour éviter de toucher au swap tant que la RAM suffit
- `noatime` sur `/` et `/backup` dans `/etc/fstab` pour réduire les écritures inutiles
- 16 Go de swap

### llama.cpp, compilé avec CUDA

J'ai compilé llama.cpp (release **b9254**) avec le support CUDA, sans WebUI :

```bash
git checkout b9254
cmake -B build \
  -DBUILD_SHARED_LIBS=OFF \
  -DGGML_CUDA=ON \
  -DLLAMA_BUILD_SERVER=ON \
  -DLLAMA_BUILD_WEBUI=OFF \
  -DLLAMA_USE_PREBUILT_WEBUI=OFF
cmake --build build --config Release -j 10
cmake --install build --prefix /opt/llama
```

Le service systemd :

```ini
[Unit]
Description=llama.cpp server
After=network.target

[Service]
Environment="GGML_CUDA_ENABLE_UNIFIED_MEMORY=1"
User=llama
Group=llama
WorkingDirectory=/etc/llama
ExecStart=/opt/llama/bin/llama-server \
  --host 127.0.0.1 \
  --port 8080 \
  --timeout 300 \
  --jinja \
  --flash-attn on \
  -ngl 99 \
  -c 65536 \
  -m /etc/llama/models/qwen3-14b-q4.gguf
Restart=on-failure
RestartSec=10

[Install]
WantedBy=default.target
```

#### `-ngl 99`

Tous les layers sur le GPU. Sans ça, une partie du modèle reste sur le CPU et le goulot PCIe tue les perfs.

#### `GGML_CUDA_ENABLE_UNIFIED_MEMORY=1`

La mémoire unifiée CUDA. Quand les 12 Go de la RTX 3060 sont saturés, le surplus déborde sur la RAM système (64 Go). Le prix : une baisse de performance sur les layers qui débordent (bande passante PCIe vs mémoire GPU). Pour un modèle 14B en Q4 (~9 Go), ça tient intégralement dans la VRAM. L'intérêt, c'est de pouvoir charger un modèle plus gros que la VRAM : un 20-24B en Q4 qui tient grâce au débordement, et les perfs restent acceptables pour du traitement par lots ou des tâches asynchrones.

### Le modèle

Le premier modèle chargé : **Qwen3 14B 128K Q4_K_M**. Un modèle ARM, ~9 Go en Q4. La quantification Q4_K_M est reconnue comme le meilleur compromis qualité/perf sur des petits setup.

Contexte configuré à **65 536 tokens** (limite basse Hermes Agent) : de quoi avaler des documents entiers sans rogner.

### Hermes Agent branché dessus

Hermes Agent **v0.14.0** permet de déclarer un fournisseur local OpenAI-compatible. Le serveur llama.cpp expose une API compatible, il suffit de pointer Hermes dessus :

- **URL** : `http://127.0.0.1:8080/v1`
- **Modèle** : le chemin du GGUF chargé par le serveur

Je bascule entre le provider cloud (Nous Portal) pour les tâches exploratoires et le provider local pour les données sensibles, les tests, et le travail hors-ligne.

---

## Usages concrets

Avec ce setup, je peux enfin :

- Travailler sur des données sensibles (fichiers clients, informations personnelles) sans les envoyer à un fournisseur cloud
- Résumer des articles longs : le contexte 64K avale des papiers entiers
- Traduire sans intermédiaire
- Tester des modifications de config Hermes localement avant de les déployer

---

## Ce que j'en retiens

Trois tentatives pour arriver à un LLM local fonctionnel :

1. **Vieux laptop sans GPU** : parfait pour un agent cloud, inutile pour de l'inférence
2. **Mini PC sans GPU** : CPU-only, trop lent pour du temps réel
3. **Tour avec GPU** : ça marche

La barrière, c'est **le GPU**. Pas la RAM, pas le CPU. Avec 12 Go de VRAM, un modèle 14B en Q4 tient confortablement. Et avec la mémoire unifiée CUDA, je peux même charger des modèles plus gros au prix d'une génération plus lente : un bon compromis pour les tâches sans contrainte de temps.

Le sweet spot actuel : un modèle 9B-14B en Q4-Q6 sur une carte avec 12+ Go de VRAM. Assez rapide pour l'interactif, assez capable pour les usages du quotidien.

---

## Appendix : commandes

```bash
# Prérequis à llama.cpp
sudo apt install build-essential cmake git nvidia-cuda-toolkit pkg-config
sudo useradd --system --no-create-home --shell /usr/sbin/nologin llama
sudo mkdir -p /opt/llama /etc/llama/models

# Build llama.cpp b9254
git clone https://github.com/ggml-org/llama.cpp.git
cd llama.cpp
git checkout b9254
cmake -B build -DBUILD_SHARED_LIBS=OFF -DGGML_CUDA=ON -DLLAMA_BUILD_SERVER=ON -DLLAMA_BUILD_WEBUI=OFF -DLLAMA_USE_PREBUILT_WEBUI=OFF
cmake --build build --config Release -j 10
sudo cmake --install build --prefix /opt/llama

# Après création du service systemd pour llama.cpp server
sudo systemctl daemon-reload
sudo systemctl enable --now llama-server

# Test rapide
curl -X POST http://127.0.0.1:8080/v1/completions \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Quelles sont les couleurs du drapeau français ?", "max_tokens": 100}'
```
