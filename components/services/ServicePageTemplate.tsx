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
import { CTASection } from '@/components/services/sections/CTASection';

interface ServicePageTemplateProps {
  data: ServiceContent;
}

export function ServicePageTemplate({ data }: ServicePageTemplateProps) {
  return (
    <PageTransition>
      <div className="bg-network-pattern min-h-screen">
        <HeroSection data={data} />
        
        <div className="bg-section-bg/85">
          <ChallengesSection data={data} />
        </div>
        
        <div className="bg-card-bg/85">
          <SolutionSection data={data} />
        </div>
        
        <div className="bg-section-bg/85">
          <IncludedSection data={data} />
        </div>
        
        <div className="bg-card-bg/85">
          <BenefitsSection data={data} />
        </div>
        
        <div className="bg-section-bg/85">
          <ProcessSection data={data} />
        </div>
        
        <div className="bg-card-bg/85">
          <TechSection data={data} />
        </div>
        
        <div className="bg-section-bg/85">
          <IndustriesSection data={data} />
        </div>
        
        <div className="bg-card-bg/85">
          <WhyChooseSection data={data} />
        </div>
        
        <div className="bg-section-bg/85">
          <RecentProjectsSection data={data} />
        </div>
        
        <div className="bg-card-bg/85">
          <TestimonialsSection data={data} />
        </div>
        
        <div className="bg-section-bg/85">
          <CTASection data={data} />
        </div>
      </div>
    </PageTransition>
  );
}

export default ServicePageTemplate;
