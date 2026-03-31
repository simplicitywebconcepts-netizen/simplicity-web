"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data";
import {
  navVariants,
  menuOverlay,
  menuStaggerContainer,
  menuItemVariants,
} from "@/lib/animations";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass shadow-lg shadow-primary/5 py-3"
            : "bg-white/95 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-10 h-10 bg-foreground rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <span className="text-white font-bold text-lg">S</span>
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-sm tracking-widest uppercase">
                Simplicity
              </span>
              <span className="text-[8px] tracking-[0.3em] uppercase text-muted">
                Made Inc
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 animated-underline ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <Button href="/contact" variant="primary" size="sm">
                Get a Quote
              </Button>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-10 h-10 flex items-center justify-center lg:hidden z-[60]"
              aria-label="Toggle menu"
              id="menu-toggle"
            >
              <div className="flex flex-col items-end gap-1.5">
                <motion.span
                  animate={
                    isMenuOpen
                      ? { rotate: 45, y: 6, width: 24 }
                      : { rotate: 0, y: 0, width: 24 }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="block h-[2px] bg-foreground origin-center"
                  style={{ width: 24 }}
                />
                <motion.span
                  animate={isMenuOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block h-[2px] w-4 bg-foreground"
                />
                <motion.span
                  animate={
                    isMenuOpen
                      ? { rotate: -45, y: -6, width: 24 }
                      : { rotate: 0, y: 0, width: 20 }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="block h-[2px] bg-foreground origin-center"
                  style={{ width: 20 }}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuOverlay}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-foreground/95 backdrop-blur-md flex flex-col items-center justify-center"
          >
            <motion.nav
              variants={menuStaggerContainer}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col items-center gap-8"
            >
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={menuItemVariants}>
                  <Link
                    href={link.href}
                    className={`text-2xl font-light tracking-wide transition-colors duration-300 ${
                      pathname === link.href
                        ? "text-primary-light"
                        : "text-white/80 hover:text-white"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={menuItemVariants} className="mt-4">
                <Button href="/contact" variant="outline" className="!border-white !text-white hover:!bg-white hover:!text-foreground">
                  Get a Quote
                </Button>
              </motion.div>

              {/* Social icons in menu */}
              <motion.div
                variants={menuItemVariants}
                className="flex items-center gap-6 mt-8"
              >
                {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-white/50 hover:text-white transition-colors duration-300"
                    aria-label={social}
                  >
                    <SocialIcon name={social} />
                  </a>
                ))}
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed nav */}
      <div className="h-[var(--nav-height)]" />
    </>
  );
}

function SocialIcon({ name }: { name: string }) {
  const iconMap: Record<string, JSX.Element> = {
    facebook: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
    twitter: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    instagram: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1.5" />
      </svg>
    ),
    linkedin: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z" />
      </svg>
    ),
  };

  return iconMap[name] || null;
}
