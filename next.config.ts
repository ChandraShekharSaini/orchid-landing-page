import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "ik.imagekit.io"
    },
    {
      protocol: "https",
      hostname: "tailark.com"
    }
    ]
  },
};

export default nextConfig;
