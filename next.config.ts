import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: "/:path*",
                has: [
                    {
                        type: "host",
                        value: "www.simplicityweb.ca",
                    },
                ],
                destination: "https://simplicityweb.ca/:path*",
                permanent: true,
            },
        ];
    },
    headers: async () => [
        {
            source: "/_next/static/:path*",
            headers: [
                {
                    key: "Cache-Control",
                    value: "public, max-age=31536000, immutable",
                },
            ],
        },
        {
            source: "/favicon.ico",
            headers: [
                {
                    key: "Cache-Control",
                    value: "public, max-age=86400, stale-while-revalidate=604800",
                },
            ],
        },
        {
            source: "/favicon.svg",
            headers: [
                {
                    key: "Cache-Control",
                    value: "public, max-age=86400, stale-while-revalidate=604800",
                },
            ],
        },
        {
            source: "/apple-touch-icon.png",
            headers: [
                {
                    key: "Cache-Control",
                    value: "public, max-age=86400, stale-while-revalidate=604800",
                },
            ],
        },
        {
            source: "/web-app-manifest-192x192.png",
            headers: [
                {
                    key: "Cache-Control",
                    value: "public, max-age=86400, stale-while-revalidate=604800",
                },
            ],
        },
        {
            source: "/web-app-manifest-512x512.png",
            headers: [
                {
                    key: "Cache-Control",
                    value: "public, max-age=86400, stale-while-revalidate=604800",
                },
            ],
        },
    ],
};

export default nextConfig;
