# Dossier du CV

Déposer ici le CV au format PDF, nommé **exactement** :

```
Nabil-Elkorchi-Resume.pdf
```

Ce nom est référencé dans `src/data/profile.ts` (`resumePath` / `resumeFileName`).
Si le nom change, mettre les deux champs à jour.

## Avant de commiter

Le dépôt est public. Ce PDF sera téléchargeable par n'importe qui et restera
dans l'historique git même après suppression. Vérifier avant le push :

- [ ] Le numéro de téléphone doit-il vraiment y figurer ?
- [ ] L'adresse postale complète est-elle nécessaire ? (la ville suffit en général)
- [ ] Aucune donnée de tiers (noms de clients confidentiels, plans, tarifs)
- [ ] Le PDF ne contient pas de métadonnées gênantes :
      `exiftool -all= Nabil-Elkorchi-Resume.pdf` pour les purger
