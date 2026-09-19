"use client";

import { ArrowUp } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ContactClosingCta() {
  const handleScrollToForm = () => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }

    setTimeout(() => {
      const nameInput = document.getElementById("name");
      if (nameInput) {
        nameInput.focus();
      }
    }, 600);
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-section-bg/40">
      {/* Background ambient radial glow matching dark crystal theme */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[360px] bg-primary/10 blur-[130px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center">
          <div className="glass relative rounded-3xl p-10 sm:p-14 md:p-16 lg:p-20 border border-white/15 hover:border-primary/40 transition-all duration-500 overflow-hidden shadow-2xl">
            {/* Subtle inner top glow accent */}
            <div
              className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-primary/20 blur-[80px] rounded-full pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col items-center">
              <SectionLabel label="LET'S TALK" className="justify-center mb-6" />

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                Ready to Build?{" "}
                <span className="bg-[linear-gradient(135deg,#7B2FF7_0%,#3E5FE5_50%,#0EA5E9_100%)] bg-clip-text text-transparent [filter:drop-shadow(0_2px_14px_rgba(0,0,0,0.65))]">
                  Let&apos;s Talk
                </span>
              </h2>

              <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
                Have questions or ready to start your project? Get in touch with our team and let&apos;s discuss how we can help.
              </p>

              <Button
                onClick={handleScrollToForm}
                size="lg"
                variant="primary"
                className="group px-8 py-4 text-xs font-semibold tracking-wider uppercase shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  Send an Inquiry
                  <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                </span>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export { ContactClosingCta };
