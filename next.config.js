/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "s2.coinmarketcap.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "assets.coingecko.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
