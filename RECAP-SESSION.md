# Récapitulatif de session — Portfolio Nabil Elkorchi

**Date :** 22 août 2026
**Objet :** Conception et mise en place d'un portfolio web pour Nabil Elkorchi,
étudiant en génie civil (structures), en recherche de poste de *design engineer*
au Massachusetts.

---

## 1. Le brief

### Demande initiale

Un portfolio en **anglais américain**, à partir d'un CV, dans un esprit
« LinkedIn interactif » : simple, épuré, professionnel. Quatre pages : accueil,
parcours, compétences, contact (formulaire Formspree). Hébergement GitHub,
édition dans VS Code, itérations avec Claude Code. Stack JS libre.

### Contrainte structurante

> **Interdiction d'inventer des données.** Placeholders explicites à compléter au
> fur et à mesure avec de vraies informations.

Cette règle a guidé toute l'architecture du projet.

### Cadrage

46 questions posées avant toute génération de code, groupées par thème : sujet,
contenu, design, stack, hébergement, formulaire. Réponses obtenues, puis le CV
transmis en PDF.

---

## 2. Les décisions retenues

### Le sujet

| Point | Réponse |
|---|---|
| Genre | Masculin |
| Cible | *Design engineer*, Massachusetts |
| Spécialité | Structures |
| Niveau | Licence en cours (UMass Amherst, promotion mai 2027) |
| Marché visé | États-Unis |
| Langue du site | Anglais US uniquement, pour commencer |

### La stack

| Élément | Choix | Justification |
|---|---|---|
| Build | **Vite 5** | Site statique ; Next.js écarté (SSR inutile, déploiement GitHub Pages plus contraignant) |
| Framework | **React 18 + TypeScript** | Typage de la couche de données |
| Styles | **Tailwind CSS 3** | Itération rapide, tokens centralisés |
| Routing | **React Router 6**, `BrowserRouter` | Vraies URLs ; fallback SPA via `404.html` |
| Formulaire | **Formspree** | Zéro backend |
| Polices | **@fontsource** (npm) | Auto-hébergées : aucun appel CDN, aucune fuite d'IP visiteur |
| Déploiement | **branche `gh-pages`** via npm | Conforme à la demande (branche, pas Actions) |

### Le design

