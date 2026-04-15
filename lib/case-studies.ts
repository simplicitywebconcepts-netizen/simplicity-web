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
  landingPage?: {
    src: string;
    alt: string;
  };
  ctaHeading: string;
  ctaDescription: string;
  meta: CaseStudyMetaItem[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "sherfertility-solutions",
    title: "Sherfertility Solutions",
    tagline:
      "A clearer fertility care website built to improve trust, organic visibility, and patient action.",
    client: "Sherfertility Solutions",
    industry: "HealthCare",
    services: ["WordPress Development", "SEO"],
    website: "https://sherfertilitysolutions.com",
    intro: [
      "Sherfertility Solutions needed a website that explained fertility services clearly while building confidence with new visitors. We redesigned the experience with a patient-first structure, straightforward calls to action, and content that supports long-term SEO growth.",
      "The final platform gives the team a manageable WordPress workflow while improving clarity, mobile readability, and search readiness for high-intent healthcare queries.",
    ],
    overview: [
      "The project focused on building a modern healthcare web presence that feels professional, warm, and easy to navigate. Visitors can understand services quickly and move toward consultation with less friction.",
      "We used a modular WordPress architecture so internal teams can update pages without engineering support. Reusable sections also make campaign and service expansion faster.",
      "Content and structure were optimized for discoverability from day one, with heading hierarchy, internal linking, and metadata shaped around fertility-care search intent.",
    ],
    challenge: [
      "Service pages were not organized around how patients search and compare treatment options.",
      "Trust-building content was present but not visible enough in the first-screen experience.",
      "Calls to action needed clearer placement across service and informational pages.",
      "The website required stronger SEO foundations without making copy feel technical.",
      "The content team needed a simple publishing workflow in WordPress.",
    ],
    approach: [
      {
        title: "Strategy",
        description:
          "Mapped user journeys, content priorities, and search intent clusters to align information flow with real patient questions.",
      },
      {
        title: "Design",
        description:
          "Created a calm, high-clarity interface with stronger section hierarchy, readable typography, and cleaner CTA placement.",
      },
      {
        title: "Development",
        description:
          "Built a modular WordPress implementation with reusable blocks for service pages, landing pages, and educational content.",
      },
      {
        title: "Optimization",
        description:
          "Improved technical SEO signals, metadata structure, and on-page performance to support long-term visibility.",
      },
    ],
    features: [
      {
        title: "Reusable Service Templates",
        description:
          "Consistent page templates that keep treatment information clear while making ongoing updates fast and reliable.",
      },
      {
        title: "WordPress Content Flexibility",
        description:
          "A structured editing setup so non-technical staff can publish and refine content confidently.",
      },
      {
        title: "Local SEO Framework",
        description:
          "Content and page architecture aligned to local and service-intent search behavior.",
      },
      {
        title: "Conversion-Ready CTA System",
        description:
          "Improved CTA rhythm across the site to guide visitors toward consultation and contact actions.",
      },
      {
        title: "Mobile-First Readability",
        description:
          "Spacing, typography, and component behavior tuned for easier mobile scanning and lower cognitive load.",
      },
      {
        title: "Performance-Aware Frontend",
        description:
          "Optimized assets and structure for faster page rendering and better user experience metrics.",
      },
    ],
    designHighlights: [
      "The visual system emphasizes clarity and trust, which are critical in healthcare journeys. Strong typography, balanced whitespace, and clear content grouping help visitors absorb information quickly.",
      "Responsive behavior was prioritized from the beginning so the most important guidance and CTAs remain visible and easy to act on across devices.",
    ],
    results: [
      "A clearer patient journey with improved understanding of services.",
      "Stronger SEO readiness for local and high-intent fertility searches.",
      "A faster content update workflow through modular WordPress blocks.",
      "Improved conversion support through clearer CTA hierarchy.",
    ],
    techStack: ["WordPress", "SEO", "Web Development", "UI/UX", "Responsive Design", "Local SEO"],
    screenshot: {
      src: "/case-studies/sherfertility-solutions-screenshot.png",
      alt: "Sherfertility Solutions case study website preview",
    },
     landingPage: {
      src: "/case-studies/sherfertility-solutions-landing-page.png",
      alt: "Sherfertility Solutions landing page preview",
    },
    ctaHeading: "Need a healthcare website that balances trust and growth?",
    ctaDescription:
      "We build WordPress experiences that keep medical content clear, search-friendly, and conversion-focused.",
    meta: [
      { label: "Client", value: "Sherfertility Solutions" },
      { label: "Industry", value: "HealthCare" },
      { label: "Services", value: "WordPress Development, SEO" },
    ],
  },
  {
    slug: "kerasoft",
    title: "Kerasoft",
    tagline:
      "A performance-focused ecommerce website that made premium hair care easier to discover, trust, and buy.",
    client: "Kerasoft",
    industry: "Beauty / Personal Care (Hair Care & Wellness)",
    services: ["WordPress Development", "SEO"],
    website: "https://kerasoft.com",
    intro: [
      "Kerasoft needed a digital experience that matched the quality of its hair care products while making shopping simpler for first-time and returning customers. We rebuilt the website with a cleaner structure, stronger product storytelling, and SEO-ready foundations to support growth.",
      "The final platform gives the team a scalable WordPress workflow for product launches and campaigns while improving mobile usability, category clarity, and organic discoverability.",
    ],
    overview: [
      "The project focused on improving how customers discover products, understand benefits, and move confidently toward purchase. We reworked information hierarchy so visitors can navigate by concern, product type, and routine goals.",
      "Because Kerasoft serves audiences interested in both beauty outcomes and hair wellness, the experience needed to balance premium brand storytelling with practical guidance. Product pages were restructured for faster scanning of ingredients, usage, and differentiators.",
      "The final website combines WordPress flexibility with SEO-first architecture, giving the team a strong base for seasonal campaigns and long-term organic growth.",
    ],
    challenge: [
      "Product discovery felt fragmented, making comparison and selection harder for new shoppers.",
      "Core trust signals such as product quality, benefits, and credibility were not prominent enough above the fold.",
      "Mobile browsing and purchase paths needed clearer content flow and CTA visibility.",
      "The website required stronger technical and on-page SEO structure for high-intent hair care searches.",
      "The team needed a content system that supports frequent campaign updates without development overhead.",
    ],
    approach: [
      {
        title: "Strategy",
        description:
          "Mapped customer journeys around hair concerns, routines, and purchase intent to shape page structure and content priorities.",
      },
      {
        title: "Design",
        description:
          "Built a cleaner visual hierarchy that supports premium branding while helping shoppers evaluate products quickly.",
      },
      {
        title: "Development",
        description:
          "Delivered a modular WordPress implementation with reusable product, collection, and campaign content sections.",
      },
      {
        title: "Optimization",
        description:
          "Improved metadata, internal linking, mobile readability, and performance signals for better SEO and conversion support.",
      },
    ],
    features: [
      {
        title: "Intent-Led Product Architecture",
        description:
          "Collection and category pages organized around customer needs and shopping behavior.",
      },
      {
        title: "SEO-Ready Product Pages",
        description:
          "Structured headings and metadata patterns that support discoverability and consistency at scale.",
      },
      {
        title: "Flexible WordPress Content Blocks",
        description:
          "Reusable modules for promotions, educational content, and launch-focused landing pages.",
      },
      {
        title: "Conversion-Focused CTA System",
        description:
          "Clear CTA rhythm across product, category, and content pages to reduce purchase friction.",
      },
      {
        title: "Mobile-First Shopping Experience",
        description:
          "Responsive layouts tuned for easy scanning of product details, trust cues, and next actions.",
      },
      {
        title: "Performance-Aware Frontend",
        description:
          "Optimized structure and media handling for faster rendering and smoother browsing.",
      },
    ],
    designHighlights: [
      "The design language centers on clarity, confidence, and premium product storytelling. Strong typography, structured spacing, and focused content blocks help users make decisions faster.",
      "Responsive behavior was prioritized from the start so product details, trust elements, and calls to action remain visible and usable across mobile and desktop screens.",
    ],
    results: [
      "Clearer product discovery and stronger category-level navigation.",
      "Better readiness for beauty and hair care SEO growth.",
      "Improved mobile shopping flow with stronger CTA visibility.",
      "Faster campaign publishing through a modular WordPress setup.",
    ],
    techStack: ["WordPress", "SEO", "Web Development", "UI/UX", "Responsive Design", "Ecommerce"],
    screenshot: {
      src: "/case-studies/kerasoft-screenshot.png",
      alt: "Kerasoft case study website preview",
    },
    landingPage: {
      src: "/case-studies/kerasoft-landing-page.png",
      alt: "Kerasoft landing page preview",
    },
    ctaHeading: "Need a beauty ecommerce website that converts better?",
    ctaDescription:
      "We build WordPress experiences that blend premium branding, SEO readiness, and conversion-focused shopping flows.",
    meta: [
      { label: "Client", value: "Kerasoft" },
      { label: "Industry", value: "Beauty / Personal Care (Hair Care & Wellness)" },
      { label: "Services", value: "WordPress Development, SEO" },
    ],
  },
  {
    slug: "shammys-auto",
    title: "SHAMMY'S AUTO",
    tagline:
      "A conversion-focused auto services website that made bookings easier and local visibility stronger.",
    client: "SHAMMY'S AUTO",
    industry: "Automotive Industry",
    services: ["WordPress Development", "SEO"],
    website: "https://shammysauto.com",
    intro: [
      "SHAMMY'S AUTO needed a website that reflected its reputation for reliable auto service while making it easier for new customers to book with confidence. We rebuilt the digital experience with clearer service structure, stronger trust signals, and a local SEO-ready foundation.",
      "The final platform gives the team a manageable WordPress workflow for promotions and service updates while improving mobile usability and local search discoverability.",
    ],
    overview: [
      "The project focused on helping drivers quickly understand available services, identify the right solution, and take action without friction. We redesigned the architecture so visitors can navigate by service type, urgency, and booking intent.",
      "Because many automotive users search from mobile in time-sensitive situations, the interface had to be fast, direct, and action-oriented. We prioritized concise sections, stronger CTA placement, and clearer service differentiation.",
      "The final build combines WordPress flexibility with an SEO-first structure, enabling SHAMMY'S AUTO to scale seasonal campaigns and improve local visibility over time.",
    ],
    challenge: [
      "Service information was not structured clearly enough for quick decision-making.",
      "Trust indicators such as expertise, reliability, and service quality were not prominent enough in key sections.",
      "Mobile users needed a faster path to call, request a quote, or book service.",
      "The website required stronger on-page and technical SEO for local automotive searches.",
      "The team needed a simple content workflow for recurring promotions and service updates.",
    ],
    approach: [
      {
        title: "Strategy",
        description:
          "Mapped customer search intent around common automotive issues and maintenance services to define page priorities.",
      },
      {
        title: "Design",
        description:
          "Built a cleaner, credibility-focused hierarchy with stronger section rhythm and clearer calls to action.",
      },
      {
        title: "Development",
        description:
          "Delivered a modular WordPress implementation with reusable service, promotion, and contact sections.",
      },
      {
        title: "Optimization",
        description:
          "Improved metadata, internal linking, mobile readability, and page performance to support SEO and conversions.",
      },
    ],
    features: [
      {
        title: "Service-First Information Architecture",
        description:
          "Pages organized by repair and maintenance intent so users find relevant services quickly.",
      },
      {
        title: "Local SEO Foundations",
        description:
          "Location and service-focused structure designed to improve visibility for nearby automotive queries.",
      },
      {
        title: "Flexible WordPress Editing",
        description:
          "Reusable content blocks that let staff publish offers, updates, and seasonal campaigns without developer support.",
      },
      {
        title: "Conversion-Focused Contact System",
        description:
          "Prominent CTAs for calls, quote requests, and bookings across high-intent service pages.",
      },
      {
        title: "Mobile-Optimized Experience",
        description:
          "Responsive layouts designed for quick scanning and action on phones and tablets.",
      },
      {
        title: "Performance-Aware Frontend",
        description:
          "Optimized structure and assets for faster load times and better user experience signals.",
      },
    ],
    designHighlights: [
      "The design is centered on trust and action, using clear spacing, readable typography, and stronger visual hierarchy to reduce friction during service selection.",
      "Responsive behavior was treated as a core requirement so users can review services and complete key actions quickly from any device.",
    ],
    results: [
      "Clearer service discovery and stronger navigation flow.",
      "Better local SEO readiness for automotive intent searches.",
      "Improved mobile conversion support with more visible booking actions.",
      "Faster internal publishing of promotions and service updates.",
    ],
    techStack: ["WordPress", "SEO", "Web Development", "UI/UX", "Responsive Design", "Local SEO"],
    screenshot: {
      src: "/case-studies/shammysauto-screenshot.png",
      alt: "SHAMMY'S AUTO case study website preview",
    },
    landingPage: {
      src: "/case-studies/shammysauto-landing-page.png",
      alt: "SHAMMY'S AUTO landing page preview",
    },
    ctaHeading: "Need an automotive website that books more customers?",
    ctaDescription:
      "We build WordPress websites for automotive brands that combine local SEO visibility, trust, and conversion-focused user flows.",
    meta: [
      { label: "Client", value: "SHAMMY'S AUTO" },
      { label: "Industry", value: "Automotive Industry" },
      { label: "Services", value: "WordPress Development, SEO" },
    ],
  },
  {
    slug: "ace-active-zone",
    title: "ACE Active Zone",
    tagline:
      "A membership-driven fitness website that increased signups and simplified class booking.",
    client: "ACE Active Zone",
    industry: "Sports & Recreation / Fitness Industry",
    services: ["WordPress Development", "SEO"],
    website: "https://aceactivezone.com",
    intro: [
      "ACE Active Zone needed a website that reflected its energetic community while making it easy for new members to explore classes, understand membership options, and sign up. We rebuilt the digital experience with a clearer membership structure, stronger community storytelling, and a conversion-ready interface.",
      "The final platform gives the community a scalable WordPress workflow for class updates and member promotions while improving mobile usability and local search visibility.",
    ],
    overview: [
      "The project focused on helping potential members quickly understand class offerings, see community value, and take action toward membership. We reworked information hierarchy so visitors can navigate by fitness interest, experience level, and membership type.",
      "Because fitness attracts mobile-first audiences, the interface had to inspire confidence, showcase the community, and make signup intuitive. Class schedules, trainer bios, and membership benefits were restructured for fast scanning and clear decision-making.",
      "The final build combines WordPress flexibility with SEO-first structure, enabling ACE Active Zone to scale promotions and grow local visibility for fitness and wellness searches.",
    ],
    challenge: [
      "Class and membership information was scattered, making it hard for prospects to understand the full offering.",
      "Community atmosphere and trainer expertise were not prominently featured to build confidence with new members.",
      "The membership signup flow had multiple friction points during decision-making.",
      "Mobile users needed faster access to class schedules and membership details.",
      "The website required stronger local SEO to compete for fitness and wellness searches.",
    ],
    approach: [
      {
        title: "Strategy",
        description:
          "Mapped fitness prospect journeys around class interest, experience level, and membership goals to shape information priorities.",
      },
      {
        title: "Design",
        description:
          "Built an energetic, community-focused layout that showcases trainers, classes, and member testimonials.",
      },
      {
        title: "Development",
        description:
          "Delivered a modular WordPress implementation with reusable class, membership, and community content sections.",
      },
      {
        title: "Optimization",
        description:
          "Improved page structure, internal linking, metadata, and conversion CTAs for better SEO and signup support.",
      },
    ],
    features: [
      {
        title: "Class Directory & Filtering",
        description:
          "Browse classes by fitness type, schedule, trainer, and experience level for faster discovery.",
      },
      {
        title: "Membership Tier Comparison",
        description:
          "Clear benefit comparison pages that help prospects choose the right membership without confusion.",
      },
      {
        title: "Trainer Bio & Community Section",
        description:
          "Dedicated spaces to showcase trainer expertise and member testimonials for trust-building.",
      },
      {
        title: "Mobile-Optimized Signup Flow",
        description:
          "Streamlined membership registration that works seamlessly on phones and tablets.",
      },
      {
        title: "Dynamic Schedule Display",
        description:
          "Real-time class schedules with easy integration for booking and waitlist management.",
      },
      {
        title: "Local SEO Framework",
        description:
          "Content and structure designed to support visibility for fitness and wellness local searches.",
      },
    ],
    designHighlights: [
      "The design captures energy and community through vibrant typography, action-oriented imagery, and clear section rhythm. Strong visual hierarchy helps visitors quickly find relevant classes and understand membership value.",
      "Responsive layouts were prioritized to ensure mobile users can browse classes, read trainer bios, and complete signups without friction or cognitive overload.",
    ],
    results: [
      "Clearer membership value proposition with fewer decision friction points.",
      "Better local SEO visibility for fitness and wellness searches.",
      "Improved mobile signup conversion through simplified flows.",
      "Stronger community presence that attracts quality members aligned with brand values.",
    ],
    techStack: ["WordPress", "SEO", "Web Development", "UI/UX", "Responsive Design", "Local SEO"],
    screenshot: {
      src: "/case-studies/aceactivezone-screenshot.png",
      alt: "ACE Active Zone case study website preview",
    },
    landingPage: {
      src: "/case-studies/aceactivezone-landing-page.png",
      alt: "ACE Active Zone landing page preview",
    },
    ctaHeading: "Ready to grow your fitness membership online?",
    ctaDescription:
      "We build WordPress fitness platforms that combine community storytelling, local SEO, and conversion-focused signup flows.",
    meta: [
      { label: "Client", value: "ACE Active Zone" },
      { label: "Industry", value: "Sports & Recreation / Fitness Industry" },
      { label: "Services", value: "WordPress Development, SEO" },
    ],
  },
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
    landingPage: {
      src: "/case-studies/toronto-hypertension-clinic-landing-page.jpeg",
      alt: "Toronto Hypertension Clinic landing page preview",
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