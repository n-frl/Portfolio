import type { Profile } from './types';

/**
 * SOURCE : Resume (PDF) de Nabil Elkorchi + texte fourni par Nabil.
 * Le telephone et l'adresse e-mail personnelle figurent sur le CV mais ne sont
 * PAS publies sur le site : le seul canal de contact est le formulaire, pour
 * limiter le scraping.
 */
export const profile: Profile = {
  fullName: 'Nabil Elkorchi',

  headline: 'Civil & Environmental Engineering Student',

  tagline:
    'Seeking a position where I can develop technical and organizational skills in engineering while contributing to the company’s success.',

  location: 'Worcester, Massachusetts',

  // Texte fourni mot pour mot par Nabil.
  about: [
    'My name is Nabil and I am a senior at the University of Massachusetts Amherst majoring in Civil Engineering. My aim is to attain a position/internship where I can develop technical and organizational skills in the engineering field while contributing to the company’s success. I strongly believe that my team spirit, enthusiasm and willingness to learn, alongside my adaptability and critical thinking skills, will allow me to take on the responsibilities necessary to achieve this goal.',
  ],

  // Le fichier doit etre depose dans public/resume/ sous ce nom exact.
  resumePath: 'resume/Nabil-Elkorchi-Resume.pdf',
  resumeFileName: 'Nabil-Elkorchi-Resume.pdf',

  links: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nabil-e-7711a4435',
      external: true,
    },
    {
      label: 'Email',
      href: '/contact',
      external: false,
    },
  ],
};

/**
 * Chiffres du bandeau de la page d'accueil.
 * Les langues ne figurent plus ici : elles sont presentees une seule fois,
 * dans la page Skills.
 */
export const quickFacts: { label: string; value: string; isPlaceholder?: boolean }[] = [
  { label: 'Graduation', value: 'December 2026' },
  { label: 'GPA', value: '3.3 / 4.0' },
  { label: 'Based in', value: 'Worcester, MA' },
  {
    label: 'Work authorization',
    value: '[STATUS — e.g. US Citizen / Permanent Resident / F-1 CPT]',
    isPlaceholder: true,
  },
];
