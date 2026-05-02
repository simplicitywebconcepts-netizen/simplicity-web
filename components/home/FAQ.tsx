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
      "We focus on building complete digital systems—not just websites. From branding and development to marketing and growth, everything we create is designed to work together to generate leads, drive engagement, and support long-term business growth.",
  },
  {
    id: 2,
    question: "What services do you offer?",
    answer:
      "We provide end-to-end digital solutions including web and app development, branding, SEO, paid advertising, social media management, and growth strategy—everything needed to build, launch, and scale your business.",
  },
  {
    id: 3,
    question: "How long does a typical project take?",
    answer:
      "Timelines vary depending on the scope, but most website and branding projects are completed within 4–8 weeks. Larger or more complex builds may take longer. We provide a clear timeline after understanding your specific needs.",
  },
  {
    id: 4,
    question: "Do you only build websites, or can you help grow my business too?",
    answer:
      "We go beyond development. Our focus is on helping you grow—through SEO, paid ads, social media, and conversion optimization—so your digital presence actually drives results.",
  },
  {
    id: 5,
    question: "Can you help if I'm just starting my business?",
    answer:
      "Absolutely. We work with startups and growing businesses to build everything from brand identity and websites to marketing systems that help you launch and gain traction quickly.",
  },
  {
    id: 6,
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. We offer ongoing support, maintenance, and growth services to ensure your website and marketing continue to perform and improve over time.",
  },
  {
    id: 7,
    question: "How do I get started?",
    answer:
      "Reach out to us for a consultation. We'll discuss your goals, identify opportunities, and outline the best approach to build and grow your digital presence.",
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
    <section data-section="faq" className="py-24 relative overflow-hidden">
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
