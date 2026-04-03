// ---- Team Members ----
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  { id: 1, name: "Sarah Chen", role: "CTO", image: "/team/member-1.svg" },
  { id: 2, name: "Sarah Chen", role: "CIO", image: "/team/member-2.svg" },
  { id: 3, name: "Jorn Gileen", role: "CTO", image: "/team/member-3.svg" },
  { id: 4, name: "Sarah Sweet", role: "CTB", image: "/team/member-4.svg" },
  { id: 5, name: "Sarah Chen", role: "CTO", image: "/team/member-5.svg" },
  { id: 6, name: "Jenner Seren", role: "CTO", image: "/team/member-6.svg" },
  { id: 7, name: "Daniel Moranes", role: "CTO", image: "/team/member-7.svg" },
  { id: 8, name: "Dralle Saslan", role: "CTO", image: "/team/member-8.svg" },
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
    title: "Innovation",
    description:
      "Accelerated continuous and multi-dimensional creativity to solve complex challenges and drive innovation forward.",
    icon: "lightbulb",
  },
  {
    id: 2,
    title: "Client-Focus",
    description:
      "Scalable transformative and synergistically containerized solutions with a deep focus on client satisfaction.",
    icon: "users",
  },
  {
    id: 3,
    title: "Agility",
    description:
      "Agility synergistically accelerate and implement cloud-native strategies consistently for maximum efficiency.",
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
    title: "CLOUD MANUFACTURE",
    items: [
      { name: "AWS", icon: "aws" },
      { name: "Azure", icon: "azure" },
      { name: "Google Cloud", icon: "gcp" },
      { name: "DigitalOcean", icon: "digitalocean" },
    ],
  },
  {
    title: "FRAMEWORKS & LANGUAGES",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Node.js", icon: "nodejs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Python", icon: "python" },
      { name: "Go", icon: "go" },
    ],
  },
  {
    title: "DATABASE & DATA",
    items: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Redis", icon: "redis" },
      { name: "Elasticsearch", icon: "elasticsearch" },
    ],
  },
  {
    title: "DEVOPS & TOOLS",
    items: [
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "Jenkins", icon: "jenkins" },
      { name: "Terraform", icon: "terraform" },
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
    title: "Cloud Solutions",
    description:
      "Enterprise-grade cloud infrastructure design, migration, and management for scalable business operations.",
    icon: "cloud",
  },
  {
    id: 2,
    title: "Software Development",
    description:
      "Custom software solutions built with cutting-edge technologies to transform your business processes.",
    icon: "code",
  },
  {
    id: 3,
    title: "Cyber Security",
    description:
      "Comprehensive security solutions to protect your digital assets and ensure regulatory compliance.",
    icon: "shield",
  },
  {
    id: 4,
    title: "IoT Solutions",
    description:
      "Connected device ecosystems with real-time monitoring, analytics, and predictive maintenance capabilities.",
    icon: "cpu",
  },
];

// ---- Navigation ----
export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/works", label: "Works" },
  { href: "/contact", label: "Contact Us" },
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
  phone: "+67 803 0978 acros",
  email: "info@simplicity.com",
  website: "simplicityweb.com",
  address: "11 Baltimore, Carstairs la Oliv, Westberry, D1 13555",
};
