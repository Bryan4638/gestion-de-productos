import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["picsum.photos"],
    // Opcional: si necesitas más dominios
    // domains: ['picsum.photos', 'otro-dominio.com'],
  },
};

export default nextConfig;
