"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ChevronDown, ArrowRight } from "lucide-react";
import { staggerContainer, fadeInUp, fadeInRight } from "@/lib/animations";
import { contactInfo } from "@/lib/data";
import { sendContactFormRequest } from "@/lib/services/contact-form-client.service";
import Button from "@/components/ui/Button";
import { useNotification } from "@/components/ui/NotificationProvider";
import SectionLabel from "@/components/ui/SectionLabel";

const SERVICE_OPTIONS = [
  "Web Development",
  "Design & Branding",
  "Social Media Marketing",
  "SEO & Marketing",
  "Conversion Optimization",
  "Analytics",
  "Other",
] as const;

const BUDGET_OPTIONS = [
  "Under $2,500",
  "$2,500 – $5,000",
  "$5,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000+",
  "Flexible / Undecided",
] as const;

interface FormDataState {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
}

const initialFormData: FormDataState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormDataState>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { notify } = useNotification();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.service) {
      notify({
        type: "error",
        message: "Please select a service you are interested in.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await sendContactFormRequest({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || undefined,
        company: formData.company.trim() || undefined,
        service: formData.service,
        budget: formData.budget.trim() || undefined,
        message: formData.message.trim(),
      });

      notify({
        type: "success",
        message: "Message sent successfully! We will get back to you soon.",
      });
      setFormData(initialFormData);
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
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Hero & Direct Contact */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="lg:col-span-5 flex flex-col justify-between h-full"
        >
          <div className="relative p-6 sm:p-7 -m-6 sm:-m-7 rounded-2xl">
            <div
              className="absolute inset-0 -z-10 bg-black/50 backdrop-blur-sm rounded-2xl border border-white/10"
              aria-hidden="true"
            />

            <motion.div variants={fadeInUp}>
              <SectionLabel label="LET'S CONNECT" />
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold tracking-tight mt-4 leading-[1.15] text-foreground"
            >
              Let&apos;s Build Something{" "}
              <span className="bg-[linear-gradient(135deg,#7B2FF7_0%,#3E5FE5_50%,#0EA5E9_100%)] bg-clip-text text-transparent [filter:drop-shadow(0_2px_14px_rgba(0,0,0,0.65))]">
                Great Together
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-muted mt-6 text-base sm:text-lg leading-relaxed"
            >
              Have a project in mind? Tell us what you&apos;re looking to
              achieve and our team will get back to you.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-muted">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Replies typically within 24 hours</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="mt-12 pt-8 border-t border-white/15 space-y-6"
          >
            <div className="flex items-center gap-4 group">
              <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/15 flex items-center justify-center text-primary group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs uppercase tracking-widest text-muted font-semibold mb-0.5">
                  Email Us
                </span>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-foreground hover:text-primary transition-colors font-medium text-sm sm:text-base break-all"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/15 flex items-center justify-center text-primary group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs uppercase tracking-widest text-muted font-semibold mb-0.5">
                  Call Us
                </span>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-foreground hover:text-primary transition-colors font-medium text-sm sm:text-base"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Inquiry Form */}
        <motion.div
          id="contact-form"
          variants={fadeInRight}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col h-full w-full scroll-mt-28"
        >
          <div className="mb-8 border-b border-white/15 pb-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Tell Us About Your Project
            </h2>
            <p className="text-muted mt-2 text-sm sm:text-base">
              Fill out the details below and we&apos;ll be in touch.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Name */}
              <motion.div variants={fadeInUp}>
                <div className="flex items-center justify-between mb-1.5 min-h-[18px]">
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold tracking-wider uppercase"
                  >
                    Name <span className="text-primary">*</span>
                  </label>
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  aria-required="true"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-lg border border-white/15 bg-card-bg/60 text-sm text-foreground placeholder:text-[#6E6B7A] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                />
              </motion.div>

              {/* Company */}
              <motion.div variants={fadeInUp}>
                <div className="flex items-center justify-between mb-1.5 min-h-[18px]">
                  <label
                    htmlFor="company"
                    className="text-xs font-semibold tracking-wider uppercase"
                  >
                    Business / Company
                  </label>
                  <span className="text-[11px] text-muted/70 font-normal normal-case">
                    (optional)
                  </span>
                </div>
                <input
                  type="text"
                  id="company"
                  name="company"
                  autoComplete="organization"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company name"
                  className="w-full px-4 py-3 rounded-lg border border-white/15 bg-card-bg/60 text-sm text-foreground placeholder:text-[#6E6B7A] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                />
              </motion.div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Email */}
              <motion.div variants={fadeInUp}>
                <div className="flex items-center justify-between mb-1.5 min-h-[18px]">
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold tracking-wider uppercase"
                  >
                    Email <span className="text-primary">*</span>
                  </label>
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  aria-required="true"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-white/15 bg-card-bg/60 text-sm text-foreground placeholder:text-[#6E6B7A] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                />
              </motion.div>

              {/* Phone */}
              <motion.div variants={fadeInUp}>
                <div className="flex items-center justify-between mb-1.5 min-h-[18px]">
                  <label
                    htmlFor="phone"
                    className="text-xs font-semibold tracking-wider uppercase"
                  >
                    Phone
                  </label>
                  <span className="text-[11px] text-muted/70 font-normal normal-case">
                    (optional)
                  </span>
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 rounded-lg border border-white/15 bg-card-bg/60 text-sm text-foreground placeholder:text-[#6E6B7A] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                />
              </motion.div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Service Interested In */}
              <motion.div variants={fadeInUp}>
                <div className="flex items-center justify-between mb-1.5 min-h-[18px]">
                  <label
                    htmlFor="service"
                    className="text-xs font-semibold tracking-wider uppercase"
                  >
                    Service Interested In <span className="text-primary">*</span>
                  </label>
                </div>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    aria-required="true"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className={`w-full appearance-none px-4 py-3 pr-10 rounded-lg border border-white/15 bg-card-bg/60 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 cursor-pointer ${
                      formData.service ? "text-foreground" : "text-[#6E6B7A]"
                    }`}
                  >
                    <option value="" disabled className="bg-[#121212] text-[#6E6B7A]">
                      Select a service...
                    </option>
                    {SERVICE_OPTIONS.map((service) => (
                      <option
                        key={service}
                        value={service}
                        className="bg-[#121212] text-foreground"
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6E6B7A] pointer-events-none" />
                </div>
              </motion.div>

              {/* Budget */}
              <motion.div variants={fadeInUp}>
                <div className="flex items-center justify-between mb-1.5 min-h-[18px]">
                  <label
                    htmlFor="budget"
                    className="text-xs font-semibold tracking-wider uppercase"
                  >
                    Project Budget
                  </label>
                  <span className="text-[11px] text-muted/70 font-normal normal-case">
                    (optional)
                  </span>
                </div>
                <div className="relative">
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={`w-full appearance-none px-4 py-3 pr-10 rounded-lg border border-white/15 bg-card-bg/60 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 cursor-pointer ${
                      formData.budget ? "text-foreground" : "text-[#6E6B7A]"
                    }`}
                  >
                    <option value="" className="bg-[#121212] text-[#6E6B7A]">
                      Select budget range (optional)...
                    </option>
                    {BUDGET_OPTIONS.map((budget) => (
                      <option
                        key={budget}
                        value={budget}
                        className="bg-[#121212] text-foreground"
                      >
                        {budget}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6E6B7A] pointer-events-none" />
                </div>
              </motion.div>
            </div>

            {/* Message */}
            <motion.div variants={fadeInUp}>
              <div className="flex items-center justify-between mb-1.5 min-h-[18px]">
                <label
                  htmlFor="message"
                  className="text-xs font-semibold tracking-wider uppercase"
                >
                  Tell Us About Your Project <span className="text-primary">*</span>
                </label>
              </div>
              <textarea
                id="message"
                name="message"
                rows={5}
                aria-required="true"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your project goals, timeline, and requirements..."
                className="w-full px-4 py-3 rounded-lg border border-white/15 bg-card-bg/60 text-sm text-foreground placeholder:text-[#6E6B7A] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={fadeInUp}>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto min-w-[180px]"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
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
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <ArrowRight className="w-4 h-4" />
                  </span>
                )}
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
