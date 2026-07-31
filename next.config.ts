import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep oracledb out of the bundler (native/Thin driver).
  serverExternalPackages: ["oracledb"],
};

export default nextConfig;
