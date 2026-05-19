<template>
  <div>
    <AppHeader />
    <AboutCompany
      title="Who Are We?"
      subTitle="PREMIUM AIRPORT"
      subTitle2="CHAUFFEURS"
      firstDescription="We are Australia's premier luxury transportation service, specialising in creating exceptional travel experiences. From airport transfers to special events, our professional chauffeurs deliver unmatched comfort, reliability, and elegance across every journey."
      mission="Our Mission"
      description="Our mission is to redefine luxury transportation by providing exceptional chauffeur services that exceed expectations. We deliver punctual, comfortable, and secure journeys while maintaining the highest standards of professionalism and customer satisfaction across Australia."
      url="/about-us"
      buttonContent="Discover Our Story"
    />
    <ServiceForte />
    <WhyChooseUs />
    <CommenceJourney title1="Begin Your Premium Journey Today" />
    <EssentialFeatures
      headerTitle1="Why Choose Premium Airport Chauffeurs"
      headerTitle2="Excellence in Every Journey"
      :features="features"
    />
  </div>
</template>
<script setup lang="ts">
const features = [
  {
    title1: 'Secure Payment',
    title2: 'Protection',
    description:
      'Your financial security is our priority. We use industry-leading encryption and secure payment processing to protect your transactions.',
  },
  {
    title1: '24/7 Live',
    title2: 'Support & Assistance',
    description:
      'Round-the-clock customer support ensures you can reach us anytime for last-minute bookings, changes, or assistance.',
  },
  {
    title1: 'Decades of',
    title2: 'Professional Expertise',
    description:
      'Our team of 50+ professional chauffeurs brings years of experience and local knowledge to every journey.',
  },
  {
    title1: 'Real-Time GPS',
    title2: 'Tracking',
    description:
      'Track your chauffeur and vehicle location in real-time with our advanced GPS system for complete peace of mind.',
  },
  {
    title1: 'Group & Shared',
    title2: 'Transportation',
    description:
      'Flexible transportation options for groups, families, and shared rides to accommodate all your travel needs.',
  },
  {
    title1: 'Premium Fleet of',
    title2: 'Luxury Vehicles',
    description:
      'Choose from our extensive collection of luxury vehicles, each meticulously maintained for your comfort and style.',
  },
];
usePageSeo({
  title: 'Premium Airport Chauffeurs Australia | Luxury Car Services',
  description:
    "Australia's premier luxury chauffeur service — airport transfers, corporate events, weddings & tours. 50+ professional drivers, 24/7 support. Book online today.",
  path: '/',
  image: '/images/hero-image.webp',
  imageAlt: 'Luxury chauffeur car ready for airport transfer in Australia',
  keywords:
    'airport chauffeurs, luxury car service, airport transfers, chauffeur service Australia, premium transportation, airport pickup, airport drop off, luxury cars, professional chauffeurs',
});

useHead({
  link: [{ rel: 'preload', as: 'image', href: '/images/hero-image.webp' }],
});

useStructuredData(
  webPageSchema({
    name: 'Premium Airport Chauffeurs Australia | Luxury Car Service & Airport Transfers',
    description:
      'Premium Airport Chauffeurs Australia offers luxury car services, airport transfers, and chauffeur services across Australia.',
    path: '/',
    type: 'WebPage',
  }),
  'home-webpage'
);
</script>
