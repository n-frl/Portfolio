# CLAUDE.md — conventions du projet

Portfolio personnel de **Nabil Elkorchi**, étudiant en génie civil et environnemental
(UMass Amherst, promotion 2027), orienté **structures**. Objectif : décrocher un poste
de *design engineer* au Massachusetts.

Ce fichier est lu automatiquement par Claude Code. Il fait autorité sur les
conventions du dépôt.

---

## Règle n°1 — ne jamais inventer de données

C'est la contrainte la plus importante du projet.

Toute information affichée doit provenir du CV de Nabil ou d'une confirmation
explicite de sa part. Si une information manque :

1. écrire un placeholder **entre crochets**, en majuscules, décrivant ce qu'il faut
   fournir — `'[BULLET 1 — what you were responsible for.]'` ;
2. poser `isPlaceholder: true` sur l'objet concerné ;
3. ajouter la ligne correspondante dans `TODO.md`.

Le composant `<TodoBadge />` affiche alors un badge « To complete » dans l'interface.
Un placeholder ne doit **jamais** pouvoir passer pour une donnée réelle.

Ne jamais « compléter au mieux » un trou : ni une date, ni un nom d'entreprise,
ni une compétence, ni un logiciel. Demander.

---

## Stack

| Élément | Choix | Pourquoi |
|---|---|---|
| Build | Vite 5 | Site statique, pas besoin de SSR ; déploiement GitHub Pages trivial |
| Framework | React 18 + TypeScript | Typage de la couche de données |
| Styles | Tailwind CSS 3 | Itération rapide, tokens centralisés |
| Routing | React Router 6 (`BrowserRouter`) | Vraies URLs ; fallback SPA via `public/404.html` |
| Formulaire | Formspree | Zéro backend |
| Polices | `@fontsource` (npm) | Auto-hébergées : aucun appel à un CDN tiers |
| Déploiement | `gh-pages` (branche) | `npm run deploy` |

**Aucun backend, aucune base de données, aucun état serveur.** Ne pas proposer
Next.js, Vercel, Supabase ou équivalent.

---

## Architecture

```
src/
├── data/          <- TOUT le contenu éditorial vit ici. Seul endroit à modifier
│   ├── types.ts        pour changer du texte.
│   ├── profile.ts
│   ├── experience.ts
│   ├── education.ts
│   ├── skills.ts
│   └── projects.ts
├── components/    <- Présentation uniquement, aucun texte en dur
│   ├── ui.tsx          icônes, Card, SectionHeading, Pill, TodoBadge, PageHeader
│   ├── Header.tsx      nav + bascule de thème
│   ├── Footer.tsx
│   ├── Layout.tsx      coquille + lien d'évitement
│   └── ProfileBanner.tsx
├── pages/         <- Une page = une route
│   ├── Home.tsx / Experience.tsx / Skills.tsx / Contact.tsx / NotFound.tsx
├── hooks/         <- useTheme, useReveal, useDocumentMeta
├── lib/           <- base.ts (préfixe d'URL), cx.ts
└── index.css      <- tokens de couleur + classes de composants
```

**Séparation stricte données / présentation.** Un composant ne contient jamais de
texte éditorial en dur. Pour modifier un intitulé de poste, éditer `src/data/`.

---

## Direction artistique

Le brief impose : fond blanc, accent `#00FFFF`, esprit LinkedIn (sans en être un clone),
sobre et professionnel.

### Couleurs — ne pas contourner les tokens

Tout est défini dans `src/index.css` sous forme de variables CSS au format `R G B`,
exposées à Tailwind dans `tailwind.config.js`.

> **Contrainte de contraste.** `#00FFFF` sur blanc donne un ratio de **1,3:1**,
> très en dessous du seuil WCAG AA (4,5:1). Le cyan pur est donc réservé aux
> **traits et graphismes** (`accent-line`). Pour tout texte, lien ou bouton, utiliser
> `accent` (`#046C7A`, 5,8:1 sur blanc).
>
> Ne jamais écrire du texte en `text-accent-line` sur fond clair.

