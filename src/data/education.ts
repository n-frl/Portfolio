import type { Credential, EducationItem } from './types';

/** SOURCE : Resume (PDF) + confirmations de Nabil. */
export const education: EducationItem[] = [
  {
    id: 'umass-amherst',
    institution: 'University of Massachusetts Amherst',
    degree: 'Bachelor of Science',
    field: 'Civil and Environmental Engineering',
    location: 'Amherst, Massachusetts',
    period: 'Expected Fall 2026',
    details: ['GPA: 3.3 / 4.0'],
  },
];

/** SOURCE : Resume (PDF), section "Skills & Interests". */
export const credentials: Credential[] = [
  {
    id: 'faa-part-107',
    name: 'FAA Licensed Remote Pilot (Part 107)',
    issuer: 'Federal Aviation Administration',
    issued: 'March 2025',
  },
];

/** Engagement associatif. SOURCE : Resume (PDF). */
export const involvement: {
  id: string;
  organization: string;
  role: string;
  period: string;
  description: string;
  isPlaceholder?: boolean;
}[] = [
  {
    id: 'agc-umass',
    organization: 'Associated General Contractors (AGC), UMass chapter',
    role: 'General Representative / Spokesperson',
    period: 'February 2025 to Present',
    description:
      'Represent the chapter and speak on its behalf within the university and with outside partners.',
  },
];

/** Cursus suivi. SOURCE : Resume (PDF), section "Relevant Coursework". */
export const coursework: string[] = [
  'Measurements',
  'Statics',
  'Programming for Civil Engineering',
  'Probability for Civil Engineering',
  'Strength of Materials',
  'Thermodynamics',
  'Systems and Economics for Civil Engineering',
  'Structural Analysis',
  'Soil Mechanics',
  'Fluid Mechanics',
  'Transportation',
  'Water and Environmental Resources Engineering',
  'Concrete Design',
  'Offshore Geotechnics',
  'Geotechnical Site Investigations',
  'Climate Change for Engineers',
  'Advanced Concrete Design',
  'Steel Design',
  'Unified Structural Design',
];
