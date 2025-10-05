/**
 * SEO utility functions for consistent metadata generation
 */

import { SITE_META } from '../config/constants';
import { buildCanonicalUrl } from './paths';

export interface SEOData {
  title?: string;
  description?: string;
  canonical?: string;
  robots?: string;
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
    image?: string;
    type?: string;
  };
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
    image?: string;
  };
}

export interface SEOOptions {
  title?: string;
  description?: string;
  path?: string;
  type?: 'website' | 'article';
  image?: string;
  noIndex?: boolean;
  siteUrl?: string | URL;
}

/**
 * Builds comprehensive SEO metadata
 * 
 * @param options - SEO configuration options
 * @returns Complete SEO data object for use in BaseLayout
 * 
 * @example
 * const seo = buildSEO({
 *   title: 'Projects',
 *   description: 'Active research projects',
 *   path: '/projects',
 *   siteUrl: Astro.site
 * });
 */
export function buildSEO(options: SEOOptions): SEOData {
  const {
    title,
    description,
    path = '/',
    type = 'website',
    image,
    noIndex = false,
    siteUrl,
  } = options;

  // Build full title with site name
  const fullTitle = title 
    ? `${title} - ${SITE_META.siteName}`
    : SITE_META.title;

  // Use provided description or fall back to default
  const finalDescription = description || SITE_META.description;

  // Build canonical URL if site URL is available
  const canonical = buildCanonicalUrl(path, siteUrl);

  // Default image path (favicon)
  const defaultImage = `${import.meta.env.BASE_URL}favicon.svg`;
  const finalImage = image || defaultImage;

  return {
    title: fullTitle,
    description: finalDescription,
    canonical,
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    openGraph: {
      title: title || SITE_META.title,
      description: finalDescription,
      url: canonical,
      image: finalImage,
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: title || SITE_META.title,
      description: finalDescription,
      image: finalImage,
    },
  };
}

/**
 * Generates JSON-LD structured data for better SEO
 * 
 * @param type - The schema.org type
 * @param data - Additional structured data
 * @returns JSON-LD script content
 */
export function buildJSONLD(type: 'Organization' | 'WebSite' | 'Article', data: Record<string, any> = {}) {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
  };

  if (type === 'Organization') {
    return {
      ...baseData,
      name: SITE_META.siteName,
      description: SITE_META.description,
      ...data,
    };
  }

  if (type === 'WebSite') {
    return {
      ...baseData,
      name: SITE_META.siteName,
      description: SITE_META.description,
      ...data,
    };
  }

  return {
    ...baseData,
    ...data,
  };
}