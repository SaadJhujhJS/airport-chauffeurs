<template>
  <div>
    <!-- Services Hero Section -->
    <section
      class="relative overflow-hidden bg-gradient-to-br from-[#2F3B35] via-[#3a4f42] to-[#425A4D]"
    >
      <!-- Background decorative elements -->
      <div class="absolute inset-0 pointer-events-none">
        <div
          class="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-[#F4C7A4]/10 to-[#D4A574]/10 rounded-full blur-3xl animate-pulse"
        ></div>
        <div
          class="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-[#F4C7A4]/8 to-[#D4A574]/8 rounded-full blur-3xl animate-pulse delay-1000"
        ></div>
      </div>

      <BaseContainer class="py-16 md:py-24 relative z-10">
        <div class="text-center text-white">
          <!-- Breadcrumb -->
          <div class="mb-8">
            <nav class="flex items-center justify-center gap-2 text-sm">
              <NuxtLink
                to="/"
                class="text-white/70 hover:text-[#D4A574] transition-colors"
              >
                Home
              </NuxtLink>
              <span class="text-white/50">/</span>
              <span class="text-[#D4A574]">Services</span>
            </nav>
          </div>

          <!-- Services Title -->
          <h1
            class="text-4xl md:text-6xl lg:text-7xl font-[Sarpanch] font-bold mb-6 leading-tight"
          >
            Our Premium
            <span
              class="block bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] bg-clip-text text-transparent"
            >
              Services
            </span>
          </h1>

          <!-- Services Description -->
          <p
            class="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            Experience luxury transportation with our comprehensive range of
            professional chauffeur services across Australia.
          </p>

          <!-- CTA Button -->
          <div class="flex justify-center">
            <NuxtLink to="/booking">
              <button
                class="px-8 py-4 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] text-[#151718] font-[Sarpanch] font-semibold text-lg rounded-2xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 cursor-pointer"
              >
                Book Your Service
              </button>
            </NuxtLink>
          </div>
        </div>
      </BaseContainer>
    </section>

    <!-- All Services Grid -->
    <section class="py-16 md:py-24 bg-white">
      <BaseContainer>
        <div class="text-center mb-12">
          <h2
            class="text-3xl md:text-4xl font-[Sarpanch] font-bold text-[#222222] mb-4"
          >
            Complete Service Portfolio
          </h2>
          <p class="text-lg text-[#555555] max-w-2xl mx-auto">
            From airport transfers to special events, we provide comprehensive
            transportation solutions
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="service in allServices"
            :key="service.slug"
            class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-gray-100"
            @click="navigateTo(`/services/${service.slug}`)"
          >
            <!-- Service Icon -->
            <div
              class="w-16 h-16 bg-gradient-to-br from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <div class="w-8 h-8 bg-white rounded-full"></div>
            </div>

            <!-- Service Content -->
            <h3
              class="text-xl font-semibold text-[#222222] mb-4 group-hover:text-[#D4A574] transition-colors"
            >
              {{ service.name }}
            </h3>

            <p class="text-[#555555] leading-relaxed mb-6">
              {{ service.description }}
            </p>

            <!-- Service Features -->
            <div class="space-y-2 mb-6">
              <div
                v-for="feature in service.features.slice(0, 2)"
                :key="feature.title"
                class="flex items-center gap-2"
              >
                <div
                  class="w-2 h-2 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] rounded-full"
                ></div>
                <span class="text-sm text-[#666666]">{{ feature.title }}</span>
              </div>
            </div>

            <!-- Learn More Button -->
            <div class="flex items-center justify-between">
              <span
                class="text-[#D4A574] font-semibold group-hover:text-[#D4A574] transition-colors"
              >
                Learn More →
              </span>
              <div
                class="w-0 group-hover:w-8 h-0.5 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] transition-all duration-500"
              ></div>
            </div>
          </div>
        </div>
      </BaseContainer>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-16 md:py-24 bg-gray-50">
      <BaseContainer>
        <div class="text-center mb-12">
          <h2
            class="text-3xl md:text-4xl font-[Sarpanch] font-bold text-[#222222] mb-4"
          >
            Why Choose Our Services?
          </h2>
          <p class="text-lg text-[#555555] max-w-2xl mx-auto">
            We deliver exceptional transportation experiences with unmatched
            professionalism
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(benefit, index) in benefits"
            :key="index"
            class="text-center group"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
            >
              <div class="w-8 h-8 bg-white rounded-full"></div>
            </div>
            <h3 class="text-lg font-semibold text-[#222222] mb-2">
              {{ benefit.title }}
            </h3>
            <p class="text-[#555555] text-sm leading-relaxed">
              {{ benefit.description }}
            </p>
          </div>
        </div>
      </BaseContainer>
    </section>

    <!-- CTA Section -->
    <section
      class="py-16 md:py-24 bg-gradient-to-br from-[#2F3B35] via-[#3a4f42] to-[#425A4D]"
    >
      <BaseContainer>
        <div class="text-center text-white">
          <h2 class="text-3xl md:text-4xl font-[Sarpanch] font-bold mb-6">
            Ready to Experience Premium Service?
          </h2>
          <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today to book your luxury transportation service
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/booking">
              <button
                class="px-8 py-4 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] text-[#151718] font-[Sarpanch] font-semibold text-lg rounded-2xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 cursor-pointer"
              >
                Book Now
              </button>
            </NuxtLink>
            <NuxtLink to="/contact-us">
              <button
                class="px-8 py-4 bg-transparent border-2 border-white text-white font-[Sarpanch] font-semibold text-lg rounded-2xl transition-all duration-500 hover:bg-white hover:text-[#151718] cursor-pointer"
              >
                Get Quote
              </button>
            </NuxtLink>
          </div>
        </div>
      </BaseContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
