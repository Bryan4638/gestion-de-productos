import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    loader: 'default',
    domains: ['picsum.photos'],
    unoptimized: true // Desactiva la optimización de imágenes
  }
};

export default nextConfig;
