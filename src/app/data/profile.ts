// All of the site's CV content lives here, so updating the site after a CV change
// is a matter of editing this file.
import type { IconName } from '../components/icon/icon.component';

export interface Job {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  bullets: string[];
  tech: string[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  name: string;
  period: string;
  description: string;
  tagline?: string;
  bullets?: string[];
  stats?: { value: string; label: string }[];
  tech: string[];
  links: ProjectLink[];
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface ContactLink {
  label: string;
  display: string;
  href: string;
  icon: IconName;
  external?: boolean;
}

export const profile = {
  name: 'Eduard Andrei Broasca',
  role: 'Associate Consultant',
  company: 'Version 1',
  location: 'Dublin, Ireland',
  email: 'eduard.andrei.broasca@gmail.com',
  phone: '+353 87 684 0890',
  github: 'https://github.com/edanbro',
  linkedin: 'https://www.linkedin.com/in/eduard-broasca-b97926249/',
  cv: 'assets/Eduard_Broasca_CV.pdf',
  source: 'https://github.com/edanbro/personal-webpage',
};

export const contactLinks: ContactLink[] = [
  { label: 'Email', display: profile.email, href: `mailto:${profile.email}`, icon: 'mail' },
  { label: 'Phone', display: profile.phone, href: 'tel:+353876840890', icon: 'phone' },
  { label: 'LinkedIn', display: 'in/eduard-broasca-b97926249', href: profile.linkedin, icon: 'linkedin', external: true },
  { label: 'GitHub', display: 'github.com/edanbro', href: profile.github, icon: 'github', external: true },
];

export const experience: Job[] = [
  {
    role: 'Associate Consultant',
    company: 'Version 1',
    location: 'Dublin, Ireland',
    start: 'Jun 2026',
    end: 'Present',
    current: true,
    bullets: [
      'Develop Angular, Java and Spring Boot features for the Department of Agriculture, Food and the Marine',
      'Build front-end components and maintain the APIs and services behind them',
      'Take part in code reviews and sprints with developers, business analysts and stakeholders',
    ],
    tech: ['Angular', 'Java', 'Spring Boot'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'AQ Metrics Limited',
    location: 'Maynooth, Kildare, Ireland',
    start: 'Apr 2024',
    end: 'Jul 2025',
    bullets: [
      'Built front-end features in Angular and TypeScript to customer specifications',
      'Fixed bugs across the stack, from UI layout issues to broken front-end and back-end integration',
      'Worked in Scrum with daily stand-ups, tracking work in Jira and code in Git',
    ],
    tech: ['Angular', 'TypeScript', 'Jira', 'Git', 'Scrum'],
  },
];

export const education = {
  degree: 'B.Sc. in Computer Science & Software Engineering',
  school: 'Maynooth University',
  location: 'Kildare, Ireland',
  start: 'Sep 2021',
  end: 'Sep 2025',
  grade: '2:1 honours',
  note: 'Final-year capstone: Muscles Made Easy, a fitness web app built end to end as the sole developer.',
};

export const certifications = [
  { name: 'Microsoft Certified: Azure Fundamentals', code: 'AZ-900', issuer: 'Microsoft', date: 'Jul 2026' },
];

export const featuredProject: Project = {
  name: 'Mealwright',
  period: 'Oct 2026 – Present',
  tagline: 'A weekly meal planner run by a constraint solver, not an LLM.',
  description:
    'Plans a week of meals around your calories, budget, allergies and what is already in your pantry, ' +
    'with barcode and receipt intake over a 200,000-product food database.',
  bullets: [
    'Plans come from a CP-SAT constraint solver, and an independent validator checks every one before it is shown',
    'Deployed at no cost on Vercel, Render, Neon and Upstash after a security review covering SSRF protection, rate limits and token handling',
    'Tuned the solver so a 0.1-CPU server plans as well as paid hosting',
    'Built with agentic coding tools for development and testing, while architecture, design and evaluation stayed developer-led',
  ],
  stats: [
    { value: '0', label: 'safety violations across 200 generated plans' },
    { value: '27%', label: 'of the pantry used, against 14% for a greedy baseline' },
    { value: '200k', label: 'products in the food database' },
  ],
  tech: ['Python', 'FastAPI', 'OR-Tools', 'PostgreSQL', 'Next.js', 'TypeScript'],
  links: [
    { label: 'Live app', href: 'https://the-mealwright.vercel.app/' },
    { label: 'Source', href: 'https://github.com/edanbro/Mealwright' },
  ],
};

export const projects: Project[] = [
  {
    name: 'Muscles Made Easy',
    period: 'Oct 2024 – Mar 2025',
    description:
      'A web app for fitness enthusiasts of all levels to discover exercises, build a workout plan and track their progress. ' +
      'My final-year capstone project, delivered end to end as the sole developer.',
    tech: ['Angular', 'TypeScript', 'Firebase', 'GitLab'],
    links: [{ label: 'Live app', href: 'https://muscles-made-easy.web.app/' }],
  },
  {
    name: 'MU Demonstrator Allocation System',
    period: 'Feb 2024 – Apr 2024',
    description:
      "Contributed to a major overhaul of Maynooth University's system for allocating lab demonstrators. " +
      'My first project run with Scrum, with daily stand-ups and retrospectives.',
    tech: ['Python', 'Flask', 'Docker', 'GitLab'],
    links: [],
  },
  {
    name: 'Chord Assist',
    period: 'Sep 2024 – Dec 2024',
    description:
      'A React and Node.js web app for learning and practising guitar chords, with an Ollama-powered assistant built in.',
    tech: ['React', 'Node.js', 'Ollama'],
    links: [],
  },
  {
    name: 'This website',
    period: '2025 – Present',
    description:
      'A single-page Angular and Tailwind CSS site with light and dark themes, deployed to GitHub Pages by GitHub Actions.',
    tech: ['Angular', 'Tailwind CSS', 'GitHub Actions'],
    links: [{ label: 'Source', href: profile.source }],
  },
];

export const skillGroups: SkillGroup[] = [
  { name: 'Languages', items: ['TypeScript', 'Java', 'Python', 'Go', 'C/C++', 'SQL', 'JavaScript', 'HTML/CSS'] },
  {
    name: 'Frameworks & libraries',
    items: ['Angular', 'Spring Boot', 'React', 'Next.js', 'Node.js', 'FastAPI', 'Flask', 'OR-Tools', 'Material-UI', 'NumPy', 'Matplotlib'],
  },
  { name: 'Databases', items: ['PostgreSQL', 'Redis', 'Firebase'] },
  { name: 'Testing', items: ['pytest', 'Vitest', 'Playwright'] },
  { name: 'Tools & cloud', items: ['Git', 'Docker', 'Azure', 'AWS', 'Jira', 'Postman', 'Figma', 'VS Code'] },
];

export const interests = [
  'Game development in Godot',
  'Screen acting and musical theatre',
  'Learning Mandarin Chinese',
  'Staying active',
];
