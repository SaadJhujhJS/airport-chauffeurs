<template>
  <div class="bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#F4C7A4]/10 to-[#D4A574]/10 rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-[#F4C7A4]/5 to-[#D4A574]/5 rounded-full blur-3xl animate-pulse delay-1000"
      ></div>
      <div
        class="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-[#F4C7A4]/8 to-[#D4A574]/8 rounded-full blur-2xl animate-pulse delay-500"
      ></div>
    </div>

    <!-- Enhanced Hero Section -->
    <BaseContainer>
      <div class="py-20 md:py-32 text-center relative z-10">
        <div class="max-w-4xl mx-auto">
          <div
            class="inline-flex items-center gap-2 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] px-4 py-2 rounded-full mb-6 animate-fade-in"
          >
            <div class="w-2 h-2 bg-[#D4A574] rounded-full animate-pulse"></div>
            <span class="font-[Lato] font-medium">
              Premium Airpot Chauffeurs
            </span>
          </div>

          <!-- Enhanced Title -->
          <h2
            class="text-6xl md:text-8xl lg:text-9xl font-[Sarpanch] font-bold text-[#222222] leading-tight mb-8 animate-slide-up"
          >
            <span class="block">Who</span>
            <span
              class="block bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] bg-clip-text text-transparent"
            >
              Are We?
            </span>
          </h2>

          <!-- Enhanced Description -->
          <div class="relative mb-12">
            <div
              class="absolute inset-0 bg-gradient-to-r from-[#F4C7A4]/5 to-[#D4A574]/5 rounded-3xl blur-2xl"
            ></div>
            <p
              class="relative text-xl md:text-2xl text-gray-600 font-[Lato] leading-relaxed animate-slide-up-delay"
            >
              We are Australia's premier luxury transportation service,
              specialising in creating exceptional travel experiences. From
              airport transfers to special events, our professional chauffeurs
              deliver unmatched comfort, reliability, and elegance across every
              journey.
            </p>
          </div>

          <!-- Enhanced CTA Buttons -->
          <div
            class="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-delay"
          >
            <NuxtLink
              to="/booking"
              class="group relative px-8 py-4 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] text-white rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 overflow-hidden"
            >
              <span
                class="relative z-10 flex items-center justify-center gap-3"
              >
                Book Online
                <div
                  class="w-5 h-5 bg-white rounded-full flex items-center justify-center transition-transform duration-500 group-hover:translate-x-1"
                >
                  <div class="w-2 h-2 bg-[#D4A574] rounded-full"></div>
                </div>
              </span>
              <div
                class="absolute inset-0 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>
            </NuxtLink>

            <NuxtLink
              to="/contact-us"
              class="group relative px-8 py-4 border-2 border-[#D4A574] text-[#D4A574] rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 overflow-hidden"
            >
              <span
                class="relative z-10 flex items-center justify-center gap-3"
              >
                Contact Us
                <div
                  class="w-5 h-5 border-2 border-[#D4A574] rounded-full flex items-center justify-center transition-transform duration-500 group-hover:translate-x-1"
                >
                  <div class="w-2 h-2 bg-[#D4A574] rounded-full"></div>
                </div>
              </span>
              <div
                class="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </BaseContainer>

    <!-- Enhanced Mission Section -->
    <BaseContainer>
      <div class="py-20 relative z-10">
        <div class="relative group">
          <div
            class="absolute inset-0 bg-gradient-to-br from-[#F4C7A4]/10 to-[#D4A574]/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"
          ></div>
          <div
            class="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-12 group-hover:shadow-3xl transition-all duration-700"
          >
            <div class="max-w-4xl mx-auto text-center">
              <!-- Enhanced Icon -->
              <div class="relative inline-block mb-8">
                <div
                  class="absolute inset-0 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] rounded-full blur-lg opacity-50 animate-pulse"
                ></div>
                <div
                  class="relative w-24 h-24 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center animate-bounce-in"
                >
                  <IconBriefCase class="w-12 h-12 text-white" />
                </div>
              </div>

              <h2
                class="text-5xl md:text-6xl font-[Sarpanch] font-bold text-[#222222] mb-8 animate-slide-up"
              >
                Our Mission
              </h2>

              <div class="relative">
                <div
                  class="absolute inset-0 bg-gradient-to-r from-[#F4C7A4]/5 to-[#D4A574]/5 rounded-2xl blur-xl"
                ></div>
                <p
                  class="relative text-xl text-gray-600 leading-relaxed animate-slide-up-delay"
                >
                  Our mission is to redefine luxury transportation by providing
                  exceptional chauffeur services that exceed expectations. We
                  deliver punctual, comfortable, and secure journeys while
                  maintaining the highest standards of professionalism and
                  customer satisfaction across Australia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseContainer>

    <!-- Enhanced Services Section -->
    <BaseContainer>
      <div class="py-20 relative z-10">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-3 mb-6">
            <div
              class="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#D4A574]"
            ></div>
            <span
              class="text-[#D4A574] font-[Sarpanch] font-semibold tracking-widest uppercase"
            >
              Our Services
            </span>
            <div
              class="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#D4A574]"
            ></div>
          </div>

          <h2
            class="text-5xl md:text-6xl font-[Sarpanch] font-bold text-[#222222] mb-6 animate-slide-up"
          >
            Specialised
            <span
              class="block bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] bg-clip-text text-transparent"
            >
              Services
            </span>
          </h2>

          <p
            class="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up-delay"
          >
            From scenic tours to special events, we provide comprehensive
            transportation solutions tailored to your needs.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="service in services"
            :key="service.title"
            class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-gray-100"
            @click="navigateTo('/services')"
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
              {{ service.title }}
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
      </div>
    </BaseContainer>

    <!-- Enhanced Why Choose Us Section -->
    <BaseContainer>
      <div class="py-20 relative z-10">
        <div class="relative group">
          <div
            class="absolute inset-0 bg-gradient-to-r from-[#F4C7A4]/10 to-[#D4A574]/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"
          ></div>
          <div
            class="relative bg-gradient-to-r from-[#F4C7A4]/10 to-[#D4A574]/10 rounded-3xl p-12 border border-[#D4A574]/20 group-hover:border-[#D4A574]/30 transition-all duration-700"
          >
            <div class="text-center mb-16">
              <div class="inline-flex items-center gap-3 mb-6">
                <div
                  class="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#D4A574]"
                ></div>
                <span
                  class="text-[#D4A574] font-[Sarpanch] font-semibold tracking-widest uppercase"
                >
                  Why Choose Us
                </span>
                <div
                  class="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#D4A574]"
                ></div>
              </div>

              <h2
                class="text-5xl md:text-6xl font-[Sarpanch] font-bold text-[#222222] mb-6 animate-slide-up"
              >
                Excellence in
                <span
                  class="block bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] bg-clip-text text-transparent"
                >
                  Every Journey
                </span>
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
                <!-- Enhanced Icon Container -->
                <div class="relative inline-block mb-6">
                  <div
                    class="absolute inset-0 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"
                  ></div>
                  <div
                    class="relative w-24 h-24 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                  >
                    <component
                      :is="feature.icon"
                      class="w-12 h-12 text-white"
                    />
                  </div>
                </div>

                <h3
                  class="text-xl font-[Sarpanch] font-bold text-[#222222] mb-4 group-hover:text-[#D4A574] transition-colors duration-300"
                >
                  {{ feature.title }}
                </h3>
                <p class="text-gray-600 leading-relaxed">
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseContainer>

    <!-- Enhanced CTA Section -->
    <BaseContainer>
      <div class="py-20 text-center relative z-10">
        <div class="relative group">
          <div
            class="absolute inset-0 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"
          ></div>
          <div
            class="relative bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] rounded-3xl p-16 text-white group-hover:shadow-3xl transition-all duration-700"
          >
            <h2
              class="text-5xl md:text-6xl font-[Sarpanch] font-bold mb-6 animate-slide-up"
            >
              Ready to Experience
              <span class="block">Excellence?</span>
            </h2>
            <p class="text-xl mb-8 opacity-90 animate-slide-up-delay">
              Book your premium chauffeur service today and travel in style
            </p>

            <div
              class="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-delay"
            >
              <NuxtLink
                to="/booking"
                class="group/btn relative px-8 py-4 bg-white text-[#D4A574] rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 overflow-hidden"
              >
                <span
                  class="relative z-10 flex items-center justify-center gap-3"
                >
                  Book Now
                  <div
                    class="w-5 h-5 bg-[#D4A574] rounded-full flex items-center justify-center transition-transform duration-500 group-hover/btn:translate-x-1"
                  >
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </span>
                <div
                  class="absolute inset-0 bg-gray-100 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"
                ></div>
              </NuxtLink>

              <NuxtLink
                to="/contact-us"
                class="group/btn relative px-8 py-4 border-2 border-white text-white rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 overflow-hidden"
              >
                <span
                  class="relative z-10 flex items-center justify-center gap-3"
                >
                  Get Quote
                  <div
                    class="w-5 h-5 border-2 border-white rounded-full flex items-center justify-center transition-transform duration-500 group-hover/btn:translate-x-1"
                  >
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </span>
                <div
                  class="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"
                ></div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </BaseContainer>
  </div>
