# TODO — placeholders restants

Regle du projet : ne jamais inventer une donnee. Tout element non confirme porte
`isPlaceholder: true` et un texte [ENTRE CROCHETS], ce qui affiche un badge
« To complete » sur le site.

Controle :

```bash
grep -rn "isPlaceholder: true" src/data/
```

## Restant (2)

### 1. Work authorization — `src/data/profile.ts`, `quickFacts`

Premier point regarde par un recruteur americain. Valeurs possibles :
US Citizen, Permanent Resident, F-1 (CPT/OPT eligible)...

Une fois renseigne, supprimer la ligne `isPlaceholder: true`.

### 2. Projet drone — `src/data/projects.ts`

Seule entree de la section Projects, entierement a documenter :
titre, contexte (perso / club / cours), annee, description, ce qui a ete
construit et programme (et dans quel langage), resultat.

Combine a la licence FAA Part 107 et au poste de TA sur CEE 651 (Piloting UAVs),
c'est le differenciateur le plus fort du profil.

## Groupes de competences masques

Ces deux groupes ne sont pas des `isPlaceholder` bloquants mais restent vides :

- `codes-standards` (`src/data/skills.ts`) — ASCE 7, AISC 360, ACI 318, IBC,
  Massachusetts State Building Code : n'inscrire que ce qui a reellement ete
  etudie ou applique.
- `programming` (`src/data/skills.ts`) — langages du cours « Programming for
  Civil Engineering » et de la programmation de drones (Python ? MATLAB ?).

## Fait

- [x] CV PDF depose dans `public/resume/Nabil-Elkorchi-Resume.pdf`
- [x] Formspree ID (`meajdrvn`)
- [x] LinkedIn
- [x] DN Tanks (remplace le placeholder « Boston internship »)
- [x] UMass Amherst TA / RA (CEE 651)
- [x] Graduation December 2026, GPA 3.3
- [x] Texte « About »
- [x] FAA Part 107 : March 2025
- [x] AGC : February 2025 — Present
- [x] Lycee supprime
- [x] Projets ADA et « structural analysis » supprimes
- [x] « Focus / Structures » retire
- [x] Langues affichees une seule fois (page Skills)
- [x] « SAFE 2000 » -> « CSI SAFE »
