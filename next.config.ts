import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/_next/image/**',
      },
      {
        protocol: 'https',
        hostname: '*.traefik.me',
        port: '',
        pathname: '/_next/image/**',
      },
    ],
    // Opcional: si necesitas desactivar la optimización en desarrollo
    unoptimized: process.env.NODE_ENV === 'development',
  },
};

export default nextConfig;
