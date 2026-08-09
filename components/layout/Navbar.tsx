"use client";

import { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, servicesDropdownLinks } from "@/lib/data";
import { ChevronDown, ChevronRight } from "lucide-react";
import {
  navVariants,
  menuOverlay,
  menuStaggerContainer,
  menuItemVariants,
} from "@/lib/animations";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";

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

  const isActive = (href: string) => {
    if (pathname === href) return true;
    if (href !== "/" && pathname.startsWith(`${href}/`)) return true;
    return false;
  };

  return (
    <>
      <motion.header
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass shadow-lg shadow-primary/5 py-3"
            : "bg-background/95 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Logo className="w-10 h-10 drop-shadow-md group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-sm tracking-widest uppercase">
                SIMPLICITY
              </span>
              <span className="text-[8px] tracking-[0.3em] uppercase text-muted">
                WEB INC
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isServices = link.href === "/services";
              if (isServices) {
                return (
                  <div key={link.href} className="relative group/services py-2">
                    <Link
                      href={link.href}
                      className={`text-sm font-medium transition-colors duration-300 animated-underline flex items-center gap-1 ${
                        isActive(link.href)
                          ? "text-primary"
                          : "text-foreground/70 hover:text-foreground"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover/services:rotate-180 text-foreground/50 group-hover/services:text-primary" />
                    </Link>

                    {/* Services Hover Dropdown Menu */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 pointer-events-none group-hover/services:opacity-100 group-hover/services:pointer-events-auto transition-all duration-300 w-80 z-50">
                      <div className="p-3 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 ring-1 ring-white/10 shadow-2xl space-y-1">
                        <div className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-widest text-primary border-b border-white/10 mb-1">
                          Our Core Services
                        </div>
                        {servicesDropdownLinks.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block p-2.5 rounded-xl hover:bg-white/10 transition-colors group/item"
                          >
                            <div className="text-sm font-semibold text-white group-hover/item:text-primary transition-colors flex items-center justify-between">
                              <span>{item.label}</span>
                              <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 -translate-x-1 group-hover/item:translate-x-0 transition-all text-primary" />
                            </div>
                            <div className="text-xs text-zinc-400 font-normal mt-0.5">
                              {item.desc}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-300 animated-underline ${
                    isActive(link.href)
                      ? "text-primary"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <Button href="/contact" variant="primary" size="sm">
                Get in Touch
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
            className="fixed inset-0 z-40 bg-card-bg/95 backdrop-blur-md flex flex-col items-center justify-center overflow-y-auto py-12"
          >
            <motion.nav
              variants={menuStaggerContainer}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col items-center gap-6 text-center max-w-sm w-full px-6"
            >
              {navLinks.map((link) => {
                const isServices = link.href === "/services";
                return (
                  <motion.div key={link.href} variants={menuItemVariants} className="w-full flex flex-col items-center">
                    <Link
                      href={link.href}
                      className={`text-2xl font-light tracking-wide transition-colors duration-300 ${
                        isActive(link.href)
                          ? "text-primary-light"
                          : "text-foreground/80 hover:text-foreground"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>

                    {/* Sub-services list in mobile menu */}
                    {isServices && (
                      <div className="mt-3 space-y-2 w-full pt-2 border-t border-white/10">
                        {servicesDropdownLinks.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block text-sm text-zinc-400 hover:text-primary transition-colors py-1"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                );
              })}
              <motion.div variants={menuItemVariants} className="mt-4">
                <Button href="/contact" variant="outline" className="!border-foreground !text-foreground hover:!bg-foreground hover:!text-background">
                  Get in Touch
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
                    className="text-foreground/50 hover:text-foreground transition-colors duration-300"
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
  const iconMap: Record<string, ReactNode> = {
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
