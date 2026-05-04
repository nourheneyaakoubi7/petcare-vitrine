import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', 
  basePath: '/petcare-tn', 
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;