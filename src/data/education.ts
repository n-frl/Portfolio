import type { Credential, EducationItem } from './types';

/** SOURCE : Resume (PDF). */
export const education: EducationItem[] = [
  {
    id: 'umass-amherst',
    institution: 'University of Massachusetts Amherst',
    degree: 'Bachelor of Science',
    field: 'Civil and Environmental Engineering',
    location: 'Amherst, Massachusetts',
    period: 'Expected May 2027',
    details: ['GPA: 3.4 / 4.0'],
  },
  {
    // [A COMPLETER] Lycee / high school : optionnel sur un CV US une fois a
    // l'universite. Supprimer ce bloc s'il n'est pas souhaite.
    id: 'secondary-school',
    institution: '[SCHOOL NAME]',
    degree: '[DIPLOMA]',
    field: '[TRACK / SPECIALIZATION]',
    location: '[CITY, COUNTRY]',
    period: '[YYYY — YYYY]',
    details: ['[Honors, relevant results, or delete this entry entirely.]'],
    isPlaceholder: true,
  },
];

/** SOURCE : Resume (PDF), section "Skills & Interests". */
export const credentials: Credential[] = [
  {
    id: 'faa-part-107',
    name: 'FAA Licensed Remote Pilot (Part 107)',
    issuer: 'Federal Aviation Administration',
    issued: '[MONTH YYYY]', // date non indiquee sur le CV
    isPlaceholder: true,
  },
];

/** Engagement associatif — SOURCE : Resume (PDF). */
export const involvement = [
  {
    id: 'agc-umass',
    organization: 'Associated General Contractors (AGC) — UMass chapter',
    role: 'General Representative / Spokesperson',
    period: '[YYYY — Present]',
    isPlaceholder: true, // seules les dates manquent
    description:
      'Represent the chapter and speak on its behalf within the university and with outside partners.',
  },
];

/** Cursus suivi — SOURCE : Resume (PDF), section "Relevant Coursework". */
export const coursework: string[] = [
  'Statics',
  'Strength of Materials',
  'Structural Analysis',
  'Soil Mechanics',
  'Fluid Mechanics',
  'Thermodynamics',
  'Measurements',
  'Transportation',
  'Water and Environmental Resources Engineering',
  'Programming for Civil Engineering',
  'Probability for Civil Engineering',
  'Systems and Economics for Civil Engineering',
];