// Service data - same as in [slug].vue
const serviceDataMap: Record<string, any> = {
  'airport-transfers': {
    name: 'Airport Transfers',
    description:
      'Professional airport pickup and drop-off services with luxury vehicles and experienced chauffeurs.',
    features: [
      {
        title: 'Flight Monitoring',
        description:
          'We track your flight status to ensure timely pickup, even for delays.',
      },
      {
        title: 'Meet & Greet',
        description:
          'Professional chauffeur will meet you at arrivals with a name board.',
      },
      {
        title: 'Luggage Assistance',
        description: 'Help with luggage handling and loading into the vehicle.',
      },
    ],
  },
  'winery-tours': {
    name: 'Winery Tours',
    description:
      'Luxury transportation for wine tasting tours and vineyard visits.',
    features: [
      {
        title: 'Wine Region Expertise',
        description:
          'Knowledge of Adelaide Hills, Barossa Valley, and other wine regions.',
      },
      {
        title: 'Designated Driver',
        description: 'Safe transportation allowing you to enjoy wine tastings.',
      },
      {
        title: 'Flexible Itinerary',
        description: 'Customisable tours based on your wine preferences.',
      },
    ],
  },
  'festival-events': {
    name: 'Festival Events',
    description:
      'Transportation for Adelaide Fringe Festival, Adelaide Festival, and cultural events.',
    features: [
      {
        title: 'Festival Knowledge',
        description: 'Understanding of festival venues, timing, and logistics.',
      },
      {
        title: 'Cultural Events',
        description:
          'Experience with Adelaide Fringe, Festival, and Motorsport events.',
      },
      {
        title: 'Flexible Service',
        description: 'Adaptable to changing festival schedules and locations.',
      },
    ],
  },
  'corporate-events': {
    name: 'Corporate Events',
    description:
      'Executive transportation for business meetings, conferences, and corporate events.',
    features: [
      {
        title: 'Executive Vehicles',
        description:
          'Premium fleet including luxury sedans and SUVs for business travel.',
      },
      {
        title: 'Flexible Scheduling',
        description:
          'Accommodate last-minute changes and extended waiting times.',
      },
      {
        title: 'Professional Service',
        description:
          'Discrete, professional chauffeurs trained in corporate etiquette.',
      },
    ],
  },
  weddings: {
    name: 'Weddings',
    description:
      'Elegant transportation for your special day with luxury vehicles and professional service.',
    features: [
      {
        title: 'Wedding Packages',
        description:
          'Complete wedding transportation packages including bridal car and guest transport.',
      },
      {
        title: 'Decorated Vehicles',
        description:
          'Beautifully decorated vehicles with ribbons, flowers, and personal touches.',
      },
      {
        title: 'Timely Service',
        description:
          'Punctual service ensuring you arrive on time for your ceremony.',
      },
    ],
  },
  'cruise-transfers': {
    name: 'Cruise Transfers',
    description:
      'Reliable transportation to and from cruise terminals with luggage handling.',
    features: [
      {
        title: 'Terminal Knowledge',
        description:
          'Familiarity with all major cruise terminals and procedures.',
      },
      {
        title: 'Luggage Service',
        description: 'Assistance with multiple bags and cruise luggage.',
      },
      {
        title: 'Timing Precision',
        description:
          'Careful coordination with cruise departure and arrival times.',
      },
    ],
  },
  'hotel-transfers': {
    name: 'Hotel Transfers',
    description:
      'Convenient transportation between hotels, airports, and destinations.',
    features: [
      {
        title: 'Hotel Partnerships',
        description: 'Relationships with major hotels for seamless service.',
      },
      {
        title: 'Multi-Stop Service',
        description:
          'Efficient routing for multiple hotel pickups and drop-offs.',
      },
      {
        title: 'Concierge Service',
        description: 'Coordination with hotel concierge for guest convenience.',
      },
    ],
  },
  'formal-events': {
    name: 'Formal Events',
    description:
      'Elegant transportation for proms, school formals, and special celebrations.',
    features: [
      {
        title: 'Special Occasions',
        description:
          'Perfect for prom, graduation, and milestone celebrations.',
      },
      {
        title: 'Group Bookings',
        description: 'Accommodate groups of friends and classmates.',
      },
      {
        title: 'Photo Opportunities',
        description: 'Beautiful vehicles perfect for memorable photos.',
      },
    ],
  },
  'luxury-tours': {
    name: 'Luxury Tours',
    description:
      'Scenic drives, wine tours, and coastal journeys in premium comfort.',
    features: [
      {
        title: 'Scenic Routes',
        description: 'Expert knowledge of beautiful routes and hidden gems.',
      },
      {
        title: 'Flexible Itinerary',
        description:
          'Customisable tours based on your interests and preferences.',
      },
      {
        title: 'Comfort & Style',
        description:
          'Luxury vehicles with premium amenities for long journeys.',
      },
    ],
  },
  'vip-transport': {
    name: 'VIP Transport',
    description:
      'Exclusive transportation for celebrities, executives, and high-profile clients.',
    features: [
      {
        title: 'Discrete Service',
        description:
          'Complete privacy and discretion for high-profile clients.',
      },
      {
        title: 'Security Features',
        description:
          'Advanced security features and trained security personnel.',
      },
      {
        title: 'Premium Fleet',
        description: 'Top-of-the-line luxury vehicles with maximum comfort.',
      },
    ],
  },
  'event-transfers': {
    name: 'Event Transfers',
    description:
      'Transportation for concerts, festivals, sports events, and special occasions.',
    features: [
      {
        title: 'Event Expertise',
        description:
          'Knowledge of event venues, parking, and traffic patterns.',
      },
      {
        title: 'Group Transport',
        description: 'Vehicles accommodating groups of various sizes.',
      },
      {
        title: 'Extended Hours',
        description:
          'Service available for late-night events and early morning departures.',
      },
    ],
  },
};

