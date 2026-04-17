import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServicesHighlight from "@/components/home/ServicesHighlight";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import FAQ from "@/components/home/FAQ";
import CallToAction from "@/components/home/CallToAction";
import PageTransition from "@/components/ui/PageTransition";

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <Services />
      <WhyChooseUs />
      <ServicesHighlight />
      <FeaturedProjects />
      <FAQ />
      <CallToAction bgClass="bg-card-bg/85" />
    </PageTransition>
  );
}
