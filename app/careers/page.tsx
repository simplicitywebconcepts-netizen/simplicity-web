import { Metadata } from "next";
import CareersHero from "@/components/careers/CareersHero";
import PerksAndValues from "@/components/careers/PerksAndValues";
import OpenPositions from "@/components/careers/OpenPositions";
import ApplicationCta from "@/components/careers/ApplicationCta";

export const metadata: Metadata = {
  title: "Careers | SIMPLICITY WEB INC",
  description: "Join the SIMPLICITY WEB INC team. Explore open positions and build the future of web innovation with us.",
  keywords: ["careers", "jobs", "hiring", "web development jobs", "tech agency jobs"],
};

export default function CareersPage() {
  return (
    <main className="flex flex-col w-full overflow-hidden">
      <CareersHero />
      <PerksAndValues />
      <OpenPositions />
      <ApplicationCta />
    </main>
  );
}
