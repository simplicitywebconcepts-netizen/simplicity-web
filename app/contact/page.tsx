import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import ContactServices from "@/components/contact/ContactServices";
import ContactWhyUs from "@/components/contact/ContactWhyUs";
import ContactClosingCta from "@/components/contact/ContactClosingCta";
import PageTransition from "@/components/ui/PageTransition";

export const metadata: Metadata = {
  title: "Contact Simplicity Web | Web Design Company North America",
  description:
    "Contact Simplicity Web to discuss your web design, web development, branding, SEO, and digital marketing requirements.",
  keywords: [
    "Web Design Company North America",
    "Website Development Company",
    "Web Development Company",
    "Digital Marketing Agency",
  ],
  openGraph: {
    title: "Contact Simplicity Web | Web Design Company North America",
    description:
      "Contact Simplicity Web to discuss your web design, web development, branding, SEO, and digital marketing requirements.",
    url: "https://simplicityweb.ca/contact",
    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "Contact Simplicity Web",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Contact Simplicity Web | Web Design Company North America",
    description:
      "Contact Simplicity Web to discuss your web design, web development, branding, SEO, and digital marketing requirements.",
    images: ["/web-app-manifest-512x512.png"],
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <PageTransition>
      {/* Section 1: Hero & Contact Form */}
      <section className="py-20 md:py-28 bg-network-pattern relative flex items-center justify-center">
        <div className="max-w-6xl w-full mx-auto px-6">
          <ContactForm />
        </div>
      </section>

      {/* Section 2: "How Can We Help?" Services Grid */}
      <ContactServices />

      {/* Section 3: "Why Work With Simplicity Web?" Trust Points */}
      <ContactWhyUs />

      {/* Section 4: "Let's Talk" Closing CTA Banner */}
      <ContactClosingCta />
    </PageTransition>
  );
}
