import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "github-readme-activity-graph.vercel.app",
        pathname: "/**"
      },
    ]
  }
};

export default nextConfig;
