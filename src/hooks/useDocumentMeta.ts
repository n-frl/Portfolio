import { useEffect } from 'react';

/**
 * Met a jour le <title>, la meta description et l'URL canonique a chaque page.
 * Suffisant pour un site statique : pas besoin d'une dependance type react-helmet.
 */
export function useDocumentMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, attr: string, value: string) => {
      let tag = document.head.querySelector<HTMLMetaElement>(selector);
      if (!tag) {
        tag = document.createElement('meta');
        const [key, val] = attr.split('=');
        tag.setAttribute(key, val);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', value);
    };

    setMeta('meta[name="description"]', 'name=description', description);
    setMeta('meta[property="og:title"]', 'property=og:title', title);
    setMeta('meta[property="og:description"]', 'property=og:description', description);

    const siteUrl = import.meta.env.VITE_SITE_URL;
    if (siteUrl) {
      let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = `${siteUrl.replace(/\/$/, '')}${window.location.pathname}`;
    }
  }, [title, description]);
}
