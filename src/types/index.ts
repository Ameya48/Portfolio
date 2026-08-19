// ============================================================
// PORTFOLIO TYPE DEFINITIONS
// ============================================================

// ---- Project -----------------------------------------------
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  category: ProjectCategory;
  status: 'live' | 'wip' | 'archived';
  featured: boolean;
  links: {
    github?: string;
    live?: string;
    demo?: string;
    writeup?: string;
  };
  year: number;
  thumbnail?: string;
}

export type ProjectCategory =
  | 'web'
  | 'mobile'
  | 'ml'
  | 'systems'
  | 'tools'
  | 'other';

// ---- Skill -------------------------------------------------
export interface SkillGroup {
  category: string;
  skills: string[];
}

// ---- Experience / Education --------------------------------
export interface TimelineItem {
  id: string;
  type: 'education' | 'experience' | 'achievement';
  institution: string;
  role: string;
  period: string;           // e.g. "Aug 2023 – Present"
  location?: string;
  description?: string;
  highlights?: string[];
  tech?: string[];
}

// ---- Social Link -------------------------------------------
export interface SocialLink {
  label: string;
  href: string;
  ariaLabel: string;
}

// ---- Portfolio Data Root -----------------------------------
export interface PortfolioData {
  person: PersonInfo;
  projects: Project[];
  skills: SkillGroup[];
  timeline: TimelineItem[];
  socials: SocialLink[];
}

export interface PersonInfo {
  name: string;
  firstName: string;
  lastName: string;
  initials: string;
  tagline: string;
  bio: string;
  email: string;
  location: string;
  availableForWork: boolean;
  github: string;
  linkedin: string;
}

// ---- Navigation --------------------------------------------
export interface NavItem {
  label: string;
  href: string;
  sectionId: string;
}

// ---- Component Props Helpers --------------------------------
export interface MotionProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}
