// ---- Team Members ----
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  { id: 1, name: "Steve S.", role: "Founder", image: "/team/member-1.svg" },
  { id: 2, name: "Anshuman Singh", role: "Head Developer", image: "/team/member-2.svg" },
  { id: 3, name: "Jaivardhan Singh", role: "Project Coordinator", image: "/team/member-3.svg" },
];

// ---- Values ----
export interface Value {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const values: Value[] = [
  {
    id: 1,
    title: "Our Mission",
    description:
      "Empowering growing companies with reliable digital solutions for accelerated success through transparent partnerships.",
    icon: "lightbulb",
  },
  {
    id: 2,
    title: "Our Vision",
    description:
      "The go-to web development company in Toronto, transforming ideas into scalable digital realities for long-term growth.",
    icon: "users",
  },
  {
    id: 3,
    title: "Our Approach",
    description:
      "We understand your goals, plan strategically with SEO, develop tailored WordPress solutions, and provide ongoing optimization for sustainable growth.",
    icon: "zap",
  },
];

// ---- Projects ----
export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  website?: string;
  caseStudySlug?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "ACE Active Zone",
    description: "A fitness membership website built with WordPress and SEO to drive signups and showcase community.",
    category: "Fitness",
    image: "/case-studies/aceactivezone-screenshot.png",
    website: "https://aceactivezone.com",
    caseStudySlug: "ace-active-zone",
  },
  {
    id: 3,
    title: "SHAMMY'S AUTO",
    description: "An automotive services website built with WordPress and SEO to improve local visibility and booking conversions.",
    category: "Automotive",
    image: "/case-studies/shammysauto-screenshot.png",
    website: "https://shammysauto.com",
    caseStudySlug: "shammys-auto",
  },
  {
    id: 2,
    title: "Kerasoft",
    description: "A beauty and personal care ecommerce website built with WordPress and SEO for product discovery and growth.",
    category: "Beauty",
    image: "/case-studies/kerasoft-screenshot.png",
    website: "https://kerasoft.com",
    caseStudySlug: "kerasoft",
  },
  {
    id: 4,
    title: "Sherfertility Solutions",
    description: "A fertility healthcare website built with WordPress and SEO foundations for trust and conversions.",
    category: "Healthcare",
    image: "/case-studies/sherfertility-solutions-screenshot.png",
    website: "https://sherfertilitysolutions.com",
    caseStudySlug: "sherfertility-solutions",
  },
  {
    id: 6,
    title: "Toronto Hypertension Clinic",
    description: "A healthcare website built in WordPress to improve trust, clarity, and SEO visibility for patients.",
    category: "Healthcare",
    image: "/case-studies/toronto-hypertension-clinic-screenshot.png",
    website: "https://torontohypertensionclinic.ca/",
    caseStudySlug: "toronto-hypertension-clinic",
  }
];

export const projectCategories = ["All", "Healthcare", "Beauty", "Fitness", "Automotive"];

// ---- Tech Stack ----
export interface TechItem {
  name: string;
  icon: string;
}

export interface TechCategory {
  title: string;
  items: TechItem[];
}

export const techStack: TechCategory[] = [
  {
    title: "FRONTEND",
    items: [
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript (ES6+)", icon: "javascript" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    title: "CMS & WEBSITE BUILDERS",
    items: [
      { name: "WordPress", icon: "wordpress" },
      { name: "Elementor", icon: "elementor" },
      { name: "Gutenberg", icon: "gutenberg" },
    ],
  },
  {
    title: "BACKEND & APIs",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "NestJS", icon: "nestjs" },
      { name: "PHP", icon: "php" },
      { name: "Laravel", icon: "laravel" },
    ],
  },
  {
    title: "DATABASE & CACHE",
    items: [
      { name: "MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Redis", icon: "redis" },
    ],
  },
  {
    title: "MOBILE DEVELOPMENT",
    items: [
      { name: "Flutter", icon: "flutter" },
    ],
  },
  {
    title: "CLOUD & HOSTING",
    items: [
      { name: "AWS", icon: "aws" },
      { name: "Hostinger", icon: "hostinger" },
      { name: "Vercel", icon: "vercel" },
      { name: "cPanel", icon: "cpanel" },
    ],
  },
  {
    title: "DEVOPS & TOOLS",
    items: [
      { name: "Docker", icon: "docker" },
      { name: "Git & GitHub", icon: "github" },
    ],
  },
  {
    title: "SEO & ANALYTICS",
    items: [
      { name: "Google Analytics", icon: "analytics" },
      { name: "Google Search Console", icon: "gsc" },
    ],
  },
];

