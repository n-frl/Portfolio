/**
 * Prefixe de base du site (voir `base` dans vite.config.ts).
 *
 * En dev  : "/"
 * En prod GitHub Pages projet : "/portfolio-nabil/"
 * En prod domaine custom      : "/"
 *
 * A utiliser pour TOUT asset statique reference depuis /public.
 * Les liens de navigation, eux, sont geres par le `basename` du Router.
 */
export const BASE_URL: string = import.meta.env.BASE_URL;

/** Prefixe un chemin d'asset public. `withBase('resume/cv.pdf')`. */
export function withBase(assetPath: string): string {
  return `${BASE_URL}${assetPath.replace(/^\/+/, '')}`;
}

/** Basename attendu par React Router (sans slash final, "" si racine). */
export const ROUTER_BASENAME: string = BASE_URL.replace(/\/$/, '');
