<template>
  <div class="relative overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#F4C7A4]/10 to-[#D4A574]/10 rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-[#F4C7A4]/5 to-[#D4A574]/5 rounded-full blur-3xl animate-pulse delay-1000"
      ></div>
    </div>

    <BaseContainer class="py-16 md:py-24 relative z-10">
      <div class="relative flex flex-col justify-center items-center">
        <!-- Enhanced Header -->
        <div class="text-center mb-16 max-w-4xl">
          <div class="inline-flex items-center gap-3 mb-6">
            <div
              class="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#D4A574]"
            ></div>
            <span
              class="text-[#D4A574] font-[Sarpanch] font-semibold tracking-widest uppercase"
            >
              Customer Reviews
            </span>
            <div
              class="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#D4A574]"
            ></div>
          </div>

          <h2
            class="text-4xl md:text-5xl lg:text-6xl font-[Sarpanch] font-bold leading-tight mb-6"
          >
            Our Appreciated
            <span
              class="block bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] bg-clip-text text-transparent"
            >
              Customers
            </span>
          </h2>
        </div>

        <!-- Enhanced Testimonials Slider -->
        <client-only>
          <div class="relative w-full">
            <Swiper v-bind="swiperOptions" class="py-6">
              <SwiperSlide
                v-for="(card, index) in cards"
                :key="index"
                class="group"
              >
                <div
                  class="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl px-6 pt-6 pb-8 my-6 transition-all duration-700 transform hover:-translate-y-2 overflow-hidden border border-gray-100 hover:border-[#D4A574]/30"
                >
                  <!-- Background decorative elements -->
                  <div
                    class="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-[#F4C7A4]/10 to-[#D4A574]/10 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"
                  ></div>
                  <div
                    class="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-[#F4C7A4]/5 to-[#D4A574]/5 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                  ></div>

                  <div class="relative z-10 flex flex-col gap-6">
                    <!-- Enhanced Header -->
                    <div class="flex items-center justify-between">
                      <div class="relative">
                        <div
                          class="absolute inset-0 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"
                        ></div>
                        <img
                          :src="card.url"
                          :alt="`Customer testimonial from ${card.author}`"
                          class="relative w-16 h-16 rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      <div class="text-center">
                        <p
                          class="text-lg sm:text-xl font-[Lato] font-semibold text-[#222222] group-hover:text-[#D4A574] transition-colors duration-300"
                        >
                          {{ card.author }}
                        </p>
                        <div
                          class="flex items-center justify-center gap-1 mt-2"
                        >
                          <div
                            class="w-2 h-2 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] rounded-full animate-pulse"
                          ></div>
                          <div
                            class="w-2 h-2 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] rounded-full animate-pulse delay-200"
                          ></div>
                          <div
                            class="w-2 h-2 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] rounded-full animate-pulse delay-400"
                          ></div>
                        </div>
                      </div>

                      <div class="flex items-center gap-2">
                        <div class="relative group/quote">
                          <div
                            class="absolute inset-0 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full blur-lg opacity-50 group-hover/quote:opacity-75 transition-opacity duration-500"
                          ></div>
                          <img
                            src="/images/comment.png"
                            alt="Customer testimonial quote icon"
                            class="relative w-8 h-9 transition-transform duration-500 group-hover/quote:scale-110"
                          />
                        </div>
                        <div class="relative group/quote">
                          <div
                            class="absolute inset-0 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full blur-lg opacity-50 group-hover/quote:opacity-75 transition-opacity duration-500"
                          ></div>
                          <img
                            src="/images/comment.png"
                            alt="Customer testimonial quote icon"
                            class="relative w-8 h-9 transition-transform duration-500 group-hover/quote:scale-110"
                          />
                        </div>
                      </div>
                    </div>

                    <!-- Enhanced Star Rating -->
                    <div class="flex items-center justify-center gap-2">
                      <div
                        v-for="(star, starIndex) in 5"
                        :key="starIndex"
                        class="transition-transform duration-300 hover:scale-125"
                        :style="{ animationDelay: `${starIndex * 0.1}s` }"
                      >
                        <IconStarFull
                          v-if="starIndex < 5"
                          class="w-5 h-5 text-[#D4A574]"
                        />
                      </div>
                    </div>

                    <!-- Enhanced Testimonial Text -->
                    <div class="relative">
                      <div
                        class="absolute inset-0 bg-gradient-to-r from-[#F4C7A4]/5 to-[#D4A574]/5 rounded-2xl blur-xl"
                      ></div>
                      <p
                        class="relative text-gray-700 sm:text-lg font-[Lato] font-medium leading-relaxed p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100 group-hover:border-[#D4A574]/30 transition-all duration-500"
                      >
                        "{{ card.description }}"
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </client-only>
      </div>
    </BaseContainer>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, FreeMode } from 'swiper/modules';

const swiperOptions = {
  modules: [Autoplay, FreeMode],
  slidesPerView: 1,
  spaceBetween: 20,
  freeMode: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    340: { slidesPerView: 1.3, spaceBetween: 20 },
    640: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 20 },
  },
} as any;

const cards = [
  {
    url: '/images/comment1.png',
    description: `Absolutely outstanding service! I've used Premium Airport Chauffeurs for multiple business trips and they never disappoint. The chauffeur was waiting for me at arrivals with a name board, helped with my luggage, and provided bottled water. The Mercedes was immaculate and the ride was incredibly smooth. Their flight tracking system is brilliant - they knew about my delay before I even landed. Worth every penny for the peace of mind.`,
    author: 'Michael Chen',
  },
  {
    url: '/images/comment2.png',
    description: `I booked Premium Airport Chauffeurs for my wedding day transportation and they exceeded all expectations. The chauffeur arrived 15 minutes early, the car was beautifully decorated with ribbons, and he even helped coordinate with our photographer for perfect shots. Professional, punctual, and made our special day even more memorable. I can't recommend them highly enough!`,
    author: 'Sarah Williams',
  },
  {
    url: '/images/comment3.png',
    description:
      'Exceptional service from start to finish! I needed a last-minute airport transfer at 5 AM and they accommodated me without any issues. The chauffeur was friendly, professional, and even offered to stop for coffee on the way. The vehicle was spotless and comfortable. Their customer service team was also incredibly helpful when I had questions. This is now my go-to service for all airport transfers.',
    author: 'David Thompson',
  },
  {
    url: '/images/comment1.png',
    description: `I've been using Premium Airport Chauffeurs for over a year now for my monthly business trips to Sydney. Their consistency is remarkable - always on time, always professional, always comfortable. The chauffeurs are knowledgeable about traffic patterns and always choose the best routes. The vehicles are maintained to the highest standards. They've become an essential part of my travel routine.`,
    author: 'Jennifer Martinez',
  },
  {
    url: '/images/comment2.png',
    description:
      'Outstanding experience for our corporate event! We needed transportation for 15 executives from different hotels to the conference center. Premium Airport Chauffeurs coordinated everything flawlessly - multiple vehicles, precise timing, and professional service throughout. The chauffeurs were discrete, well-dressed, and handled all the logistics perfectly. Our clients were very impressed.',
    author: 'Robert Anderson',
  },
  {
    url: '/images/comment3.png',
    description: `I was skeptical about using a chauffeur service, but Premium Airport Chauffeurs completely changed my mind. The booking process was simple, the pricing was transparent, and the service was exceptional. My chauffeur was knowledgeable about Adelaide and gave me great recommendations for restaurants. The car was luxurious and the ride was incredibly smooth. I'll definitely be using them again!`,
    author: 'Lisa Park',
  },
];
</script>
