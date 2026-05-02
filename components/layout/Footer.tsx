"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { footerLinks, contactInfo } from "@/lib/data";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Logo from "@/components/ui/Logo";
import { ReactNode } from "react";

export default function Footer() {

  return (
    <footer className="bg-card-bg border-t border-border mt-auto">

      {/* Top brand strip */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {/* Logo + tagline */}
            <AnimatedSection delay={0} className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8">
                  <Logo className="w-full h-full" />
                </div>
                <span className="font-black tracking-widest text-sm uppercase text-foreground">
                  Simplicity Web Inc
                </span>
              </div>
              <p className="text-sm text-muted max-w-sm leading-relaxed">
                We design, build, and grow digital systems that help businesses
                attract more customers and scale with confidence.
              </p>
            </AnimatedSection>

            {/* CTA */}
            <AnimatedSection delay={0.1} className="flex flex-col gap-3 shrink-0">
              <p className="text-xs font-semibold tracking-wider uppercase text-muted">
                Ready to get started?
              </p>
              <div className="flex items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors duration-300"
                >
                  Start a Project →
                </Link>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm text-muted hover:text-primary transition-colors duration-300"
                >
                  {contactInfo.email}
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Main links grid */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

          {/* Contact Info */}
          <AnimatedSection delay={0} className="col-span-2 md:col-span-1">
            <h4 className="font-bold text-sm tracking-wider uppercase mb-5">
              Contact Info
            </h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-primary transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li>{contactInfo.website}</li>
              <li>{contactInfo.address}</li>
            </ul>
          </AnimatedSection>

          {/* Pages */}
          <AnimatedSection delay={0.1}>
            <h4 className="font-bold text-sm tracking-wider uppercase mb-5">
              Pages
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Services", href: "/services" },
                { label: "About Us", href: "/about" },
                { label: "Works", href: "/works" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Help */}
          <AnimatedSection delay={0.2}>
            <h4 className="font-bold text-sm tracking-wider uppercase mb-5">
              Help
            </h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.helpLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Sitemap */}
          <AnimatedSection delay={0.3}>
            <h4 className="font-bold text-sm tracking-wider uppercase mb-5">
              Sitemap
            </h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.sitemapLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Follow Us — merged icons + text links */}
          <AnimatedSection delay={0.4}>
            <h4 className="font-bold text-sm tracking-wider uppercase mb-5">
              Follow Us
            </h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.socialLinks.filter((s) => s.href !== "#").map((social) => (
                <li key={social.key}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-muted hover:text-primary transition-colors duration-300 group"
                    aria-label={social.label}
                  >
                    <span className="w-7 h-7 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                      <FooterSocialIcon name={social.key} />
                    </span>
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </AnimatedSection>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs text-muted"
          >
            © {new Date().getFullYear()} Simplicity Web Inc. All rights reserved.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <div className="w-5 h-5 opacity-50">
              <Logo className="w-full h-full" />
            </div>
            <span className="text-[10px] text-muted tracking-widest uppercase">
              SIMPLICITY WEB INC
            </span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

function FooterSocialIcon({ name }: { name: string }) {
  const size = 14;
  const icons: Record<string, ReactNode> = {
    facebook: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
    twitter: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    instagram: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
      </svg>
    ),
    linkedin: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z" />
      </svg>
    ),
  };
  return icons[name] || null;
}
