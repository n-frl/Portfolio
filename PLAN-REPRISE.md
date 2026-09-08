# Plan de reprise — Portfolio Nabil Elkorchi

**Objectif de la prochaine session :**
1. Le site accessible sur **https://n-frl.github.io/Portfolio/**
2. Les **11 placeholders remplis** avec les vraies informations de Nabil

Le domaine personnalisé viendra après, en dernier.

---

# Partie 1 — Bilan de ce qui a été fait

## 1.1 Cadrage

46 questions posées avant toute génération de code (sujet, contenu, design,
stack, hébergement, formulaire). Réponses obtenues, CV transmis en PDF.

**Contrainte structurante retenue :** interdiction d'inventer une donnée. Tout ce
qui manque est balisé et visible.

## 1.2 Décisions

| Sujet | Décision |
|---|---|
| Cible | *Design engineer*, structures, Massachusetts |
| Langue | Anglais US uniquement |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind 3 + React Router 6 |
| Formulaire | Formspree — aucun backend |
| Hébergement | GitHub Pages, branche `gh-pages` |
| Polices | `@fontsource` auto-hébergées, aucun CDN tiers |
| Design | Fond blanc, accent cyan, dark mode, mobile first |

**Deux arbitrages signalés :**

- **Contraste.** `#00FFFF` sur blanc donne 1,3:1, très en dessous du seuil WCAG AA
  (4,5:1). Séparé en deux tokens : `accent-line` (`#00FFFF`, traits uniquement) et
  `accent` (`#046C7A`, 5,8:1, pour tout texte et lien).
- **Signature visuelle.** Le bandeau d'accueil reprend une *trame de coffrage* —
  traits fins cyan, bulles de repérage A/B/C/D/E, ligne de cote à ticks. Le
  vocabulaire d'un plan de structure, plutôt qu'un dégradé générique.

## 1.3 Livrable

**49 fichiers.** `npm run build` et `npm run lint` passent sans erreur.

```
src/data/       ← tout le contenu éditorial (5 fichiers + types)
src/components/ ← ui, Header, Footer, Layout, ProfileBanner, ScrollToTop
src/pages/      ← Home, Experience, Skills, Contact, NotFound
src/hooks/      ← useTheme, useReveal, useDocumentMeta
public/         ← 404.html (fallback SPA), favicon, robots.txt, resume/
```

Documentation : `CLAUDE.md`, `README.md`, `TODO.md`, `GUIDE-WINDOWS.md`,
`RECAP-SESSION.md`, `verify.sh`, `.gitignore` commenté.

**Contenu réel intégré depuis le CV :** Co Ex Engineering (topographie, 2024),
Luseo Engineering (project management, 2025), UMass Amherst, FAA Part 107, AGC,
12 cours, projet ADA, trilingue.

## 1.4 Incidents résolus

| Incident | Cause | Résolution |
|---|---|---|
| Dotfiles disparus | Le glob `*` ignore les fichiers cachés | `unzip` + script `verify.sh` |
| `ENOENT: package.json` (×3) | Commandes lancées dans le mauvais dossier | Vérifier le `cwd` |
| Casse du dépôt | `Portfolio` ≠ `portfolio-nabil` | Base path réaligné sur `/Portfolio/` |
| Dépôt distant non vide | Commit préexistant | `git fetch` + `git reset origin/main` |
| Prompt git absent | `GIT_ASKPASS` hérité de VS Code | `env -u GIT_ASKPASS ...` |
| `npm.ps1` bloqué (Windows) | Politique d'exécution PowerShell | `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser` |

## 1.5 État exact

- ✅ Commit **`bf1a5ba`** créé en local (49 fichiers, 7864 insertions)
- ❌ **Le push n'a jamais abouti** — le code n'est pas sur GitHub
- ❌ Conséquence : rien à cloner sur la machine Windows
- ⚠️ dpkg cassé sur la Debian (hors projet, mais bloque les mises à jour de sécurité)
- ⚠️ Projet Windows encore dans OneDrive — à déplacer vers `C:\Dev\`

---

# Partie 2 — Prompt de reprise

> À copier tel quel au début de la prochaine session.

```
CONTEXTE
Portfolio web pour Nabil Elkorchi, étudiant en génie civil (structures) à UMass
Amherst, en recherche de poste de design engineer au Massachusetts.

