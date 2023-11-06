/** @type {import('next').NextConfig} */
const nextConfig = {
  // Other configuration options here
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ["postimg.cc", "i.ibb.co", "https://www.DeFiLogic.com"],
  },
  exportPathMap: async function (
    defaultMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": {
        page: "/",
      },
    };
  },
  // Suppress the default locale warning
  suppressDefaultLocaleWarning: true,
};

module.exports = nextConfig;
