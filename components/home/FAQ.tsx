"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Script from "next/script";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";

const faqs = [
  {
    id: 1,
    question: "What makes Simplicity Web Inc different from other agencies?",
    answer:
      "We combine polished WordPress development with SEO expertise and a clear focus on conversion. Our process is built for startups and growing companies that need results without unnecessary complexity.",
  },
  {
    id: 2,
    question: "How long does a WordPress website project take?",
    answer:
      "Most WordPress development projects are completed in 4–8 weeks, depending on scope. We provide a transparent timeline after the discovery phase.",
  },
  {
    id: 3,
    question: "Do you offer local SEO services in Toronto?",
    answer:
      "Yes. Our SEO services include local optimization, keyword strategy, and content improvements tailored to Toronto and Canadian markets.",
  },
  {
    id: 4,
    question: "Can you support custom web development beyond WordPress?",
    answer:
      "Absolutely. We build custom web applications, API integrations, and business tools when a standard WordPress site isn't enough.",
  },
  {
    id: 5,
    question: "Do you offer mobile app development services?",
    answer:
      "Yes. We extend your business with mobile apps designed for engagement and retention. We build cross-platform apps using Flutter and native technologies.",
  },
  {
    id: 6,
    question: "How do I get started?",
    answer:
      "Reach out for a free consultation and strategy review. We'll discuss your goals, challenges, and the best path to grow your online presence.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div variants={fadeInUp} className="border-b border-border">
      <button
        id={`faq-trigger-${faq.id}`}
        onClick={onToggle}
        className="flex w-full items-center justify-between py-6 text-left group cursor-pointer"
        aria-expanded={isOpen}
        aria-controls={`faq-content-${faq.id}`}
      >
        <span className="text-base font-semibold leading-7 text-foreground group-hover:text-primary transition-colors duration-300">
          {faq.question}
        </span>
        <span className="ml-6 flex h-7 w-7 shrink-0 items-center justify-center">
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="relative w-5 h-5"
          >
            {/* Horizontal line */}
            <span className="absolute top-1/2 left-0 right-0 h-[2px] bg-primary -translate-y-1/2 rounded-full" />
            {/* Vertical line */}
            <span className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-primary -translate-x-1/2 rounded-full" />
          </motion.div>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-content-${faq.id}`}
            role="region"
            aria-labelledby={`faq-trigger-${faq.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.4, ease: [0.25, 1, 0.5, 1] },
                opacity: { duration: 0.3, delay: 0.1 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.3, ease: [0.25, 1, 0.5, 1] },
                opacity: { duration: 0.2 },
              },
            }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm leading-relaxed text-muted max-w-3xl">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section data-section="faq" className="py-24 bg-section-bg/85 relative overflow-hidden">
      {/* FAQ Schema Markup */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-primary/[0.03] blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 rounded-full bg-accent/[0.03] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          {/* Left column — heading & supporting text */}
          <AnimatedSection className="lg:col-span-5">
            <SectionLabel label="FAQ" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-muted mt-4">
              Can&apos;t find the answer you&apos;re looking for? Reach out to
              our{" "}
              <a
                href="/contact"
                className="font-medium text-primary hover:text-primary-dark transition-colors duration-300 animated-underline"
              >
                support team
              </a>
              .
            </p>
          </AnimatedSection>

          {/* Right column — FAQ items */}
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <motion.dl
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-0"
            >
              {faqs.map((faq) => (
                <FAQItem
                  key={faq.id}
                  faq={faq}
                  isOpen={openId === faq.id}
                  onToggle={() => handleToggle(faq.id)}
                />
              ))}
            </motion.dl>
          </div>
        </div>
      </div>
    </section>
  );
}
