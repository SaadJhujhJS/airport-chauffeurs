// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  modules: ['@nuxtjs/sitemap', 'nuxt-security'],
  site: {
    url: 'https://airportchauffeurs.com.au',
    name: 'Premium Airport Chauffeurs',
  },
  sitemap: {
    sitemapName: 'sitemap.xml',
    autoLastmod: true,
    exclude: ['/login', '/api/**'],
    sources: ['/api/__sitemap__/urls'],
    defaults: {
      changefreq: 'monthly',
      priority: 0.7,
    },
    urls: [
      { loc: '/', changefreq: 'weekly', priority: 1.0 },
      { loc: '/services', changefreq: 'weekly', priority: 0.9 },
      { loc: '/fleet', changefreq: 'monthly', priority: 0.8 },
      { loc: '/booking', changefreq: 'weekly', priority: 0.9 },
      { loc: '/about-us', changefreq: 'monthly', priority: 0.6 },
      { loc: '/contact-us', changefreq: 'monthly', priority: 0.6 },
      { loc: '/blogs', changefreq: 'weekly', priority: 0.8 },
      { loc: '/locations', changefreq: 'weekly', priority: 0.8 },
      { loc: '/privacy-policy', changefreq: 'yearly', priority: 0.3 },
      { loc: '/terms-of-service', changefreq: 'yearly', priority: 0.3 },
    ],
    xsl: false,
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  routeRules: {
    '/images/**': {
      headers: { 'cache-control': 'public, max-age=31536000, immutable' },
    },
    '/fonts/**': {
      headers: { 'cache-control': 'public, max-age=31536000, immutable' },
    },
  },
  css: [
    '~/assets/css/main.css',
    '~/assets/css/global.css',
    '~/assets/css/fonts.css',
  ],
  typescript: {
    typeCheck: true,
    strict: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    SMTP_EMAIL: process.env.SMTP_EMAIL,
    SMTP_APP_PASSWORD: process.env.SMTP_APP_PASSWORD,
    public: {
      SITE_URL: process.env.NUXT_PUBLIC_BASE_URL,
      GOOGLE_MAPS_API_KEY: process.env.NUXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      GOOGLE_ANALYTICS_ID: process.env.NUXT_PUBLIC_GOOGLE_ANALYTICS_ID,
      GOOGLE_ADS_ID: process.env.NUXT_PUBLIC_GOOGLE_ADS_ID,
    },
  },
  app: {
    head: {
      titleTemplate: '%s',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, viewport-fit=cover',
        },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#2F3B35' },
        { name: 'msapplication-TileColor', content: '#2F3B35' },
        { name: 'application-name', content: 'Premium Airport Chauffeurs' },
        {
          name: 'apple-mobile-web-app-title',
          content: 'Premium Airport Chauffeurs',
        },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'black-translucent',
        },
        { name: 'author', content: 'Premium Airport Chauffeurs' },
        { name: 'publisher', content: 'Premium Airport Chauffeurs' },
        {
          name: 'robots',
          content:
            'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        },
        { property: 'og:site_name', content: 'Premium Airport Chauffeurs' },
        { property: 'og:locale', content: 'en_AU' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        // Google site verification (from env var)
        ...(process.env.NUXT_PUBLIC_GOOGLE_SITE_VERIFICATION
          ? [
              {
                name: 'google-site-verification',
                content: process.env.NUXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
              },
            ]
          : []),
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://www.googletagmanager.com',
          crossorigin: '',
        },
        {
          rel: 'preconnect',
          href: 'https://www.google-analytics.com',
          crossorigin: '',
        },
        {
          rel: 'preconnect',
          href: 'https://maps.googleapis.com',
          crossorigin: '',
        },
        {
          rel: 'preconnect',
          href: 'https://maps.gstatic.com',
          crossorigin: '',
        },
        { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
        { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
        { rel: 'dns-prefetch', href: 'https://maps.googleapis.com' },
        { rel: 'dns-prefetch', href: 'https://maps.gstatic.com' },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicons/android-icon-36x36.png',
          sizes: '36x36',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicons/android-icon-48x48.png',
          sizes: '48x48',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicons/android-icon-57x57.png',
          sizes: '57x57',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicons/android-icon-72x72.png',
          sizes: '72x72',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicons/android-icon-96x96.png',
          sizes: '96x96',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicons/android-icon-144x144.png',
          sizes: '144x144',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicons/android-icon-192x192.png',
          sizes: '192x192',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicons/apple-icon-57x57.png',
          sizes: '57x57',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicons/apple-icon-60x60.png',
          sizes: '60x60',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicons/apple-icon-72x72.png',
          sizes: '72x72',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicons/apple-icon-76x76.png',
          sizes: '76x76',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicons/apple-icon-114x114.png',
          sizes: '114x114',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicons/apple-icon-120x120.png',
          sizes: '120x120',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicons/apple-icon-144x144.png',
          sizes: '144x144',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicons/apple-icon-152x152.png',
          sizes: '152x152',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicons/apple-icon-180x180.png',
          sizes: '180x180',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicons/apple-icon-192x192.png',
          sizes: '192x192',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicons/favicon-16x16.png',
          sizes: '16x16',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicons/favicon-32x32.png',
          sizes: '32x32',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicons/favicon-96x96.png',
          sizes: '96x96',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicons/ms-icon-70x70.png',
          sizes: '70x70',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicons/ms-icon-144x144.png',
          sizes: '144x144',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicons/ms-icon-150x150.png',
          sizes: '150x150',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicons/ms-icon-310x310.png',
          sizes: '310x310',
        },
        { rel: 'manifest', href: '/favicons/site.webmanifest' },
        {
          rel: 'preload',
          href: '/fonts/sarpanch/Sarpanch-SemiBold.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous',
          fetchpriority: 'high',
        },
        {
          rel: 'preload',
          href: '/fonts/sarpanch/Sarpanch-Bold.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous',
          fetchpriority: 'high',
        },
      ],
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
  nitro: {
    experimental: {
      wasm: true,
    },
    storage: {
      redis: {
        driver: 'redis',
        // Add Redis configuration for production
        // host: process.env.REDIS_HOST,
        // port: process.env.REDIS_PORT,
        // password: process.env.REDIS_PASSWORD,
      },
    },
  },
  security: {
    headers: {
      crossOriginEmbedderPolicy:
        process.env.NODE_ENV === 'development' ? 'unsafe-none' : 'require-corp',
      permissionsPolicy: {
        geolocation: ["'self'"],
      },
      contentSecurityPolicy: {
        'base-uri': ["'self'"],
        'font-src': ["'self'", 'https:', 'data:'],
        'form-action': ["'self'"],
        'frame-ancestors': ["'none'"],
        'img-src': [
          "'self'",
          'data:',
          'https:',
          'https://maps.gstatic.com',
          'https://maps.googleapis.com',
        ],
        'object-src': ["'none'"],
        'script-src-attr': ["'none'"],
        'style-src': ["'self'", 'https:', "'unsafe-inline'"],
        'script-src': [
          "'self'",
          "'unsafe-inline'",
          "'unsafe-eval'",
          'https://maps.googleapis.com',
          'https://maps.gstatic.com',
          'https://www.googletagmanager.com',
        ],
        'upgrade-insecure-requests': true,
      },
    },
  },
});
