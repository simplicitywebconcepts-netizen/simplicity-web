import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    generateBuildId: async () => {
        return `build-${Date.now()}`;
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
            source: "/:path*",
            headers: [
                {
                    key: "Cache-Control",
                    value: "no-store, must-revalidate",
                },
            ],
        },
    ],
};

export default nextConfig;
