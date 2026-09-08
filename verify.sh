#!/usr/bin/env bash
# =============================================================================
#  verify.sh — controle que l'extraction de l'archive est complete.
#
#  A lancer depuis la racine du projet, AVANT `npm install` :
#      bash verify.sh
#
#  Raison d'etre : les fichiers dont le nom commence par un point (.gitignore,
#  .env.example, .vscode/) sont invisibles pour le glob `*` du shell et pour la
#  plupart des gestionnaires de fichiers graphiques. Une copie du type
#  `cp dossier/* .` les perd silencieusement. Ce script rend la perte visible.
# =============================================================================

set -u

EXPECTED=(
  ".env.example"
  ".gitignore"
  ".prettierrc"
  ".prettierignore"
  ".vscode/extensions.json"
  ".vscode/settings.json"
  "CLAUDE.md"
  "README.md"
  "TODO.md"
  "LICENSE"
  "index.html"
  "package.json"
  "vite.config.ts"
  "tailwind.config.js"
  "postcss.config.js"
  "eslint.config.js"
  "tsconfig.json"
  "tsconfig.app.json"
  "tsconfig.node.json"
  "public/404.html"
  "public/favicon.svg"
  "public/robots.txt"
  "public/resume/README.md"
  "src/main.tsx"
  "src/App.tsx"
  "src/index.css"
  "src/vite-env.d.ts"
  "src/lib/base.ts"
  "src/lib/cx.ts"
  "src/hooks/useTheme.ts"
  "src/hooks/useReveal.ts"
  "src/hooks/useDocumentMeta.ts"
  "src/components/ui.tsx"
  "src/components/Header.tsx"
  "src/components/Footer.tsx"
  "src/components/Layout.tsx"
  "src/components/ScrollToTop.tsx"
  "src/components/ProfileBanner.tsx"
  "src/data/types.ts"
  "src/data/profile.ts"
  "src/data/experience.ts"
  "src/data/education.ts"
  "src/data/skills.ts"
  "src/data/projects.ts"
  "src/pages/Home.tsx"
  "src/pages/Experience.tsx"
  "src/pages/Skills.tsx"
  "src/pages/Contact.tsx"
  "src/pages/NotFound.tsx"
)

missing=0
for file in "${EXPECTED[@]}"; do
  if [ ! -f "$file" ]; then
    echo "  MANQUANT : $file"
    missing=$((missing + 1))
  fi
done

echo
if [ "$missing" -eq 0 ]; then
  echo "OK — ${#EXPECTED[@]} fichiers presents, extraction complete."
  echo
  if [ ! -f ".env.local" ]; then
    echo "Etape suivante :"
    echo "    cp .env.example .env.local && npm install && npm run dev"
  else
    echo "Etape suivante :"
    echo "    npm install && npm run dev"
  fi
  exit 0
fi

echo "ECHEC — $missing fichier(s) manquant(s) sur ${#EXPECTED[@]}."
echo
echo "Cause la plus probable : les fichiers caches (commencant par un point) ont"
echo "ete perdus a la copie. Le glob '*' du shell ne les selectionne pas."
echo
echo "Correction — re-extraire l'archive avec unzip, qui les preserve :"
echo "    unzip -o Portfolio.zip"
echo
echo "Ou, en tar.gz :"
echo "    tar xzf Portfolio.tar.gz"
exit 1
