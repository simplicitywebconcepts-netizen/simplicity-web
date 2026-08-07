import PageTransition from '@/components/ui/PageTransition';
import { ServiceContent } from '@/types/service';
import { HeroSection } from '@/components/services/sections/HeroSection';
import { ChallengesSection } from '@/components/services/sections/ChallengesSection';
import { SolutionSection } from '@/components/services/sections/SolutionSection';
import { IncludedSection } from '@/components/services/sections/IncludedSection';
import { BenefitsSection } from '@/components/services/sections/BenefitsSection';
import { ProcessSection } from '@/components/services/sections/ProcessSection';
import { TechSection } from '@/components/services/sections/TechSection';
import { IndustriesSection } from '@/components/services/sections/IndustriesSection';
import { WhyChooseSection } from '@/components/services/sections/WhyChooseSection';
import { RecentProjectsSection } from '@/components/services/sections/RecentProjectsSection';
import { TestimonialsSection } from '@/components/services/sections/TestimonialsSection';
import { FAQSection } from '@/components/services/sections/FAQSection';
import { CTASection } from '@/components/services/sections/CTASection';

interface ServicePageTemplateProps {
  data: ServiceContent;
}

export function ServicePageTemplate({ data }: ServicePageTemplateProps) {
  return (
    <PageTransition>
      <HeroSection data={data} />
      <ChallengesSection data={data} />
      <SolutionSection data={data} />
      <IncludedSection data={data} />
      <BenefitsSection data={data} />
      <ProcessSection data={data} />
      <TechSection data={data} />
      <IndustriesSection data={data} />
      <WhyChooseSection data={data} />
      <RecentProjectsSection data={data} />
      <TestimonialsSection data={data} />
      <FAQSection data={data} />
      <CTASection data={data} />
    </PageTransition>
  );
}

export default ServicePageTemplate;
