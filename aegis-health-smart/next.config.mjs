/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'v2.exercisedb.io',

      },
      {
        hostname: 'tailwindui.com'
      },
      {
        hostname: 'res.cloudinary.com'
      }
    ],
    // domains: []
  },
};

export default nextConfig;
