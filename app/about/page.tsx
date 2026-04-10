import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import Values from "@/components/about/Values";
import Testimonials from "@/components/about/Testimonials";
import Leadership from "@/components/about/Leadership";
import WhatMakesUsDifferent from "@/components/about/WhatMakesUsDifferent";
import CallToAction from "@/components/home/CallToAction";
import PageTransition from "@/components/ui/PageTransition";

export const metadata: Metadata = {
  title: "About Simplicity Web Inc - Leading Web Development Company in Toronto",
  description:
    "Discover Simplicity Web Inc, your trusted web development company specializing in WordPress development, SEO services, and mobile app development for startups and small businesses in Toronto.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <AboutHero />
      <Values />
      <Testimonials />
      <Leadership />
      <WhatMakesUsDifferent />
      <CallToAction
        bgClass="bg-section-bg/85"
        heading={
          <>
            Ready to Grow Your <span className="gradient-text">Business?</span>
          </>
        }
        description="Let's discuss how Simplicity Web Inc can help your startup or small business thrive online. Contact us today for a free consultation that includes an SEO audit and discover the difference a dedicated web development company can make."
        primaryButtonText="Contact Us"
        primaryButtonHref="/contact"
        secondaryButtonText="View Our Work"
        secondaryButtonHref="/works"
      />
    </PageTransition>
  );
}
