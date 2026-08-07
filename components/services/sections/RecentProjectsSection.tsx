import { ServiceContent } from '@/types/service';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/lib/data';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import { renderGradientTitle } from '@/components/ui/GradientTitle';

export function RecentProjectsSection({ data }: { data: ServiceContent }) {
  if (!data.projects || data.projects.length === 0) return null;
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <SectionLabel label="Our Portfolio" className="justify-center" />
          <h2 className="text-3xl md:text-5xl font-bold">
            {renderGradientTitle(data.projects_h2)}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.projects.map((project, i) => {
              const matchedProject = projects.find(
                (p) => p.title.toLowerCase() === project.name.toLowerCase()
              );
              const imageSrc = matchedProject?.image || "";

              const href = matchedProject?.caseStudySlug
                ? `/works/${matchedProject.caseStudySlug}`
                : project.link.includes("aceactivezone")
                ? "/works/ace-active-zone"
                : project.link.includes("shammysauto")
                ? "/works/shammys-auto"
                : project.link.includes("kerasoft")
                ? "/works/kerasoft"
                : project.link.includes("sherfertilitysolutions")
                ? "/works/sherfertility-solutions"
                : project.link.includes("torontohypertensionclinic")
                ? "/works/toronto-hypertension-clinic"
                : `/works/${project.link}`;

              const categoryTag = project.industry || matchedProject?.category || "Case Study";

              return (
                <Link key={i} href={href} className="block group h-full">
                  <div className="group relative rounded-xl overflow-hidden bg-black/55 backdrop-blur-[2px] border border-white/10 ring-1 ring-white/10 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 cursor-pointer flex flex-col h-full">
                    {/* Image area */}
                    <div className="relative h-44 bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
                      {imageSrc ? (
                        <Image
                          src={imageSrc}
                          alt={`${project.name} preview`}
                          fill
                          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/15 border border-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              className="text-primary"
                            >
                              <rect x="3" y="3" width="18" height="18" rx="2" />
                              <path d="M3 9h18" />
                              <path d="M9 21V9" />
                            </svg>
                          </div>
                        </div>
                      )}

                      {/* Category tag */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="text-[9px] font-bold tracking-wider uppercase bg-card-bg/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-primary border border-primary/20">
                          {categoryTag}
                        </span>
                      </div>
                    </div>

                    {/* Sub-card content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                        {project.name}
                      </h3>
                      <p className="text-zinc-400 text-xs mb-4 flex-grow leading-relaxed">
                        {project.overview}
                      </p>
                      <div className="mt-auto pt-2 flex items-center text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform duration-300">
                        <span>View Case Study</span>
                        <svg className="ml-1.5 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}


