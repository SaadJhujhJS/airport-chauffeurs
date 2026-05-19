<template>
  <div class="space-y-0">
    <BookingHero />
    <BookOnlineMain />
    <ImmediateAssistance />
  </div>
</template>
<script setup lang="ts">
usePageSeo({
  title: 'Book a Chauffeur Online | Instant Quotes | 24/7 Support',
  description:
    'Book your premium chauffeur in 3 simple steps. Choose your date, vehicle, and journey details online. Instant quotes, and free cancellation available.',
  path: '/booking',
  image: '/images/hero-image.webp',
  imageAlt: 'Book a luxury airport chauffeur online',
  keywords:
    'book chauffeur online, book airport transfer Adelaide, online chauffeur booking, instant chauffeur quote',
});

const breadcrumb = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Book Online', path: '/booking' },
]);

const reservation = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Online Chauffeur Booking',
  description:
    'Reserve a luxury chauffeur online for airport transfers and special events.',
  provider: {
    '@id': 'https://airportchauffeurs.com.au/#organization',
  },
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://airportchauffeurs.com.au/booking',
      inLanguage: 'en-AU',
      actionPlatform: [
        'http://schema.org/DesktopWebPlatform',
        'http://schema.org/MobileWebPlatform',
      ],
    },
    result: {
      '@type': 'Reservation',
      name: 'Chauffeur Reservation',
    },
  },
};

useStructuredData(
  [
    breadcrumb,
    webPageSchema({
      name: 'Book a Chauffeur Online | Premium Airport Chauffeurs',
      description:
        'Book your premium chauffeur service online with instant quotes and 24/7 support.',
      path: '/booking',
      type: 'CheckoutPage',
    }),
    reservation,
  ],
  'booking-schema'
);
</script>
