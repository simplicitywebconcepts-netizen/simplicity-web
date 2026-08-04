import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import PageTransition from "@/components/ui/PageTransition";

export const metadata: Metadata = {
  title: "Contact Simplicity Web | Web Design Company Toronto",
  description:
    "Contact Simplicity Web to discuss your web design, web development, branding, SEO, and digital marketing requirements.",
  keywords: [
    "Web Design Company Toronto",
    "Website Development Company",
    "Web Development Company",
    "Digital Marketing Agency",
  ],
  openGraph: {
    title: "Contact Simplicity Web | Web Design Company Toronto",
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
    title: "Contact Simplicity Web | Web Design Company Toronto",
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
      <section className="py-24 bg-network-pattern min-h-screen flex items-center justify-center">
        <div className="max-w-6xl w-full mx-auto px-6">
          <ContactForm />
        </div>
      </section>
    </PageTransition>
  );
}
