<template>
  <div>
    <PageHeader
      backgroundImage="/images/contact-banner.webp"
      title="Terms of Service"
    />
    <TermsOfServiceMain />
  </div>
</template>
<script setup lang="ts">
usePageSeo({
  title: 'Terms of Service | Premium Airport Chauffeurs Australia',
  description:
    'Review the terms and conditions governing your use of Premium Airport Chauffeurs services. Understand your rights, booking policies, and cancellation terms.',
  path: '/terms-of-service',
  image: '/images/contact-banner.webp',
  imageAlt: 'Premium Airport Chauffeurs Terms of Service',
});

const breadcrumb = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Terms of Service', path: '/terms-of-service' },
]);

useStructuredData(
  [
    breadcrumb,
    webPageSchema({
      name: 'Terms of Service | Premium Airport Chauffeurs',
      description:
        'Booking, payment, cancellation, and liability terms for Premium Airport Chauffeurs services.',
      path: '/terms-of-service',
      type: 'WebPage',
    }),
  ],
  'terms-schema'
);
</script>
