export interface CaseStudyStep {
  title: string;
  description: string;
}

export interface CaseStudyFeature {
  title: string;
  description: string;
}

export interface CaseStudyMetaItem {
  label: string;
  value: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  client: string;
  industry: string;
  services: string[];
  website: string;
  intro: string[];
  overview: string[];
  challenge: string[];
  approach: CaseStudyStep[];
  features: CaseStudyFeature[];
  designHighlights: string[];
  results: string[];
  techStack: string[];
  screenshot: {
    src: string;
    alt: string;
  };
  ctaHeading: string;
  ctaDescription: string;
  meta: CaseStudyMetaItem[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "toronto-hypertension-clinic",
    title: "Toronto Hypertension Clinic",
    tagline:
      "A clearer patient journey for a healthcare website focused on trust, education, and search visibility.",
    client: "Toronto Hypertension Clinic",
    industry: "Healthcare",
    services: ["WordPress Development", "SEO"],
    website: "https://torontohypertensionclinic.ca/",
    intro: [
      "Toronto Hypertension Clinic needed a website that made specialist care easier to understand for patients searching online. The new experience presents the clinic as a trusted medical resource while keeping key information accessible from the first scroll.",
      "We rebuilt the site in WordPress with a content structure that supports web development best practices, SEO optimization, and straightforward updates for clinic staff. The result is a case study-ready website that balances medical credibility with clarity.",
    ],
    overview: [
      "The project focused on removing friction from the patient journey. We organized the content around the questions people ask first: what the clinic treats, who it helps, and how to move forward with confidence.",
      "Design and content decisions were shaped by healthcare usability needs. Every section had to support trust, remain readable on mobile, and give the clinic a flexible WordPress foundation for future updates.",
      "The final website is intentionally calm, direct, and structured for search engines. That makes it easier for the clinic to grow local visibility while keeping the brand presentation professional.",
    ],
    challenge: [
      "The previous content structure was difficult to scan quickly on mobile devices.",
      "Service information did not align well with how patients search for healthcare providers online.",
      "Navigation needed to feel simpler for first-time visitors who may already be under stress.",
      "The site required stronger SEO signals for local healthcare searches without sounding overly promotional.",
      "Clinic staff needed a WordPress setup that would be simple to maintain after launch.",
    ],
    approach: [
      {
        title: "Strategy",
        description:
          "Mapped the patient journey, search intent, and conversion goals before design work began so the site could answer the right questions in the right order.",
      },
      {
        title: "Design",
        description:
          "Created a calm visual hierarchy with clear spacing, premium typography, and a mobile-first layout that keeps the focus on clarity and trust.",
      },
      {
        title: "Development",
        description:
          "Built the website in WordPress with reusable page sections and flexible content blocks so the clinic can update services without technical overhead.",
      },
      {
        title: "Optimization",
        description:
          "Refined page structure, metadata, and performance details to support SEO readiness, fast load times, and a better overall user experience.",
      },
    ],
    features: [
      {
        title: "WordPress Content System",
        description:
          "A modular editing setup that allows the clinic to update service information, announcements, and key pages without needing a developer.",
      },
      {
        title: "Local SEO Structure",
        description:
          "Content and heading patterns designed to support local visibility for healthcare searches in Toronto and surrounding areas.",
      },
      {
        title: "Mobile-First Layout",
        description:
          "Readable spacing, strong hierarchy, and flexible cards that keep the experience easy to use across phones, tablets, and desktops.",
      },
      {
        title: "Service Page Framework",
        description:
          "A repeatable structure for service pages that can be adapted for future healthcare topics without redesigning the site.",
      },
      {
        title: "Conversion-Oriented CTAs",
        description:
          "Clear calls to action that guide patients toward contact, consultation requests, and next-step decisions with minimal friction.",
      },
      {
        title: "Technical Performance",
        description:
          "Efficient front-end implementation and clean structure to support faster load times and a stronger overall SEO foundation.",
      },
    ],
    designHighlights: [
      "The design keeps the experience intentionally calm and professional, which is important for healthcare brands where trust matters before conversion. Typography, spacing, and section rhythm were used to make the content easier to absorb at a glance.",
      "Responsive behavior was treated as a core part of the design rather than an afterthought. The layout adapts cleanly across screen sizes, keeping the most important details visible and readable without forcing users to hunt for information.",
    ],
    results: [
      "A clearer patient experience that makes the clinic easier to understand and more approachable online.",
      "Improved content structure for SEO optimization and long-term case study reuse.",
      "A WordPress workflow that keeps future updates simple for non-technical staff.",
      "Better readiness for healthcare search intent, local visibility, and performance-focused improvements.",
    ],
    techStack: ["WordPress", "SEO", "Web Development", "UI/UX", "Local SEO", "Responsive Design"],
    screenshot: {
      src: "/case-studies/toronto-hypertension-clinic-screenshot.png",
      alt: "Toronto Hypertension Clinic case study screenshot mockup",
    },
    ctaHeading: "Need a healthcare website that supports trust and SEO?",
    ctaDescription:
      "We design and build WordPress websites that make complex services easy to understand, search-friendly, and simple to maintain.",
    meta: [
      { label: "Client", value: "Toronto Hypertension Clinic" },
      { label: "Industry", value: "Healthcare" },
      { label: "Services", value: "WordPress Development, SEO" },
    ],
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}