const allServices = computed(() =>
  Object.entries(serviceDataMap).map(([key, value]) => ({
    slug: key,
    name: value.name,
    description: value.description,
    features: value.features,
  }))
);

const benefits = [
  {
    title: 'Professional Chauffeurs',
    description: 'Experienced, licensed, and courteous drivers',
  },
  {
    title: 'Luxury Fleet',
    description: 'Premium vehicles maintained to the highest standards',
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock customer service and assistance',
  },
  {
    title: 'Reliable Service',
    description: 'Punctual, dependable transportation every time',
  },
];

usePageSeo({
  title: 'Chauffeur Services in Australia | Weddings, Corporate, Tours & More',
  description:
    'From winery tours and festival transfers to VIP transport and cruise pickups — explore our full range of premium chauffeur services across Australia.',
  path: '/services',
  image: '/images/services-banner.webp',
  imageAlt: 'Premium chauffeur services across Australia',
  keywords:
    'chauffeur services Australia, airport transfers, wedding cars, corporate transport, winery tours, VIP transport, luxury chauffeur',
});

const breadcrumb = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
]);

const serviceList = itemListSchema(
  allServices.value.map(s => ({
    name: s.name,
    path: `/services/${s.slug}`,
    description: s.description,
  })),
  'Premium Chauffeur Services'
);

useStructuredData(
  [
    breadcrumb,
    webPageSchema({
      name: 'Chauffeur Services | Airport Transfers, Weddings, Tours & Corporate',
      description:
        'Comprehensive range of premium chauffeur services across Australia.',
      path: '/services',
      type: 'CollectionPage',
    }),
    serviceList,
  ],
  'services-schema'
);
</script>
