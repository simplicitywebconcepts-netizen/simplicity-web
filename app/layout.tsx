import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ScrollProvider } from "@/components/canvas/ScrollProvider";
import { CrystalCanvas } from "@/components/canvas/CrystalCanvas";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Toronto Web Development & SEO Services | Simplicity Web Inc",
    template: "%s | Simplicity Web Inc",
  },
  description:
    "Toronto web development company specializing in WordPress development, SEO services, custom web applications, and mobile app development. Trusted by startups and growing businesses.",
  keywords: [
    "WordPress development Toronto",
    "web development company Toronto",
    "SEO services Toronto",
    "custom web development",
    "mobile app development",
    "web design Toronto",
    "digital marketing Toronto",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        {/* LocalBusiness Schema */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Simplicity Web Inc",
              image: "https://simplicityweb.ca/logo.svg",
              description:
                "Toronto web development company specializing in WordPress development, SEO services, custom web applications, and mobile app development.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Toronto",
                addressRegion: "ON",
                addressCountry: "CA",
              },
              telephone: "+1-905-429-9506",
              email: "info@simplicityweb.ca",
              url: "https://simplicityweb.ca",
              sameAs: [
                "https://facebook.com/simplicityweb",
                "https://instagram.com/simplicityweb",
              ],
            }),
          }}
        />

        {/* Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Simplicity Web Inc",
              url: "https://simplicityweb.ca",
              logo: "https://simplicityweb.ca/logo.svg",
              description:
                "Toronto-based web development company offering WordPress development, SEO services, custom web applications, and mobile app development.",
              service: [
                {
                  "@type": "Service",
                  name: "WordPress Development",
                  description:
                    "Custom WordPress websites with fast loading times and mobile-first performance.",
                },
                {
                  "@type": "Service",
                  name: "SEO Services",
                  description:
                    "Technical optimization, keyword strategy, and local SEO for Toronto and Canadian markets.",
                },
                {
                  "@type": "Service",
                  name: "Custom Web Development",
                  description:
                    "Tailored web applications and API integrations built for performance and conversions.",
                },
                {
                  "@type": "Service",
                  name: "Mobile App Development",
                  description:
                    "Cross-platform mobile apps designed for engagement and retention.",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ScrollProvider>
          <CrystalCanvas />
          <Navbar />
          <div className="relative z-10 flex-grow">
            {children}
          </div>
          <div className="relative z-10">
            <Footer />
          </div>
        </ScrollProvider>
      </body>
    </html>
  );
}
