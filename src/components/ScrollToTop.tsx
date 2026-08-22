import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * React Router conserve la position de scroll d'une route a l'autre.
 * On la remet en haut a chaque changement de page, sauf si l'utilisateur
 * a demande a reduire les animations (dans ce cas : saut direct).
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  }, [pathname]);

  return null;
}
