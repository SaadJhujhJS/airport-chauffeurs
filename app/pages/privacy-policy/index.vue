<template>
  <div>
    <PageHeader
      backgroundImage="/images/contact-banner.webp"
      title="Privacy Policy"
    />
    <PrivacyPolicyMain />
  </div>
</template>
<script setup lang="ts">
usePageSeo({
  title: 'Privacy Policy | Premium Airport Chauffeurs Australia',
  description:
    'Read our privacy policy to understand how Premium Airport Chauffeurs collects, uses, and protects your personal information in accordance with Australian privacy law.',
  path: '/privacy-policy',
  image: '/images/contact-banner.webp',
  imageAlt: 'Premium Airport Chauffeurs Privacy Policy',
});

const breadcrumb = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Privacy Policy', path: '/privacy-policy' },
]);

useStructuredData(
  [
    breadcrumb,
    webPageSchema({
      name: 'Privacy Policy | Premium Airport Chauffeurs',
      description:
        'How Premium Airport Chauffeurs collects, uses, and protects your personal information.',
      path: '/privacy-policy',
      type: 'WebPage',
    }),
  ],
  'privacy-schema'
);
</script>
