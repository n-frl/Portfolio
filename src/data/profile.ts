import type { Profile } from './types';

/**
 * SOURCE : Resume (PDF) de Nabil Elkorchi.
 * Le telephone et l'adresse e-mail personnelle figurent sur le CV mais ne sont
 * PAS publies sur le site : le seul canal de contact est le formulaire, pour
 * limiter le scraping. Le CV telechargeable les contient - c'est un choix
 * assume, a revoir si necessaire (voir TODO.md).
 */
export const profile: Profile = {
  fullName: 'Nabil Elkorchi',

  // Factuel, tire directement du CV.
  headline: 'Civil & Environmental Engineering Student — Structures',

  // [A COMPLETER] Une phrase pour dire ce qu'il cherche et ce qu'il apporte.
  tagline:
    '[TAGLINE — one sentence, e.g. "Seeking a structural design engineering role in Massachusetts."]',

  location: 'Worcester, Massachusetts',

  about: [
    // Reformulation du "Summary" du CV, a la premiere personne, ton US.
    'I am an undergraduate civil and environmental engineering student at UMass Amherst, focused on structures. I am looking for a design engineering position where I can build technical and organizational depth while contributing to real project delivery.',
    'Two summers of field and project experience in Rabat, Morocco gave me exposure to both ends of a project: collecting and processing survey data on site, then sitting on the owner-side of a 270,000 m² hospital and university complex, reconciling drawings against what was actually built.',
    // [A COMPLETER] Troisieme paragraphe optionnel : orientation structures, objectif.
    '[ABOUT — optional third paragraph: what you want to specialize in within structures, and what kind of team you want to join.]',
  ],

  // Le fichier doit etre depose dans public/resume/ sous ce nom exact.
  resumePath: 'resume/Nabil-Elkorchi-Resume.pdf',
  resumeFileName: 'Nabil-Elkorchi-Resume.pdf',

  links: [
    {
      label: 'LinkedIn',
      // Pas encore de profil : le lien renvoie vers l'accueil, comme demande.
      href: '/',
      external: false,
      isPlaceholder: true,
      note: 'Profile not created yet — link points to the homepage.',
    },
    {
      label: 'Email',
      href: '/contact',
      external: false,
    },
  ],
};

/**
 * [A COMPLETER] Ces valeurs alimentent les chiffres de la page d'accueil.
 * Elles sont derivees du CV et doivent etre revues avant mise en ligne.
 */
export const quickFacts: { label: string; value: string; isPlaceholder?: boolean }[] = [
  { label: 'Graduation', value: 'May 2027' },
  { label: 'Focus', value: 'Structures' },
  { label: 'Languages', value: 'EN / FR / AR' },
  {
    label: 'Work authorization',
    value: '[STATUS — e.g. US Citizen / F-1 CPT]',
    isPlaceholder: true,
  },
];