// ---- Services (for home page) ----
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "WordPress Development",
    description:
      "Create a scalable, secure, and beautifully designed WordPress website. Custom themes, e-commerce, membership sites with fast loading times and mobile-first performance.",
    icon: "cloud",
  },
  {
    id: 2,
    title: "Custom Web Development",
    description:
      "Tailored web applications that solve real business challenges. From SaaS landing pages to interactive applications with API integrations and performance-focused architecture.",
    icon: "code",
  },
  {
    id: 3,
    title: "SEO Services",
    description:
      "Boost visibility and attract qualified traffic. Technical optimization, keyword strategy, local SEO for Toronto, and content optimization for conversion.",
    icon: "shield",
  },
  {
    id: 4,
    title: "Mobile App Development",
    description:
      "Extend your business with mobile apps designed for engagement and retention. Cross-platform design, Flutter development, and app store readiness.",
    icon: "cpu",
  },
];

// ---- Navigation ----
export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/works", label: "Works" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact Us" },
];

// ---- Careers ----
export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

export const openPositions: JobPosition[] = [
  {
    id: "jp-1",
    title: "WordPress Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-Time",
    description: "Build and optimize custom WordPress solutions. This role is ideal for candidates searching for high-impact WordPress developer jobs."
  },
  {
    id: "jp-2",
    title: "Frontend Developer (React/Next.js)",
    department: "Engineering",
    location: "Remote",
    type: "Full-Time",
    description: "Create accessible and fast interfaces. Advance your career in competitive web development jobs by shipping modern digital products."
  },
  {
    id: "jp-3",
    title: "Backend Developer (Node.js/Laravel)",
    department: "Engineering",
    location: "Remote",
    type: "Full-Time",
    description: "Design robust APIs and secure backend systems managing our core infrastructure and services."
  },
  {
    id: "jp-4",
    title: "SEO Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Full-Time",
    description: "Lead technical and content SEO initiatives. Perfect for professionals exploring strategic SEO jobs."
  }
];

export interface Perk {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const perks: Perk[] = [
  {
    id: 1,
    title: "Work From Anywhere",
    description: "We are a remote-first company. Work from the comfort of your home or any place with a good WiFi connection.",
    icon: "globe"
  },
  {
    id: 2,
    title: "Continuous Learning",
    description: "Annual education stipend for conferences, courses, and certifications to keep your skills sharp.",
    icon: "book"
  },
  {
    id: 3,
    title: "Health & Wellness",
    description: "Comprehensive health coverage, plus mental health support and a monthly wellness budget.",
    icon: "heart"
  },
  {
    id: 4,
    title: "Flexible Hours",
    description: "We care about results, not the specific hours you log. Create a schedule that works best for your life.",
    icon: "clock"
  }
];

// ---- Footer ----
export const footerLinks = {
  socialLinks: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Contact Us", href: "/contact" },
  ],
  helpLinks: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  sitemapLinks: [
    { label: "Sitemap", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Cookie Consent", href: "#" },
    { label: "Terms", href: "#" },
  ],
};

export const contactInfo = {
  phone: "+1 (905)429-9506",
  email: "info@simplicityweb.ca",
  website: "simplicityweb.ca",
  address: "Toronto, Ontario",
};
