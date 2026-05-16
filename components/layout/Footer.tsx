"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    footerLinks,
    footerServices,
    footerCompanyLinks,
    contactInfo,
} from "@/lib/data";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { ReactNode } from "react";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function Footer() {
    return (
        <footer
            data-section="footer"
            className="bg-card-bg border-t border-border mt-auto"
        >
            {/* ── Section 1: CTA Banner ── */}
            <div className="border-b border-border">
                <div className="max-w-7xl mx-auto px-6 py-8 md:py-10">
                    <AnimatedSection delay={0}>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-3">
                            Let&apos;s make something.
                        </h2>
                        <p className="text-muted text-sm md:text-base max-w-2xl leading-relaxed mb-6">
                            Without experience and creativity, you&apos;re
                            leaving digital marketing opportunities on the
                            table. Contact us today to learn how we can
                            transform your marketing strategy into measurable
                            results.
                        </p>
                        <Button href="/contact" variant="primary" size="lg">
                            Start a Project
                        </Button>
                    </AnimatedSection>
                </div>
            </div>

            {/* ── Section 2: Main Footer Grid ── */}
            <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
                    {/* Col 1: Logo + Description + Socials */}
                    <AnimatedSection
                        delay={0}
                        className="order-4 md:order-3 lg:order-1 lg:col-span-5 lg:justify-self-start"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8">
                                <Logo className="w-full h-full" />
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="font-bold text-sm tracking-widest uppercase">
                                    SIMPLICITY
                                </span>
                                <span className="text-[8px] tracking-[0.3em] uppercase text-muted">
                                    WEB INC
                                </span>
                            </div>
                        </div>
                        <p className="text-sm text-muted leading-relaxed mb-6 max-w-sm">
                            Simplicity Web is a digital agency based in Toronto
                            with over 10 years of professional experience in web
                            design, custom development, branding, SEO, and
                            scalable business solutions.
                        </p>
                        {/* Social icons row */}
                        <div className="flex items-center gap-3">
                            {footerLinks.socialLinks
                                .filter((s) => s.href !== "#")
                                .map((social) => (
                                    <a
                                        key={social.key}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 rounded-full bg-foreground/5 border border-border flex items-center justify-center text-muted hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                                        aria-label={social.label}
                                    >
                                        <FooterSocialIcon name={social.key} />
                                    </a>
                                ))}
                        </div>
                    </AnimatedSection>

                    {/* Col 2: Services */}
                    <AnimatedSection
                        delay={0.05}
                        className="order-1 md:order-1 lg:order-2 lg:col-span-2 lg:justify-self-center"
                    >
                        <h4 className="font-bold text-sm tracking-wider uppercase mb-5">
                            Services
                        </h4>
                        <ul className="space-y-2.5 text-sm">
                            {footerServices.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-muted hover:text-foreground transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </AnimatedSection>

                    {/* Col 3: Company */}
                    <AnimatedSection
                        delay={0.1}
                        className="order-2 md:order-2 lg:order-3 lg:col-span-2 lg:justify-self-center"
                    >
                        <h4 className="font-bold text-sm tracking-wider uppercase mb-5">
                            Company
                        </h4>
                        <ul className="space-y-2.5 text-sm">
                            {footerCompanyLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-muted hover:text-foreground transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </AnimatedSection>

                    {/* Col 4: Book a Call + Contact */}
                    <AnimatedSection
                        delay={0.15}
                        className="order-3 md:order-4 lg:order-4 lg:col-span-3 lg:justify-self-end"
                    >
                        <div className="mb-6">
                            <Button href="/contact" variant="outline" size="sm">
                                Book a Call
                            </Button>
                        </div>

                        <h4 className="font-bold text-sm tracking-wider uppercase mb-3">
                            Contact Simplicity
                        </h4>
                        <ul className="space-y-3 text-sm text-muted">
                             <li>
                                <a
                                    href={`https://${contactInfo.website}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 hover:text-foreground transition-colors group"
                                >
                                    <Globe className="w-4 h-4 shrink-0 group-hover:text-primary transition-colors" />
                                    <span>Simplicity Web Inc.</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={contactInfo.addressLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-3 hover:text-foreground transition-colors group"
                                >
                                    <MapPin className="w-4 h-4 mt-0.5 shrink-0 group-hover:text-primary transition-colors" />
                                    <span className="whitespace-pre-line">
                                        {contactInfo.address}
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`tel:${contactInfo.phone}`}
                                    className="flex items-center gap-3 hover:text-foreground transition-colors group"
                                >
                                    <Phone className="w-4 h-4 shrink-0 group-hover:text-primary transition-colors" />
                                    <span>{contactInfo.phone}</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${contactInfo.email}`}
                                    className="flex items-center gap-3 hover:text-foreground transition-colors group"
                                >
                                    <Mail className="w-4 h-4 shrink-0 group-hover:text-primary transition-colors" />
                                    <span>{contactInfo.email}</span>
                                </a>
                            </li>
                        </ul>
                    </AnimatedSection>
                </div>
            </div>

            {/* ── Section 3: Bottom Bar ── */}
            <div className="border-t border-border">
                <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-xs text-muted"
                    >
                        © {new Date().getFullYear()} Simplicity Web Inc. All
                        rights reserved.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 text-xs text-muted"
                    >
                        {footerLinks.legalLinks.map((link, i) => (
                            <span
                                key={link.label}
                                className="flex items-center gap-4"
                            >
                                {i > 0 && (
                                    <span
                                        className="text-border"
                                        aria-hidden="true"
                                    >
                                        |
                                    </span>
                                )}
                                <Link
                                    href={link.href}
                                    className="hover:text-foreground transition-colors duration-300"
                                >
                                    {link.label}
                                </Link>
                            </span>
                        ))}
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
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
        ),
        twitter: (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
        instagram: (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
            </svg>
        ),
        linkedin: (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z" />
            </svg>
        ),
    };
    return icons[name] || null;
}
