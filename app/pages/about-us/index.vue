<template>
  <div>
    <PageHeader
      backgroundImage="/images/about-banner.webp"
      title="About Premium Airport Chauffeurs"
    />
    <AboutUsMain />
  </div>
</template>
<script setup lang="ts">
usePageSeo({
  title: "About Us | Premium Airport Chauffeurs – Australia's Luxury Transport",
  description:
    'Premium Airport Chauffeurs has delivered exceptional luxury transportation across Australia. Meet our professional chauffeurs and discover our mission.',
  path: '/about-us',
  image: '/images/about-banner.webp',
  imageAlt: 'About Premium Airport Chauffeurs Australia',
  keywords:
    'about premium airport chauffeurs, chauffeur company Australia, luxury transport company, airport transfer company',
});

useHead({
  link: [
    {
      rel: 'preload',
      as: 'image',
      href: '/images/about-banner.webp',
      fetchpriority: 'high',
    },
  ],
});

const breadcrumb = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about-us' },
]);

useStructuredData(
  [
    breadcrumb,
    webPageSchema({
      name: 'About Us | Premium Chauffeur Service in Australia',
      description:
        "Learn about Premium Airport Chauffeurs — Australia's trusted luxury transportation provider.",
      path: '/about-us',
      type: 'AboutPage',
    }),
  ],
  'about-schema'
);
</script>
