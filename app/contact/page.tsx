import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import PageTransition from "@/components/ui/PageTransition";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Contact Us - Simplicity Web Inc",
  description:
    "Partner with a leading web development company. Contact us for custom WordPress development, web applications, and SEO services.",
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
