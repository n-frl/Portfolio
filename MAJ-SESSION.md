# Mise a jour - workflow GitHub Actions + contenu valide par Nabil

## Fichiers ajoutes

| Fichier | Role |
|---|---|
| `.github/workflows/deploy.yml` | Build et deploiement automatiques sur push vers `main` |
| `.gitignore` | **Absent de l'archive recue** - recree (protege `.env.local` et `node_modules`) |
| `.env.example` | **Absent de l'archive recue** - recree |
| `tsconfig.json` | **Absent de l'archive recue** - recree (racine avec references) |
| `postcss.config.js` | **Absent de l'archive recue** - recree (Tailwind + autoprefixer) |
| `.vscode/extensions.json` | Extensions recommandees, proposees a l'ouverture du dossier |
| `public/images/hero-construction.webp` | Nouvelle banniere (82 Ko) |

> Si ces fichiers existent deja dans ton depot, garde tes versions :
> elles ont ete recreees uniquement parce qu'elles manquaient dans le zip.

## Fichiers modifies

- `package.json` - scripts `predeploy` et `deploy` supprimes
- `src/components/ProfileBanner.tsx` - photo a la place de la trame, badge tagline retire
- `src/data/profile.ts` - Fall 2026, Master's Fall 2027, US Citizen
- `src/data/education.ts` - periode et liste de cours
- `src/data/skills.ts` - deux categories supprimees
- `src/data/projects.ts` - projet drone complet
- `src/data/experience.ts` - tirets
- `src/pages/Home.tsx` - 5 reperes, puces du projet
- `src/pages/Skills.tsx`, `Experience.tsx`, `Contact.tsx` - intros et libelles
- `src/components/Header.tsx`, `ui.tsx`, `NotFound.tsx`, `index.html` - tirets

## Verifications passees

- `npm ci` puis `npm run build` : succes
- `npm run lint` : aucune erreur
- `hero-construction.webp` present dans `dist/images/`
- Plus aucun `isPlaceholder: true` dans les donnees

## Reste a faire

1. Settings > Pages > Source : **GitHub Actions**
2. Settings > Secrets and variables > Actions > **Variables** :
   - `VITE_FORMSPREE_ID` = `meajdrvn`
   - `VITE_BASE_PATH` = `/Portfolio/` (puis `/` au passage au domaine)
   - `VITE_SITE_URL` = `https://n-frl.github.io/Portfolio`
3. Achat du domaine OVH + zone DNS
4. `public/CNAME` + `pathSegmentsToKeep = 0` dans `public/404.html`
