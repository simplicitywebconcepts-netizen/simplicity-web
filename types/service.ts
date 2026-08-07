export interface Project {
  name: string;
  industry: string;
  overview: string;
  link: string;
}

export interface ServiceContent {
  slug: string;
  nav_label: string;
  h1: string;
  intro: string;
  trust: string[];
  challenges: string[];
  solution_intro: string;
  solution_h3: [string, string][];
  included_h2: string;
  included: [string, string][];
  benefits_h2: string;
  benefits: [string, string][];
  process_h2: string;
  process: [string, string][];
  tech_h2: string;
  tech: [string, string][];
  industries_h2: string;
  industries_note: string;
  why_h2: string;
  why: [string, string][];
  projects_h2: string;
  projects: Project[];
  testimonial: [string, string, string];
  faqs: [string, string][];
  cta_h2: string;
  cta_body: string;
}
