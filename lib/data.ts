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

// ---- Stats ----
export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const companyStats: Stat[] = [
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 20, suffix: "+", label: "Ongoing Partnerships" },
  { value: 10, suffix: "+", label: "Years Experience" },
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
      "To help businesses at every stage—whether you're just starting out, launching a new idea, or already established—build, grow, and scale through strategic digital solutions.",
    icon: "lightbulb",
  },
  {
    id: 2,
    title: "Our Vision",
    description:
      "To be a trusted partner for businesses looking to turn ideas into reality and take their growth to the next level through design, technology, and innovation.",
    icon: "users",
  },
  {
    id: 3,
    title: "Our Approach",
    description:
      "We combine strategy, design, and technology into one cohesive system—ensuring everything we create is aligned with performance, growth, and long-term success.",
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
    description: "A sports complex platform designed for drop-in athletes and tournament rentals, featuring integrated digital booking to streamline scheduling and improve user experience.",
    category: "Fitness",
    image: "/case-studies/aceactivezone-screenshot.png",
    website: "https://aceactivezone.com",
    caseStudySlug: "ace-active-zone",
  },
  {
    id: 3,
    title: "SHAMMY'S AUTO",
    description: "An automotive services website built to increase local visibility, streamline bookings, and convert visitors into customers.",
    category: "Automotive",
    image: "/case-studies/shammysauto-screenshot.png",
    website: "https://shammysauto.com",
    caseStudySlug: "shammys-auto",
  },
  {
    id: 2,
    title: "Kerasoft",
    description: "A fully branded eCommerce platform, where we developed the complete look and feel from the ground up—designed to enhance product discovery and support scalable growth.",
    category: "Beauty",
    image: "/case-studies/kerasoft-screenshot.png",
    website: "https://kerasoft.com",
    caseStudySlug: "kerasoft",
  },
  {
    id: 4,
    title: "Sherfertility Solutions",
    description: "A healthcare platform built to establish trust, improve accessibility, and drive patient engagement and conversions.",
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
    title: "Web Development & App Development",
    description:
      "Build high-performance websites and applications designed for scalability and results. WordPress, custom web apps, mobile apps, and hosting.",
    icon: "cloud",
  },
  {
    id: 2,
    title: "Design & Branding",
    description:
      "Create a strong, consistent identity that stands out across all platforms. UI/UX design, logo design, brand identity, and marketing materials.",
    icon: "code",
  },
  {
    id: 3,
    title: "Social Media & Content",
    description:
      "Grow your brand and engage your audience across all major platforms. Social media management, content creation, and community engagement.",
    icon: "shield",
  },
  {
    id: 4,
    title: "SEO & Paid Advertising",
    description:
      "Increase visibility and attract high-quality traffic through search and targeted campaigns. SEO, Google Ads, Meta Ads, and keyword strategy.",
    icon: "cpu",
  },
  {
    id: 5,
    title: "Conversion & Lead Generation",
    description:
      "Turn traffic into leads and leads into customers. Landing pages, funnel strategy, conversion optimization, and user journey optimization.",
    icon: "shield",
  },
  {
    id: 6,
    title: "Automation, CRM & Analytics",
    description:
      "Track, manage, and scale your business with smart systems. Analytics, CRM setup, automated follow-ups, and performance reporting.",
    icon: "cpu",
  },
];

// ---- Navigation ----
export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/works", label: "Works" },
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
export const footerServices = [
  { label: "Web & App Development", href: "/services#web-development" },
  { label: "Design & Branding", href: "/services#design-branding" },
  { label: "Social Media Management", href: "/services#social-media" },
  { label: "SEO & Digital Marketing", href: "/services#seo-marketing" },
  { label: "Conversion Optimization", href: "/services#conversion-optimization" },
  { label: "Automation & Analytics", href: "/services#analytics" },
];

export const footerCompanyLinks = [
  { label: "Our Work", href: "/works" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  // { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

export const footerLinks = {
  socialLinks: [
    { label: "Facebook", href: "#", key: "facebook" },
    { label: "Twitter", href: "#", key: "twitter" },
    { label: "Instagram", href: "#", key: "instagram" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/simplicity-web", key: "linkedin" },
  ],
  legalLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Sitemap", href: "/sitemap.xml" },
  ],
};

export const contactInfo = {
  phone: "+1 (647)932-9688",
  email: "info@simplicityweb.ca",
  address: "77 King St W\nToronto, ON M5K 2A1, Canada",
  addressLink: "https://www.google.com/maps/search/?api=1&query=77+King+St+W,+Toronto,+ON+M5K+2A1,+Canada",
  website: "simplicityweb.ca",
};
