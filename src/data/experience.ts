import type { ExperienceItem } from './types';

/**
 * SOURCE : Resume (PDF). Contenu conserve fidelement, reformule en anglais US
 * a la premiere personne implicite (style CV US : verbe d'action au passe).
 *
 * L'ordre d'affichage est du plus recent au plus ancien (tri sur sortKey).
 */
export const experience: ExperienceItem[] = [
  {
    // [A COMPLETER] Stage de Boston mentionne mais aucune information fournie.
    // Renseigner company / role / period / bullets, puis retirer isPlaceholder.
    id: 'boston-internship',
    company: '[COMPANY NAME — Boston internship]',
    role: '[ROLE TITLE]',
    location: 'Boston, Massachusetts',
    period: '[Month YYYY — Month YYYY]',
    sortKey: '9999-99', // force la position en tete tant que c'est un placeholder
    employmentType: 'Internship',
    bullets: [
      '[BULLET 1 — what you were responsible for. Start with an action verb, past tense.]',
      '[BULLET 2 — a concrete deliverable, with a number if you have one.]',
      '[BULLET 3 — software, code, or method you applied.]',
    ],
    tools: ['[TOOL]', '[TOOL]'],
    isPlaceholder: true,
  },
  {
    id: 'luseo-engineering',
    company: 'Luseo Engineering',
    role: 'Project Manager Intern',
    location: 'Rabat, Morocco',
    period: 'Jun 2025 — Jul 2025',
    sortKey: '2025-06',
    employmentType: 'Internship',
    bullets: [
      'Supported delivery of the Royal Mohammed VI Hospital and University Complex — 270,000 m² of usable space across five buildings and a 25-story tower.',
      'Identified discrepancies between floor plans and as-built installations on site, and escalated them to the responsible teams.',
      'Reviewed installations against applicable code requirements and drafted the resulting RFIs and change notices.',
      'Flagged conceptual errors on architectural drawings and worked them through with the engineering team.',
      'Sat in on weekly team meetings and observed how the firm handled bidding, negotiation, client interviews, and project planning.',
    ],
    tools: ['RFIs & change notices', 'Drawing review', 'Code compliance', 'Project planning'],
  },
  {
    id: 'co-ex-engineering',
    company: 'Co Ex Engineering',
    role: 'Topography Intern',
    location: 'Rabat, Morocco',
    period: 'Jun 2024 — Aug 2024',
    sortKey: '2024-06',
    employmentType: 'Internship',
    bullets: [
      'Worked at a surveying firm serving both private clients and the state, operating and maintaining high-precision survey equipment.',
      'Ran GPS base and rover sets and a CHCNAV i50 GNSS receiver to collect field coordinates.',
      'Operated a Leica 3D laser scanner to capture building interiors, and processed the point cloud data in CloudWorx.',
      'Used a total station to measure spot elevations across survey sites.',
      'Produced floor plans in AutoCAD for client deliverables, and processed drone imagery in Pix4Dmapper to build site overviews.',
    ],
    tools: [
      'AutoCAD',
      'Pix4Dmapper',
      'CloudWorx',
      'CHCNAV i50 GNSS',
      'Leica 3D scanner',
      'Total station',
    ],
  },
];

/** Trie du plus recent au plus ancien ; les placeholders remontent en tete. */
export const experienceSorted = [...experience].sort((a, b) => b.sortKey.localeCompare(a.sortKey));
