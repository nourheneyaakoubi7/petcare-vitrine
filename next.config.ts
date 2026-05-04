import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Nécessaire pour l'export statique sur GitHub Pages
  basePath: '/petcare-vitrine', // Doit correspondre exactement au nom de ton dépôt
  images: {
    unoptimized: true, // Obligatoire pour GitHub Pages
  },
};

export default nextConfig;