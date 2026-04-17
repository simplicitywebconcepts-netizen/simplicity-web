import type { Metadata } from "next";
import CareersHero from "@/components/careers/CareersHero";
import PerksAndValues from "@/components/careers/PerksAndValues";
import CultureAndProcess from "@/components/careers/CultureAndProcess";
import OpenPositions from "@/components/careers/OpenPositions";
import ApplicationCta from "@/components/careers/ApplicationCta";

export const metadata: Metadata = {
  title: "Careers | Simplicity Web Inc.",
  description:
    "Join Simplicity Web Inc. and explore open opportunities in web development, WordPress, and SEO.",
  keywords: ["careers", "jobs", "hiring", "web development jobs", "tech agency jobs"],
};

export default function CareersPage() {
  return (
    <main className="flex flex-col w-full overflow-hidden">
      <CareersHero />
      <PerksAndValues />
      <CultureAndProcess />
      <OpenPositions />
      <ApplicationCta />
    </main>
  );
}
