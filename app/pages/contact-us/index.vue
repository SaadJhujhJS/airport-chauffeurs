<template>
  <div>
    <PageHeader
      backgroundImage="/images/contact-banner.webp"
      title="Contact Premium Airport Chauffeurs"
    />
    <ContactMain />
  </div>
</template>
<script setup lang="ts">
usePageSeo({
  title: 'Contact Premium Airport Chauffeurs | Get a Free Quote Today',
  description:
    'Ready to book your luxury transfer? Contact Premium Airport Chauffeurs 24/7 by phone, email, or our online form. Based in Adelaide, SA — serving all of Australia.',
  path: '/contact-us',
  image: '/images/contact-banner.webp',
  imageAlt: 'Contact Premium Airport Chauffeurs Australia',
  keywords:
    'contact chauffeur Adelaide, chauffeur quote, airport transfer enquiry, premium chauffeurs contact',
});

useHead({
  link: [
    {
      rel: 'preload',
      as: 'image',
      href: '/images/contact-banner.webp',
      fetchpriority: 'high',
    },
  ],
});

const breadcrumb = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Contact Us', path: '/contact-us' },
]);

useStructuredData(
  [
    breadcrumb,
    webPageSchema({
      name: 'Contact Us | Premium Airport Chauffeurs Australia',
      description:
        'Get in touch with Premium Airport Chauffeurs for free consultation, quotes, and 24/7 booking support.',
      path: '/contact-us',
      type: 'ContactPage',
    }),
  ],
  'contact-schema'
);
</script>
