import type { Metadata } from "next";
import PageTransition from "@/components/ui/PageTransition";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import OurProcess from "@/components/services/OurProcess";
import WhyWorkWithUs from "@/components/services/WhyWorkWithUs";
import CallToAction from "@/components/home/CallToAction";

export const metadata: Metadata = {
  title: "Services - Web Development, Branding & Digital Marketing",
  description:
    "We provide end-to-end digital solutions designed to help businesses build, launch, and scale. From websites and apps to branding, SEO, and marketing strategies.",
  alternates: {
    canonical: "/services",
  },
};

import Script from "next/script";

export default function ServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Simplicity Web Inc",
      "url": "https://simplicityweb.ca",
      "image": "https://simplicityweb.ca/logo.svg",
      "telephone": "+1 (647)932-9688",
      "email": "info@simplicityweb.ca",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Toronto",
        "addressRegion": "ON",
        "addressCountry": "CA"
      }
    },
    "serviceType": "Web Development, SEO, Branding & Digital Marketing",
    "areaServed": {
      "@type": "State",
      "name": "Ontario"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Agency Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development & App Development",
            "description": "We design and develop modern, high-performance websites and applications built for speed, scalability, and conversion."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Design & Branding",
            "description": "Cohesive, professional branding including logo design, UI/UX design, and brand identity guidelines to build trust."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Media Management & Content Creation",
            "description": "Consistent content creation and strategy to grow social presence, audience, and visibility."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO & Digital Marketing",
            "description": "Search engine optimization (SEO), local SEO, Google Ads, and marketing campaigns to drive leads."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Conversion Optimization & Lead Generation",
            "description": "Optimizing user journeys, landing page design, and funnels to turn web traffic into active leads."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automation, CRM & Analytics",
            "description": "CRM setup, automated follow-ups, and custom analytics reporting to scale business operations."
          }
        }
      ]
    }
  };

  return (
    <PageTransition>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServicesHero />
      <ServicesList />
      <OurProcess />
      <WhyWorkWithUs />
      <CallToAction
        bgClass="bg-card-bg/85"
        heading={
          <>
            Ready to Grow with a Top <span className="gradient-text">Web Development Company?</span>
          </>
        }
        description="Partner with us for expert WordPress development and comprehensive SEO services that deliver measurable results."
        primaryButtonText="Start Your Project"
        primaryButtonHref="/contact"
        secondaryButtonText="View Our Work"
        secondaryButtonHref="/works"
      />
    </PageTransition>
  );
}
