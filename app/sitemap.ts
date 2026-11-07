import type { MetadataRoute } from "next";
import { servicesData } from "@/lib/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://simplicityweb.ca";

  // Base routes of the website
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sitemap`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ];

  // Dynamic service sub-pages
  const serviceRoutes = servicesData.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...routes, ...serviceRoutes];
}
