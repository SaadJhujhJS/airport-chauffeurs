<template>
  <div class="bg-[#2F3B35]">
    <BaseContainer>
      <div class="grid grid-cols-1 md:grid-cols-6 gap-6 py-12 md:py-22">
        <div
          v-for="(blog, index) in blogs"
          :key="index"
          class="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
          :class="{
            'md:col-span-2': index < 6,
            'md:col-span-3': index === 6 || index === 7,
          }"
        >
          <div class="relative overflow-hidden">
            <img
              :src="blog.image"
              :alt="blog.title"
              class="w-full h-72 object-cover transition-all duration-700 group-hover:scale-105"
            />
            <!-- Gradient overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500 z-10"
            ></div>
            <!-- Color overlay with fade effect -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-[#F4C7A4] to-[#E8B896] opacity-0 group-hover:opacity-90 transition-opacity duration-500 ease-out z-20"
            ></div>
          </div>

          <!-- Title -->
          <h2
            class="absolute inset-0 flex items-center justify-center text-white text-xl font-[Lato] font-bold text-center px-4 z-30 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-[-20px]"
          >
            {{ blog.title }}
          </h2>

          <!-- Content overlay -->
          <div
            class="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-30"
          >
            <p
              class="text-center px-6 font-[Lato] font-medium text-white mb-6 leading-relaxed"
            >
              {{ blog.description }}
            </p>
            <button
              name="read-more"
              @click="navigateTo(`/services/${blog.link}`)"
              class="text-white px-6 py-3 font-[Lato] font-semibold border-2 border-white rounded-full cursor-pointer transition-all duration-300 hover:bg-white hover:text-[#D4A574] hover:scale-105 hover:shadow-lg"
            >
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </BaseContainer>
  </div>
</template>

<script setup>
const blogs = [
  {
    title: 'Airport Transfer',
    image: '/images/blogs/blog1.webp',
    description:
      'Airport Transfer Premium Airport Chauffeured: Your Airport Transfer Specialists',
    link: 'airport-services',
  },
  {
    title: 'Hotel Transfer',
    image: '/images/blogs/blog2.webp',
    description:
      'Hotel Transfer When it comes to transferring between hotels, we understand the hassles involved. Let us take care of your transportation needs seamlessly.',
    link: 'hotel-transfers',
  },
  {
    title: 'Corporate Events',
    image: '/images/blogs/blog3.webp',
    description:
      "If you're looking to explore the historical landmarks and attractions, rely on Premium Chauffeur Service to take you on an unforgettable journey where history comes alive.",
    link: 'corporate-events',
  },
  {
    title: 'Great Ocean Road Tours',
    image: '/images/blogs/blog4.webp',
    description:
      'Corporate Events For corporate individuals, we recognise the demands of traveling to various corners of the city for events and meetings. Count on us for reliable and efficient transportation.',
    link: 'great-ocean-road-tour',
  },
  {
    title: 'Wedding',
    image: '/images/blogs/blog5.webp',
    description:
      "We take delight in making your special occasions even more joyous and exciting. Consider a friend's trip to the finest winery farms in Australia with our chauffeured car service.",
    link: 'weddings',
  },
  {
    title: 'Winery Tour',
    image: '/images/blogs/blog6.webp',
    description:
      "Great Ocean Road Tour How about exploring one of Australia's most renowned destinations? Allow Premium Airport Chauffeurs to organise a memorable tour for you.",
    link: 'winery-tour',
  },
  {
    title: 'SightSeeing Tour',
    image: '/images/blogs/blog7.webp',
    description:
      "If you're looking to explore the historical landmarks and attractions, rely on Premium Airport Chauffeured to take you on an unforgettable journey where history comes alive.",
    link: 'sightseeing-tour',
  },
  {
    title:
      'Special Events (Adelaide Fringe Festival, Adelaide Festival, Adelaide Motorsport Festival)',
    image: '/images/blogs/blog8.webp',
    description:
      'Our Chauffeured Car service accommodates every event, from attending the Melbourne Cup Carnival to providing respectful transportation for funeral services.',
    link: 'special-events-melbourne-cup-carnival-grand-prix-australia-open-afl-funerals',
  },
];
</script>