</template>

<script setup lang="ts">
import IconBriefCase from '~/components/icons/IconBriefCase.vue';
import IconArrowRight from '~/components/icons/IconArrowRight.vue';
import IconLocation from '~/components/icons/IconLocation.vue';
import IconUser from '~/components/icons/IconUser.vue';
import IconTick from '~/components/icons/IconTick.vue';
import IconPhone from '~/components/icons/IconPhone.vue';

const services = ref([
  {
    title: 'Airport Transfers',
    description:
      'Professional airport pickup and drop-off services with luxury vehicles and experienced chauffeurs.',
    features: [
      { title: 'Flight Monitoring' },
      { title: 'Meet & Greet' },
      { title: 'Luggage Assistance' },
    ],
  },
  {
    title: 'Winery Tours',
    description:
      'Luxury transportation for wine tasting tours and vineyard visits.',
    features: [
      { title: 'Wine Region Expertise' },
      { title: 'Designated Driver' },
      { title: 'Flexible Itinerary' },
    ],
  },
  {
    title: 'Festival Events',
    description:
      'Transportation for Adelaide Fringe Festival, Adelaide Festival, and cultural events.',
    features: [
      { title: 'Festival Knowledge' },
      { title: 'Cultural Events' },
      { title: 'Flexible Service' },
    ],
  },
  {
    title: 'Corporate Events',
    description:
      'Executive transportation for business meetings, conferences, and corporate events.',
    features: [
      { title: 'Executive Vehicles' },
      { title: 'Flexible Scheduling' },
      { title: 'Professional Service' },
    ],
  },
  {
    title: 'Cruise Transfers',
    description:
      'Reliable transportation to and from cruise terminals with luggage handling.',
    features: [
      { title: 'Terminal Knowledge' },
      { title: 'Luggage Service' },
      { title: 'Timing Precision' },
    ],
  },
  {
    title: 'Hotel Transfers',
    description:
      'Convenient transportation between hotels, airports, and destinations.',
    features: [
      { title: 'Hotel Partnerships' },
      { title: 'Multi-Stop Service' },
      { title: 'Concierge Service' },
    ],
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

@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
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

.animate-bounce-in {
  animation: bounce-in 0.8s ease-out;
}
</style>