- Fond blanc, accent `#00FFFF`, dark mode avec bascule dans l'en-tête
- Compétences en *pills* groupées, catégories rabattables — **pas de barres de
  pourcentage** (invérifiables, mal perçues sur un profil d'ingénieur)
- Mobile first, animations sobres
- Esprit LinkedIn, pas un clone

---

## 3. Deux arbitrages techniques signalés

### Le contraste de `#00FFFF`

Le cyan pur sur fond blanc atteint un ratio de **1,3:1**, très en dessous du
seuil WCAG AA de **4,5:1** exigé pour du texte.

**Solution retenue :** séparation en deux tokens.

| Token | Valeur | Usage |
|---|---|---|
| `accent-line` | `#00FFFF` | Traits, ticks, puces, rails — **jamais du texte** |
| `accent` | `#046C7A` (5,8:1) | Texte, liens, boutons |

En thème sombre, le cyan pur reprend son rôle plein. Un seul point de
modification dans `src/index.css` si l'arbitrage doit être revu.

### L'élément signature

Plutôt qu'une bannière en dégradé — le réflexe attendu — le bandeau d'accueil
reprend une **trame de coffrage** : traits fins cyan, bulles de repérage
alphanumériques (A/B/C/D/E), ligne de cote à ticks. C'est le vocabulaire d'un
plan de structure, ancré dans le métier de Nabil.

C'est le seul endroit où `#00FFFF` s'exprime à pleine intensité. Le même motif se
retrouve en filigrane sur l'avatar et dans le favicon. Tout le reste du site
demeure sobre.

---

## 4. Le contenu

### Réel, issu du CV

- **Co Ex Engineering** — Topography Intern, Rabat, juin–août 2024
  (GPS base/rover, CHCNAV i50 GNSS, scanner 3D Leica, station totale,
  AutoCAD, Pix4Dmapper, CloudWorx)
- **Luseo Engineering** — Project Manager Intern, Rabat, juin–juillet 2025
  (complexe hospitalier Mohammed VI, 270 000 m², RFI, conformité)
- **UMass Amherst** — BS Civil and Environmental Engineering, mai 2027, GPA 3,4
- **FAA Part 107**, porte-parole du chapitre AGC
- Douze cours suivis, projet ADA, trilingue EN/FR/AR, centres d'intérêt

Le tout reformulé en anglais US, style CV américain (verbes d'action au passé).

### Placeholders — onze au total

Chaque élément manquant porte un texte `[ENTRE CROCHETS]` et
`isPlaceholder: true`, ce qui déclenche un badge **« To complete »** visible sur
le site. Impossible de confondre avec une vraie donnée, impossible d'en oublier.

Principaux manques : le stage de Boston (entièrement vide), la phrase d'accroche,
le statut d'autorisation de travail, les codes de conception, le projet drone,
un projet SAP2000.

### Un point de vigilance relevé

**« SAFE 2000 »** — CSI commercialise le produit sous le nom « SAFE ». À vérifier
avec Nabil avant qu'un recruteur ne le remarque.

---

## 5. Ce qui a été livré

**49 fichiers.** `npm run build` et `npm run lint` passent sans erreur.

```
portfolio-nabil/
├── src/
│   ├── data/          ← TOUT le contenu éditorial (5 fichiers + types)
│   ├── components/    ← ui, Header, Footer, Layout, ProfileBanner, ScrollToTop
│   ├── pages/         ← Home, Experience, Skills, Contact, NotFound
│   ├── hooks/         ← useTheme, useReveal, useDocumentMeta
│   ├── lib/           ← base.ts (préfixe d'URL), cx.ts
│   └── index.css      ← tokens de couleur, thèmes, accessibilité
├── public/            ← 404.html (fallback SPA), favicon, robots.txt, resume/
├── CLAUDE.md          ← conventions pour Claude Code
├── GUIDE-WINDOWS.md   ← guide débutant, workflow VS Code
├── TODO.md            ← les 11 placeholders, listés et priorisés
├── README.md          ← installation, déploiement, notes de conception
├── verify.sh          ← contrôle d'intégrité de l'extraction
└── .gitignore         ← commenté section par section, orienté anti-fuite
```

**Séparation stricte données / présentation :** aucun composant ne contient de
texte éditorial en dur. Modifier un intitulé de poste se fait dans `src/data/`.

### Sécurité et vie privée

- E-mail et téléphone **non publiés** sur le site : formulaire uniquement
- Polices auto-hébergées : aucun appel à un CDN tiers
- Pas d'analytics, donc pas de bandeau cookies
- `.gitignore` commenté, avec les commandes d'audit (`git check-ignore -v`,
  `git ls-files`)
- Avertissement sur le CV PDF : dépôt public, historique git permanent

### Accessibilité

Lien d'évitement, navigation clavier complète, focus visible,
`prefers-reduced-motion` respecté, catégories de compétences en `<details>`
natifs (fonctionnent sans JavaScript).

---

## 6. Les incidents résolus

Cette partie de la session a été plus longue que la génération du code.

### Dotfiles perdus à l'extraction

`.env.example` et `.gitignore` absents après copie. Cause : le glob `*` du shell
ignore les fichiers commençant par un point. Vérifié que l'archive les contenait
bien.

**Correctif :** `unzip` plutôt qu'une copie manuelle ; ajout d'un script
`verify.sh` (49 fichiers contrôlés) et d'une archive `.tar.gz` alternative.

**À retenir :** `cp -a source/. destination/` ou `rsync -a` n'oublient jamais les
dotfiles.

### `ENOENT: package.json` — trois occurrences

`npm install` lancé depuis le dossier parent. S'est reproduit sous Linux puis
deux fois sous Windows.

**À retenir :** npm remonte l'arborescence pour chercher un `package.json`, ce
qui produit des messages déroutants. Vérifier le dossier courant avant chaque
commande.

### Casse du nom de dépôt

Le dépôt s'appelle `Portfolio`, pas `portfolio-nabil`. Les URLs GitHub Pages sont
sensibles à la casse. Trois fichiers réalignés sur `/Portfolio/` : `.env.local`,
`.env.example`, `robots.txt`.

### Rattachement à un dépôt non vide

Le dépôt distant contenait déjà un commit (`LICENSE`, `README.md`). Résolu par
`git fetch` + `git reset origin/main` (mixed), qui adopte l'historique distant
sans toucher aux fichiers locaux — ni écrasement en force, ni historique
parallèle.

**Commit `bf1a5ba` créé : 49 fichiers, 7864 insertions.**

### L'authentification Git — le blocage principal

Trois couches de problèmes empilées :

1. **`credential.helper` de VS Code** pointant vers une socket Unix morte
   (`ECONNREFUSED`) depuis un terminal externe
2. **Variable multi-valuée** : ajouter `cache` ne remplace pas l'auxiliaire
   défaillant, git les exécute tous dans l'ordre
3. **`GIT_ASKPASS`** hérité de l'environnement VS Code : git déléguait la saisie
   à un programme graphique, donc **aucun prompt ne s'affichait**

**Résolu par :**
```bash
env -u GIT_ASKPASS -u SSH_ASKPASS -u VSCODE_GIT_ASKPASS_NODE \
    -u VSCODE_GIT_ASKPASS_MAIN -u VSCODE_GIT_IPC_HANDLE \
  git -c core.askPass= push origin main
```

Le prompt est apparu. **Le push a ensuite échoué sur un token invalide** —
GitHub n'accepte plus les mots de passe pour les opérations git.

### Politique d'exécution PowerShell (Windows)

`npm.ps1 cannot be loaded because running scripts is disabled`.

**Correctif :** `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser` —
recommandé par Microsoft, sans droits administrateur, sans descendre à
`Unrestricted`.

### État dpkg cassé (Debian)

`apt install gh` a entraîné une mise à niveau de noyau en échec. Cause probable :
`/boot` saturé. **Non résolu**, contourné.

⚠️ **Tant que dpkg est dans cet état, aucune mise à jour de sécurité ne
s'applique.** À traiter.

---

## 7. État d'avancement

### Fait

- [x] Cadrage complet (46 questions)
- [x] Projet généré, 49 fichiers, build et lint verts
- [x] Contenu du CV intégré, placeholders balisés
- [x] Documentation : CLAUDE.md, README.md, TODO.md, GUIDE-WINDOWS.md
- [x] Dépôt git initialisé, historique distant rattaché
- [x] Commit `bf1a5ba` créé en local

### En cours

- [ ] **Le push n'a jamais abouti.** Le code n'est pas sur GitHub.
- [ ] Conséquence directe : le clone Windows ne récupère que `LICENSE` et
      `README.md`

### Reste à faire

**Débloquer le push** — deux voies :

*Depuis la Debian*, avec un token classique (https://github.com/settings/tokens/new,
case `repo`), collé avec **Ctrl+Shift+V** :
```bash
env -u GIT_ASKPASS -u VSCODE_GIT_ASKPASS_NODE -u VSCODE_GIT_ASKPASS_MAIN \
  git -c core.askPass= push origin main
```

*Ou depuis Windows*, via l'onglet Source Control de VS Code — c'est le chemin
recommandé dans `GUIDE-WINDOWS.md`, VS Code gère l'auth GitHub en OAuth natif et
évite entièrement le problème.

**Puis, dans l'ordre :**

1. `npm run deploy` (publie sur la branche `gh-pages`)
2. GitHub → Settings → Pages → source `gh-pages` / `(root)`
3. Tester `https://n-frl.github.io/Portfolio/experience` en accès direct — valide
   le fallback SPA
4. Compléter les placeholders (voir `TODO.md`)

---

## 8. Points en suspens

| Sujet | Nature |
|---|---|
| **Push non abouti** | Bloquant pour la suite |
| **dpkg cassé (Debian)** | Sécurité — hors projet, mais à ne pas laisser traîner |
| **Projet dans OneDrive (Windows)** | À déplacer vers `C:\Dev\` avant `npm install` |
| **CV PDF dans un dépôt public** | Décision à prendre sur le numéro de téléphone |
| **Attribution des commits** | `user.email` fixé sur celui de Nabil ; l'onglet Activity montrera quand même le compte qui pousse |
| **« SAFE 2000 »** | Nom du produit à confirmer |

---

## 9. Ce qui vaut d'être retenu

**Sur les outils.** Trois des blocages de la session venaient de
l'**environnement**, pas du code : dotfiles invisibles au glob, `cwd` incorrect,
variables héritées de VS Code. C'est le genre de panne qui ne ressemble pas à sa
cause — le message d'erreur pointe vers npm ou git alors que le problème est
ailleurs.

**Sur `credential.helper`.** C'est une variable multi-valuée. Une réinitialisation
demande une valeur vide (`--add credential.helper ""`), pas un simple ajout.

**Sur `GIT_ASKPASS`.** Un prompt qui ne s'affiche pas n'est pas un bug de git :
c'est que la saisie est déléguée à un programme graphique injoignable.

**Sur le projet lui-même.** La séparation données / présentation, combinée aux
placeholders balisés, rend le site maintenable par quelqu'un qui n'écrit pas de
code — c'est précisément ce que permet le workflow VS Code décrit dans
`GUIDE-WINDOWS.md`.

---

## 10. Fichiers de référence

| Fichier | À lire quand |
|---|---|
| `GUIDE-WINDOWS.md` | Éditer et publier le site sans savoir coder |
| `TODO.md` | Savoir ce qu'il reste à compléter |
| `CLAUDE.md` | Itérer sur le code avec Claude Code |
| `README.md` | Installation, déploiement, notes de conception |
| `verify.sh` | Vérifier qu'une extraction est complète |
| `public/resume/README.md` | Avant de déposer le CV en PDF |
