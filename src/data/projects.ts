import type { ProjectItem } from './types';

/**
 * SOURCE : Resume (PDF), section "Projects" — un seul projet y figure.
 * Les deux entrees suivantes sont des gabarits vides a remplir : sur un
 * portfolio d'ingenieur structure, cette section est le principal argument.
 */
export const projects: ProjectItem[] = [
  {
    id: 'ada-slope-study',
    title: 'ADA slope compliance study and building plan set',
    context: 'Coursework — UMass Amherst',
    period: '[SEMESTER YYYY]', // date non indiquee sur le CV
    description:
      'Determined whether a hill met ADA accessibility requirements by surveying and calculating its slope, then produced a matching foundation and floor plan set.',
    contributions: [
      'Measured the site using an auto level, a measuring wheel, and a measuring rod.',
      'Calculated the resulting slope and assessed it against ADA accessibility criteria.',
      'Drafted a foundation plan and a floor plan for a building on the site in AutoCAD.',
    ],
    tools: ['AutoCAD', 'Auto level', 'Measuring wheel', 'Measuring rod'],
  },
  {
    // [A COMPLETER] Le CV mentionne "Drone building and programming" en centre
    // d'interet + une licence FAA Part 107. Il y a probablement un vrai projet
    // a documenter ici : c'est un differenciateur fort face aux autres candidats.
    id: 'drone-project',
    title: '[PROJECT TITLE — drone build / programming]',
    context: '[CONTEXT — personal project, club, or coursework]',
    period: '[YYYY]',
    description: '[One or two sentences: what you built, and what problem it solved.]',
    contributions: [
      '[What you designed or assembled.]',
      '[What you programmed, and in what language.]',
      '[Result: what it can do, or what you measured.]',
    ],
    tools: ['[TOOL]', '[TOOL]'],
    isPlaceholder: true,
  },
  {
    // [A COMPLETER] Idealement un projet de calcul de structure (SAP2000 /
    // SAFE 2000), le plus pertinent pour un poste de design engineer.
    id: 'structural-project',
    title: '[PROJECT TITLE — structural analysis or design]',
    context: '[CONTEXT — course, competition, or internship]',
    period: '[SEMESTER YYYY]',
    description: '[What structure, what loads, what you were asked to determine.]',
    contributions: [
      '[Model you built and the assumptions behind it.]',
      '[Analysis you ran and the governing case.]',
      '[Design outcome: member sizes, deflections, or conclusion.]',
    ],
    tools: ['SAP2000', '[TOOL]'],
    isPlaceholder: true,
  },
];
