/**
 * Types de la couche de donnees.
 *
 * REGLE DU PROJET : aucune donnee n'est inventee. Tout element non confirme
 * porte `isPlaceholder: true` et un contenu explicitement marque entre
 * crochets. L'interface affiche alors un badge "To complete" pour qu'un
 * placeholder ne puisse jamais passer pour une information reelle.
 */

export interface Profile {
  fullName: string;
  /** Titre affiche sous le nom. Doit rester factuel. */
  headline: string;
  /** Phrase d'accroche libre. Placeholder tant qu'elle n'est pas ecrite. */
  tagline: string;
  location: string;
  /** Resume de profil (section "About"). */
  about: string[];
  /** Chemin du CV dans /public. Le prefixe de base est ajoute par withBase(). */
  resumePath: string;
  resumeFileName: string;
  /** Liens externes affiches dans l'en-tete du profil. */
  links: ProfileLink[];
}

export interface ProfileLink {
  label: string;
  /** Href interne ou externe. */
  href: string;
  external: boolean;
  /** Vrai tant que l'URL reelle n'existe pas (ex : LinkedIn pas encore cree). */
  isPlaceholder?: boolean;
  note?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  /** Libelle de periode affiche tel quel, ex : "Jun 2024 - Aug 2024". */
  period: string;
  /** Cle de tri, format AAAA-MM. */
  sortKey: string;
  employmentType: string;
  bullets: string[];
  /** Outils et methodes mis en oeuvre sur cette mission. */
  tools: string[];
  isPlaceholder?: boolean;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  period: string;
  details: string[];
  isPlaceholder?: boolean;
}

export interface Credential {
  id: string;
  name: string;
  issuer: string;
  /** Date d'obtention. Placeholder si non confirmee. */
  issued: string;
  isPlaceholder?: boolean;
}

export interface SkillGroup {
  id: string;
  title: string;
  /** Une ligne expliquant ce que le groupe couvre. */
  caption: string;
  items: string[];
  /** Le groupe est-il deplie par defaut ? */
  defaultOpen: boolean;
  isPlaceholder?: boolean;
}

export interface LanguageSkill {
  language: string;
  level: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  context: string;
  period: string;
  description: string;
  contributions: string[];
  tools: string[];
  isPlaceholder?: boolean;
}
