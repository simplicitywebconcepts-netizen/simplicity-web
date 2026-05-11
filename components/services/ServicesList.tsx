"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const serviceDetails = [
  {
    id: 1,
    icon: "monitor",
    title: "Web Development & App Development",
    description:
      "We design and develop modern, high-performance websites and applications built for speed, scalability, and conversion. Whether you need a business website, custom platform, or mobile application, we create digital experiences that are tailored to your goals and built to perform.",
    items: [
      "Website Design & Development",
      "Custom Web Applications",
      "Mobile App Development",
      "eCommerce Development",
      "Web Hosting & Maintenance",
    ],
    tagline: "Built to attract, engage, and convert your audience",
  },
  {
    id: 2,
    icon: "pen-tool",
    title: "Design & Branding",
    description:
      "Your brand is more than just a logo—it's how your business is perceived. We create cohesive, professional branding that builds trust and stands out across all platforms. From visual identity to marketing materials, we ensure your brand communicates clearly and consistently.",
    items: [
      "Logo Design",
      "Brand Identity & Guidelines",
      "UI/UX Design",
      "Graphic Design",
      "Marketing & Promotional Materials",
    ],
    tagline: "Designed to create a strong and lasting impression",
  },
  {
    id: 3,
    icon: "share",
    title: "Social Media Management & Content Creation",
    description:
      "We help businesses grow their presence across social platforms through consistent content, engagement, and strategy. Our approach focuses on building your audience, increasing visibility, and creating content that resonates with your target market.",
    items: [
      "Social Media Management",
      "Content Creation (Posts, Reels, Short-Form Video)",
      "Community Engagement & Outreach",
      "Social Media Strategy",
    ],
    tagline: "Built to grow your brand and connect with your audience",
  },
  {
    id: 4,
    icon: "trending-up",
    title: "SEO & Digital Marketing",
    description:
      "Increase your visibility and attract qualified traffic with data-driven marketing strategies. We optimize your digital presence to ensure your business is found by the right audience at the right time.",
    items: [
      "Search Engine Optimization (SEO)",
      "Keyword Strategy & Optimization",
      "Local SEO (Toronto & Canada)",
      "Google Ads, Bing Ads & Meta Ads",
      "Campaign Management & Performance Tracking",
    ],
    tagline: "Focused on driving traffic, leads, and measurable growth",
  },
  {
    id: 5,
    icon: "target",
    title: "Conversion Optimization & Lead Generation",
    description:
      "Getting traffic is only part of the equation—we focus on turning that traffic into real leads and customers. We build systems that guide users through a clear journey from first visit to conversion.",
    items: [
      "Landing Page Design",
      "Funnel Strategy",
      "Conversion Optimization",
      "Lead Capture Systems",
      "User Journey Optimization",
    ],
    tagline: "Turning visitors into customers",
  },
  {
    id: 6,
    icon: "cpu",
    title: "Automation, CRM & Analytics",
    description:
      "We help you manage and scale your growth with smart systems that track performance and automate key processes. From lead management to reporting, we ensure your business runs efficiently as it grows.",
    items: [
      "CRM Setup & Lead Management",
      "Automated Follow-Ups (Email & SMS)",
      "Analytics & Performance Tracking",
      "Reporting & Insights",
    ],
    tagline: "Built to support long-term scalability",
  },
];

function ServiceIcon({ name }: { name: string }) {
  const size = 26;
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "monitor":
      return (
        <svg {...props}>
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );
    case "pen-tool":
      return (
        <svg {...props}>
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      );
    case "share":
      return (
        <svg {...props}>
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      );
    case "trending-up":
      return (
        <svg {...props}>
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      );
    case "target":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case "cpu":
      return (
        <svg {...props}>
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="1" x2="9" y2="4" />
          <line x1="15" y1="1" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="23" />
          <line x1="15" y1="20" x2="15" y2="23" />
          <line x1="20" y1="9" x2="23" y2="9" />
          <line x1="20" y1="14" x2="23" y2="14" />
          <line x1="1" y1="9" x2="4" y2="9" />
          <line x1="1" y1="14" x2="4" y2="14" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ServicesList() {
  return (
    <section className="py-24 bg-section-bg/85 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {serviceDetails.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeInUp}
              className="glass border border-card-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 group flex flex-col"
            >
              {/* Icon + Title */}
              <div className="flex items-start gap-4 mb-5">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <ServiceIcon name={service.icon} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight pt-2">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-muted leading-relaxed mb-6 text-sm">
                {service.description}
              </p>

              {/* What we offer */}
              <div className="mb-6 flex-grow">
                <p className="text-xs font-semibold tracking-wider uppercase text-foreground/60 mb-3">
                  What we offer
                </p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tagline */}
              <div className="flex items-center gap-2 pt-4 border-t border-border/50">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary shrink-0"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
                <p className="text-xs text-primary font-medium italic">
                  {service.tagline}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
