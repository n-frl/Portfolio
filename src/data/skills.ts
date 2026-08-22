import type { LanguageSkill, SkillGroup } from './types';
import { coursework } from './education';

/**
 * Pas de pourcentages ni de barres de progression : invérifiables et mal vus
 * sur un profil d'ingenieur. On liste, on groupe, on laisse le recruteur juger.
 *
 * SOURCE : Resume (PDF) + ajout de SAFE 2000 (confirme hors CV).
 */
export const skillGroups: SkillGroup[] = [
  {
    id: 'structural-software',
    title: 'Structural analysis & design software',
    caption: 'Modeling, analysis, and design tools.',
    items: ['SAP2000', 'SAFE 2000'],
    defaultOpen: true,
  },
  {
    id: 'drafting',
    title: 'Drafting & documentation',
    caption: 'Producing and reviewing drawings and project documents.',
    items: ['AutoCAD', 'PDF-XChange', 'Microsoft Office Suite'],
    defaultOpen: true,
  },
  {
    id: 'survey',
    title: 'Survey & field instrumentation',
    caption: 'Equipment operated on site during the 2024 survey internship.',
    items: [
      'GPS base and rover sets',
      'CHCNAV i50 GNSS receiver',
      'Leica 3D laser scanner',
      'Total station',
      'Auto level',
      'Measuring wheel and rod',
    ],
    defaultOpen: true,
  },
  {
    id: 'reality-capture',
    title: 'Reality capture & data processing',
    caption: 'Turning field captures into usable models and site overviews.',
    items: ['CloudWorx (point cloud processing)', 'Pix4Dmapper (drone photogrammetry)'],
    defaultOpen: true,
  },
  {
    id: 'project-delivery',
    title: 'Project delivery',
    caption: 'Owner-side and coordination work from the 2025 internship.',
    items: [
      'RFIs and change notices',
      'Drawing vs. as-built reconciliation',
      'Code compliance review',
      'Project planning',
      'ADA accessibility assessment',
    ],
    defaultOpen: true,
  },
  {
    id: 'coursework',
    title: 'Engineering coursework',
    caption: 'Completed and in-progress courses at UMass Amherst.',
    items: coursework,
    defaultOpen: false,
  },
  {
    // [A COMPLETER] Point important pour un poste de design engineer aux US.
    // Ne rien cocher qui n'a pas ete reellement etudie ou applique.
    id: 'codes-standards',
    title: 'Codes & standards',
    caption: 'Design codes you have actually worked with — leave empty until then.',
    items: [
      '[CODE — e.g. ASCE 7, AISC 360, ACI 318, IBC, Massachusetts State Building Code]',
      '[CODE — add only what you have genuinely used]',
    ],
    defaultOpen: false,
    isPlaceholder: true,
  },
  {
    // [A COMPLETER] Le CV mentionne "Programming for Civil Engineering" et un
    // interet pour la programmation de drones, sans preciser les langages.
    id: 'programming',
    title: 'Programming',
    caption: 'Languages and libraries used for engineering computation.',
    items: ['[LANGUAGE — e.g. Python, MATLAB]', '[LIBRARY OR TOOL]'],
    defaultOpen: false,
    isPlaceholder: true,
  },
];

/** SOURCE : Resume (PDF) — "Proficient in 3 languages". */
export const languages: LanguageSkill[] = [
  { language: 'English', level: 'Full professional proficiency' },
  { language: 'French', level: 'Full professional proficiency' },
  { language: 'Arabic', level: 'Full professional proficiency' },
];

/** SOURCE : Resume (PDF), section "Interests". */
export const interests: string[] = [
  'Drone building and programming',
  'Intramural soccer',
  'Skiing',
  'Piano',
  'Tennis',
  'Reading',
];
