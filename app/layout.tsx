import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
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
    default: "Simplicity | Web Innovation Studio",
    template: "%s | Simplicity",
  },
  description:
    "Simplicity is a premier technology company specializing in cloud infrastructure, software development, cybersecurity, and IoT solutions.",
  keywords: [
    "cloud solutions",
    "software development",
    "cybersecurity",
    "IoT",
    "web development",
    "technology company",
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
      <body className="min-h-full flex flex-col bg-[#f0f2fa]">
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
