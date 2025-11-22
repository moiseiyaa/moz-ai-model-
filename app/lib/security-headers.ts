/**
 * Security headers configuration
 * These headers help protect the application from various security vulnerabilities
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Content Security Policy
 * Restricts the sources from which resources can be loaded
 */
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://vercel.live;
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: https://*.puppyhubusa.com;
  font-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  block-all-mixed-content;
  upgrade-insecure-requests;
`;

/**
 * Security headers to be applied to all responses
 */
export const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
];

/**
 * Apply security headers to responses
 * This function is used in the middleware.ts file
 */
export function applySecurityHeaders(request: NextRequest): NextResponse {
  const response = NextResponse.next();

  // Apply all security headers
  securityHeaders.forEach(({ key, value }) => {
    response.headers.set(key, value);
  });

  return response;
}