Projet déjà généré et fonctionnel : Vite 5 + React 18 + TypeScript + Tailwind 3
+ React Router 6. Quatre pages (Home, Experience, Skills, Contact), formulaire
Formspree, dark mode, WCAG AA. Aucun backend.

Dépôt : https://github.com/n-frl/Portfolio  (majuscule au P, la casse compte)
Cible : https://n-frl.github.io/Portfolio/

ARCHITECTURE
Tout le contenu éditorial est isolé dans src/data/ :
  profile.ts, experience.ts, education.ts, skills.ts, projects.ts, types.ts
Les composants ne contiennent aucun texte en dur.

RÈGLE ABSOLUE DU PROJET
Ne jamais inventer une donnée. Tout élément non confirmé porte un texte
[ENTRE CROCHETS] et isPlaceholder: true, ce qui affiche un badge « To complete »
sur le site. Ne jamais « compléter au mieux » : demander.

CONVENTIONS DESIGN
- accent-line (#00FFFF) : traits et graphismes uniquement, jamais du texte
- accent (#046C7A) : texte, liens, boutons — contraste AA garanti
- Signature : trame de coffrage (.blueprint-grid), seul endroit où le cyan
  s'exprime à pleine intensité
- Pas de dégradés, pas de glassmorphism, pas d'emoji
Le détail complet est dans CLAUDE.md à la racine.

OBJECTIF DE CETTE SESSION
1. Débloquer le push et mettre le site en ligne sur l'URL GitHub
2. Remplir les 11 placeholders avec les informations que je vais fournir

ÉTAT
Commit bf1a5ba créé en local mais jamais poussé. Le dépôt distant ne contient
que LICENSE et README.md.
```

## Les informations à réunir avant la session

C'est la liste à faire remplir par Nabil. Sans elles, les placeholders restent.

### Bloquant

**Stage de Boston** — entièrement vide dans `src/data/experience.ts` :
- [ ] Nom exact de l'entreprise
- [ ] Intitulé du poste en anglais
- [ ] Mois de début et de fin, et l'année
- [ ] 3 à 5 réalisations concrètes, une phrase chacune, avec un chiffre si possible
- [ ] Logiciels et méthodes utilisés

**Profil** (`src/data/profile.ts`) :
- [ ] Phrase d'accroche, une ligne : ce qu'il cherche et ce qu'il apporte
- [ ] Paragraphe de présentation : spécialisation visée en structures, type d'équipe
- [ ] **Work authorization** — premier point regardé par un recruteur américain
      (citoyen US, résident permanent, F-1 CPT/OPT…)

**Fichiers :**
- [ ] Le CV en PDF, nommé `Nabil-Elkorchi-Resume.pdf`
- [ ] L'identifiant Formspree (compte gratuit sur formspree.io)

### Important

- [ ] **Codes de conception** réellement étudiés ou appliqués
      (ASCE 7, AISC 360, ACI 318, IBC, Massachusetts State Building Code…)
      → n'inscrire que le vrai
- [ ] **Langages de programmation** du cours « Programming for Civil Engineering »
      et du projet drone (Python ? MATLAB ?)
- [ ] **Projet drone** — titre, contexte, année, description, ce qu'il a construit
      et programmé, résultat. Combiné à la licence FAA Part 107, c'est ce qui
      différencie le plus sa candidature.
- [ ] **Projet de calcul de structure** (SAP2000/SAFE) — sans lui, la page Skills
      annonce des logiciels que rien ne vient illustrer
- [ ] Semestre du projet ADA
- [ ] Date d'obtention de la FAA Part 107
- [ ] Dates du mandat AGC
- [ ] Lycée : à renseigner **ou à supprimer** (sur un CV US, il disparaît une fois
      à l'université — la suppression est le choix le plus courant)
- [ ] Confirmer le nom exact de **« SAFE 2000 »** (CSI le commercialise sous « SAFE »)

### Optionnel

- [ ] Photo professionnelle (remplace l'avatar générique)
- [ ] URL LinkedIn une fois le profil créé
- [ ] Visuels de projets — **vérifier les droits**, les plans d'un employeur ne
      sont en général pas diffusables

---

# Partie 3 — Mise en ligne, étape par étape

## Étape 0 — Choisir la machine

Le push depuis la Debian a échoué sur la couche d'authentification. **Le chemin le
plus court passe par Windows** : VS Code y gère l'authentification GitHub en OAuth
natif et contourne entièrement le problème.

**Recommandation : faire le push depuis Windows.**

<details>
<summary>Si vous préférez terminer depuis la Debian</summary>

Générer un token classique sur https://github.com/settings/tokens/new,
cocher la case `repo`, puis :

```bash
cd ~/Programmes/portfolio-nabil
env -u GIT_ASKPASS -u SSH_ASKPASS -u VSCODE_GIT_ASKPASS_NODE \
    -u VSCODE_GIT_ASKPASS_MAIN -u VSCODE_GIT_IPC_HANDLE \
  git -c core.askPass= push origin main
```

Username = `raptoredd`, Password = le token `ghp_...`
Collage dans un terminal Linux : **Ctrl+Shift+V** (rien ne s'affiche, c'est normal).

Si ça passe, sautez directement à l'étape 4.
</details>

---

## Étape 1 — Préparer la machine Windows

**1a. Sortir le projet de OneDrive.** OneDrive synchronise `node_modules`, soit
des dizaines de milliers de fichiers : blocages, erreurs `EPERM`, quota consommé.

```powershell
mkdir C:\Dev -Force
```

**1b. Vérifier les prérequis :**

```powershell
node -v
npm -v
git --version
```

Trois numéros de version attendus. Sinon, installer Node.js LTS, Git et VS Code,
**puis redémarrer l'ordinateur**.

**1c. Autoriser les scripts PowerShell** (si ce n'est pas déjà fait) :

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

---

## Étape 2 — Transférer le code sur Windows

Le dépôt distant est vide de code : il faut y amener les 49 fichiers.

**Copier le dossier du projet depuis la Debian vers `C:\Dev\Portfolio`** — clé USB,
partage réseau, ou réextraction de l'archive `portfolio-nabil.zip`.

⚠️ **Utiliser l'extraction native de Windows ou 7-Zip**, jamais un
glisser-déposer partiel : les fichiers `.gitignore`, `.env.example` et `.vscode/`
sont masqués par défaut dans l'explorateur et se perdent facilement.

Vérifier dans PowerShell :

```powershell
cd C:\Dev\Portfolio
Get-ChildItem -Force
```

Le `-Force` affiche les fichiers cachés. `.gitignore` et `.env.example` doivent
apparaître.

---

## Étape 3 — Pousser depuis VS Code

**3a.** Ouvrir `C:\Dev\Portfolio` dans VS Code (**Fichier → Ouvrir un dossier**)

**3b.** Se connecter : **Ctrl+Shift+P** → `GitHub: Sign in` → autoriser dans le
navigateur. Une seule fois.

**3c.** Onglet **Source Control** (troisième icône à gauche) :
- Vérifier qu'on ne voit **ni `node_modules`, ni `.env.local`, ni `dist`**
- Message de commit : `feat: portfolio Vite + React + TypeScript + Tailwind`
- **✓ Commit**, puis **Sync Changes**

**3d.** Vérifier sur https://github.com/n-frl/Portfolio que les 49 fichiers y sont.

---

## Étape 4 — Configurer et construire

```powershell
cd C:\Dev\Portfolio
Copy-Item .env.example .env.local
npm install
```

Ouvrir `.env.local` dans VS Code et vérifier :

```
VITE_BASE_PATH=/Portfolio/
VITE_SITE_URL=https://n-frl.github.io/Portfolio
```

⚠️ La majuscule de `/Portfolio/` est indispensable : les URLs GitHub Pages sont
sensibles à la casse. Une erreur ici donne une page blanche.

Test en local :

```powershell
npm run dev
```

Ctrl + clic sur `http://localhost:5173/Portfolio/`. Vérifier les quatre pages, le
dark mode, et l'affichage sur mobile (F12 → icône téléphone).

**Ctrl + C** pour arrêter.

---

## Étape 5 — Déployer

```powershell
npm run build
npm run deploy
```

`build` vérifie que tout compile. `deploy` construit puis pousse le résultat sur
la branche `gh-pages`.

---

## Étape 6 — Activer GitHub Pages

Sur https://github.com/n-frl/Portfolio :

**Settings → Pages → Build and deployment**
- Source : **Deploy from a branch**
- Branch : **`gh-pages`** — dossier **`/ (root)`**
- **Save**

Compter une à deux minutes. GitHub affiche ensuite l'adresse en vert en haut de
la page.

---

## Étape 7 — Vérifier

**7a.** Ouvrir https://n-frl.github.io/Portfolio/

**7b. Le test qui compte.** Ouvrir **https://n-frl.github.io/Portfolio/experience**
directement dans un onglet neuf, puis **F5**.

- La page s'affiche → le fallback SPA fonctionne ✅
- Erreur 404 GitHub → décalage entre `VITE_BASE_PATH` et `pathSegmentsToKeep`
  dans `public/404.html`

**7c.** Vérifier sur téléphone, en 4G plutôt qu'en Wi-Fi.

**7d.** Cocher : les quatre pages, le bouton dark mode, le bouton
« Download resume », l'envoi du formulaire.

---

## Étape 8 — Remplir les placeholders

Une fois le site en ligne, le cycle devient très court :

```
Modifier src/data/ → Ctrl+S → vérifier dans le navigateur
→ Commit + Sync → npm run deploy
```

**Ordre recommandé**, du plus visible au moins visible :

1. Le CV en PDF dans `public/resume/`
2. L'identifiant Formspree dans `.env.local`
3. `profile.ts` — accroche, présentation, work authorization
4. `experience.ts` — le stage de Boston
5. `skills.ts` — codes de conception, langages
6. `projects.ts` — drone, projet structure
7. `education.ts` — dates, ou suppression du lycée

**Après chaque valeur remplie, supprimer la ligne `isPlaceholder: true`** — c'est
ce qui fait disparaître le badge orange.

Contrôle final :

```powershell
Select-String -Path src\data\*.ts -Pattern "isPlaceholder: true"
```

Aucun résultat = tous les placeholders sont remplis.

---

## Étape 9 — Le domaine personnalisé *(session suivante)*

**À ne faire qu'une fois le site en ligne et le contenu complet.** Rien ne presse :
l'URL GitHub fonctionne parfaitement pour candidater.

Aperçu de ce que cela impliquera :

1. Acheter le domaine chez OVH (compter 10 à 15 € par an)
2. Passer `VITE_BASE_PATH` à `/` dans `.env.local`
3. Passer `pathSegmentsToKeep` à `0` dans `public/404.html`
4. Créer `public/CNAME` contenant uniquement le domaine
5. Chez OVH : 4 enregistrements `A` vers les IP de GitHub Pages (domaine racine),
   ou un `CNAME` vers `n-frl.github.io` (sous-domaine)
6. `npm run deploy`, puis activer **Enforce HTTPS** dans Settings → Pages

⚠️ Les trois premiers points doivent être modifiés **ensemble**. Une incohérence
casse tous les liens du site.

---

# Récapitulatif en une page

| # | Étape | Où |
|---|---|---|
| 1 | Préparer Windows (`C:\Dev`, prérequis, ExecutionPolicy) | PowerShell |
| 2 | Transférer les 49 fichiers | Explorateur |
| 3 | Commit + Sync | VS Code |
| 4 | `.env.local`, `npm install`, `npm run dev` | Terminal VS Code |
| 5 | `npm run build` puis `npm run deploy` | Terminal VS Code |
| 6 | Activer Pages (branche `gh-pages`) | GitHub Settings |
| 7 | Vérifier, dont l'accès direct à `/experience` | Navigateur |
| 8 | Remplir les placeholders | `src/data/` |
| 9 | Domaine OVH | Session suivante |

**Le point de blocage à traiter en premier reste le push.** Tout le reste en
découle.
