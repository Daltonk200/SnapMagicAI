/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**', // Add this to allow all paths
      }
    ]
  },
  eslint: {
    // This allows production builds to complete even with ESLint errors
    ignoreDuringBuilds: true,
  },
  /* config options here */
};

module.exports = nextConfig;
