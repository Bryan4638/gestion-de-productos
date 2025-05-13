import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    path: '', // Elimina el prefijo /_next/image
    loader: 'imgix', // o 'cloudinary', 'akamai', etc.
    domains: ['picsum.photos'],
  }
};

export default nextConfig;
