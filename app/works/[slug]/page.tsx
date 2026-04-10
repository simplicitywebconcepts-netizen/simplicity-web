import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyDetail from "@/components/projects/CaseStudyDetail";
import PageTransition from "@/components/ui/PageTransition";
import { caseStudies, getCaseStudyBySlug } from "@/lib/case-studies";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: "Case Study",
    };
  }

  return {
    title: `${caseStudy.title} Case Study | WordPress Development & SEO`,
    description: `${caseStudy.title} is a healthcare case study showing how WordPress development and SEO optimization improved clarity, performance, and trust for ${caseStudy.client}.`,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <PageTransition>
      <CaseStudyDetail caseStudy={caseStudy} />
    </PageTransition>
  );
}