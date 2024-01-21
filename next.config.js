/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["skillicons.dev"],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
