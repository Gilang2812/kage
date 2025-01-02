import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images:{
      remotePatterns:[{
        hostname:"flagcdn.com",
        protocol:"https",
      }]
    }
};

export default nextConfig;
