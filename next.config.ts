import type { NextConfig } from "next";

// Allow Google Fonts to be fetched in environments with TLS certificate issues (e.g. corporate proxies)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
