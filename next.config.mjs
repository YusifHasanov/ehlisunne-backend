// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: [
            'res.cloudinary.com',
            'i.ytimg.com',
            'medrese.vercel.app',
            'hayalhanem.com',
            '52principlesforchurchleaders.com',
            'images.unsplash.com',
        ],
    },
    experimental: {
        optimizeCss: true,
        scrollRestoration: true,
    },
    async rewrites() {
        return [
            {
                source: '/ex-api/:path*',
                // destination: 'http://31.220.95.127:8083/api/:path*',
                //  destination: 'http://localhost:8083/api/:path*',
                 destination: `${process.env.NEXT_PUBLIC_BASE_URL}/:path*`,
            },
            {
                source: "/sitemap.xml",
                destination: "/api/sitemap",
            },
        ];
    },
};

export default nextConfig;