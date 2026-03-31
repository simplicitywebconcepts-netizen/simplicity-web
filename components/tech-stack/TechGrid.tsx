"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerContainerFast, fadeInUp, scaleIn } from "@/lib/animations";
import { techStack } from "@/lib/data";
import AnimatedSection from "@/components/ui/AnimatedSection";

// Tech icon SVGs — simplified representations
const techIcons: Record<string, JSX.Element> = {
  aws: (
    <div className="flex flex-col items-center">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#FF9900]">
        <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576a.39.39 0 01.064.208c0 .096-.064.192-.192.288l-.640.432a.478.478 0 01-.256.08c-.1 0-.192-.048-.288-.136a2.96 2.96 0 01-.32-.416 6.17 6.17 0 01-.272-.512c-.688.816-1.552 1.224-2.592 1.224-.736 0-1.328-.208-1.76-.632-.432-.416-.656-.976-.656-1.68 0-.736.264-1.344.8-1.808.528-.464 1.232-.696 2.112-.696.288 0 .584.024.896.064.312.04.632.104.968.176v-.64c0-.664-.14-1.128-.416-1.4-.28-.272-.752-.408-1.424-.408-.304 0-.616.04-.936.112-.32.08-.632.176-.936.296-.14.064-.24.096-.304.112a.536.536 0 01-.112.016c-.16 0-.24-.112-.24-.344v-.504c0-.176.016-.312.06-.392a.638.638 0 01.24-.2c.304-.16.672-.288 1.104-.392.432-.112.888-.16 1.368-.16.984 0 1.704.224 2.16.672.448.448.68 1.128.68 2.04v2.688h.016z" fill="currentColor" />
        <path d="M13.32 17.656c-1.576.904-3.256 1.36-5.044 1.36-2.384 0-4.528-.696-6.148-1.856-.128-.096-.016-.224.14-.152 1.752.8 3.916 1.28 6.152 1.28 1.508 0 3.168-.248 4.696-.76.228-.088.42.12.204.128z" fill="currentColor" />
      </svg>
      <span className="text-[10px] font-medium mt-1">AWS</span>
    </div>
  ),
  azure: (
    <div className="flex flex-col items-center">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#0089D6]">
        <path d="M13.05 4.24l-4.26 4.07l-4.95 8.64h3.95l.01-.01L13.05 4.24zM14.47 5.56L12.2 12.47l4.25 5.04c.11.13-.02.33-.18.28L7.84 17.1l6.63-11.54z" fill="currentColor" />
      </svg>
      <span className="text-[10px] font-medium mt-1">Azure</span>
    </div>
  ),
  gcp: (
    <div className="flex flex-col items-center">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#4285F4]">
        <path d="M12 2L2 7l10 5 10-5-10-5z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 17l10 5 10-5" fill="none" stroke="#EA4335" strokeWidth="1.5" />
        <path d="M2 12l10 5 10-5" fill="none" stroke="#FBBC04" strokeWidth="1.5" />
      </svg>
      <span className="text-[10px] font-medium mt-1">GCP</span>
    </div>
  ),
  digitalocean: (
    <div className="flex flex-col items-center">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#0080FF]">
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
      </svg>
      <span className="text-[10px] font-medium mt-1">DigitalOcean</span>
    </div>
  ),
  react: (
    <div className="flex flex-col items-center">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#61DAFB]">
        <circle cx="12" cy="12" r="2.5" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(120 12 12)" />
      </svg>
      <span className="text-[10px] font-medium mt-1">React</span>
    </div>
  ),
  nextjs: (
    <div className="flex flex-col items-center">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 01-.724.063C7.302.397 4.3 2.03 2.272 4.623 1.018 6.217.386 7.937.098 9.92c-.105.723-.105 1.44 0 2.163.38 2.6 1.706 4.92 3.765 6.567 2.058 1.647 4.677 2.53 7.265 2.53h.163c4.637-.075 8.813-3.27 10.16-7.766.284-.95.44-1.93.47-2.89v-.156c-.017-.466-.065-.9-.14-1.31-.404-2.18-1.55-4.15-3.27-5.61A11.65 11.65 0 0011.572 0zm.013 2.285c.23-.001.458.015.685.048A9.414 9.414 0 0119.56 7.05l-7.395 10.06V8.43l4.175-.002V6.52H7.66v1.906h4.16l.001 10.785L7.4 12.39A9.335 9.335 0 016.46 5.16a9.414 9.414 0 015.125-2.876z" />
      </svg>
      <span className="text-[10px] font-medium mt-1">Next.js</span>
    </div>
  ),
  nodejs: (
    <div className="flex flex-col items-center">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#339933]">
        <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7v10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 9.5l5 3 5-3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <span className="text-[10px] font-medium mt-1">Node.js</span>
    </div>
  ),
  typescript: (
    <div className="flex flex-col items-center">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#3178C6]">
        <rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor" />
        <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">TS</text>
      </svg>
      <span className="text-[10px] font-medium mt-1">TypeScript</span>
    </div>
  ),
  python: (
    <div className="flex flex-col items-center">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#3776AB]">
        <path d="M12 2C8 2 8 4 8 4v3h4v1H5S2 7.5 2 12s2.5 5 2.5 5h2V14s-.2-2.5 2.5-2.5h4c2 0 2-2 2-2V4s0-2-4-2zm-1 1.5a1 1 0 110 2 1 1 0 010-2z" fill="currentColor" />
        <path d="M12 22c4 0 4-2 4-2v-3h-4v-1h7s3 .5 3-4-2.5-5-2.5-5h-2v3s.2 2.5-2.5 2.5h-4c-2 0-2 2-2 2v5s0 2 4 2zm1-1.5a1 1 0 110-2 1 1 0 010 2z" fill="#FFC107" />
      </svg>
      <span className="text-[10px] font-medium mt-1">Python</span>
    </div>
  ),
  go: (
    <div className="flex flex-col items-center">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#00ADD8]">
        <rect x="2" y="6" width="20" height="12" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <text x="12" y="15" textAnchor="middle" fill="currentColor" fontSize="8" fontWeight="bold">Go</text>
      </svg>
      <span className="text-[10px] font-medium mt-1">Go</span>
    </div>
  ),
  postgresql: (
    <div className="flex flex-col items-center">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#336791]">
        <path d="M12 2C8 2 5 5 5 9c0 4 3 7 7 9 4-2 7-5 7-9 0-4-3-7-7-7z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="9" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <span className="text-[10px] font-medium mt-1">PostgreSQL</span>
    </div>
  ),
  mongodb: (
    <div className="flex flex-col items-center">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#47A248]">
        <path d="M12 2v20" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 2c3 3 5 6 5 10s-2 7-5 10c-3-3-5-6-5-10s2-7 5-10z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <span className="text-[10px] font-medium mt-1">MongoDB</span>
    </div>
  ),
  redis: (
    <div className="flex flex-col items-center">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#DC382D]">
        <path d="M2 12l10 6 10-6" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 8l10 6 10-6" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 16l10 6 10-6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <span className="text-[10px] font-medium mt-1">Redis</span>
    </div>
  ),
  elasticsearch: (
    <div className="flex flex-col items-center">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#FEC514]">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 10h12M6 14h12" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <span className="text-[10px] font-medium mt-1">Elasticsearch</span>
    </div>
  ),
  docker: (
    <div className="flex flex-col items-center">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#2496ED]">
        <rect x="2" y="10" width="20" height="8" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="5" y="6" width="4" height="4" fill="none" stroke="currentColor" strokeWidth="1" />
        <rect x="10" y="6" width="4" height="4" fill="none" stroke="currentColor" strokeWidth="1" />
        <rect x="10" y="2" width="4" height="4" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
      <span className="text-[10px] font-medium mt-1">Docker</span>
    </div>
  ),
  kubernetes: (
    <div className="flex flex-col items-center">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#326CE5]">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" stroke="currentColor" strokeWidth="0.75" />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
      </svg>
      <span className="text-[10px] font-medium mt-1">Kubernetes</span>
    </div>
  ),
  jenkins: (
    <div className="flex flex-col items-center">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#D33833]">
        <circle cx="12" cy="10" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 14c1.5 2 4.5 2 6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="9" cy="8" r="1" fill="currentColor" />
        <circle cx="15" cy="8" r="1" fill="currentColor" />
        <path d="M12 17v4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <span className="text-[10px] font-medium mt-1">Jenkins</span>
    </div>
  ),
  terraform: (
    <div className="flex flex-col items-center">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#7B42BC]">
        <path d="M1 5l5 3v6l-5-3V5z" fill="currentColor" />
        <path d="M7 2l5 3v6l-5-3V2z" fill="currentColor" />
        <path d="M13 5l5 3v6l-5-3V5z" fill="currentColor" />
        <path d="M7 13l5 3v6l-5-3v-6z" fill="currentColor" />
      </svg>
      <span className="text-[10px] font-medium mt-1">Terraform</span>
    </div>
  ),
};

export default function TechGrid() {
  return (
    <div className="space-y-16">
      {techStack.map((category, catIndex) => (
        <AnimatedSection key={category.title} delay={catIndex * 0.1}>
          <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-muted mb-6 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-primary" />
            {category.title}
          </h3>

          <motion.div
            variants={staggerContainerFast}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {category.items.map((item) => (
              <motion.div
                key={item.name}
                variants={scaleIn}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 30px rgba(124, 58, 237, 0.1)",
                  borderColor: "rgba(124, 58, 237, 0.2)",
                }}
                className="flex items-center justify-center p-5 rounded-xl bg-white border border-border hover:border-primary/20 transition-all duration-300 cursor-default aspect-square"
              >
                {techIcons[item.icon] || (
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">
                        {item.name.charAt(0)}
                      </span>
                    </div>
                    <span className="text-[10px] font-medium mt-2">
                      {item.name}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
      ))}
    </div>
  );
}
