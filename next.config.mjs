/** @type {import('next').NextConfig} */
const nextConfig = {
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
