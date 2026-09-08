import type { ExperienceItem } from './types';

/**
 * SOURCE : Resume (PDF). Contenu conserve fidelement, reformule en anglais US
 * (style CV US : verbe d'action au passe).
 *
 * L'ordre d'affichage est du plus recent au plus ancien (tri sur sortKey).
 */
export const experience: ExperienceItem[] = [
  {
    id: 'dn-tanks',
    company: 'DN Tanks',
    role: 'Design Engineer Intern',
    location: 'Wakefield, MA',
    period: 'June 2026 — August 2026',
    sortKey: '2026-06',
    employmentType: 'Internship',
    bullets: [
      'Modeled tank floor reactions under various loadings and different foundation configurations using SAFE.',
      'Devised prestressing wire configurations for both pre-bid and final design project phases, then modeled tank wall behavior — resulting in pivotal changes that prevented costly design revisions.',
      'Reviewed geotechnical reports, communicated concerns during bid meetings, and issued RFIs for missing data.',
      'Developed AutoCAD, Excel, and SAFE tutorials for recent hires and standardized drawings, improving team efficiency.',
    ],
    tools: ['CSI SAFE', 'AutoCAD', 'Excel', 'RFIs', 'Geotechnical report review'],
  },
  {
    id: 'umass-teaching-assistant',
    company: 'UMass Amherst — Department of Civil Engineering',
    role: 'Teaching Assistant, CEE 651 Piloting UAVs / Research Assistant',
    location: 'Amherst, MA',
    period: 'February 2026 — May 2026',
    sortKey: '2026-02',
    employmentType: 'On-campus',
    bullets: [
      'Co-taught and graded a class of 20+ students covering drone piloting, maintenance, and flight planning.',
      'Supported the UMass Air research team outside of class, notably on flight mapping and in-situ data collection.',
    ],
    tools: ['UAV flight planning', 'Flight mapping', 'In-situ data collection'],
  },
  {
    id: 'luseo-engineering',
    company: 'Luseo Engineering',
    role: 'Project Manager Intern',
    location: 'Rabat, Morocco',
    period: 'June 2025 — August 2025',
    sortKey: '2025-06',
    employmentType: 'Internship',
    bullets: [
      'Oversaw development of the Royal Mohammed VI Hospital and University Complex — 270,000 m² of usable space across five buildings and a 25-story tower.',
      'Identified discrepancies between floor plans and on-site installations, and escalated them to the responsible teams.',
      'Researched the compliance of installations with legal requirements, drafting numerous RFIs and change notices.',
      'Identified conceptual errors on architectural blueprints and worked them through with fellow engineers.',
      'Attended weekly team meetings and observed how the firm handled work opportunities, negotiation, client interviews, and project planning.',
    ],
    tools: ['RFIs & change notices', 'Drawing review', 'Code compliance', 'Project planning'],
  },
  {
    id: 'co-ex-engineering',
    company: 'Co Ex Engineering',
    role: 'Topography Intern',
    location: 'Rabat, Morocco',
    period: 'June 2024 — August 2024',
    sortKey: '2024-06',
    employmentType: 'Internship',
    bullets: [
      'Operated and maintained complex, high-precision surveying equipment.',
      'Ran GPS base and rover sets and a CHCNAV i50 GNSS receiver to collect field coordinates.',
      'Operated a Leica 3D laser scanner to capture building interiors, and processed the point cloud data in CloudWorx.',
      'Used a total station to measure relief elevation across survey sites.',
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

/** Trie du plus recent au plus ancien. */
export const experienceSorted = [...experience].sort((a, b) => b.sortKey.localeCompare(a.sortKey));
