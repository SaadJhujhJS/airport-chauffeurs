<template>
  <div>
    <BlogsHeroHeader
      :breadcrumbs="heroCrumbs"
      :title-line1="shortTitle.first"
      :title-line2="shortTitle.second"
      :description="post.excerpt"
      :show-cta="true"
      cta-label="Book Online"
    />

    <article class="bg-white">
      <BaseContainer class="py-12 md:py-16">
        <header class="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <h1
            class="text-3xl md:text-5xl font-[Sarpanch] font-bold text-[#222222] leading-tight mb-6"
          >
            {{ post.title }}
          </h1>
          <div
            class="flex flex-wrap items-center justify-center gap-3 text-[#555555] font-[Lato] text-sm md:text-base"
          >
            <time :datetime="post.datePublished">
              Published {{ publishedLabel }}
            </time>
            <span class="text-gray-300" aria-hidden="true">|</span>
            <span>{{ post.readTimeMinutes }} min read</span>
            <span class="text-gray-300" aria-hidden="true">|</span>
            <NuxtLink
              to="/blogs"
              class="text-[#D4A574] font-semibold hover:underline"
            >
              All articles
            </NuxtLink>
          </div>
        </header>

        <figure class="mb-12 md:mb-16 rounded-2xl overflow-hidden shadow-xl">
          <img
            :src="post.heroImage"
            :alt="post.heroImageAlt"
            class="w-full h-auto object-cover max-h-[480px]"
            width="1200"
            height="630"
            fetchpriority="high"
          />
        </figure>

        <div>
          <section
            v-for="(section, idx) in post.sections"
            :key="idx"
            class="mb-10 md:mb-12"
          >
            <h2
              class="text-2xl md:text-3xl font-[Sarpanch] font-bold text-[#222222] mb-4"
            >
              {{ section.heading }}
            </h2>
            <p
              v-for="(para, pIdx) in section.paragraphs"
              :key="pIdx"
              class="text-lg leading-relaxed mb-4 last:mb-0 font-[Lato] text-[#444444]"
            >
              <template v-if="typeof para === 'string'">{{ para }}</template>
              <template v-else>
                <template v-for="(part, pi) in para.parts" :key="pi">
                  <NuxtLink
                    v-if="part.to"
                    :to="part.to"
                    class="text-[#D4A574] font-medium decoration-[#D4A574]/50 hover:text-[#b8895c] hover:decoration-[#b8895c]"
                  >
                    {{ part.text }}
                  </NuxtLink>
                  <span v-else>{{ part.text }}</span>
                </template>
              </template>
            </p>
            <ul
              v-if="section.bullets?.length"
              class="list-disc pl-6 space-y-2 mb-4 font-[Lato] text-lg text-[#444444]"
            >
              <li v-for="(item, bIdx) in section.bullets" :key="bIdx">
                {{ item }}
              </li>
            </ul>
          </section>
        </div>
      </BaseContainer>
    </article>

    <BlogArticleFaqs :faqs="post.faqs" />
  </div>
</template>

<script setup lang="ts">
import BlogsHeroHeader from '~/components/pages/blogs/BlogsHeroHeader.vue';
import BlogArticleFaqs from '~/components/pages/blogs/BlogArticleFaqs.vue';
import type { BlogPost } from '~/data/blogPosts';
import { getBlogBySlug } from '~/data/blogPosts';
import { useRuntimeConfig, useRequestURL } from '#imports';

const route = useRoute();
const slug = route.params.slug as string;
const resolved = getBlogBySlug(slug);

if (!resolved) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found' });
}

const post: BlogPost = resolved;

function truncateTitle(s: string, max: number) {
  if (s.length <= max) return s;
  return `${s.slice(0, max - 1)}…`;
}

const heroCrumbs = computed(() => [
  { label: 'Home', to: '/' },
  { label: 'Blogs', to: '/blogs' },
  { label: truncateTitle(post.title, 46) },
]);

const shortTitle = computed(() => {
  const words = post.title.split(' ');
  if (words.length <= 5) {
    return {
      first: words[0] || 'Article',
      second: words.slice(1).join(' ') || 'Guide',
    };
  }
  return {
    first: words.slice(0, 4).join(' '),
    second: words.slice(4).join(' '),
  };
});

const publishedLabel = new Intl.DateTimeFormat('en-AU', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
}).format(new Date(post.datePublished));

const config = useRuntimeConfig();
const baseUrl = String(
  config.public.SITE_URL ||
    (import.meta.client
      ? useRequestURL().origin
      : 'https://airportchauffeurs.com.au')
).replace(/\/$/, '');

const articleUrl = `${baseUrl}/blogs/${post.slug}`;
const articleImage = post.heroImage.startsWith('http')
  ? post.heroImage
  : `${baseUrl}${post.heroImage}`;

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: post.title,
  description: post.excerpt,
  image: articleImage,
  datePublished: post.datePublished,
  dateModified: post.dateModified,
  author: {
    '@type': 'Organization',
    name: 'Premium Airport Chauffeurs',
    url: baseUrl,
  },
  publisher: {
    '@type': 'Organization',
    name: 'Premium Airport Chauffeurs',
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/images/logo-v2.png`,
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${articleUrl}#webpage`,
  },
  url: articleUrl,
  inLanguage: 'en-AU',
};

usePageSeo({
  title: post.metaTitle,
  description: post.metaDescription,
  path: `/blogs/${post.slug}`,
  image: post.heroImage,
  imageAlt: post.heroImageAlt,
  ogType: 'article',
  keywords: post.keywords,
});

useStructuredData(
  [
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Blogs', path: '/blogs' },
      { name: post.title, path: `/blogs/${post.slug}` },
    ]),
    webPageSchema({
      name: post.title,
      description: post.excerpt,
      path: `/blogs/${post.slug}`,
      type: 'WebPage',
    }),
    faqSchema(post.faqs),
    articleJsonLd,
  ],
  `blog-article-${post.slug}`
);
</script>
