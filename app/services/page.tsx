import type { Metadata } from "next";
import PageTransition from "@/components/ui/PageTransition";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import OurProcess from "@/components/services/OurProcess";
import WhyWorkWithUs from "@/components/services/WhyWorkWithUs";
import CallToAction from "@/components/home/CallToAction";

export const metadata: Metadata = {
  title: "Services - Web Development, Branding & Digital Marketing",
  description:
    "We provide end-to-end digital solutions designed to help businesses build, launch, and scale. From websites and apps to branding, SEO, and marketing strategies.",
};

export default function ServicesPage() {
  return (
    <PageTransition>
      <ServicesHero />
      <ServicesList />
      <OurProcess />
      <WhyWorkWithUs />
      <CallToAction
        bgClass="bg-card-bg/85"
        heading={
          <>
            Ready to Grow with a Top <span className="gradient-text">Web Development Company?</span>
          </>
        }
        description="Partner with us for expert WordPress development and comprehensive SEO services that deliver measurable results."
        primaryButtonText="Start Your Project"
        primaryButtonHref="/contact"
        secondaryButtonText="View Our Work"
        secondaryButtonHref="/works"
      />
    </PageTransition>
  );
}
