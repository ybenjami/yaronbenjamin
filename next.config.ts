import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Let the dev server answer requests that come through an ngrok tunnel
  // (Next 16 blocks cross-origin dev assets by default, which leaves the page
  // without JavaScript). Has no effect on production builds.
  allowedDevOrigins: ['*.ngrok-free.app', '*.ngrok.app', '*.ngrok.io'],
};

export default nextConfig;
