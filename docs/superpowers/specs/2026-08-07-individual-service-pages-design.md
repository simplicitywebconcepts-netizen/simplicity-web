# Design Specification: Individual Service Pages Integration

We are creating 6 new dynamic service pages under the `/services/[slug]` route using a single dynamic page file and a reusable, section-modular template system to ensure visual consistency, clean maintenance, and high performance.

## Routing & Paths
We will register a new dynamic page under:
- [`app/services/[slug]/page.tsx`](file:///Users/krishnkantrai/Documents/TestProjects/simplicity-web/app/services/[slug]/page.tsx)

All 6 service slugs (`web-development`, `design-branding`, `social-media-marketing`, `seo-marketing`, `conversion-optimization`, `analytics`) will be resolved statically at build time.

## Data Definition (`types/service.ts`)
We define a shared structure mapping all 13 required sections:
```typescript
export interface ServiceContent {
  slug: string;
  nav_label: string;
  h1: string;
  intro: string;
  trust: string[];
  challenges: string[];
  solution_intro: string;
  solution_h3: { title: string; text: string }[];
  included_h2: string;
  included: { title: string; text: string }[];
  benefits_h2: string;
  benefits: { title: string; text: string }[];
  process_h2: string;
  process: { title: string; text: string }[];
  tech_h2: string;
  tech: { title: string; text: string }[];
  industries_h2: string;
  industries_note?: string;
  why_h2: string;
  why: { title: string; text: string }[];
  projects_h2: string;
  projects: { name: string; industry: string; overview: string; link: string }[];
  testimonial: { quote: string; author: string; role: string };
  faqs: { question: string; answer: string }[];
  cta_h2: string;
  cta_body: string;
}
```

## Modular Template Architecture
We will introduce:
1. A shared content repository `lib/data/servicesData.ts` exporting data blocks for the 6 services.
2. A main template component `components/services/ServicePageTemplate.tsx` which handles orchestration.
3. 13 modular sub-components under `components/services/sections/`:
   - `HeroSection.tsx`: Splitted layout showing keyword-optimized H1, trust badges, and CTAs.
   - `ChallengesSection.tsx`: Clean lists of 5 user pain points.
   - `SolutionSection.tsx`: 4 core H3 service pillars.
   - `IncludedSection.tsx`: Grid detailing the 6 sub-service offerings.
   - `BenefitsSection.tsx`: Grid with clean icons illustrating service outcomes.
   - `ProcessSection.tsx`: Stepper element tracing the workflow phases.
   - `TechSection.tsx`: Grid displaying support tools and systems.
   - `IndustriesSection.tsx`: Cards grid mapping the industries served.
   - `WhyChooseSection.tsx`: 6 brand differentiator cards.
   - `RecentProjectsSection.tsx`: Showcase linking related projects.
   - `TestimonialsSection.tsx`: Glassmorphism client review card.
   - `FAQSection.tsx` (Client component): Accordion expander with smooth height transitions.
   - `CTASection.tsx`: Conversion box with direct booking/contact CTAs.

## Verification Plan

### Automated Checks
- Run `npm run build` to confirm compilation.
- Ensure all pages generate static HTML files.

### Manual Verification
- Check metadata injection on each page.
- Test FAQ toggle responsiveness and layout alignment.
