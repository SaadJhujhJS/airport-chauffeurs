<template>
  <div>
    <BlogsHeroHeader
      :breadcrumbs="[{ label: 'Home', to: '/' }, { label: 'Locations' }]"
      title-line1="Chauffeur"
      title-line2="Locations"
      description="Premium airport chauffeur and luxury transfer coverage in Sydney, Melbourne, and Adelaide — flight-aware pickups, meet and greet, and vehicles matched to your itinerary."
    />

    <section class="py-16 md:py-24 bg-white">
      <BaseContainer>
        <div class="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2
            class="text-3xl md:text-4xl font-[Sarpanch] font-bold text-[#222222] mb-4"
          >
            Airport chauffeur services by city
          </h2>
          <p class="text-lg text-[#555555] font-[Lato] leading-relaxed">
            Choose your gateway for long-form guides covering local airports,
            landmarks, indicative pricing, and FAQs — each page is written for
            search clarity and traveller confidence.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          <article
            v-for="city in cities"
            :key="city.slug"
            class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 flex flex-col"
          >
            <NuxtLink
              :to="`/locations/${city.slug}`"
              class="block relative h-52 md:h-56 overflow-hidden"
              :aria-label="`View ${city.cityName} chauffeur services`"
            >
              <img
                :src="city.image"
                :alt="city.imageAlt"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                width="800"
                height="520"
                loading="lazy"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
              ></div>
              <div class="absolute bottom-4 left-4 right-4 text-left">
                <span
                  class="inline-block px-3 py-1 rounded-full text-xs font-[Lato] font-semibold uppercase tracking-wide bg-[#D4A574] text-[#151718]"
                >
                  {{ city.cityName }}
                </span>
              </div>
            </NuxtLink>

            <div class="p-8 flex flex-col flex-1">
              <h3
                class="text-xl md:text-2xl font-[Sarpanch] font-bold text-[#222222] mb-3 group-hover:text-[#D4A574] transition-colors"
              >
                <NuxtLink :to="`/locations/${city.slug}`">
                  {{ city.cityName }} chauffeur &amp; airport transfers
                </NuxtLink>
              </h3>
              <p class="text-[#555555] font-[Lato] leading-relaxed mb-6 flex-1">
                {{ city.cardDescription }}
              </p>
              <NuxtLink
                :to="`/locations/${city.slug}`"
                class="text-[#D4A574] font-[Sarpanch] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                View {{ city.cityName }} services
                <span aria-hidden="true">→</span>
              </NuxtLink>
            </div>
          </article>
        </div>
      </BaseContainer>
    </section>

    <section
      class="py-16 md:py-24 bg-gradient-to-br from-[#2F3B35] via-[#3a4f42] to-[#425A4D]"
    >
      <BaseContainer>
        <div class="text-center text-white max-w-2xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-[Sarpanch] font-bold mb-6">
            Not sure which city applies?
          </h2>
          <p class="text-xl text-white/90 font-[Lato] mb-8">
            Browse
            <NuxtLink
              to="/services"
              class="text-[#F4C7A4] font-semibold underline underline-offset-2 hover:text-white"
            >
              all chauffeur services
            </NuxtLink>
            , read our
            <NuxtLink
              to="/blogs"
              class="text-[#F4C7A4] font-semibold underline underline-offset-2 hover:text-white"
            >
              travel guides
            </NuxtLink>
            , or go straight to booking.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/booking">
              <button
                type="button"
                class="px-8 py-4 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] text-[#151718] font-[Sarpanch] font-semibold text-lg rounded-2xl transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer"
              >
                Book online
              </button>
            </NuxtLink>
            <NuxtLink to="/contact-us">
              <button
                type="button"
                class="px-8 py-4 bg-transparent border-2 border-white text-white font-[Sarpanch] font-semibold text-lg rounded-2xl transition-all duration-500 hover:bg-white hover:text-[#151718] cursor-pointer"
              >
                Contact us
              </button>
            </NuxtLink>
          </div>
        </div>
      </BaseContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
import BlogsHeroHeader from '~/components/pages/blogs/BlogsHeroHeader.vue';
import { getCityLandingSummaries } from '~/data/cityLandingPages';

const cities = getCityLandingSummaries();

usePageSeo({
  title:
    'Chauffeur Locations Australia | Sydney, Melbourne & Adelaide Airport Transfers',
  description:
    'Explore Premium Airport Chauffeurs city pages for Sydney, Melbourne, and Adelaide to find the best information about airport chauffeur services.',
  path: '/locations',
  image: '/images/services-banner.webp',
  imageAlt: 'Premium chauffeur services across Australian cities',
  keywords:
    'chauffeur locations Australia, airport chauffeur Sydney Melbourne Adelaide, luxury airport transfer cities, Premium Airport Chauffeurs locations',
});

const breadcrumb = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Locations', path: '/locations' },
]);

const cityList = itemListSchema(
  cities.map(c => ({
    name: `${c.cityName} chauffeur & airport transfers`,
    path: `/locations/${c.slug}`,
    description: c.cardDescription,
    image: c.image,
  })),
  'Premium Airport Chauffeurs — city chauffeur pages'
);

useStructuredData(
  [
    breadcrumb,
    webPageSchema({
      name: 'Chauffeur service locations | Sydney, Melbourne, Adelaide',
      description:
        'Hub page linking to city-specific airport chauffeur and luxury transfer guides across Australia.',
      path: '/locations',
      type: 'CollectionPage',
    }),
    cityList,
  ],
  'locations-index-schema'
);
</script>
