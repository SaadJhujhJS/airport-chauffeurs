<template>
  <div v-if="page">
    <BlogsHeroHeader
      :breadcrumbs="heroCrumbs"
      :title-line1="page.heroTitleLine1"
      :title-line2="page.heroTitleLine2"
      :description="page.heroDescription"
    />

    <section class="py-12 md:py-16 bg-white">
      <BaseContainer>
        <h2
          class="text-2xl md:text-4xl font-[Sarpanch] font-bold text-[#222222] mb-6"
        >
          {{ page.introHeading }}
        </h2>
        <p
          v-for="(p, i) in page.introParagraphs"
          :key="`intro-${i}`"
          class="text-lg font-[Lato] text-[#444444] leading-relaxed mb-5 last:mb-0"
        >
          {{ p }}
        </p>
      </BaseContainer>
    </section>

    <section class="py-12 md:py-16 bg-gray-50 border-y border-gray-100">
      <BaseContainer>
        <h2
          class="text-2xl md:text-4xl font-[Sarpanch] font-bold text-[#222222] mb-6"
        >
          {{ page.airportHeading }}
        </h2>
        <p
          v-for="(p, i) in page.airportParagraphs"
          :key="`airport-${i}`"
          class="text-lg font-[Lato] text-[#444444] leading-relaxed mb-5 last:mb-0"
        >
          {{ p }}
        </p>
      </BaseContainer>
    </section>

    <section class="py-12 md:py-16 bg-white">
      <BaseContainer>
        <h2
          class="text-2xl md:text-4xl font-[Sarpanch] font-bold text-[#222222] mb-6"
        >
          {{ page.landmarksHeading }}
        </h2>
        <p
          v-for="(p, i) in page.landmarksParagraphs"
          :key="`land-${i}`"
          class="text-lg font-[Lato] text-[#444444] leading-relaxed mb-5 last:mb-0"
        >
          {{ p }}
        </p>
      </BaseContainer>
    </section>

    <section class="py-12 md:py-16 bg-gray-50 border-y border-gray-100">
      <BaseContainer>
        <h2
          class="text-2xl md:text-4xl font-[Sarpanch] font-bold text-[#222222] mb-6"
        >
          {{ page.serviceHeading }}
        </h2>
        <p
          v-for="(p, i) in page.serviceParagraphs"
          :key="`svc-${i}`"
          class="text-lg font-[Lato] text-[#444444] leading-relaxed mb-5 last:mb-0"
        >
          {{ p }}
        </p>
      </BaseContainer>
    </section>

    <section class="py-12 md:py-16 bg-white">
      <BaseContainer>
        <h2
          class="text-2xl md:text-4xl font-[Sarpanch] font-bold text-[#222222] mb-6"
        >
          {{ page.whyHeading }}
        </h2>
        <p
          v-for="(p, i) in page.whyParagraphs"
          :key="`why-${i}`"
          class="text-lg font-[Lato] text-[#444444] leading-relaxed mb-5 last:mb-0"
        >
          {{ p }}
        </p>
      </BaseContainer>
    </section>

    <section
      id="pricing"
      class="py-14 md:py-20 bg-gradient-to-br from-[#2F3B35] via-[#3a4f42] to-[#425A4D] text-white"
    >
      <BaseContainer>
        <div class="text-center mb-6 md:mb-10">
          <h2 class="text-2xl md:text-4xl font-[Sarpanch] font-bold mb-4">
            {{ page.pricingHeading }}
          </h2>
          <p
            class="text-lg md:text-xl text-white/90 font-[Lato] leading-relaxed"
          >
            {{ page.pricingIntro }}
          </p>
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto"
        >
          <div
            v-for="(tier, ti) in page.pricingTiers"
            :key="ti"
            class="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 md:p-8 text-left hover:scale-103 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            <h3
              class="text-xl font-[Sarpanch] font-semibold text-[#F4C7A4] mb-3"
            >
              {{ tier.title }}
            </h3>
            <p class="text-white/90 font-[Lato] leading-relaxed text-base">
              {{ tier.summary }}
            </p>
          </div>
        </div>
        <p
          class="max-w-3xl mx-auto text-center text-white/75 font-[Lato] text-sm mt-8 leading-relaxed"
        >
          {{ page.pricingFootnote }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <NuxtLink
            to="/booking"
            class="inline-flex justify-center px-8 py-4 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] text-[#151718] font-[Sarpanch] font-semibold text-lg rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl text-center"
          >
            Book {{ page.cityName }} transfer
          </NuxtLink>
          <NuxtLink
            to="/contact-us"
            class="inline-flex justify-center px-8 py-4 border-2 border-[#D4A574] text-white font-[Sarpanch] font-semibold text-lg rounded-2xl hover:scale-105 hover:shadow-xl cursor-pointer transition-all duration-300 text-center"
          >
            Request a quote
          </NuxtLink>
        </div>
      </BaseContainer>
    </section>

    <BlogArticleFaqs :faqs="page.faqs" />
  </div>
</template>

<script setup lang="ts">
import BlogsHeroHeader from '~/components/pages/blogs/BlogsHeroHeader.vue';
import BlogArticleFaqs from '~/components/pages/blogs/BlogArticleFaqs.vue';
import { getCityLandingPage } from '~/data/cityLandingPages';

const route = useRoute();
const cityParam = route.params.city as string;
const page = getCityLandingPage(cityParam);

if (!page) {
  throw createError({ statusCode: 404, statusMessage: 'Location not found' });
}

const heroCrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Locations', to: '/locations' },
  { label: page.breadcrumbCurrent },
];

usePageSeo({
  title: page.seoTitle,
  description: page.seoDescription,
  path: `/locations/${page.slug}`,
  image: page.image,
  imageAlt: page.imageAlt,
  keywords: page.keywords,
});

const breadcrumb = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Locations', path: '/locations' },
  {
    name: `${page.cityName} airport chauffeur`,
    path: `/locations/${page.slug}`,
  },
]);

useStructuredData(
  [
    breadcrumb,
    webPageSchema({
      name: page.seoTitle,
      description: page.cardDescription,
      path: `/locations/${page.slug}`,
      type: 'WebPage',
    }),
    faqSchema(page.faqs),
  ],
  `city-location-${page.slug}`
);
</script>
