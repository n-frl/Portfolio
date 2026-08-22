# TODO — contenu à compléter

Chaque ligne correspond à un placeholder présent dans le code. Tant qu'un élément
est incomplet, l'interface affiche un badge **« To complete » **.

Pour vérifier qu'il n'en reste aucun :

```bash
grep -rn "isPlaceholder: true" src/data/
grep -rn "\[[A-Z]" src/data/
```

---

## Bloquant avant mise en ligne

### 1. Le CV en PDF
- [ ] Déposer le fichier dans `public/resume/Nabil-Elkorchi-Resume.pdf`
- [ ] Lire `public/resume/README.md` avant de commiter (le dépôt est public)
- [ ] Décider si le téléphone doit figurer dans le PDF téléchargeable

### 2. Formspree
- [ ] Créer un formulaire sur https://formspree.io
- [ ] Copier l'ID dans `.env.local` → `VITE_FORMSPREE_ID=`
- [ ] Envoyer un message de test et vérifier la réception
- [ ] Vérifier que le domaine GitHub Pages est autorisé côté Formspree

### 3. Chemin de base
- [ ] Renseigner le nom d'utilisateur GitHub de Nabil dans `.env.local`
      (`VITE_SITE_URL`) et dans `public/robots.txt`
- [ ] Vérifier que `VITE_BASE_PATH` correspond bien au nom du dépôt

---

## Contenu

### `src/data/profile.ts`
- [ ] **`tagline`** — une phrase, ce qu'il cherche et ce qu'il apporte
      *(ex : « Seeking a structural design engineering role in Massachusetts. »)*
- [ ] **`about[2]`** — troisième paragraphe : spécialisation visée au sein des
      structures, et type d'équipe recherché
- [ ] **`quickFacts` → « Work authorization »** — point regardé en premier par les
      recruteurs US. Renseigner ou supprimer la carte, mais ne pas la laisser vide.
- [ ] **`links` → LinkedIn** — créer le profil, puis remplacer `href: '/'` par
      l'URL réelle, `external: true`, et retirer `isPlaceholder`

### `src/data/experience.ts`
- [ ] **Stage de Boston** (`boston-internship`) — entièrement à remplir :
  - [ ] nom de l'entreprise
  - [ ] intitulé du poste
  - [ ] dates (`period` et `sortKey` au format `AAAA-MM`)
  - [ ] 3 à 5 puces, verbe d'action au passé, un chiffre si possible
  - [ ] outils utilisés
  - [ ] retirer `isPlaceholder: true` — **sinon l'entrée reste en tête de liste**

### `src/data/education.ts`
- [ ] **`secondary-school`** — soit renseigner le lycée, soit **supprimer le bloc**
      (sur un CV américain, le lycée disparaît une fois à l'université)
- [ ] **FAA Part 107** — date d'obtention
- [ ] **AGC UMass** — dates du mandat

### `src/data/skills.ts`
- [ ] **`codes-standards`** — le plus important pour un poste de *design engineer* :
      lister uniquement les codes réellement étudiés ou appliqués
      *(candidats : ASCE 7, AISC 360, ACI 318, IBC, Massachusetts State Building Code)*
- [ ] **`programming`** — langages issus du cours « Programming for Civil Engineering »
      et du projet drone
- [ ] Vérifier que **SAFE 2000** est le bon nom du produit (CSI commercialise
      « SAFE » ; « SAFE 2000 » est une ancienne appellation)

### `src/data/projects.ts`
- [ ] **`ada-slope-study`** — préciser le semestre
- [ ] **`drone-project`** — à documenter. Combiné à la licence FAA Part 107, c'est
      le point qui différencie le plus Nabil des autres candidats.
- [ ] **`structural-project`** — un projet SAP2000 / SAFE. Sans ça, la page
      « Skills » annonce des logiciels que rien ne vient illustrer.

---

## Améliorations possibles (non bloquantes)

- [ ] Photo professionnelle à la place de l'avatar générique
      (`AvatarPlaceholder` dans `src/components/ProfileBanner.tsx`)
- [ ] Image OpenGraph (`public/og-image.png`, 1200×630) pour l'aperçu lors des partages
- [ ] Visuels de projets : plans, captures de modèles, photos de chantier
      — **vérifier les droits avant publication**, les plans d'un employeur ne
      sont en général pas diffusables
- [ ] `sitemap.xml` et décommenter la ligne dans `robots.txt`
- [ ] Domaine custom OVH : voir la section « Déploiement » de `CLAUDE.md`
- [ ] Version française du site (la couche `src/data/` est déjà structurée pour)

---

## Vérifications finales

- [ ] `npm run build` passe sans erreur
- [ ] `npm run lint` ne remonte rien
- [ ] Navigation clavier complète (Tab depuis le haut de page, le lien
      « Skip to content » doit apparaître en premier)
- [ ] Rendu correct à 360 px de large
- [ ] Thème sombre vérifié sur les quatre pages
- [ ] Rafraîchir directement `/experience` en production : le fallback SPA doit
      fonctionner (c'est le piège classique de GitHub Pages)
- [ ] Relecture orthographique en anglais américain
- [ ] `git ls-files` — vérifier qu'aucun fichier personnel n'est suivi
