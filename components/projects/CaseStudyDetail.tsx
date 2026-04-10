"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import type { CaseStudy } from "@/lib/case-studies";

interface CaseStudyDetailProps {
  caseStudy: CaseStudy;
}

function SectionTitle({ label, title, description }: { label: string; title: string; description?: string }) {
  return (
    <div className="max-w-3xl">
      <SectionLabel label={label} />
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">{title}</h2>
      {description ? <p className="mt-4 text-muted text-lg leading-relaxed">{description}</p> : null}
    </div>
  );
}

export default function CaseStudyDetail({ caseStudy }: CaseStudyDetailProps) {
  return (
    <div className="bg-network-pattern min-h-screen">
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <SectionLabel label="Case Study" />
                <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] max-w-4xl">
                  {caseStudy.title}
                </h1>
                <p className="mt-5 text-xl md:text-2xl text-foreground/90 max-w-2xl leading-relaxed">
                  {caseStudy.tagline}
                </p>
                <div className="mt-6 space-y-4 max-w-2xl text-lg text-muted leading-relaxed">
                  {caseStudy.intro.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid gap-4 sm:grid-cols-3">
                {caseStudy.meta.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-border bg-card-bg/80 p-4">
                    <p className="text-[10px] font-semibold tracking-[0.24em] uppercase text-muted">{item.label}</p>
                    <p className="mt-2 text-sm font-medium text-foreground leading-snug">{item.value}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Button href="/contact">Contact Us</Button>
                <Button href={caseStudy.website} variant="outline">
                  Visit Website
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="rounded-[2rem] border border-border bg-card-bg/80 p-3 shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
            >
              <div className="relative aspect-[16/11] overflow-hidden rounded-[1.5rem] bg-section-bg">
                <Image
                  src={caseStudy.screenshot.src}
                  alt={caseStudy.screenshot.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 px-2 py-4 text-sm text-muted">
                <span>{caseStudy.client}</span>
                <a
                  href={caseStudy.website}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-foreground transition-colors hover:text-primary"
                >
                  {caseStudy.website.replace(/^https?:\/\//, "")}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24 space-y-20">
        <section>
          <SectionTitle
            label="Overview"
            title="A focused healthcare website built for clarity, trust, and SEO readiness."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {caseStudy.overview.map((paragraph) => (
              <div key={paragraph} className="rounded-3xl border border-border bg-card-bg p-6 text-muted leading-relaxed">
                <p>{paragraph}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle
            label="Challenge"
            title="The clinic needed a site that answered patient questions faster and felt easier to trust."
          />
          <div className="mt-8 rounded-3xl border border-border bg-card-bg p-6 md:p-8">
            <ul className="space-y-4 text-muted leading-relaxed">
              {caseStudy.challenge.map((item) => (
                <li key={item} className="flex gap-4">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <SectionTitle
            label="Approach"
            title="A four-step process kept the project structured from planning through optimization."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {caseStudy.approach.map((step, index) => (
              <div key={step.title} className="rounded-3xl border border-border bg-card-bg p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-semibold text-primary">
                    0{index + 1}
                  </div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                </div>
                <p className="mt-4 text-sm text-muted leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle
            label="Features / Services"
            title="Reusable service blocks keep the case study layout consistent across projects."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {caseStudy.features.map((feature) => (
              <div key={feature.title} className="rounded-3xl border border-border bg-card-bg p-6">
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle
            label="Design Highlights"
            title="The interface stays calm, readable, and responsive across every breakpoint."
          />
          <div className="mt-8 space-y-6 rounded-3xl border border-border bg-card-bg p-6 md:p-8 text-muted leading-relaxed">
            {caseStudy.designHighlights.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle
            label="Results / Outcome"
            title="The final experience is cleaner, easier to manage, and better prepared for search."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card-bg p-6">
              <ul className="space-y-4 text-muted leading-relaxed">
                {caseStudy.results.map((item) => (
                  <li key={item} className="flex gap-4">
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-gradient-to-br from-card-bg to-section-bg p-6 md:p-8">
              <p className="text-sm font-semibold tracking-[0.22em] uppercase text-muted">SEO Readiness</p>
              <p className="mt-4 text-lg leading-relaxed text-foreground/90">
                The information architecture, headings, and metadata are structured to support web development and WordPress development work that needs to rank, convert, and stay maintainable over time.
              </p>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle
            label="Tech Stack"
            title="The build uses a focused stack that supports maintainability and performance."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {caseStudy.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full border border-border bg-card-bg px-4 py-2 text-xs font-semibold tracking-wide uppercase text-foreground/90"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-border bg-section-bg/90 px-6 py-10 md:px-10 md:py-12 text-center">
          <p className="text-sm font-semibold tracking-[0.24em] uppercase text-muted">Next Step</p>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">{caseStudy.ctaHeading}</h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-muted leading-relaxed">{caseStudy.ctaDescription}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact">Start Your Project</Button>
            <Button href="/works" variant="outline">
              View More Work
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}