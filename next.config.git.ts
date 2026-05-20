import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/athletix-gym-site",
  images: { unoptimized: true },
};

export default nextConfig;
