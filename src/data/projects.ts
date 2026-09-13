import type { ProjectItem } from './types';

/**
 * SOURCE : contenu fourni mot pour mot par Nabil.
 * Les puces sont reprises telles quelles, sans reformulation ni ajout.
 */
export const projects: ProjectItem[] = [
  {
    id: 'drone-project',
    title: 'Built and programmed my own FPV drone',
    context: 'Personal project',
    period: '2025',
    description: '',
    contributions: [
      'Soldered motor wires, battery leads and a capacitor to the Electronic Speed Controller board',
      'Interpreted and applied manufacturer wiring diagrams to connect the camera, GPS, controller receiver, VTX, and ESC to the Flight Controller',
      'Utilized Betaflight to program the drone including a failsafe, On Screen Display, accelerometer, motor layout, receiver and other flight control settings',
    ],
    tools: ['Betaflight'],
  },
];
