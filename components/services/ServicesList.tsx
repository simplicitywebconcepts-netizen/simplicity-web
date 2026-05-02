"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import AnimatedSection from "@/components/ui/AnimatedSection";

const serviceDetails = [
  {
    id: 1,
    icon: "💻",
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
    icon: "🎨",
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
    icon: "📱",
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
    icon: "📈",
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
    icon: "🚀",
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
    icon: "🤖",
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

export default function ServicesList() {
  return (
    <section className="py-24 bg-section-bg/85 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {serviceDetails.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeInUp}
              className="bg-card-bg rounded-2xl p-8 md:p-10 border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <span className="text-3xl">{service.icon}</span>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                  {service.title}
                </h3>
              </div>

              <p className="text-muted leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="mb-6">
                <p className="text-sm font-semibold tracking-wider uppercase text-foreground/80 mb-3">
                  What we offer:
                </p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center text-sm text-muted"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-sm text-primary font-medium italic">
                👉 {service.tagline}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
