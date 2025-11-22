'use client';

import Head from 'next/head';
import { usePathname } from 'next/navigation';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

/**
 * SEOHead component for managing SEO metadata
 * Provides consistent SEO structure across the site
 */
const SEOHead = ({
  title = 'PuppyHub USA - Find Your Perfect Puppy Companion',
  description = 'PuppyHub USA connects loving families with healthy, ethically bred puppies. Browse available puppies, learn about our breeds, and start your adoption journey today.',
  keywords = 'puppies, puppy adoption, dog adoption, ethical breeders, puppyhub usa, doodle puppies, labradoodle, goldendoodle',
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  canonicalUrl,
}: SEOHeadProps) => {
  const pathname = usePathname();
  const baseUrl = 'https://puppyhubusa.com';
  const fullUrl = canonicalUrl || `${baseUrl}${pathname}`;
  
  const fullTitle = title.includes('PuppyHub USA') ? title : `${title} | PuppyHub USA`;
  
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${baseUrl}${ogImage}`} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
};

export default SEOHead;
