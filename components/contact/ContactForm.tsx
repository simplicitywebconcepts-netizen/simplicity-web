"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, fadeInRight } from "@/lib/animations";
import { contactInfo } from "@/lib/data";
import { sendContactFormRequest } from "@/lib/services/contact-form-client.service";
import Button from "@/components/ui/Button";
import { useNotification } from "@/components/ui/NotificationProvider";
import SectionLabel from "@/components/ui/SectionLabel";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { notify } = useNotification();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendContactFormRequest(formData);

      notify({
        type: "success",
        message: "Message sent successfully! We will get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong";
      notify({
        type: "error",
        message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black/45 backdrop-blur-[2px] rounded-2xl p-8 md:p-12 ring-1 ring-white/10 shadow-xl relative z-10 w-full">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col h-full justify-center"
        >
          <motion.div variants={fadeInUp}>
            <SectionLabel label="LET'S TALK" />
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight mt-6 leading-[1.1]"
          >
            Partner with a leading <br />
            <span className="gradient-text">web development company.</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-muted mt-6 max-w-xl text-lg leading-relaxed"
          >
            From custom WordPress development to data-driven SEO services, our
            team connects the dots to grow your online presence. Let&apos;s
            build tools that move your business forward.
          </motion.p>

          <motion.ul variants={fadeInUp} className="mt-8 space-y-4">
            <li className="flex items-center text-foreground/90">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></span>
              Custom Web Development
            </li>
            <li className="flex items-center text-foreground/90">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></span>
              Modern WordPress Development
            </li>
            <li className="flex items-center text-foreground/90">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></span>
              Strategic SEO Services
            </li>
          </motion.ul>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col sm:flex-row gap-6"
          >
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest text-muted font-semibold mb-1">
                Email Us
              </span>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {contactInfo.email}
              </a>
            </div>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest text-muted font-semibold mb-1">
                Call Us
              </span>
              <a
                href={`tel:${contactInfo.phone}`}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {contactInfo.phone}
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Form */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          animate="visible"
          className="flex flex-col h-full h-auto w-full"
        >
          <div className="mb-8 border-b border-white/10 pb-6">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Contact Us
            </h2>
            <p className="text-muted mt-2">
              Ready to launch? Tell us about your project.
            </p>
          </div>

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
                className="w-full px-4 py-3 rounded-lg border border-border bg-card-bg/60 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-300"
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
                className="w-full px-4 py-3 rounded-lg border border-border bg-card-bg/60 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-300"
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
                className="w-full px-4 py-3 rounded-lg border border-border bg-card-bg/60 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-300 resize-none"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="opacity-25"
                      />
                      <path
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        className="opacity-75"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Submit"
                )}
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
      <div className="mt-16 text-center">
        <p className="text-sm font-medium text-muted">
          Partner with a trusted web development company that puts your growth
          first. Experience the difference of dedicated WordPress development
          and expert SEO services designed to scale your business.
        </p>
      </div>
    </div>
  );
}
