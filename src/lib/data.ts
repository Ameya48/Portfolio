// ============================================================
// PORTFOLIO DATA LAYER
// All real content lives here. [PLACEHOLDER] marks items
// that need to be filled in by Ameya.
// ============================================================

import type { PortfolioData } from '@/types';

export const portfolioData: PortfolioData = {
  // ----------------------------------------------------------
  // PERSON
  // ----------------------------------------------------------
  person: {
    name: 'Ameya Sagwekar',
    firstName: 'Ameya',
    lastName: 'Sagwekar',
    initials: 'AS',
    tagline: '[PLACEHOLDER] — e.g. "Full-stack developer building thoughtful software."',
    bio: '[PLACEHOLDER] — Write 2-3 sentences about yourself: what you build, what you care about, and what makes your approach to software unique. Keep it honest and direct.',
    email: '[PLACEHOLDER] — your@email.com',
    location: '[PLACEHOLDER] — e.g. Mumbai, India',
    availableForWork: true,
    github: 'https://github.com/Ameya48',
    linkedin: 'https://www.linkedin.com/in/ameya-sagwekar-80081832a/',
  },

  // ----------------------------------------------------------
  // PROJECTS
  // Add your real projects here. Duplicate the object for each.
  // ----------------------------------------------------------
  projects: [
    {
      id: 'project-1',
      title: '[PLACEHOLDER] Project Title',
      description: '[PLACEHOLDER] One-line description of what this project does.',
      longDescription: '[PLACEHOLDER] 2-3 sentences explaining the problem, your solution, and what you learned.',
      tech: ['[PLACEHOLDER]', 'Tech', 'Stack'],
      category: 'web',
      status: 'live',
      featured: true,
      links: {
        github: 'https://github.com/Ameya48/[PLACEHOLDER]',
        live: '[PLACEHOLDER]',
      },
      year: 2025,
    },
    {
      id: 'project-2',
      title: '[PLACEHOLDER] Project Title',
      description: '[PLACEHOLDER] One-line description of what this project does.',
      tech: ['[PLACEHOLDER]', 'Tech', 'Stack'],
      category: 'web',
      status: 'wip',
      featured: true,
      links: {
        github: 'https://github.com/Ameya48/[PLACEHOLDER]',
      },
      year: 2025,
    },
    {
      id: 'project-3',
      title: '[PLACEHOLDER] Project Title',
      description: '[PLACEHOLDER] One-line description of what this project does.',
      tech: ['[PLACEHOLDER]', 'Tech', 'Stack'],
      category: 'other',
      status: 'archived',
      featured: false,
      links: {
        github: 'https://github.com/Ameya48/[PLACEHOLDER]',
      },
      year: 2024,
    },
  ],

  // ----------------------------------------------------------
  // SKILLS
  // List technologies you actually know — no inflated claims.
  // ----------------------------------------------------------
  skills: [
    {
      category: 'Languages',
      skills: ['[PLACEHOLDER]', 'e.g. Python', 'JavaScript', 'TypeScript'],
    },
    {
      category: 'Frontend',
      skills: ['[PLACEHOLDER]', 'e.g. React', 'HTML/CSS'],
    },
    {
      category: 'Backend',
      skills: ['[PLACEHOLDER]', 'e.g. Node.js', 'Express'],
    },
    {
      category: 'Tools & Infrastructure',
      skills: ['[PLACEHOLDER]', 'e.g. Git', 'Docker', 'Linux'],
    },
    {
      category: 'Databases',
      skills: ['[PLACEHOLDER]', 'e.g. PostgreSQL', 'MongoDB'],
    },
  ],

  // ----------------------------------------------------------
  // TIMELINE — Education & Experience
  // Only include things you can speak to in an interview.
  // ----------------------------------------------------------
  timeline: [
    {
      id: 'edu-1',
      type: 'education',
      institution: '[PLACEHOLDER] University / College Name',
      role: '[PLACEHOLDER] Degree & Major — e.g. B.Tech Computer Engineering',
      period: '[PLACEHOLDER] e.g. 2023 – 2027',
      location: '[PLACEHOLDER] City, India',
      description: '[PLACEHOLDER] Optional: notable coursework, GPA if strong, relevant projects.',
    },
    {
      id: 'exp-1',
      type: 'experience',
      institution: '[PLACEHOLDER] Company / Organisation Name',
      role: '[PLACEHOLDER] Role — e.g. Software Engineering Intern',
      period: '[PLACEHOLDER] e.g. May 2025 – Jul 2025',
      location: '[PLACEHOLDER] City / Remote',
      highlights: [
        '[PLACEHOLDER] What did you build or contribute?',
        '[PLACEHOLDER] What was the measurable impact?',
      ],
      tech: ['[PLACEHOLDER]', 'Tech', 'Used'],
    },
  ],

  // ----------------------------------------------------------
  // SOCIALS
  // ----------------------------------------------------------
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/Ameya48',
      ariaLabel: 'Ameya Sagwekar on GitHub',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ameya-sagwekar-80081832a/',
      ariaLabel: 'Ameya Sagwekar on LinkedIn',
    },
    {
      label: 'Email',
      href: 'mailto:[PLACEHOLDER]@gmail.com',
      ariaLabel: 'Email Ameya Sagwekar',
    },
  ],
};

// ----------------------------------------------------------
// NAVIGATION
// ----------------------------------------------------------
export const navItems = [
  { label: 'About',    href: '#about',    sectionId: 'about' },
  { label: 'Projects', href: '#projects', sectionId: 'projects' },
  { label: 'Skills',   href: '#skills',   sectionId: 'skills' },
  { label: 'Contact',  href: '#contact',  sectionId: 'contact' },
] as const;
