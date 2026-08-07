import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { getServiceBySlug, servicesData } from "@/lib/data/services";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

const seoDataMap: Record<string, { title: string; description: string; keywords: string[] }> = {
  "web-development": {
    title: "Web Development Company | Custom Website Development Services",
    description: "Build scalable and high-performing websites with our web development company offering custom website development solutions for businesses across Toronto.",
    keywords: [
      "Web Development Company",
      "Website Development Company",
      "Website Development Services",
      "Custom Website Development",
      "Professional Website Development",
      "Business Website Development",
    ],
  },
  "design-branding": {
    title: "Branding Agency | Logo Design & Brand Development",
    description: "Build a strong brand identity with our branding agency offering logo design, graphic design, and complete brand development services.",
    keywords: [
      "Branding Agency",
      "Brand Development",
      "Logo Design Services",
      "Graphic Design Agency",
      "Business Branding Services",
      "Brand Identity Design",
    ],
  },
  "social-media-marketing": {
    title: "Social Media Marketing Agency | Grow Your Brand Online",
    description: "Grow your business through strategic social media marketing, campaign management, and audience engagement across leading social platforms.",
    keywords: [
      "Social Media Marketing",
      "Social Media Marketing Agency",
      "Social Media Management",
      "Social Media Advertising",
      "Social Media Strategy",
      "Business Social Media Marketing",
    ],
  },
  "seo-marketing": {
    title: "Digital Marketing Agency | SEO Services Toronto",
    description: "Generate more leads with our digital marketing agency offering SEO services, local SEO, Google Ads management, and online marketing strategies.",
    keywords: [
      "Digital Marketing Agency",
      "SEO Services",
      "SEO Agency",
      "Search Engine Optimization",
      "Local SEO Services",
      "Google Ads Management",
    ],
  },
  "conversion-optimization": {
    title: "Conversion Rate Optimization Services | Increase Website Leads",
    description: "Improve website performance and maximize conversions with data-driven conversion rate optimization and landing page optimization services.",
    keywords: [
      "Conversion Rate Optimization",
      "CRO Services",
      "Website Conversion Optimization",
      "Landing Page Optimization",
      "Lead Generation Optimization",
      "Conversion Optimization Services",
    ],
  },
  "analytics": {
    title: "Website Analytics Services | Measure Website Performance",
    description: "Understand user behaviour and improve business decisions with comprehensive website analytics, performance tracking, and reporting services.",
    keywords: [
      "Website Analytics Services",
      "Google Analytics Services",
      "Website Analytics",
      "Data Analytics",
      "Performance Analytics",
      "Website Performance Monitoring",
    ],
  },
};

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const seo = seoDataMap[slug];

  if (!seo) {
    return {
      title: "Service Not Found",
    };
  }

  const canonicalUrl = `https://simplicityweb.ca/services/${slug}`;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonicalUrl,
      images: [
        {
          url: "/web-app-manifest-512x512.png",
          width: 512,
          height: 512,
          alt: seo.title,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: seo.title,
      description: seo.description,
      images: ["/web-app-manifest-512x512.png"],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const seo = seoDataMap[slug] || { title: service.h1, description: service.intro };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": seo.title,
    "description": seo.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Simplicity Web Inc",
      "url": "https://simplicityweb.ca",
      "telephone": "+1 (647) 932-9688",
      "email": "info@simplicityweb.ca",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Toronto",
        "addressRegion": "ON",
        "addressCountry": "CA",
      },
    },
    "url": `https://simplicityweb.ca/services/${slug}`,
  };

  return (
    <>
      <Script
        id={`service-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServicePageTemplate data={service} />
    </>
  );
}
