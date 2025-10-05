/**
 * Utility functions for path handling with base URL support
 */

/**
 * Prepends the base URL to a given path
 * Handles root paths and ensures proper trailing slashes
 * 
 * @param path - The path to prepend base URL to
 * @returns The full path with base URL
 * 
 * @example
 * withBase('/projects') // Returns '/arcup-v2/projects' in production
 * withBase('/') // Returns '/arcup-v2/' in production
 */
export function withBase(path: string): string {
  const normalizedBase = (import.meta.env.BASE_URL ?? "").replace(/\/$/, "");
  
  if (path === "/") {
    return normalizedBase ? `${normalizedBase}/` : "/";
  }
  
  return `${normalizedBase}${path}`;
}

/**
 * Gets the normalized base URL without trailing slash
 * 
 * @returns The base URL
 */
export function getBase(): string {
  return (import.meta.env.BASE_URL ?? "").replace(/\/$/, "");
}

/**
 * Checks if a URL is external
 * 
 * @param url - The URL to check
 * @returns True if the URL is external
 */
export function isExternalUrl(url: string): boolean {
  return url.startsWith('http://') || url.startsWith('https://') || url.startsWith('//');
}

/**
 * Builds a canonical URL for SEO
 * 
 * @param path - The path to build canonical URL for
 * @param siteUrl - The site's base URL
 * @returns The full canonical URL or undefined if siteUrl is not provided
 */
export function buildCanonicalUrl(path: string, siteUrl?: string | URL): string | undefined {
  if (!siteUrl) return undefined;
  
  const base = typeof siteUrl === 'string' ? siteUrl : siteUrl.toString();
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  return new URL(normalizedPath, base).toString();
}