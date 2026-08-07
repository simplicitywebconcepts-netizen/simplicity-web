import { ServiceContent } from '@/types/service';
import Link from 'next/link';

export function RecentProjectsSection({ data }: { data: ServiceContent }) {
  if (!data.projects || data.projects.length === 0) return null;
  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">{data.projects_h2}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {data.projects.map((project, i) => (
            <div key={i} className="group relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800">
              <div className="aspect-video bg-zinc-800 flex items-center justify-center p-8 bg-gradient-to-br from-zinc-800 to-zinc-900">
                 <h3 className="text-3xl font-bold opacity-30 group-hover:scale-105 transition-transform">{project.name}</h3>
              </div>
              <div className="p-8">
                <span className="text-xs font-semibold tracking-wider uppercase text-zinc-500 mb-2 block">{project.industry}</span>
                <h3 className="text-2xl font-bold mb-4 text-white">{project.name}</h3>
                <p className="text-zinc-400 mb-6">{project.overview}</p>
                <Link 
                  href={
                    project.link.includes("aceactivezone") ? "/works/ace-active-zone" :
                    project.link.includes("shammysauto") ? "/works/shammys-auto" :
                    project.link.includes("kerasoft") ? "/works/kerasoft" :
                    project.link.includes("sherfertilitysolutions") ? "/works/sherfertility-solutions" :
                    project.link.includes("torontohypertensionclinic") ? "/works/toronto-hypertension-clinic" :
                    `/works/${project.link}`
                  } 
                  className="inline-flex items-center text-sm font-medium text-white hover:text-zinc-300 transition-colors"
                >
                  View Case Study
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
