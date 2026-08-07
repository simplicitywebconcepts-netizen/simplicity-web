import { TechIcon } from '@/components/home/TechCarousel';
import { ServiceContent } from '@/types/service';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';

function renderGradientTitle(title: string) {
  if (!title) return null;
  const words = title.trim().split(/\s+/);
  if (words.length <= 2) {
    return <span className="gradient-text">{title}</span>;
  }
  const splitIndex = Math.max(1, words.length - 2);
  const mainText = words.slice(0, splitIndex).join(' ');
  const gradientText = words.slice(splitIndex).join(' ');
  return (
    <>
      {mainText}{' '}
      <span className="gradient-text">{gradientText}</span>
    </>
  );
}

const TECH_ICON_KEYS = new Set([
  "wordpress",
  "react",
  "nextjs",
  "nodejs",
  "nestjs",
  "php",
  "laravel",
  "mysql",
  "postgresql",
  "mongodb",
  "redis",
  "flutter",
  "analytics",
  "gsc",
  "docker",
  "elementor",
  "gutenberg",
  "javascript",
  "typescript",
  "tailwind",
  "aws",
  "express",
  "hostinger",
  "vercel",
  "cpanel",
  "github",
]);

function RenderTechIcon({ name }: { name: string }) {
  const norm = name.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Mappings to TechIcon supported keys
  if (norm.includes("googleanalytics") || norm === "analytics") {
    return <TechIcon name="analytics" />;
  }
  if (norm.includes("googlesearchconsole") || norm === "gsc") {
    return <TechIcon name="gsc" />;
  }
  if (norm.includes("wordpress")) return <TechIcon name="wordpress" />;
  if (norm.includes("react")) return <TechIcon name="react" />;
  if (norm.includes("next")) return <TechIcon name="nextjs" />;
  if (norm.includes("node")) return <TechIcon name="nodejs" />;
  if (norm.includes("nest")) return <TechIcon name="nestjs" />;
  if (norm.includes("php")) return <TechIcon name="php" />;
  if (norm.includes("laravel")) return <TechIcon name="laravel" />;
  if (norm.includes("mysql")) return <TechIcon name="mysql" />;
  if (norm.includes("postgres")) return <TechIcon name="postgresql" />;
  if (norm.includes("mongo")) return <TechIcon name="mongodb" />;
  if (norm.includes("redis")) return <TechIcon name="redis" />;
  if (norm.includes("flutter")) return <TechIcon name="flutter" />;
  if (norm.includes("docker")) return <TechIcon name="docker" />;
  if (norm.includes("elementor")) return <TechIcon name="elementor" />;
  if (norm.includes("gutenberg")) return <TechIcon name="gutenberg" />;
  if (norm.includes("typescript")) return <TechIcon name="typescript" />;
  if (norm.includes("javascript")) return <TechIcon name="javascript" />;
  if (norm.includes("tailwind")) return <TechIcon name="tailwind" />;
  if (norm.includes("aws")) return <TechIcon name="aws" />;
  if (norm.includes("express")) return <TechIcon name="express" />;
  if (norm.includes("hostinger")) return <TechIcon name="hostinger" />;
  if (norm.includes("vercel")) return <TechIcon name="vercel" />;
  if (norm.includes("cpanel")) return <TechIcon name="cpanel" />;
  if (norm.includes("github") || norm.includes("git")) return <TechIcon name="github" />;

  if (TECH_ICON_KEYS.has(norm)) {
    return <TechIcon name={norm} />;
  }

  // Specific custom SVG cases
  if (norm.includes("woocommerce")) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M2.2 4h19.6l-1.8 12H4l-1.8-12zm2.4 2l1.2 8h12.4l1.2-8H4.6zM7 18a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm10 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
      </svg>
    );
  }
  if (norm.includes("shopify")) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.34 2.5a.6.6 0 00-.53.33l-1.74 3.7h-2.14l.75-2.58a.6.6 0 00-.58-.77H7.7a.6.6 0 00-.59.49L5.3 12.35h2.12l.62-2.7h2.2l-.76 3.42a.6.6 0 00.58.73h5.92a.6.6 0 00.57-.42l2.4-8.4a.6.6 0 00-.57-.75h-3.04z" />
      </svg>
    );
  }
  if (norm.includes("googletagmanager") || norm === "gtm" || norm.includes("tagmanager")) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.87 2.51a1.75 1.75 0 00-1.74 0L3.6 6.84a1.75 1.75 0 00-.87 1.52v8.28c0 .63.34 1.22.87 1.52l7.53 4.33c.54.31 1.2.31 1.74 0l7.53-4.33c.53-.3.87-.89.87-1.52V8.36c0-.63-.34-1.22-.87-1.52l-7.53-4.33zM12 4.24l6.1 3.51-6.1 3.51-6.1-3.51L12 4.24zm-7.27 5.8l6.1 3.52v7.03l-6.1-3.52V10.04zm8.44 10.55v-7.03l6.1-3.52v7.03l-6.1 3.52z"/>
      </svg>
    );
  }
  if (norm.includes("figma")) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 2h4v4H8V2zm0 6h4v4H8V8zm0 6h4v4a4 4 0 01-4-4v0zm8-12a4 4 0 010 8h-4V2h4zm0 6a4 4 0 010 8h-4V8h4z"/>
      </svg>
    );
  }
  if (norm.includes("photoshop") || norm.includes("illustrator") || norm.includes("adobe")) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-9 14H8v-8h2a2 2 0 012 2v4a2 2 0 01-2 2zm6 0h-2v-4h2v4zm0-6h-2V9h2v2z"/>
      </svg>
    );
  }
  if (norm.includes("canva")) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 4a6 6 0 110 12 6 6 0 010-12z"/>
      </svg>
    );
  }
  if (norm.includes("instagram")) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    );
  }
  if (norm.includes("tiktok")) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.57-1.34 1.56-1.38 2.56-.04 1.05.42 2.12 1.25 2.76.88.68 2.09.84 3.13.48 1.02-.34 1.83-1.22 2.05-2.27.06-.52.07-1.04.07-1.57V.02z"/>
      </svg>
    );
  }
  if (norm.includes("facebook")) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    );
  }
  if (norm.includes("linkedin")) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z"/>
      </svg>
    );
  }

  // Clean fallback SVG chart/code icon so every card has a premium logo
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export function TechSection({ data }: { data: ServiceContent }) {
  if (!data.tech || data.tech.length === 0) return null;
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <SectionLabel label="Technologies & Tools" className="justify-center" />
          <h2 className="text-3xl md:text-5xl font-bold">
            {renderGradientTitle(data.tech_h2)}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {data.tech.map(([name, role], i) => (
              <div
                key={i}
                className="p-6 bg-black/55 backdrop-blur-[2px] border border-white/10 ring-1 ring-white/10 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-black/75 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300 mb-3 flex-shrink-0">
                  <div className="w-6 h-6 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full [&>svg]:max-w-full [&>svg]:max-h-full">
                    <RenderTechIcon name={name} />
                  </div>
                </div>
                <h3 className="font-semibold text-white mb-1 group-hover:text-primary transition-colors duration-300">{name}</h3>
                <p className="text-xs text-zinc-400">{role}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}


