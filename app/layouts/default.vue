<template>
  <div>
    <div class="relative">
      <div class="absolute top-0 left-0 w-full z-50">
        <AppNavbar />
      </div>
      <MobileStickyNavbar />
      <main>
        <slot />
      </main>
    </div>
    <ContactButton />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const baseUrl = String(
  config.public.SITE_URL || 'https://airportchauffeurs.com.au'
).replace(/\/$/, '');

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${baseUrl}/#organization`,
  name: 'Premium Airport Chauffeurs',
  alternateName: 'Airport Chauffeurs Australia',
  url: baseUrl,
  logo: {
    '@type': 'ImageObject',
    url: `${baseUrl}/images/logo-v2.png`,
    width: 512,
    height: 512,
  },
  image: `${baseUrl}/images/hero-image.webp`,
  description:
    'Australia\'s premier luxury chauffeur and airport transfer service. Professional drivers, premium fleet, and 24/7 booking support across Adelaide and Australia.',
  email: 'bookings@airportchauffeurs.com.au',
  telephone: '+61461302970',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Unit 2, 535-537 Cross Road',
    addressLocality: 'Plympton',
    addressRegion: 'SA',
    postalCode: '5038',
    addressCountry: 'AU',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+61461302970',
      email: 'bookings@airportchauffeurs.com.au',
      contactType: 'customer service',
      areaServed: 'AU',
      availableLanguage: ['English'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+61461302970',
      contactType: 'reservations',
      areaServed: 'AU',
      availableLanguage: ['English'],
    },
  ],
  sameAs: [
    'https://www.facebook.com/premiumairportchauffeurs',
    'https://www.twitter.com/premiumchauffeurs',
    'https://www.youtube.com/premiumchauffeurs',
  ],
};

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'TaxiService'],
  '@id': `${baseUrl}/#localbusiness`,
  name: 'Premium Airport Chauffeurs',
  url: baseUrl,
  image: `${baseUrl}/images/hero-image.webp`,
  logo: `${baseUrl}/images/logo-v2.png`,
  telephone: '+61461302970',
  email: 'bookings@airportchauffeurs.com.au',
  priceRange: '$$',
  currenciesAccepted: 'AUD',
  paymentAccepted: 'Cash, Credit Card, Debit Card, Bank Transfer',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Unit 2, 535-537 Cross Road',
    addressLocality: 'Plympton',
    addressRegion: 'SA',
    postalCode: '5038',
    addressCountry: 'AU',
  },
  areaServed: [
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'City', name: 'Adelaide' },
    { '@type': 'City', name: 'Sydney' },
    { '@type': 'City', name: 'Melbourne' },
    { '@type': 'City', name: 'Brisbane' },
    { '@type': 'City', name: 'Perth' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Chauffeur Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Airport Transfers',
          description: 'Professional airport pickup and drop-off services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Corporate Transport',
          description: 'Executive transportation for business clients',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Wedding Transport',
          description: 'Luxury wedding car services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Winery Tours',
          description: 'Adelaide Hills and Barossa Valley wine tours',
        },
      },
    ],
  },
  parentOrganization: { '@id': `${baseUrl}/#organization` },
};

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${baseUrl}/#website`,
  url: baseUrl,
  name: 'Premium Airport Chauffeurs',
  description:
    'Premium airport transfers and luxury chauffeur services across Australia.',
  publisher: { '@id': `${baseUrl}/#organization` },
  inLanguage: 'en-AU',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${baseUrl}/services?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

useStructuredData([organization, localBusiness, website], 'site-schema');
</script>