| Token | Usage |
|---|---|
| `canvas` / `surface` / `surface-2` | fonds |
| `line` / `line-strong` | bordures et filets |
| `ink` / `ink-muted` / `ink-faint` | texte principal / secondaire / annotations |
| `accent` | texte, liens, boutons — **AA garanti** |
| `accent-line` | traits, ticks, puces, rails — **jamais du texte** |
| `accent-wash` | aplat de fond très clair |

Ne pas introduire de couleur en dur (`#hex` ou `bg-blue-500`) dans un composant.

### Typographie

- **Space Grotesk** (`font-display`) — titres uniquement, avec parcimonie
- **Inter** (`font-sans`) — corps de texte
- **JetBrains Mono** (`font-mono`) — dates, compteurs, eyebrows, repères : tout ce
  qui joue le rôle d'annotation de plan

### Élément signature

La **trame de coffrage** (`.blueprint-grid`) : traits fins cyan, bulles de repérage
alphanumériques, ligne de cote à ticks. Référence directe aux plans de structure.
C'est le seul endroit où `#00FFFF` apparaît à pleine intensité.

On dépense l'audace à un seul endroit. Le reste du site reste discipliné : cartes
blanches, filets gris, hiérarchie claire. **Ne pas ajouter de dégradés, de glassmorphism,
d'ombres colorées ou d'emoji.**

### Animations

Sobres : fondu + légère montée au scroll (`useReveal`), trait qui se dessine sous
l'onglet actif. `prefers-reduced-motion` est respecté globalement dans `index.css` —
ne pas le contourner.

---

## Plancher de qualité (non négociable)

- **Mobile first**, testé jusqu'à 360 px de large
- **WCAG AA** : contrastes respectés, focus clavier visible, navigation au clavier
  complète, `aria-*` corrects sur les états de formulaire
- `prefers-reduced-motion` respecté
- Aucune erreur ESLint, aucun `any`
- `npm run build` doit passer avant tout commit

---

## Commandes

```bash
npm run dev          # serveur de développement, http://localhost:5173
npm run build        # vérification TypeScript + build de production
npm run preview      # servir le build local
npm run lint         # ESLint
npm run format       # Prettier
npm run deploy       # build + publication sur la branche gh-pages
```

---

## Sécurité et vie privée

Le dépôt est **public**. Points de vigilance :

- Toute variable `VITE_*` finit **en clair dans le bundle JS**. Jamais de secret.
  L'ID Formspree est public par conception, ce n'est pas une exception à la règle.
- L'e-mail et le téléphone de Nabil ne sont **pas** affichés sur le site : le seul
  canal est le formulaire. Ne pas les réintroduire dans le HTML sans validation.
- Les polices sont auto-hébergées : ne pas remplacer par un lien Google Fonts,
  cela ferait fuiter l'IP des visiteurs.
- Pas d'analytics, donc pas de bandeau cookies. Ne pas en ajouter sans demander.

---

## Déploiement

Aujourd'hui : GitHub Pages « projet », donc le site vit sous `/Portfolio/`.

Deux valeurs doivent rester cohérentes :
- `VITE_BASE_PATH` dans `.env.local` → `/Portfolio/`
- `pathSegmentsToKeep = 1` dans `public/404.html`

**Le jour du passage au domaine custom (OVH)** : passer `VITE_BASE_PATH` à `/`,
`pathSegmentsToKeep` à `0`, et ajouter un fichier `public/CNAME` contenant le domaine.

---

## Ce qu'il ne faut pas faire

- Inventer une donnée manquante
- Écrire du texte en `accent-line` sur fond clair
- Mettre du contenu éditorial en dur dans un composant
- Ajouter une dépendance sans nécessité réelle (les icônes sont des SVG inline
  justement pour éviter une librairie d'icônes)
- Introduire un backend, un CMS ou une base de données
- Utiliser `localStorage` pour autre chose que la préférence de thème
