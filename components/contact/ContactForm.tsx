"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, fadeInRight } from "@/lib/animations";
import { contactInfo } from "@/lib/data";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="grid lg:grid-cols-5 gap-12">
      {/* Form */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="lg:col-span-3"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div variants={fadeInUp}>
            <label
              htmlFor="name"
              className="block text-xs font-semibold tracking-wider uppercase text-muted mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              required
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-300"
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <label
              htmlFor="email"
              className="block text-xs font-semibold tracking-wider uppercase text-muted mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              required
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-300"
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <label
              htmlFor="message"
              className="block text-xs font-semibold tracking-wider uppercase text-muted mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
              required
              placeholder="Tell us about your project..."
              className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-300 resize-none"
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="px-6 py-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm font-medium"
              >
                ✓ Message sent successfully! We&apos;ll get back to you soon.
              </motion.div>
            ) : (
              <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                      <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" className="opacity-75" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Submit"
                )}
              </Button>
            )}
          </motion.div>
        </form>
      </motion.div>

      {/* Contact Info Sidebar */}
      <motion.div
        variants={fadeInRight}
        initial="hidden"
        animate="visible"
        className="lg:col-span-2"
      >
        <div className="bg-section-bg rounded-xl p-8 border border-border">
          <h3 className="font-bold text-lg mb-6">Contact Info</h3>

          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-1">
                  Address
                </p>
                <p className="text-sm leading-relaxed">{contactInfo.address}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-1">
                  Email
                </p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm text-primary hover:underline"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-1">
                  Phone
                </p>
                <p className="text-sm">{contactInfo.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
