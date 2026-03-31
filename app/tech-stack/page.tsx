import type { Metadata } from "next";
import TechGrid from "@/components/tech-stack/TechGrid";
import PageTransition from "@/components/ui/PageTransition";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Tech Stack",
  description:
    "Explore the Simplicity web innovation stack. From cloud platforms to DevOps tools, we use cutting-edge technology to build robust solutions.",
};

export default function TechStackPage() {
  return (
    <PageTransition>
      <section className="py-24 bg-network-pattern min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <SectionLabel label="Technology" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-4 leading-[1.1]">
              THE SIMPLICITY WEB{" "}
              <span className="gradient-text">INNOVATION STACK</span>
            </h1>
            <p className="text-muted mt-4 max-w-2xl text-lg">
              Our carefully selected technology stack powers robust,
              scalable, and high-performance solutions for our clients.
            </p>
          </div>

          <TechGrid />
        </div>
      </section>
    </PageTransition>
  );
}
