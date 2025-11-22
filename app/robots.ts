import { MetadataRoute } from 'next';

/**
 * Generate robots.txt for the website
 * This provides instructions to search engine crawlers
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://puppyhubusa.com/sitemap.xml',
  };
}
