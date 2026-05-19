/**
 * Blog post URL slugs for sitemap generation.
 */
export const blogSlugs = [
  'how-much-does-airport-chauffeur-cost-australia',
  'chauffeur-vs-uber-business-travel',
  'best-airport-transfers-sydney',
  'melbourne-winery-tour-chauffeur-guide',
] as const;

export type BlogSlug = (typeof blogSlugs)[number];
