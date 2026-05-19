<template>
  <div class="bg-gradient-to-br from-gray-50 to-white">
    <!-- Hero Section -->
    <BaseContainer>
      <div class="py-20 md:py-32">
        <div class="flex flex-col lg:flex-row items-center gap-16">
          <div class="w-full lg:w-1/2 animate-slide-up">
            <img
              src="/images/service-image.png"
              alt="Premium Chauffeur Services"
              class="w-full h-auto rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
            />
          </div>
          <div class="w-full lg:w-1/2 animate-slide-up-delay">
            <div
              class="inline-block px-6 py-3 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] rounded-full text-white font-bold text-sm mb-8"
            >
              PREMIUM SERVICES
            </div>
            <h1
              class="text-5xl md:text-6xl font-[Sarpanch] font-bold text-[#222222] leading-tight mb-8"
            >
              Experience Our
              <span class="text-[#D4A574]">Chauffeured</span>
              Services
            </h1>
            <p class="text-xl text-gray-600 font-[Lato] leading-relaxed mb-12">
              Your peace of mind and comfort are our top priorities. Allow us to
              provide you with a ride accompanied by a reliable and courteous
              chauffeur, ensuring an exceptional day for you. Leave a lasting
              impression with our services!
            </p>
            <div class="flex flex-col sm:flex-row gap-6">
              <NuxtLink
                to="/booking"
                class="bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-[#E88A3F] hover:to-[#C4965A] transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Book Service
              </NuxtLink>
              <NuxtLink
                to="/contact-us"
                class="border-2 border-[#D4A574] text-[#D4A574] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#D4A574] hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Get Quote
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </BaseContainer>

    <!-- Services Grid Section -->
    <BaseContainer>
      <div class="py-20">
        <div class="text-center mb-16">
          <h2
            class="text-4xl md:text-5xl font-[Sarpanch] font-bold text-[#222222] mb-6 animate-slide-up"
          >
            Our Comprehensive Services
          </h2>
          <p
            class="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up-delay"
          >
            From airport transfers to special events, we provide complete
            transportation solutions tailored to your needs.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden border border-gray-100 animate-slide-up"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="relative h-48 overflow-hidden">
              <img
                :src="service.image"
                :alt="service.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
              ></div>
              <div class="absolute top-4 right-4">
                <div
                  class="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center"
                >
                  <component
                    :is="service.icon"
                    class="w-6 h-6 text-[#D4A574]"
                  />
                </div>
              </div>
              <div class="absolute bottom-4 left-4">
                <span
                  class="px-3 py-1 bg-[#D4A574] text-white text-xs font-bold rounded-full"
                >
                  {{ service.category }}
                </span>
              </div>
            </div>
            <div class="p-8">
              <h3
                class="text-2xl font-[Sarpanch] font-bold text-[#222222] mb-4"
              >
                {{ service.title }}
              </h3>
              <p class="text-gray-600 leading-relaxed mb-6">
                {{ service.description }}
              </p>
              <div class="flex items-center justify-between">
                <NuxtLink
                  :to="service.link"
                  class="inline-flex items-center text-[#D4A574] font-bold hover:text-[#E88A3F] transition-colors duration-300"
                >
                  Learn More
                  <IconArrowRight class="w-4 h-4 ml-2" />
                </NuxtLink>
                <NuxtLink
                  to="/booking"
                  class="bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] text-white px-4 py-2 rounded-xl font-bold text-sm hover:from-[#E88A3F] hover:to-[#C4965A] transition-all duration-300"
                >
                  Book Now
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseContainer>

    <!-- Features Section -->
    <BaseContainer>
      <div
        class="py-20 bg-gradient-to-r from-[#F4C7A4]/10 to-[#D4A574]/10 rounded-3xl mb-20"
      >
        <div class="text-center mb-16">
          <h2
            class="text-4xl md:text-5xl font-[Sarpanch] font-bold text-[#222222] mb-6 animate-slide-up"
          >
            Why Choose Our Services?
          </h2>
          <p
            class="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up-delay"
          >
            Experience the difference with our premium service standards and
            commitment to excellence.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="text-center group animate-slide-up"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div
              class="w-20 h-20 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <component :is="feature.icon" class="w-10 h-10 text-white" />
            </div>
            <h3 class="text-xl font-[Sarpanch] font-bold text-[#222222] mb-4">
              {{ feature.title }}
            </h3>
            <p class="text-gray-600 leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </BaseContainer>

    <!-- CTA Section -->
    <BaseContainer>
      <div class="py-20 text-center">
        <div
          class="bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] rounded-3xl p-12 text-white"
        >
          <h2
            class="text-4xl md:text-5xl font-[Sarpanch] font-bold mb-6 animate-slide-up"
          >
            Ready to Experience Excellence?
          </h2>
          <p class="text-xl mb-8 opacity-90 animate-slide-up-delay">
            Book your premium chauffeur service today and travel in style
          </p>
          <div
            class="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-delay"
          >
            <NuxtLink
              to="/booking"
              class="bg-white text-[#D4A574] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
            >
              Book Now
            </NuxtLink>
            <NuxtLink
              to="/contact-us"
              class="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-[#D4A574] transition-all duration-300"
            >
              Get Quote
            </NuxtLink>
          </div>
        </div>
      </div>
    </BaseContainer>
  </div>
