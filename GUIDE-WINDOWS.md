# Guide Windows — Portfolio de Nabil Elkorchi

> **Pour qui ?** Ce guide s'adresse à quelqu'un qui n'a jamais utilisé Git ni Node.js.
> Tout se fait depuis **Visual Studio Code** sous Windows 11. Aucune connaissance
> préalable n'est nécessaire : il suffit de suivre les étapes dans l'ordre.
>
> **Temps d'installation, une seule fois :** environ 20 minutes.
> **Ensuite, une modification de contenu prend 2 minutes.**

---

## Sommaire

1. [Ce qu'est ce projet](#1-ce-quest-ce-projet)
2. [Installation, à faire une seule fois](#2-installation-à-faire-une-seule-fois)
3. [Récupérer le projet](#3-récupérer-le-projet)
4. [Lancer le site sur son ordinateur](#4-lancer-le-site-sur-son-ordinateur)
5. [Modifier le contenu — le cœur du sujet](#5-modifier-le-contenu--le-cœur-du-sujet)
6. [Publier ses modifications](#6-publier-ses-modifications)
7. [Mettre le site en ligne](#7-mettre-le-site-en-ligne)
8. [Ce qu'il reste à compléter](#8-ce-quil-reste-à-compléter)
9. [En cas de problème](#9-en-cas-de-problème)
10. [Aide-mémoire](#10-aide-mémoire)

---

## 1. Ce qu'est ce projet

Un site web personnel de quatre pages, en anglais américain :

| Page | Adresse | Contenu |
|---|---|---|
| Accueil | `/` | Photo, titre, présentation, aperçu du parcours |
| Experience | `/experience` | Stages, formation, certifications, projets |
| Skills | `/skills` | Compétences par catégorie, langues, centres d'intérêt |
| Contact | `/contact` | Formulaire de contact |

**Adresse finale :** https://n-frl.github.io/Portfolio/

### Comment ça marche, en une image

```
   Vous modifiez du texte           Vous "publiez"            Le site se met
   dans VS Code            ───────► sur GitHub       ───────► à jour en ligne
   (fichiers src/data/)              (Commit + Push)           (npm run deploy)
```

Il n'y a **pas de base de données ni de serveur**. Le site est un ensemble de
fichiers statiques. C'est ce qui le rend gratuit à héberger et impossible à
« casser » depuis l'extérieur.

### Règle importante : ne jamais inventer une information

Le site affiche uniquement ce qui figure sur le CV. Tout ce qui manque encore
apparaît **entre crochets**, comme ceci :

```
[TAGLINE — one sentence, e.g. "Seeking a structural design engineering role..."]
```

et s'accompagne d'un badge orange **« To complete »** visible sur le site.

C'est volontaire : impossible de confondre un texte provisoire avec une vraie
information, et impossible d'oublier d'en remplir un. La liste complète est dans
le fichier `TODO.md`.

---

## 2. Installation, à faire une seule fois

### 2.1 — Choisir un bon emplacement

⚠️ **Ne pas mettre le projet dans OneDrive, Documents, ou le Bureau.**

OneDrive synchronise en permanence chaque fichier modifié. Or ce projet crée un
dossier `node_modules` contenant **plusieurs dizaines de milliers de petits
fichiers**. OneDrive va tenter de tous les envoyer dans le cloud, ce qui provoque
des blocages de fichiers, des erreurs incompréhensibles pendant l'installation,
et consomme votre quota pour rien.

**Bon emplacement :** `C:\Dev\` ou `C:\Users\VOTRENOM\Dev\`

Créez ce dossier dans l'explorateur Windows avant de continuer.

### 2.2 — Installer les trois outils

Installez-les dans cet ordre, en acceptant toutes les options par défaut.

| Outil | Lien | Rôle |
|---|---|---|
| **Node.js** (version LTS) | https://nodejs.org | Fait fonctionner le site sur votre PC |
| **Git** | https://git-scm.com/download/win | Enregistre et envoie vos modifications |
| **Visual Studio Code** | https://code.visualstudio.com | L'éditeur dans lequel vous travaillerez |

> Sur la page de Node.js, prenez le bouton marqué **LTS** (support à long terme),
> pas « Current ».

**Redémarrez votre ordinateur après ces installations.** Cette étape est
réellement nécessaire : Windows doit recharger ses variables d'environnement,
sinon les commandes ne seront pas reconnues.

### 2.3 — Autoriser les scripts dans PowerShell

Windows bloque par défaut l'exécution de scripts, ce qui empêche `npm` de
fonctionner. Message typique :

```
npm : File C:\Program Files\nodejs\npm.ps1 cannot be loaded because
running scripts is disabled on this system.
```

**Correction :** ouvrez le menu Démarrer, tapez `PowerShell`, ouvrez-le
(inutile de faire « Exécuter en tant qu'administrateur »), puis collez :

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Répondez `O` puis Entrée. Fermez la fenêtre.

<details>
<summary>Que fait cette commande, exactement ?</summary>

`RemoteSigned` autorise les scripts créés sur votre machine, et exige une
signature numérique pour ceux téléchargés depuis Internet. C'est le réglage
recommandé par Microsoft pour un poste de développement : il débloque les outils
habituels sans autoriser n'importe quel fichier reçu par e-mail.

`-Scope CurrentUser` limite le changement à votre compte : pas besoin de droits
administrateur, et les autres comptes de la machine ne sont pas affectés.

Ne descendez **pas** à `Unrestricted`, qui désactive toute vérification.
</details>

### 2.4 — Vérifier que tout est en place

Ouvrez PowerShell et tapez ces trois lignes :

```powershell
node -v
npm -v
git --version
```

Chacune doit répondre un numéro de version (par exemple `v22.11.0`). Si l'une
répond « n'est pas reconnu », c'est que le redémarrage n'a pas été fait, ou que
l'installation correspondante a échoué.

---

## 3. Récupérer le projet

### 3.1 — Cloner depuis GitHub

Dans VS Code : **Ctrl + Shift + P**, tapez `Git: Clone`, Entrée.

Collez l'adresse :

```
https://github.com/n-frl/Portfolio.git
```

VS Code demande où enregistrer : choisissez **`C:\Dev`** (pas OneDrive).

Quand il propose d'ouvrir le dossier cloné, acceptez.

### 3.2 — Se connecter à GitHub

Au premier envoi de modifications, VS Code affiche une fenêtre
**« Sign in to GitHub »**. Cliquez, connectez-vous dans le navigateur, autorisez.

C'est à faire **une seule fois**. VS Code retient la connexion.

> Il faut être **collaborateur** du dépôt pour publier. Si vous n'êtes pas Nabil,
> demandez-lui de vous ajouter : sur GitHub, **Settings → Collaborators →
> Add people**.

### 3.3 — Installer les dépendances

Dans VS Code, ouvrez le terminal intégré : menu **Terminal → Nouveau terminal**
(ou **Ctrl + ù**).

⚠️ **Vérifiez la première ligne du terminal.** Elle doit se terminer par
`\Portfolio>`. Si elle affiche autre chose, vous n'êtes pas dans le bon dossier
et toutes les commandes échoueront avec un message contenant `ENOENT` ou
`package.json`.

Puis, une ligne à la fois :

```powershell
Copy-Item .env.example .env.local
npm install
```

`npm install` télécharge les briques nécessaires. Comptez une à deux minutes la
première fois. Des avertissements jaunes (`WARN`, `deprecated`) sont normaux et
sans conséquence.

---

## 4. Lancer le site sur son ordinateur

```powershell
npm run dev
```

Le terminal affiche une adresse :

```
➜  Local:   http://localhost:5173/Portfolio/
```

**Ctrl + clic** sur le lien pour l'ouvrir dans le navigateur.

> **Pourquoi `/Portfolio/` à la fin ?** Parce que le site en ligne vivra à cette
> adresse. On reproduit exactement les mêmes conditions en local, ce qui évite de
> découvrir un lien cassé une fois publié.

### La magie du rechargement automatique

Laissez cette fenêtre de navigateur ouverte à côté de VS Code. **Chaque fois que
vous enregistrez un fichier (Ctrl + S), la page se met à jour instantanément.**
Pas besoin de relancer quoi que ce soit.

**Pour arrêter le serveur :** cliquez dans le terminal, puis **Ctrl + C**.

---

## 5. Modifier le contenu — le cœur du sujet

### Où se trouve le texte

**Tout le contenu du site est rassemblé dans un seul dossier : `src/data/`.**

Vous n'avez besoin d'ouvrir aucun autre fichier.

```
src/data/
├── profile.ts       ← Nom, titre, texte de présentation, liens
├── experience.ts    ← Stages et expériences professionnelles
├── education.ts     ← Formation, certifications, associations
├── skills.ts        ← Compétences, langues, centres d'intérêt
└── projects.ts      ← Projets
```

Dans VS Code, ouvrez-les depuis l'explorateur à gauche (icône de documents en
haut) : `src` → `data` → le fichier voulu.

### Comment modifier un texte

Le contenu ressemble à ceci :

```ts
{
  company: 'Luseo Engineering',
  role: 'Project Manager Intern',
  location: 'Rabat, Morocco',
  period: 'Jun 2025 — Jul 2025',
}
```

**Modifiez uniquement ce qui se trouve entre les apostrophes `'...'`.**

✅ Correct :
```ts
role: 'Structural Design Intern',
```

❌ À ne pas faire — ne touchez pas au mot avant les deux-points :
```ts
poste: 'Structural Design Intern',
```

### Les quatre règles à respecter

**1. Ne supprimez jamais la virgule en fin de ligne.**

```ts
role: 'Structural Design Intern',
                                ↑ celle-ci doit rester
```

**2. Si votre texte contient une apostrophe, utilisez des guillemets doubles.**

```ts
description: "The company's main office",
             ↑                          ↑  guillemets doubles
```

Sinon l'apostrophe de `company's` ferme le texte trop tôt et provoque une erreur.

**3. Une fois un passage entre crochets rempli, supprimez la ligne
`isPlaceholder: true`.**

Avant :
```ts
{
  name: '[COMPANY NAME — Boston internship]',
  isPlaceholder: true,
}
```

Après :
```ts
{
  name: 'Simpson Gumpertz & Heger',
}
```

C'est ce qui fait disparaître le badge orange « To complete » sur le site.

**4. N'inventez jamais une date, un nom ou une compétence.** Si l'information
n'est pas connue, laissez le texte entre crochets tel quel : mieux vaut un badge
visible qu'une erreur invisible sur un CV.

### Ajouter une nouvelle expérience

Ouvrez `src/data/experience.ts` et copiez un bloc existant, de `{` à `},`
inclus. Collez-le juste après, puis modifiez les valeurs.

Le champ `sortKey` détermine l'ordre d'affichage : format `ANNÉE-MOIS`, par
exemple `'2025-06'` pour juin 2025. Le plus récent apparaît en haut.

### Ajouter le CV en PDF

1. Renommez le fichier exactement : **`Nabil-Elkorchi-Resume.pdf`**
2. Glissez-le dans le dossier `public/resume/` depuis l'explorateur Windows
3. Le bouton « Download resume » de la page d'accueil fonctionne aussitôt

⚠️ **Le dépôt est public.** Ce PDF sera téléchargeable par n'importe qui, et
restera consultable dans l'historique même après suppression. Vérifiez avant de
le déposer : le numéro de téléphone doit-il vraiment y figurer ?

### Vérifier qu'on n'a rien cassé

Regardez en bas à gauche de VS Code : s'il affiche **0 erreur** (icône ⊗), tout
va bien. Si un nombre apparaît, cliquez dessus, VS Code indique la ligne fautive.

Dans 90 % des cas, c'est une virgule manquante ou une apostrophe mal fermée.

> **Astuce :** **Ctrl + Z** annule la dernière modification. En cas de doute,
> appuyez plusieurs fois pour revenir à un état qui fonctionnait.

---

## 6. Publier ses modifications

Tout se fait dans **l'onglet Source Control** de VS Code : troisième icône dans
la barre latérale gauche (une petite ramification). Un badge indique le nombre de
fichiers modifiés.

### Les trois étapes

**Étape 1 — Vérifier ses modifications**

Cliquez sur un fichier de la liste. VS Code affiche l'ancien texte à gauche et le
nouveau à droite. C'est le moment de se relire.

**Étape 2 — Enregistrer (Commit)**

Dans le champ de texte en haut, décrivez ce que vous avez fait, par exemple :

```
Add Boston internship
```

Puis **Ctrl + Entrée**, ou le bouton **✓ Commit**.

> Si VS Code demande « Would you like to stage all your changes? », répondez
> **Yes** (ou cochez « Always »).

**Étape 3 — Envoyer (Sync / Push)**

Cliquez sur **Sync Changes** (ou l'icône ↻ en bas à gauche).

Vos modifications sont maintenant sur GitHub. ✅

### Le vocabulaire, en une ligne chacun

| Terme | Traduction simple |
|---|---|
| **Commit** | Enregistrer une étape de son travail, avec une description |
| **Push / Sync** | Envoyer ses enregistrements sur GitHub |
| **Pull** | Récupérer les modifications faites par quelqu'un d'autre |

> **Si vous travaillez à deux sur le projet**, faites toujours un **Pull** (ou
> Sync) *avant* de commencer à modifier. Cela évite les conflits.

---

## 7. Mettre le site en ligne

Publier sur GitHub (étape 6) **ne met pas le site à jour**. C'est une étape
séparée, volontairement : elle permet d'enregistrer un travail en cours sans le
rendre public.

Dans le terminal VS Code :

```powershell
npm run deploy
```

Comptez une minute. Le site se met à jour sur https://n-frl.github.io/Portfolio/
dans les deux minutes qui suivent.

> Si vous ne voyez pas le changement, faites **Ctrl + F5** dans le navigateur
> pour forcer le rechargement en ignorant le cache.

### Activation initiale, à faire une seule fois

La toute première fois seulement, sur GitHub :

**Dépôt → Settings → Pages → Source : `Deploy from a branch` →
Branch : `gh-pages` / `(root)` → Save**

### Le test à faire après la première mise en ligne

Ouvrez **https://n-frl.github.io/Portfolio/experience** directement dans un
nouvel onglet, puis rafraîchissez avec F5.

Si la page s'affiche : tout fonctionne. Si vous obtenez une erreur 404 de GitHub,
signalez-le — c'est un réglage technique à corriger dans deux fichiers.

---

## 8. Ce qu'il reste à compléter

La liste détaillée est dans **`TODO.md`**, à la racine du projet. Les points
bloquants :

### Indispensable avant de diffuser l'adresse

- [ ] **Le CV en PDF** dans `public/resume/` (voir section 5)
- [ ] **Le formulaire de contact** — il ne fonctionne pas encore :
  1. Créer un compte gratuit sur https://formspree.io
  2. **New Form**, récupérer l'identifiant après `/f/` dans l'adresse fournie
  3. Ouvrir `.env.local` dans VS Code et compléter :
     ```
     VITE_FORMSPREE_ID=votreidentifiant
     ```
  4. Relancer `npm run dev`, puis envoyer un message de test
- [ ] **Le stage de Boston** dans `src/data/experience.ts` — entièrement vide
- [ ] **La phrase d'accroche** (`tagline`) dans `src/data/profile.ts`
- [ ] **Work authorization** dans `src/data/profile.ts` — c'est le premier point
      regardé par un recruteur américain

### Fortement recommandé

- [ ] **Une photo professionnelle** à la place de l'avatar générique
- [ ] **Le projet drone** dans `src/data/projects.ts` — combiné à la licence FAA
      Part 107, c'est l'élément qui différencie le plus une candidature
- [ ] **Un projet de calcul de structure** (SAP2000) — sans lui, la page Skills
      annonce des logiciels que rien ne vient illustrer
- [ ] **Les codes de conception** dans `src/data/skills.ts` (ASCE 7, AISC 360,
      ACI 318…) — n'inscrire que ceux réellement étudiés
- [ ] **Créer le profil LinkedIn**, puis remplacer le lien dans
      `src/data/profile.ts`

---

## 9. En cas de problème

### « npm n'est pas reconnu »

Node.js n'est pas installé, ou l'ordinateur n'a pas été redémarré après
l'installation. Reprenez la section 2.2.

### « running scripts is disabled on this system »

Voir la section 2.3.

### « Could not read package.json » / erreur `ENOENT`

**C'est l'erreur la plus fréquente, et elle a toujours la même cause : vous
n'êtes pas dans le bon dossier.**

```powershell
Get-Location
```

Le chemin doit se terminer par `\Portfolio`. Sinon :

```powershell
cd C:\Dev\Portfolio
```

### Le site affiche une page blanche

Regardez le terminal : un message en rouge indique le fichier et la ligne. Il
s'agit presque toujours d'une virgule oubliée ou d'une apostrophe non échappée
dans `src/data/`. Faites **Ctrl + Z** jusqu'à revenir à un état fonctionnel.

### Erreurs `EPERM` ou blocages pendant `npm install`

Le projet est dans OneDrive. Déplacez-le vers `C:\Dev\` (section 2.1), supprimez
le dossier `node_modules`, puis relancez `npm install`.

### VS Code refuse de publier

Vérifiez que vous êtes connecté : **Ctrl + Shift + P** → `GitHub: Sign in`.
Vérifiez ensuite auprès de Nabil que votre compte figure bien dans
**Settings → Collaborators** du dépôt.

### Tout casser et repartir de zéro

Aucun risque : le code est sur GitHub. Supprimez le dossier local et
recommencez à la section 3.1. Attention toutefois, les modifications non
publiées seront perdues.

---

## 10. Aide-mémoire

### Utilisation quotidienne

| Action | Comment |
|---|---|
| Ouvrir le projet | VS Code → **Fichier → Ouvrir un dossier** → `C:\Dev\Portfolio` |
| Ouvrir le terminal | **Ctrl + ù** |
| Lancer le site en local | `npm run dev` |
| Arrêter le site | **Ctrl + C** dans le terminal |
| Enregistrer un fichier | **Ctrl + S** |
| Annuler une modification | **Ctrl + Z** |
| Publier sur GitHub | Onglet Source Control → message → **Commit** → **Sync** |
| Mettre le site en ligne | `npm run deploy` |

### Les commandes, et ce qu'elles font

```powershell
npm install      # Une seule fois, ou après un Pull : installe les briques nécessaires
npm run dev      # Lance le site sur votre PC (http://localhost:5173/Portfolio/)
npm run build    # Vérifie que tout compile — à faire avant de publier
npm run deploy   # Met le site à jour en ligne
```

### Adresses utiles

| Quoi | Où |
|---|---|
| Le site en ligne | https://n-frl.github.io/Portfolio/ |
| Le code sur GitHub | https://github.com/n-frl/Portfolio |
| Formulaire de contact | https://formspree.io |
| Liste des tâches | `TODO.md`, à la racine du projet |

---

## Le résumé en cinq lignes

1. **Ouvrir** le dossier dans VS Code
2. **`npm run dev`** dans le terminal, puis Ctrl + clic sur le lien
3. **Modifier** les fichiers de `src/data/`, enregistrer avec Ctrl + S
4. **Publier** : onglet Source Control → message → Commit → Sync
5. **Mettre en ligne** : `npm run deploy`

C'est tout. Le reste de ce guide n'est là que pour les cas particuliers.
