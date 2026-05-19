import { useHead, useRequestURL, useRuntimeConfig } from '#imports';

type RobotsDirective =
  | 'index, follow'
  | 'noindex, follow'
  | 'index, nofollow'
  | 'noindex, nofollow';

export interface PageSeoOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  ogType?: 'website' | 'article' | 'profile';
  robots?: RobotsDirective;
  keywords?: string;
  locale?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  twitterSite?: string;
  twitterCreator?: string;
}

const SITE_NAME = 'Premium Airport Chauffeurs';
const DEFAULT_LOCALE = 'en_AU';
const DEFAULT_IMAGE = '/images/hero-image.webp';

export const usePageSeo = (options: PageSeoOptions) => {
  const config = useRuntimeConfig();
  const fallbackUrl =
    (config.public.SITE_URL as string | undefined) ||
    (import.meta.client
      ? useRequestURL().origin
      : 'https://airportchauffeurs.com.au');

  const baseUrl = String(fallbackUrl).replace(/\/$/, '');
  const path = options.path.startsWith('/') ? options.path : `/${options.path}`;
  const canonical = path === '/' ? baseUrl : `${baseUrl}${path}`;
  const image = options.image || DEFAULT_IMAGE;
  const absoluteImage = image.startsWith('http') ? image : `${baseUrl}${image}`;
  const robots = options.robots || 'index, follow';
  const ogType = options.ogType || 'website';
  const locale = options.locale || DEFAULT_LOCALE;
  const twitterCard = options.twitterCard || 'summary_large_image';
  const fullTitle = options.title.includes(SITE_NAME)
    ? options.title
    : `${options.title}`;

  const meta: Array<Record<string, string>> = [
    { name: 'description', content: options.description },
    { name: 'robots', content: robots },
    { name: 'googlebot', content: robots },

    { property: 'og:type', content: ogType },
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:locale', content: locale },
    { property: 'og:url', content: canonical },
    { property: 'og:title', content: fullTitle },
    { property: 'og:description', content: options.description },
    { property: 'og:image', content: absoluteImage },
    { property: 'og:image:secure_url', content: absoluteImage },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: options.imageAlt || fullTitle },

    { name: 'twitter:card', content: twitterCard },
    { name: 'twitter:title', content: fullTitle },
    { name: 'twitter:description', content: options.description },
    { name: 'twitter:image', content: absoluteImage },
    { name: 'twitter:image:alt', content: options.imageAlt || fullTitle },
  ];

  if (options.twitterSite) {
    meta.push({ name: 'twitter:site', content: options.twitterSite });
  }
  if (options.twitterCreator) {
    meta.push({ name: 'twitter:creator', content: options.twitterCreator });
  }
  if (options.keywords) {
    meta.push({ name: 'keywords', content: options.keywords });
  }

  useHead({
    title: fullTitle,
    meta,
    link: [{ rel: 'canonical', href: canonical }],
  });

  return { canonical, absoluteImage, fullTitle };
};
