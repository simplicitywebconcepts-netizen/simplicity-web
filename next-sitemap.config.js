/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://simplicityweb.ca",
    generateRobotsTxt: true,
    changefreq: "weekly",
    priority: 0.7,

    // Exclude non-page routes from sitemap
    exclude: ["/api/*", "/manifest.json"],

    // Custom robots.txt policies
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/"],
            },
        ],
    },

    // Custom priority & changefreq per page
    transform: async (config, path) => {
        // Homepage — highest priority
        if (path === "/") {
            return {
                loc: path,
                changefreq: "weekly",
                priority: 1.0
            };
        }

        // Main pages — high priority
        if (["/services", "/about", "/works", "/contact"].includes(path)) {
            return {
                loc: path,
                changefreq: "weekly",
                priority: 0.8
            };
        }

        // Case study pages — medium priority
        if (path.startsWith("/works/")) {
            return {
                loc: path,
                changefreq: "monthly",
                priority: 0.6
            };
        }

        // Secondary pages (careers, tech-stack) — lower priority
        return {
            loc: path,
            changefreq: "monthly",
            priority: 0.5,
        };
    },
};
