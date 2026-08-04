import type { Metadata } from "next";
import ProjectGrid from "@/components/projects/ProjectGrid";
import PageTransition from "@/components/ui/PageTransition";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Web Design Portfolio | Website Development Projects",
  description:
    "Explore our portfolio featuring website development, branding, SEO, and digital marketing projects delivered across multiple industries.",
  keywords: [
    "Web Design Portfolio",
    "Website Development Portfolio",
    "Web Development Projects",
    "Branding Portfolio",
    "Digital Marketing Case Studies",
  ],
  openGraph: {
    title: "Web Design Portfolio | Website Development Projects",
    description:
      "Explore our portfolio featuring website development, branding, SEO, and digital marketing projects delivered across multiple industries.",
    url: "https://simplicityweb.ca/works",
    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "Simplicity Web Works Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Web Design Portfolio | Website Development Projects",
    description:
      "Explore our portfolio featuring website development, branding, SEO, and digital marketing projects delivered across multiple industries.",
    images: ["/web-app-manifest-512x512.png"],
  },
  alternates: {
    canonical: "/works",
  },
};

export default function ProjectsPage() {
  return (
    <PageTransition>
      <section className="py-24 bg-network-pattern min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel label="Portfolio" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-4 leading-[1.1]">
              OUR COMPREHENSIVE{" "}
              <span className="gradient-text">PORTFOLIO.</span>
            </h1>
            <p className="text-muted mt-4 max-w-2xl text-lg">
              Discover our work across cloud infrastructure, cybersecurity, and
              custom software development solutions.
            </p>
          </div>

          <ProjectGrid />
        </div>
      </section>
    </PageTransition>
  );
}
