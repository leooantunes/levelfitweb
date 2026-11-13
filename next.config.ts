import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // URLs antigas do site em GitHub Pages (docs/index.html#privacidade) continuam funcionando.
  async redirects() {
    return [{ source: '/privacy', destination: '/privacidade', permanent: true }];
  },
};

export default nextConfig;
