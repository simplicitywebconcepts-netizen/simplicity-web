"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { navLinks, footerLinks, contactInfo } from "@/lib/data";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Logo from "@/components/ui/Logo";
import { ReactNode } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card-bg border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Contact Info */}
          <AnimatedSection delay={0}>
            <h4 className="font-bold text-sm tracking-wider uppercase mb-4">
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
            </ul>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-4">
              {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/50 hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label={social}
                >
                  <FooterSocialIcon name={social} />
                </a>
              ))}
            </div>
          </AnimatedSection>

          {/* Social Links */}
          <AnimatedSection delay={0.1}>
            <h4 className="font-bold text-sm tracking-wider uppercase mb-4">
              Social Links
            </h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.socialLinks.map((link) => (
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
            <h4 className="font-bold text-sm tracking-wider uppercase mb-4">
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
            <h4 className="font-bold text-sm tracking-wider uppercase mb-4">
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
            Powered by Simplicity Web Inc
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <div className="w-6 h-6 flex items-center justify-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
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
