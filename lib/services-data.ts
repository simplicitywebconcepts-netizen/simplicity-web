export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceDetailInfo {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  canonicalUrl: string;
  badge: string;
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  overviewTitle: string;
  overviewDescription: string;
  features: ServiceFeature[];
  benefits: ServiceBenefit[];
  deliverables: string[];
}

export const serviceSlugs = [
  "web-development",
  "design-branding",
  "social-media-marketing",
  "seo-marketing",
  "conversion-optimization",
  "analytics",
] as const;

export const serviceDataMap: Record<string, ServiceDetailInfo> = {
  "web-development": {
    slug: "web-development",
    metaTitle: "Web Development Company | Custom Website Development Services",
    metaDescription:
      "Build scalable and high-performing websites with our web development company offering custom website development solutions for businesses across Toronto.",
    keywords: [
      "Web Development Company",
      "Website Development Company",
      "Website Development Services",
      "Custom Website Development",
      "Professional Website Development",
      "Business Website Development",
    ],
    canonicalUrl: "https://simplicityweb.ca/services/web-development",
    badge: "Web Development Services",
    heroTitle: "Custom Web Development Solutions Built for",
    heroHighlight: "Performance & Scale",
    heroDescription:
      "Build high-speed, secure, and modern websites tailored to your business goals. From custom WordPress architectures to Next.js web applications.",
    overviewTitle: "Comprehensive Website Development",
    overviewDescription:
      "Our web development company specializes in crafting custom digital solutions for businesses in Toronto and beyond. We build responsive, search-engine-optimized, and lightning-fast websites that drive engagement and convert visitors into long-term customers.",
    features: [
      {
        title: "Custom Web Application Development",
        description:
          "Tailor-made web solutions built with React, Next.js, and modern JavaScript frameworks for peak performance.",
      },
      {
        title: "WordPress Development & Optimization",
        description:
          "Custom theme design, headless CMS configurations, and enterprise-grade performance tuning for WordPress.",
      },
      {
        title: "eCommerce Solutions",
        description:
          "Scalable online storefronts with seamless checkout flows, payment gateway integrations, and product management.",
      },
      {
        title: "Responsive & Mobile-First Design",
        description:
          "Flawless user experiences engineered to look and perform brilliantly across desktop, tablet, and mobile screens.",
      },
    ],
    benefits: [
      {
        title: "Accelerated Page Speed",
        description:
          "Engineered for optimal Core Web Vitals to deliver near-instant loading times and superior user experience.",
      },
      {
        title: "SEO-Optimized Codebase",
        description:
          "Built from the ground up with clean HTML5 markup, structured schema, and SEO best practices.",
      },
      {
        title: "Robust Security & Scalability",
        description:
          "Enterprise-level security practices to protect your data and handle traffic spikes effortlessly.",
      },
    ],
    deliverables: [
      "Custom Responsive Design",
      "Clean, Maintainable Codebase",
      "SEO Schema Integration",
      "Cross-Browser Compatibility",
      "Performance Audit & Optimization",
      "CMS Content Management Setup",
    ],
  },
  "design-branding": {
    slug: "design-branding",
    metaTitle: "Branding Agency | Logo Design & Brand Development",
    metaDescription:
      "Build a strong brand identity with our branding agency offering logo design, graphic design, and complete brand development services.",
    keywords: [
      "Branding Agency",
      "Brand Development",
      "Logo Design Services",
      "Graphic Design Agency",
      "Business Branding Services",
      "Brand Identity Design",
    ],
    canonicalUrl: "https://simplicityweb.ca/services/design-branding",
    badge: "Branding Agency",
    heroTitle: "Elevate Your Brand Identity with Strategic",
    heroHighlight: "Design & Development",
    heroDescription:
      "Build a powerful, cohesive visual identity that makes a lasting impression. From distinctive logo design to full brand guidelines.",
    overviewTitle: "Brand Identity & Logo Design",
    overviewDescription:
      "As a full-service branding agency, we help businesses define their visual presence and story. We craft memorable brand assets, intuitive UI/UX designs, and marketing graphics that build trust and differentiate your business in competitive markets.",
    features: [
      {
        title: "Logo & Visual Identity Design",
        description:
          "Custom logo concepts, color typography systems, and brand style guides engineered for recognition.",
      },
      {
        title: "UI/UX Interface Design",
        description:
          "User-centered interface designs crafted with modern aesthetics, glassmorphism, and intuitive navigation.",
      },
      {
        title: "Marketing & Graphic Design",
        description:
          "Digital and print assets including presentation decks, social graphics, and marketing brochures.",
      },
      {
        title: "Brand Messaging & Strategy",
        description:
          "Positioning strategies that articulate your unique value proposition to your target audience.",
      },
    ],
    benefits: [
      {
        title: "Instant Visual Recognition",
        description:
          "Stand out in your industry with a professional design language that commands trust and authority.",
      },
      {
        title: "Consistent Brand Presence",
        description:
          "Maintain visual harmony across every customer touchpoint—from website to social media.",
      },
      {
        title: "Enhanced User Engagement",
        description:
          "Intuitive UI/UX interfaces that guide users smoothly toward conversion points.",
      },
    ],
    deliverables: [
      "Primary & Secondary Logos",
      "Brand Style Guide & Tokens",
      "Typography & Color Palette",
      "UI/UX Wireframes & Prototypes",
      "Social Media Design Templates",
      "Vector & Print-Ready Assets",
    ],
  },
  "social-media-marketing": {
    slug: "social-media-marketing",
    metaTitle: "Social Media Marketing Agency | Grow Your Brand Online",
    metaDescription:
      "Grow your business through strategic social media marketing, campaign management, and audience engagement across leading social platforms.",
    keywords: [
      "Social Media Marketing",
      "Social Media Marketing Agency",
      "Social Media Management",
      "Social Media Advertising",
      "Social Media Strategy",
      "Business Social Media Marketing",
    ],
    canonicalUrl: "https://simplicityweb.ca/services/social-media-marketing",
    badge: "Social Media Marketing",
    heroTitle: "Expand Your Reach & Engage Audiences with Strategic",
    heroHighlight: "Social Marketing",
    heroDescription:
      "Build an active community, increase brand visibility, and generate consistent leads through strategic social media marketing and management.",
    overviewTitle: "Social Media Marketing & Management",
    overviewDescription:
      "Our social media marketing agency creates high-impact content and managed campaigns across LinkedIn, Instagram, Facebook, and Twitter. We turn social channels into active growth drivers for your business.",
    features: [
      {
        title: "Social Media Strategy & Planning",
        description:
          "Data-informed social roadmaps aligned with your audience demographics and business goals.",
      },
      {
        title: "Content Creation & Copywriting",
        description:
          "Eye-catching graphic posts, video reels, and high-converting ad copy engineered for engagement.",
      },
      {
        title: "Community Management",
        description:
          "Proactive follower engagement, message handling, and audience relationship building.",
      },
      {
        title: "Paid Social Advertising",
        description:
          "Targeted social ad campaigns designed to maximize return on ad spend (ROAS).",
      },
    ],
    benefits: [
      {
        title: "Increased Brand Loyalty",
        description:
          "Foster genuine connections with customers through active engagement and consistent content.",
      },
      {
        title: "Targeted Audience Growth",
        description:
          "Reach relevant demographics in your local market or globally through targeted outreach.",
      },
      {
        title: "Measurable ROI & Insights",
        description:
          "Track impression, engagement, and conversion metrics to continuously refine results.",
      },
    ],
    deliverables: [
      "Monthly Content Calendars",
      "Custom Visual & Video Content",
      "Campaign Setup & Targeting",
      "Community Response Protocol",
      "Performance & Analytics Reports",
      "Hashtag & Keyword Mapping",
    ],
  },
  "seo-marketing": {
    slug: "seo-marketing",
    metaTitle: "Digital Marketing Agency | SEO Services Toronto",
    metaDescription:
      "Generate more leads with our digital marketing agency offering SEO services, local SEO, Google Ads management, and online marketing strategies.",
    keywords: [
      "Digital Marketing Agency",
      "SEO Services",
      "SEO Agency",
      "Search Engine Optimization",
      "Local SEO Services",
      "Google Ads Management",
    ],
    canonicalUrl: "https://simplicityweb.ca/services/seo-marketing",
    badge: "SEO & Digital Marketing",
    heroTitle: "Dominate Search Rankings & Drive Qualified Leads with",
    heroHighlight: "SEO Services",
    heroDescription:
      "Get found by potential customers when they search for your services. Data-driven search engine optimization, local SEO, and paid digital campaigns.",
    overviewTitle: "Search Engine Optimization & Digital Marketing",
    overviewDescription:
      "As a premier digital marketing agency in Toronto, we implement comprehensive SEO strategies that drive sustainable organic growth. From technical SEO audits to Google Ads management, we help your business capture high-intent traffic.",
    features: [
      {
        title: "Technical & On-Page SEO",
        description:
          "Comprehensive site architecture optimization, meta tags, schema markup, and speed improvements.",
      },
      {
        title: "Local SEO & Google Business Profile",
        description:
          "Dominate local map packs and local searches across Toronto and target service areas.",
      },
      {
        title: "Keyword Research & Strategy",
        description:
          "Identify high-value search queries that drive conversion-ready leads to your business.",
      },
      {
        title: "Google Ads & Pay-Per-Click (PPC)",
        description:
          "Precision search advertising campaigns with continuous conversion rate optimization.",
      },
    ],
    benefits: [
      {
        title: "Higher Organic Search Visibility",
        description:
          "Achieve top positions on Google for keywords that matter most to your bottom line.",
      },
      {
        title: "Sustainable Lead Flow",
        description:
          "Build a long-term organic acquisition channel that lowers customer acquisition costs.",
      },
      {
        title: "Transparent KPI Tracking",
        description:
          "Monthly ranking reports, traffic analytics, and actionable conversion attribution.",
      },
    ],
    deliverables: [
      "Comprehensive Technical SEO Audit",
      "Keyword Research & Content Plan",
      "On-Page Optimization (Meta, Headers, Alt)",
      "Local Citation & GBP Optimization",
      "Google Ads Setup & Management",
      "Monthly SEO Performance Dashboard",
    ],
  },
  "conversion-optimization": {
    slug: "conversion-optimization",
    metaTitle: "Conversion Rate Optimization Services | Increase Website Leads",
    metaDescription:
      "Improve website performance and maximize conversions with data-driven conversion rate optimization and landing page optimization services.",
    keywords: [
      "Conversion Rate Optimization",
      "CRO Services",
      "Website Conversion Optimization",
      "Landing Page Optimization",
      "Lead Generation Optimization",
      "Conversion Optimization Services",
    ],
    canonicalUrl: "https://simplicityweb.ca/services/conversion-optimization",
    badge: "Conversion Rate Optimization",
    heroTitle: "Turn Website Traffic into High-Value Leads with",
    heroHighlight: "CRO Services",
    heroDescription:
      "Maximize the value of your existing traffic. We analyze visitor behavior, eliminate friction, and design landing pages optimized for conversions.",
    overviewTitle: "Data-Driven Conversion Optimization",
    overviewDescription:
      "Getting traffic is only half the battle. Our conversion rate optimization (CRO) services transform passive site visitors into active inquiries and buyers. We leverage heatmaps, user journey mapping, and A/B testing to unlock hidden revenue potential.",
    features: [
      {
        title: "Landing Page Design & Optimization",
        description:
          "High-converting, dedicated landing pages designed to capture leads and guide user actions.",
      },
      {
        title: "Friction Point & Heatmap Analysis",
        description:
          "Identify where users drop off and resolve usability bottlenecks in real-time.",
      },
      {
        title: "User Journey & Funnel Optimization",
        description:
          "Streamline navigation, forms, and call-to-action triggers for maximum conversion efficiency.",
      },
      {
        title: "A/B & Multivariate Testing",
        description:
          "Test head-to-head variations of headlines, layouts, and CTAs to discover winning combinations.",
      },
    ],
    benefits: [
      {
        title: "Lower Customer Acquisition Cost",
        description:
          "Extract significantly more revenue from your current web traffic without increasing ad spend.",
      },
      {
        title: "Higher Form & Call Conversion",
        description:
          "Increase lead submissions and sales inquiries with strategically structured pages.",
      },
      {
        title: "Enhanced User Experience",
        description:
          "Provide smooth, intuitive navigation that visitors enjoy using.",
      },
    ],
    deliverables: [
      "Conversion Audit & Heuristic Analysis",
      "High-Converting Landing Page Designs",
      "A/B Testing Framework & Implementation",
      "Form & CTA Optimization",
      "User Behavior Heatmap Setup",
      "CRO Performance & Revenue Reports",
    ],
  },
  "analytics": {
    slug: "analytics",
    metaTitle: "Website Analytics Services | Measure Website Performance",
    metaDescription:
      "Understand user behaviour and improve business decisions with comprehensive website analytics, performance tracking, and reporting services.",
    keywords: [
      "Website Analytics Services",
      "Google Analytics Services",
      "Website Analytics",
      "Data Analytics",
      "Performance Analytics",
      "Website Performance Monitoring",
    ],
    canonicalUrl: "https://simplicityweb.ca/services/analytics",
    badge: "Analytics & Insights",
    heroTitle: "Make Data-Driven Growth Decisions with Advanced",
    heroHighlight: "Analytics Services",
    heroDescription:
      "Transform raw data into clear, actionable business intelligence. We configure custom tracking, dashboard reporting, and user behavior analytics.",
    overviewTitle: "Website Analytics & Performance Monitoring",
    overviewDescription:
      "Our website analytics services give you complete clarity on how users interact with your digital platforms. From GA4 custom event tracking to automated executive dashboards, we equip you with the data needed to scale confidently.",
    features: [
      {
        title: "Google Analytics (GA4) Setup & Audit",
        description:
          "Custom GA4 configuration, conversion event tracking, and data retention setups.",
      },
      {
        title: "Google Tag Manager (GTM) Integration",
        description:
          "Clean, organized tag management for seamless tracking across all marketing tools.",
      },
      {
        title: "Custom Reporting Dashboards",
        description:
          "Real-time, easy-to-understand Looker Studio / GA4 dashboards tailored to executive KPIs.",
      },
      {
        title: "Behavioral & Funnel Analytics",
        description:
          "Track scroll depth, button clicks, form starts, and eCommerce checkout funnels.",
      },
    ],
    benefits: [
      {
        title: "Data-Backed Decision Making",
        description:
          "Eliminate guesswork and invest marketing budget into channels that demonstrably generate ROI.",
      },
      {
        title: "Accurate Lead Attribution",
        description:
          "Know exactly which campaigns, search queries, and pages produce your best customers.",
      },
      {
        title: "Real-Time Health Monitoring",
        description:
          "Detect performance drops or tracking errors immediately before they impact revenue.",
      },
    ],
    deliverables: [
      "GA4 & GTM Custom Setup",
      "Conversion & Goal Event Tracking",
      "Looker Studio Executive Dashboard",
      "Ecommerce / Lead Funnel Tracking",
      "Cross-Domain Tracking Configuration",
      "Monthly Data Insights & Briefings",
    ],
  },
};

export function getServiceBySlug(slug: string): ServiceDetailInfo | undefined {
  return serviceDataMap[slug];
}
