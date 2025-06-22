/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'v2.exercisedb.io',

      },
      {
        hostname: 'tailwindui.com'
      }
    ],
    // domains: []
  },
};

export default nextConfig;
