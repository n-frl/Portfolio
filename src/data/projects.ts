import type { ProjectItem } from './types';

/**
 * SOURCE : Resume (PDF) + confirmations de Nabil.
 * Une seule entree pour l'instant, encore a documenter.
 */
export const projects: ProjectItem[] = [
  {
    // [A COMPLETER] Le CV mentionne "Drone building and programming" en centre
    // d'interet + une licence FAA Part 107 et un poste de TA sur CEE 651.
    // C'est le differenciateur le plus fort du profil : a documenter.
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
];
