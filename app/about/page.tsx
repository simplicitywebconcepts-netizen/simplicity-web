import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import Values from "@/components/about/Values";
import Testimonials from "@/components/about/Testimonials";
import Leadership from "@/components/about/Leadership";
import WhatMakesUsDifferent from "@/components/about/WhatMakesUsDifferent";
import CallToAction from "@/components/about/CallToAction";
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
      <CallToAction />
    </PageTransition>
  );
}
