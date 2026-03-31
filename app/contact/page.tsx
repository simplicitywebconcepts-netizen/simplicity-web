import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import PageTransition from "@/components/ui/PageTransition";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Simplicity. Send us a message about your project and we'll get back to you promptly.",
};

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="py-24 bg-network-pattern min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel label="Contact" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-4 leading-[1.1]">
              GET IN <span className="gradient-text">TOUCH.</span>
            </h1>
            <p className="text-muted mt-4 max-w-2xl text-lg">
              Have a project in mind? We&apos;d love to hear about it. Send us a
              message and we&apos;ll respond as soon as possible.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </PageTransition>
  );
}
