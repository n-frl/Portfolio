import type { LanguageSkill, SkillGroup } from './types';
import { coursework } from './education';

/**
 * Pas de pourcentages ni de barres de progression : invérifiables et mal vus
 * sur un profil d'ingenieur. On liste, on groupe, on laisse le recruteur juger.
 *
 * SOURCE : Resume (PDF).
 */
export const skillGroups: SkillGroup[] = [
  {
    id: 'structural-software',
    title: 'Structural analysis & design software',
    caption: 'Modeling, analysis, and design tools.',
    items: ['SAP2000', 'CSI SAFE'],
    defaultOpen: true,
  },
  {
    id: 'drafting',
    title: 'Drafting & documentation',
    caption: 'Producing and reviewing drawings and project documents.',
    items: ['AutoCAD', 'Bluebeam Revu', 'Microsoft Office Suite'],
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
      'Geotechnical report review',
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
];

/** SOURCE : Resume (PDF), "Proficient in 3 languages". */
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
