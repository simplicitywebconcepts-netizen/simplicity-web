import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import Values from "@/components/about/Values";
import Testimonials from "@/components/about/Testimonials";
import Leadership from "@/components/about/Leadership";
import WhatMakesUsDifferent from "@/components/about/WhatMakesUsDifferent";
import CallToAction from "@/components/home/CallToAction";
import PageTransition from "@/components/ui/PageTransition";

export const metadata: Metadata = {
  title: "About Simplicity Web | Digital Agency in Toronto",
  description:
    "Learn about Simplicity Web, a full-service digital agency specializing in web design, web development, branding, SEO, and digital marketing solutions.",
  keywords: [
    "Digital Agency Toronto",
    "Web Design Company",
    "Web Development Company",
    "Branding Agency",
    "Digital Marketing Agency",
  ],
  openGraph: {
    title: "About Simplicity Web | Digital Agency in Toronto",
    description:
      "Learn about Simplicity Web, a full-service digital agency specializing in web design, web development, branding, SEO, and digital marketing solutions.",
    url: "https://simplicityweb.ca/about",
    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "About Simplicity Web",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "About Simplicity Web | Digital Agency in Toronto",
    description:
      "Learn about Simplicity Web, a full-service digital agency specializing in web design, web development, branding, SEO, and digital marketing solutions.",
    images: ["/web-app-manifest-512x512.png"],
  },
  alternates: {
    canonical: "/about",
  },
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
