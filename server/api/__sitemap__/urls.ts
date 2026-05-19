import { blogSlugs } from '../../data/blog-slugs';
import { locationCitySlugs } from '../../data/location-cities';

const SERVICE_SLUGS = [
  'airport-transfers',
  'winery-tours',
  'festival-events',
  'corporate-events',
  'weddings',
  'cruise-transfers',
  'hotel-transfers',
  'formal-events',
  'luxury-tours',
  'vip-transport',
  'event-transfers',
] as const;

export default defineSitemapEventHandler(() => {
  const now = new Date().toISOString();

  const serviceUrls = SERVICE_SLUGS.map(slug => ({
    loc: `/services/${slug}`,
    lastmod: now,
    changefreq: 'monthly' as const,
    priority: 0.7 as const,
  }));

  const blogIndex = {
    loc: '/blogs',
    lastmod: now,
    changefreq: 'weekly' as const,
    priority: 0.8 as const,
  };

  const blogPosts = blogSlugs.map(slug => ({
    loc: `/blogs/${slug}`,
    lastmod: now,
    changefreq: 'monthly' as const,
    priority: 0.6 as const,
  }));

  const locationsIndex = {
    loc: '/locations',
    lastmod: now,
    changefreq: 'weekly' as const,
    priority: 0.8 as const,
  };

  const locationPages = locationCitySlugs.map(city => ({
    loc: `/locations/${city}`,
    lastmod: now,
    changefreq: 'monthly' as const,
    priority: 0.7 as const,
  }));

  return [
    blogIndex,
    locationsIndex,
    ...blogPosts,
    ...locationPages,
    ...serviceUrls,
  ];
});
