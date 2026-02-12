/** @type {import('next').NextConfig} */
/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');

const nextConfig = {
  // Turbopack root config removed to fix module resolution
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

module.exports = nextConfig;
