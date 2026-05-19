<template>
  <div>
    <BlogsHeroHeader
      :breadcrumbs="[{ label: 'Home', to: '/' }, { label: 'Blogs' }]"
      title-line1="Chauffeur Travel Guides & Tips"
      title-line2=""
      description="Explore expert guides on airport transfers, corporate travel, winery tours, and booking private chauffeurs across Australia — from Premium Airport Chauffeurs."
    />

    <section class="py-16 md:py-24 bg-white">
      <BaseContainer>
        <div class="text-center mb-12 md:mb-16">
          <h2
            class="text-3xl md:text-4xl font-[Sarpanch] font-bold text-[#222222] mb-4"
          >
            Latest articles
          </h2>
          <p class="text-lg text-[#555555] max-w-2xl mx-auto font-[Lato]">
            Ideas and checklists to help you travel with confidence, save time,
            and enjoy the journey.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <article
            v-for="post in blogPosts"
            :key="post.slug"
            class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 flex flex-col"
          >
            <NuxtLink
              :to="`/blogs/${post.slug}`"
              class="block relative h-56 md:h-64 overflow-hidden"
              :aria-label="`Read article: ${post.title}`"
            >
              <img
                :src="post.cardImage"
                :alt="post.cardImageAlt"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                width="800"
                height="520"
                loading="lazy"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"
              ></div>
              <div
                class="absolute bottom-4 left-4 right-4 text-left text-white"
              >
                <time
                  :datetime="post.datePublished"
                  class="text-xs font-[Lato] uppercase tracking-wide text-white/85"
                >
                  {{ formatDate(post.datePublished) }} ·
                  {{ post.readTimeMinutes }} min read
                </time>
              </div>
            </NuxtLink>

            <div class="p-8 flex flex-col flex-1">
              <h3
                class="text-xl md:text-2xl font-[Sarpanch] font-bold text-[#222222] mb-3 group-hover:text-[#D4A574] transition-colors"
              >
                <NuxtLink :to="`/blogs/${post.slug}`">
                  {{ post.title }}
                </NuxtLink>
              </h3>
              <p class="text-[#555555] font-[Lato] leading-relaxed mb-6 flex-1">
                {{ post.excerpt }}
              </p>
              <div class="flex items-center justify-end">
                <NuxtLink
                  :to="`/blogs/${post.slug}`"
                  class="text-[#D4A574] font-[Sarpanch] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Read article
                  <span aria-hidden="true">→</span>
                </NuxtLink>
              </div>
            </div>
          </article>
        </div>
      </BaseContainer>
    </section>

    <section
      class="py-16 md:py-24 bg-gradient-to-br from-[#2F3B35] via-[#3a4f42] to-[#425A4D]"
    >
      <BaseContainer>
        <div class="text-center text-white">
          <h2 class="text-3xl md:text-4xl font-[Sarpanch] font-bold mb-6">
            Ready when you are
          </h2>
          <p class="text-xl text-white/90 mb-8 font-[Lato] leading-relaxed">
            Put these ideas into practice: book airport transfers, corporate
            cars, or a South Australian winery day with Premium Airport
            Chauffeurs.
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
                Get a quote
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
import { blogPosts } from '~/data/blogPosts';

function formatDate(iso: string) {
  return new Intl.DateTimeFormat('en-AU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(iso));
}

usePageSeo({
  title:
    'Chauffeur & Travel Blog | Airport Transfers, Corporate Travel & Winery Tours',
  description:
    'Read expert tips on luxury airport transfers in Adelaide, corporate chauffeur travel in Australia, and how to book a private chauffeur.',
  path: '/blogs',
  image: '/images/services-banner.webp',
  imageAlt: 'Premium Airport Chauffeurs luxury transport Australia',
  keywords:
    'chauffeur blog Australia, Adelaide airport transfer tips, corporate chauffeur guide, winery tour transport South Australia, Premium Airport Chauffeurs',
});

const breadcrumb = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Blogs', path: '/blogs' },
]);

const list = itemListSchema(
  blogPosts.map(p => ({
    name: p.title,
    path: `/blogs/${p.slug}`,
    description: p.excerpt,
    image: p.cardImage,
  })),
  'Premium Airport Chauffeurs blog articles'
);

useStructuredData(
  [
    breadcrumb,
    webPageSchema({
      name: 'Blog | Premium Airport Chauffeurs',
      description:
        'Articles on chauffeured travel, airport transfers, and premium transport across Australia.',
      path: '/blogs',
      type: 'CollectionPage',
    }),
    list,
  ],
  'blogs-index-schema'
);
</script>
