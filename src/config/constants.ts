/**
 * Site-wide configuration constants
 * Centralized location for URLs, metadata, and other shared values
 */

/**
 * External URLs and social links
 */
export const EXTERNAL_LINKS = {
  formURL: "https://docs.google.com/forms/d/e/1FAIpQLScyVWKDifYxaVWOhdW-SPEXXDVEjBmVezv7W668lizvRCQuaQ/viewform?usp=header",
  discord: "https://discord.gg/DA8BPA3VsN",
  youtube: "https://www.youtube.com/@arc-arcup",
  personalSite: "https://www.xbyali.page",
  github: "https://github.com/arcup",
} as const;

/**
 * License URLs for documentation
 */
export const LICENSES = {
  hardware: "https://ohwr.org/cern_ohl_s_v2.txt",
  documentation: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  software: "https://www.gnu.org/licenses/agpl-3.0.en.html",
} as const;

/**
 * Site metadata defaults
 */
export const SITE_META = {
  title: "arc^ - Open Plasma Research for Ecological Repair",
  description: "arc^ is an open research framework building plasma technology for ecological repair. We work openly, share everything, and build technology that serves life over profit.",
  author: "ali",
  siteName: "arc^ by ali",
  locale: "en_US",
  themeColor: "#0a9396",
} as const;

/**
 * SEO keywords
 */
export const SEO_KEYWORDS = [
  "plasma research",
  "open science",
  "regenerative technology",
  "plasma activated water",
  "ecological restoration",
  "RE:TECH",
  "community research",
  "open hardware",
  "CERN-OHL",
  "ecological repair",
] as const;

/**
 * Social media handles (if applicable)
 */
export const SOCIAL_HANDLES = {
  twitter: undefined, // Not currently used
  mastodon: undefined, // Not currently used
} as const;

/**
 * Navigation structure
 * Items with dropdown property will show sub-navigation on hover
 */
export const NAV_ITEMS = [
  { key: "home", label: "home", href: "/" },
  { key: "projects", label: "projects", href: "/projects" },
  { 
    key: "how", 
    label: "how", 
    href: "/how",
    // Dropdown for How - showing sub-pages only
    dropdown: [
      { key: "how-safety", label: "Safety", href: "/how/safety" },
      { key: "how-licensing", label: "Licensing", href: "/how/licensing" },
    ]
  },
  { 
    key: "about", 
    label: "about", 
    href: "/about",
    // Dropdown for About - showing sub-pages only
    dropdown: [
      { key: "about-founder", label: "Meet Ali", href: "/about/founder" },
    ]
  },
  { key: "join", label: "join", href: "/join" },
] as const;

/**
 * Project status types
 */
export const PROJECT_STATUS = {
  EARLY_IDEA: 'early-idea',
  ACTIVE: 'active',
  PAUSED: 'paused',
  COMPLETED: 'completed',
} as const;

/**
 * Contact email (if public)
 */
export const CONTACT_EMAIL = undefined; // Set when available