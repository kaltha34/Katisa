import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'api.qrserver.com',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/services', destination: '/software', permanent: true },
      { source: '/build', destination: '/software', permanent: true },
      { source: '/grow', destination: '/marketing', permanent: true },
      { source: '/bundles', destination: '/pricing#bundles', permanent: false },
      { source: '/our-work', destination: '/', permanent: false },
      { source: '/work', destination: '/', permanent: false },
    ];
  },
};

export default nextConfig;
