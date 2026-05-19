<template>
  <div>
    <PageHeader
      backgroundImage="/images/fleet-banner.webp"
      title="Our Luxury Chauffeur Fleet"
    />
    <FleetMain />
  </div>
</template>
<script setup lang="ts">
usePageSeo({
  title: 'Our Luxury Fleet | Mercedes, BMW, Audi, Tesla & More',
  description:
    'Browse our premium fleet — executive sedans, luxury SUVs, electric vehicles, minibuses, BMW, Audi, Tesla & more. Find the perfect vehicle for your journey.',
  path: '/fleet',
  image: '/images/fleet-banner.webp',
  imageAlt: 'Premium Airport Chauffeurs luxury fleet of vehicles',
  keywords:
    'luxury fleet, chauffeur cars Adelaide, premium vehicles, luxury sedans, chauffeur SUV, limousine hire',
});

useHead({
  link: [
    {
      rel: 'preload',
      as: 'image',
      href: '/images/fleet-banner.webp',
      fetchpriority: 'high',
    },
  ],
});

const { getAllVehicles } = useFleetData();
const vehicles = getAllVehicles().map(v => ({
  name: v.name,
  category: v.category,
  image: v.image,
  fuel: v.specifications.fuel,
  year: v.specifications.year,
  passengers: v.passengers,
}));

const breadcrumb = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Our Fleet', path: '/fleet' },
]);

useStructuredData(
  [
    breadcrumb,
    webPageSchema({
      name: 'Our Fleet | Luxury Vehicles & Premium Chauffeur Cars',
      description:
        'Explore our premium fleet of luxury sedans, SUVs, electric vehicles, and minibuses.',
      path: '/fleet',
      type: 'CollectionPage',
    }),
    vehicleListSchema(vehicles),
  ],
  'fleet-schema'
);
</script>
