# Portfolio — Nabil Elkorchi

Portfolio personnel : génie civil et environnemental, orienté structures.
Site statique, quatre pages, aucun backend.

**Stack** — Vite · React 18 · TypeScript · Tailwind CSS 3 · React Router 6 · Formspree

---

## Démarrage

```bash
git clone https://github.com/n-frl/Portfolio.git
cd Portfolio

npm install
cp .env.example .env.local   # puis renseigner VITE_FORMSPREE_ID
npm run dev                  # http://localhost:5173
```

> Sans `VITE_FORMSPREE_ID`, tout le site fonctionne : seul l'envoi du formulaire
> affiche un message d'erreur explicite.

## Commandes

| Commande | Rôle |
|---|---|
| `npm run dev` | Serveur de développement avec rechargement à chaud |
| `npm run build` | Vérification TypeScript + build de production dans `dist/` |
| `npm run preview` | Sert le build de production en local (http://localhost:4173) |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |
| `npm run deploy` | Build + publication sur la branche `gh-pages` |

---

## Modifier le contenu

**Tout le contenu éditorial vit dans `src/data/`.** Aucun texte n'est écrit en dur
dans les composants.

| Fichier | Contenu |
|---|---|
| `profile.ts` | Nom, titre, à propos, liens, faits clés |
| `experience.ts` | Stages et expériences professionnelles |
| `education.ts` | Formation, certifications, engagement associatif, cursus |
| `skills.ts` | Compétences par catégorie, langues, centres d'intérêt |
| `projects.ts` | Projets |

Les éléments encore incomplets portent `isPlaceholder: true` et s'affichent avec
un badge **« To complete »**. La liste complète est dans [`TODO.md`](./TODO.md).

---

## Déploiement sur GitHub Pages

### Première mise en ligne

1. Créer un dépôt **public** nommé `Portfolio` sur le compte GitHub de Nabil.
2. Pousser le code sur `main`.
3. Vérifier que `.env.local` contient :
   ```
   VITE_BASE_PATH=/Portfolio/
   ```
4. Publier :
   ```bash
   npm run deploy
   ```
   La commande construit le site et pousse `dist/` sur la branche `gh-pages`.
5. Dans **Settings → Pages** du dépôt : source = branche `gh-pages`, dossier `/ (root)`.
6. Le site est en ligne sur `https://n-frl.github.io/Portfolio/`
   (compter une à deux minutes au premier déploiement).

### Pourquoi un fichier `public/404.html` ?

GitHub Pages sert des fichiers statiques et ne connaît pas les routes gérées côté
client : ouvrir directement `/experience` renverrait une erreur 404. Le fichier
`404.html` encode l'URL demandée dans la query string et redirige vers `index.html`,
qui la restaure. C'est la technique classique
[spa-github-pages](https://github.com/rafgraph/spa-github-pages) — aucun backend requis.

### Passage à un domaine custom (OVH)

Trois modifications, à faire ensemble :

1. `.env.local` → `VITE_BASE_PATH=/`
2. `public/404.html` → `var pathSegmentsToKeep = 0;`
3. Créer `public/CNAME` contenant uniquement le domaine, par exemple :
   ```
   nabilelkorchi.com
   ```

Puis chez OVH, pour un domaine apex, quatre enregistrements `A` vers les IP de
GitHub Pages, ou un `CNAME` vers `<utilisateur>.github.io` pour un sous-domaine.
Enfin, activer **Enforce HTTPS** dans Settings → Pages une fois le certificat émis.

---

## Notes de conception

**Contraste.** Le brief demandait `#00FFFF` comme couleur d'accent. Sur fond blanc,
ce cyan pur atteint un ratio de contraste de 1,3:1, très en dessous du seuil WCAG AA
de 4,5:1 exigé pour du texte. Il est donc utilisé pour les **traits et les graphismes**
(token `accent-line`), tandis que le texte et les liens utilisent un cyan assombri
`#046C7A` (token `accent`, 5,8:1). En thème sombre, le cyan pur reprend son rôle plein.

**Confidentialité.** Le seul canal de contact est le formulaire : l'e-mail et le
téléphone ne sont pas publiés en clair, pour limiter le scraping. Les polices sont
auto-hébergées via `@fontsource` — aucun appel à un CDN tiers, donc aucune fuite
d'adresse IP des visiteurs. Pas d'analytics, donc pas de bandeau cookies.

**Accessibilité.** Lien d'évitement, navigation clavier complète, focus visible,
`prefers-reduced-motion` respecté, catégories de compétences en `<details>` natifs
(fonctionnent même sans JavaScript).

---

## Licence

Code sous licence MIT. Le contenu éditorial et le CV restent la propriété de
Nabil Elkorchi.
