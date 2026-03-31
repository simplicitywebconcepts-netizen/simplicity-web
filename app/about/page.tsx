import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import Values from "@/components/about/Values";
import Testimonials from "@/components/about/Testimonials";
import Leadership from "@/components/about/Leadership";
import PageTransition from "@/components/ui/PageTransition";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the minds behind Simplicity. Learn about our values, leadership team, and our mission to deliver innovative technology solutions.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <AboutHero />
      <Values />
      <Testimonials />
      <Leadership />
    </PageTransition>
  );
}
