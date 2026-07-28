import type { NextConfig } from 'next'

/**
 * Dokan — multi-tenant QSR SaaS for Gulf cafés & restaurants.
 * SSR-enabled for Supabase Auth, middleware, API routes, and Server Actions.
 */
const nextConfig: NextConfig = {
  // Allow the E2B/Blink preview domains to talk to the dev server (Next 16).
  allowedDevOrigins: [
    '*.e2b.dev',
    '*.e2b.app',
    '*.preview-blink.com',
    '*.sites.blink.new',
    '*.blink.new',
  ],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
    ],
  },
}

export default nextConfig
