import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { NotificationProvider } from "@/components/ui/NotificationProvider";
import { ScrollProvider } from "@/components/canvas/ScrollProvider";
import { contactInfo } from "@/lib/data";
import { ViewportBackground } from "@/components/canvas/ViewportBackground";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://simplicityweb.ca"),
    title: {
        default: "Web Design Company | Web Development & Digital Marketing Toronto",
        template: "%s | Simplicity Web Inc",
    },
    description:
        "Simplicity Web is a leading web design company offering custom web development, branding, SEO, digital marketing, and website solutions for businesses across Toronto.",
    keywords: [
        "Web Design Company",
        "Web Development Company",
        "Website Development Company",
        "Custom Website Development",
        "Professional Website Design",
        "Digital Marketing Agency",
    ],
    openGraph: {
        title: "Web Design Company | Web Development & Digital Marketing Toronto",
        description: "Simplicity Web is a leading web design company offering custom web development, branding, SEO, digital marketing, and website solutions for businesses across Toronto.",
        url: "https://simplicityweb.ca/",
        siteName: "Simplicity Web Inc",
        images: [
            {
                url: "/web-app-manifest-512x512.png",
                width: 512,
                height: 512,
                alt: "Simplicity Web Inc",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Web Design Company | Web Development & Digital Marketing Toronto",
        description: "Simplicity Web is a leading web design company offering custom web development, branding, SEO, digital marketing, and website solutions for businesses across Toronto.",
        images: ["/web-app-manifest-512x512.png"],
    },
    alternates: {
        canonical: "/",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: [
            {
                url: "/favicon.ico",
                sizes: "48x48",
                type: "image/x-icon",
            },
            {
                url: "/favicon.svg",
                type: "image/svg+xml",
            },
            {
                url: "/favicon-96x96.png",
                sizes: "96x96",
                type: "image/png",
            },
            {
                url: "/web-app-manifest-192x192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                url: "/web-app-manifest-512x512.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
        apple: "/apple-touch-icon.png",
    },
    manifest: "/manifest.json",
    appleWebApp: {
        capable: true,
        title: "Simplicity Web",
        statusBarStyle: "black-translucent"
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const websiteUrl = contactInfo.website.startsWith("http")
        ? contactInfo.website
        : `https://${contactInfo.website}`;
    const addressLocality = "Toronto";
    const addressRegion = "ON";

    return (
        <html
            lang="en"
            className={`${inter.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
            style={{ backgroundColor: "#050505" }}
        >
            <head>
                {/* Google Tag Manager */}
                <Script
                    id="gtm-script"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KKV3682L');`,
                    }}
                />
                {/* Google Analytics (gtag.js) */}
                <Script
                    strategy="afterInteractive"
                    src="https://www.googletagmanager.com/gtag/js?id=G-P2LZ7D89MN"
                />
                <Script
                    id="gtag-init"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P2LZ7D89MN');
            `,
                    }}
                />
                {/* LocalBusiness Schema */}
                <Script
                    id="local-business-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            name: "Simplicity Web Inc",
                            image: `${websiteUrl}/logo.svg`,
                            description:
                                "Toronto based digital agency delivering custom websites, mobile apps, branding, SEO and scalable business solutions for modern businesses",
                            address: {
                                "@type": "PostalAddress",
                                addressLocality,
                                addressRegion,
                                addressCountry: "CA",
                            },
                            telephone: contactInfo.phone,
                            email: contactInfo.email,
                            url: websiteUrl,
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
                            url: websiteUrl,
                            logo: `${websiteUrl}/logo.svg`,
                            description:
                                "Toronto based digital agency delivering custom websites, mobile apps, branding, SEO and scalable business solutions for modern businesses",
                            service: [
                                {
                                    "@type": "Service",
                                    name: "Web Development & App Development",
                                    description:
                                        "Build high-performance websites and applications designed for scalability and results. WordPress, custom web apps, mobile apps, and hosting.",
                                },
                                {
                                    "@type": "Service",
                                    name: "Design & Branding",
                                    description:
                                        "Create a strong, consistent identity that stands out across all platforms. UI/UX design, logo design, brand identity, and marketing materials.",
                                },
                                {
                                    "@type": "Service",
                                    name: "Social Media & Content",
                                    description:
                                        "Grow your brand and engage your audience across all major platforms. Social media management, content creation, and community engagement.",
                                },
                                {
                                    "@type": "Service",
                                    name: "SEO & Paid Advertising",
                                    description:
                                        "Increase visibility and attract high-quality traffic through search and targeted campaigns. SEO, Google Ads, Meta Ads, and keyword strategy.",
                                },
                                {
                                    "@type": "Service",
                                    name: "Conversion & Lead Generation",
                                    description:
                                        "Turn traffic into leads and leads into customers. Landing pages, funnel strategy, conversion optimization, and user journey optimization.",
                                },
                                {
                                    "@type": "Service",
                                    name: "Automation, CRM & Analytics",
                                    description:
                                        "Track, manage, and scale your business with smart systems. Analytics, CRM setup, automated follow-ups, and performance reporting.",
                                },
                            ],
                        }),
                    }}
                />
            </head>
            <body
                suppressHydrationWarning
                className="min-h-full flex flex-col bg-background text-foreground"
                style={{ backgroundColor: "#050505" }}
            >
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-KKV3682L"
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    />
                </noscript>
                <NotificationProvider>
                    <ScrollProvider>
                        <ViewportBackground />
                        <Navbar />
                        <div className="relative z-10 flex-grow">
                            {children}
                        </div>
                        <div className="relative z-10">
                            <Footer />
                        </div>
                    </ScrollProvider>
                </NotificationProvider>
            </body>
        </html>
    );
}
