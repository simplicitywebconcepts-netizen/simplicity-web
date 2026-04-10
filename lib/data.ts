// ---- Team Members ----
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  { id: 1, name: "Sarah Chen", role: "WordPress Developer", image: "/team/member-1.svg" },
  { id: 2, name: "Mike Johnson", role: "SEO Specialist", image: "/team/member-2.svg" },
  { id: 3, name: "Jorn Gileen", role: "Mobile App Developer", image: "/team/member-3.svg" },
  { id: 4, name: "Sarah Sweet", role: "Web Development Lead", image: "/team/member-4.svg" },
  { id: 5, name: "Alex Rivera", role: "Frontend Developer", image: "/team/member-5.svg" },
  { id: 6, name: "Jenner Seren", role: "Backend Developer", image: "/team/member-6.svg" },
  { id: 7, name: "Daniel Moranes", role: "UI/UX Designer", image: "/team/member-7.svg" },
  { id: 8, name: "Dralle Saslan", role: "Project Manager", image: "/team/member-8.svg" },
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
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Aviation IoT Platform",
    description: "Automated containerized solutions for aviation industry with real-time monitoring.",
    category: "Cloud",
    image: "/projects/project-1.svg",
  },
  {
    id: 2,
    title: "FinTech App",
    description: "Automated containerized financial technology solutions for modern banking.",
    category: "Software",
    image: "/projects/project-2.svg",
  },
  {
    id: 3,
    title: "Software Development",
    description: "Automated containerized development platform with CI/CD integration.",
    category: "Software",
    image: "/projects/project-3.svg",
  },
  {
    id: 4,
    title: "Cloud Development",
    description: "Creating unprecedented solutions to the market infrastructure and contemporary businesses.",
    category: "Cloud",
    image: "/projects/project-4.svg",
  },
  {
    id: 5,
    title: "Aviation IoT Platform",
    description: "Automated containerized IoT monitoring systems for fleet management.",
    category: "Cloud",
    image: "/projects/project-5.svg",
  },
  {
    id: 6,
    title: "FinTech App",
    description: "Automated containerized payment processing and digital wallet solutions.",
    category: "Cyber Security",
    image: "/projects/project-6.svg",
  },
  {
    id: 7,
    title: "Software Development",
    description: "Automated containerized enterprise resource planning solutions.",
    category: "Software",
    image: "/projects/project-7.svg",
  },
  {
    id: 8,
    title: "Cloud Solutions",
    description: "Automated containerized cloud infrastructure management platform.",
    category: "Cloud",
    image: "/projects/project-8.svg",
  },
  {
    id: 9,
    title: "Aviation IoT Platform",
    description: "Automated containerized predictive maintenance solutions.",
    category: "Cloud",
    image: "/projects/project-9.svg",
  },
  {
    id: 10,
    title: "FinTech Developers",
    description: "Automated containerized developer tools for financial services.",
    category: "Software",
    image: "/projects/project-10.svg",
  },
  {
    id: 11,
    title: "Aviation IoT Platform",
    description: "Automated containerized air traffic optimization solutions.",
    category: "Cyber Security",
    image: "/projects/project-11.svg",
  },
  {
    id: 12,
    title: "FinTech App",
    description: "Automated containerized blockchain-based financial solutions.",
    category: "Cyber Security",
    image: "/projects/project-12.svg",
  },
];

export const projectCategories = ["All", "Cloud", "Cyber Security", "Software"];

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
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote (North America)",
    type: "Full-Time",
    description: "Join our core engineering team to build scalable cloud-native applications using React, Next.js, and Node.js. Minimum 5 years experience required. You'll architect high-performance data pipelines and work closely with our design team."
  },
  {
    id: "jp-2",
    title: "Product Designer",
    department: "Design",
    location: "Toronto, ON / Remote",
    type: "Full-Time",
    description: "Shape the future of our premium web experiences. Strong portfolio showcasing UI/UX in Framer Motion, Figma, and modern web apps is essential. Help us create dynamic, highly aesthetic interfaces that wow users."
  },
  {
    id: "jp-3",
    title: "Cloud Architect",
    department: "Infrastructure",
    location: "Remote",
    type: "Full-Time",
    description: "Lead our cloud infrastructure and containerization efforts. Experience with Kubernetes, Terraform, AWS, and GCP is a must. You will own the strategic direction of our cloud services."
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
