/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.tmdb.org",
      },
    ],
  },
};

module.exports = nextConfig;
