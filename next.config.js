/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    swcMinify: true,
    images: {
        unoptimized: true,
        domains: ['theme.dsngrid.com'],
        formats: ['image/webp']
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },
    
    // i18n: {
    //     locales: ["en"],
    //     defaultLocale: "en",
    // },
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true,
    }

}

module.exports = nextConfig
