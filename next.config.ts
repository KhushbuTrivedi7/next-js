import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // experimental: {
  //   ppr: 'incremental'
  // }
};

export default nextConfig;

module.exports = {
  experimental: {
    serverActions: true, // if using
    // Ensure Turbopack is NOT enabled
    turbo: false,
  },
};
