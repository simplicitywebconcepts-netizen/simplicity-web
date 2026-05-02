import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServicesHighlight from "@/components/home/ServicesHighlight";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import FAQ from "@/components/home/FAQ";
import CallToAction from "@/components/home/CallToAction";
import PageTransition from "@/components/ui/PageTransition";
import GrowthSystem from "@/components/home/GrowthSystem";

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <div className="bg-section-bg/85">
        <Services />
      </div>
      <div className="bg-card-bg/85">
        <WhyChooseUs />
      </div>
      <div className="bg-section-bg/85">
        <ServicesHighlight />
      </div>
      <div className="bg-card-bg/85">
        <GrowthSystem />
      </div>
      <div className="bg-section-bg/85">
        <FeaturedProjects />
      </div>
      <div className="bg-card-bg/85">
        <FAQ />
      </div>
      <CallToAction bgClass="bg-section-bg/85" />
    </PageTransition>
  );
}
