# Domaine Familial à Dunham

Site web de présentation d'une propriété (16 000 000 $) à Dunham, Cantons-de-l'Est — Engel & Völkers, Équipe Deslauriers Fortin.

Site statique bilingue (FR/EN) sans dépendances : HTML, CSS et JavaScript vanille.

**Site en ligne : https://alexandrefortin-ev-maker.github.io/Claude-code-iOS/**

Publication : GitHub Pages sert la branche `gh-pages`; chaque push sur la branche
principale du site la resynchronise automatiquement (workflow
`.github/workflows/deploy-pages.yml`).

## Structure

```
index.html        page unique (hero, domaine, Le Phare, Le Chalet, dépendances,
                  territoire, autonomie, galerie, localisation, contact)
css/styles.css    design system complet
js/main.js        i18n FR/EN, galerie + lightbox, animations, navigation
assets/img/       49 photos optimisées (grand format 1920 px + vignettes 720 px)
```

## Prévisualiser localement

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Déployer

Le site est déployable tel quel sur n'importe quel hébergeur statique :

- **GitHub Pages** : Settings → Pages → Deploy from a branch → sélectionner la branche et `/ (root)`.
- Netlify, Vercel, S3/CloudFront : pointer vers la racine du dépôt.

## Notes

- Une balise `noindex, nofollow` est en place (diffusion contrôlée demandée par les
  vendeurs). La retirer de `index.html` pour permettre l'indexation.
- Le contenu provient de la fiche technique du domaine (30 juin 2026); les photos
  professionnelles proviennent du dossier « Photos PRINT » du dossier de la propriété.
- La bascule FR/EN est persistée dans `localStorage`.
