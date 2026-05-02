import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import Values from "@/components/about/Values";
import Testimonials from "@/components/about/Testimonials";
import Leadership from "@/components/about/Leadership";
import WhatMakesUsDifferent from "@/components/about/WhatMakesUsDifferent";
import CallToAction from "@/components/home/CallToAction";
import PageTransition from "@/components/ui/PageTransition";

export const metadata: Metadata = {
  title: "About Simplicity Web Inc - Full-Service Digital Agency",
  description:
    "Simplicity Web Inc. is a full-service digital agency focused on building and scaling modern businesses through strategy, design, and technology.",
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
            Ready to Build and Scale Your{" "}
            <span className="gradient-text">Business?</span>
          </>
        }
        description="Let's create a digital system that not only looks great—but drives real growth. Whether you're starting from scratch or looking to take your business to the next level, we're here to help."
        primaryButtonText="Contact Us"
        primaryButtonHref="/contact"
        secondaryButtonText="View Our Work"
        secondaryButtonHref="/works"
      />
    </PageTransition>
  );
}
