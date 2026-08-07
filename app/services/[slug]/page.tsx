import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import PageTransition from "@/components/ui/PageTransition";
import ServiceDetail from "@/components/services/ServiceDetail";
import {
  getServiceBySlug,
  serviceSlugs,
} from "@/lib/services-data";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: service.canonicalUrl,
      images: [
        {
          url: "/web-app-manifest-512x512.png",
          width: 512,
          height: 512,
          alt: service.metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: service.metaTitle,
      description: service.metaDescription,
      images: ["/web-app-manifest-512x512.png"],
    },
    alternates: {
      canonical: service.canonicalUrl,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.metaTitle,
    "description": service.metaDescription,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Simplicity Web Inc",
      "url": "https://simplicityweb.ca",
      "telephone": "+1 (647)932-9688",
      "email": "info@simplicityweb.ca",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Toronto",
        "addressRegion": "ON",
        "addressCountry": "CA",
      },
    },
    "url": service.canonicalUrl,
  };

  return (
    <PageTransition>
      <Script
        id={`service-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceDetail service={service} />
    </PageTransition>
  );
}
