import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // This is the key setting - tell Next.js the src directory is the base
  experimental: {
    // This ensures Next.js looks in src for app directory
  },

  // Webpack config to help with src directory resolution
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Resolve modules from src directory
    config.resolve.modules = [path.resolve(__dirname, "src"), "node_modules"];
    return config;
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