</template>

<script setup lang="ts">
import IconArrowRight from '~/components/icons/IconArrowRight.vue';
import IconLocation from '~/components/icons/IconLocation.vue';
import IconUser from '~/components/icons/IconUser.vue';
import IconTick from '~/components/icons/IconTick.vue';
import IconPhone from '~/components/icons/IconPhone.vue';
import IconBriefCase from '~/components/icons/IconBriefCase.vue';

const services = ref([
  {
    title: 'Airport Transfers',
    category: 'Transfer',
    description:
      'Professional airport pickup and drop-off services with guaranteed timely arrivals.',
    image: '/images/blogs/blog-details/1.webp',
    icon: markRaw(IconLocation),
    link: '/services/airport-services',
  },
  {
    title: 'Hotel Transfers',
    category: 'Transfer',
    description:
      'Seamless transfers between hotels with our professional chauffeurs.',
    image: '/images/blogs/blog-details/2.webp',
    icon: markRaw(IconTick),
    link: '/services/hotel-transfers',
  },
  {
    title: 'Corporate Events',
    category: 'Business',
    description:
      'Professional transportation for corporate events and business meetings.',
    image: '/images/blogs/blog-details/3.webp',
    icon: markRaw(IconBriefCase),
    link: '/services/corporate-events',
  },
  {
    title: 'Great Ocean Road Tour',
    category: 'Tour',
    description:
      "Experience Australia's most scenic drive with our professional chauffeurs.",
    image: '/images/blogs/blog-details/4.webp',
    icon: markRaw(IconLocation),
    link: '/services/great-ocean-road-tour',
  },
  {
    title: 'Weddings',
    category: 'Special',
    description:
      'Make your special day memorable with our luxury wedding transportation.',
    image: '/images/blogs/blog-details/5.webp',
    icon: markRaw(IconTick),
    link: '/services/weddings',
  },
  {
    title: 'Winery Tour',
    category: 'Tour',
    description: "Explore Australia's finest wineries in comfort and style.",
    image: '/images/blogs/blog-details/6.webp',
    icon: markRaw(IconLocation),
    link: '/services/winery-tour',
  },
]);

const features = ref([
  {
    title: 'Professional Drivers',
    description:
      'Experienced, licensed, and courteous chauffeurs trained to provide exceptional service.',
    icon: markRaw(IconUser),
  },
  {
    title: 'Premium Fleet',
    description:
      'Luxury vehicles maintained to the highest standards for your comfort and safety.',
    icon: markRaw(IconBriefCase),
  },
  {
    title: '24/7 Support',
    description:
      'Round-the-clock customer support to cater to your transportation needs.',
    icon: markRaw(IconPhone),
  },
  {
    title: 'GPS Tracking',
    description:
      'Real-time tracking system to keep you informed about your journey.',
    icon: markRaw(IconLocation),
  },
]);
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

.animate-fade-in-delay {
  animation: fade-in 0.8s ease-out 0.4s both;
}

.animate-slide-up {
  animation: slide-up 0.8s ease-out;
}

.animate-slide-up-delay {
  animation: slide-up 0.8s ease-out 0.2s both;
}
</style>
