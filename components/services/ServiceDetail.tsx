"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ServiceDetailInfo } from "@/lib/services-data";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";
import CallToAction from "@/components/home/CallToAction";

interface ServiceDetailProps {
  service: ServiceDetailInfo;
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <div className="space-y-16">
      {/* Hero Banner */}
      <section className="py-16 relative isolate bg-network-pattern ring-1 ring-primary/20 rounded-lg overflow-hidden">
        <div className="relative z-20 max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl rounded-2xl bg-black/45 backdrop-blur-[2px] ring-1 ring-white/10 p-6 md:p-8"
          >
            <motion.div variants={fadeInUp}>
              <SectionLabel label={service.badge} />
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-[1.1] tracking-tight mb-8"
            >
              {service.heroTitle}{" "}
              <span className="gradient-text">{service.heroHighlight}</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-white/90 leading-relaxed font-medium mb-8"
            >
              {service.heroDescription}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-xs font-bold tracking-widest uppercase rounded-sm bg-primary text-white hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-xs font-bold tracking-widest uppercase rounded-sm border-2 border-white/20 text-white hover:bg-white/10 transition-all duration-300"
              >
                All Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Overview & Features Section */}
      <section className="py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {/* Overview */}
            <motion.div variants={fadeInUp} className="max-w-3xl">
              <SectionLabel label="Service Overview" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-3 mb-4">
                {service.overviewTitle}
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                {service.overviewDescription}
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {service.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="glass border border-card-border rounded-xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits & Deliverables Section */}
      <section className="py-16 bg-section-bg/85 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-2 gap-12"
          >
            {/* Key Benefits */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <SectionLabel label="Why Choose Us" />
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Key Benefits for Your Business
              </h2>

              <div className="space-y-4">
                {service.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-lg bg-card-bg/60 border border-card-border flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-base">
                        {benefit.title}
                      </h3>
                      <p className="text-muted text-sm mt-1">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Deliverables Checklist */}
            <motion.div
              variants={fadeInUp}
              className="glass border border-card-border rounded-2xl p-8 flex flex-col justify-between"
            >
              <div>
                <SectionLabel label="What You Get" />
                <h2 className="text-3xl font-bold tracking-tight text-white mt-3 mb-6">
                  Included Deliverables
                </h2>
                <ul className="space-y-3">
                  {service.deliverables.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-sm text-white/90"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 mt-8 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-muted font-medium uppercase tracking-wider">
                  Ready to start?
                </span>
                <Link
                  href="/contact"
                  className="text-xs font-bold text-primary hover:underline uppercase tracking-wider flex items-center gap-1"
                >
                  Consult an Expert &rarr;
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction
        bgClass="bg-card-bg/85"
        heading={
          <>
            Ready to Grow Your Business with <span className="gradient-text">{service.badge}?</span>
          </>
        }
        description="Partner with Simplicity Web Inc to elevate your digital presence with strategic, result-driven solutions."
        primaryButtonText="Get in Touch"
        primaryButtonHref="/contact"
        secondaryButtonText="View All Services"
        secondaryButtonHref="/services"
      />
    </div>
  );
}
