<template>
  <section class="relative overflow-hidden">
    <!-- Enhanced Background with animated elements -->
    <div aria-hidden="true" class="absolute inset-0">
      <div
        class="absolute inset-y-0 left-0 w-full md:w-[60vw] bg-gradient-to-br from-[#425A4D] via-[#3a4f42] to-[#425A4D]"
      ></div>
      <div
        class="hidden md:block absolute inset-y-0 right-0 w-full md:w-[40vw] bg-gradient-to-br from-[#2F3B35] via-[#26302a] to-[#2F3B35]"
      ></div>

      <!-- Floating decorative elements -->
      <div
        class="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-[#F4C7A4]/10 to-[#D4A574]/10 rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-[#F4C7A4]/8 to-[#D4A574]/8 rounded-full blur-3xl animate-pulse delay-1000"
      ></div>
      <div
        class="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-[#F4C7A4]/6 to-[#D4A574]/6 rounded-full blur-2xl animate-pulse delay-500"
      ></div>
    </div>

    <BaseContainer>
      <div
        class="relative z-10 flex flex-col md:flex-row items-stretch min-h-[600px]"
      >
        <!-- Left Content Section -->
        <div
          class="w-full md:w-[60%] text-white pt-16 pb-12 md:pb-20 flex flex-col justify-center"
        >
          <div class="mb-12">
            <!-- Enhanced Header -->
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
              class="text-5xl md:text-6xl lg:text-7xl font-[Sarpanch] font-bold mb-6 leading-tight"
            >
              Premium
              <span
                class="block bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] bg-clip-text text-transparent"
              >
                Transportation
              </span>
            </h2>

            <div
              class="w-20 h-1 bg-gradient-to-r from-[#F4C7A4] to-[#E8B896] rounded-full mb-8"
            ></div>

            <p
              class="text-xl font-medium text-white/90 leading-relaxed max-w-lg mb-8"
            >
              Premium transportation solutions tailored to your needs, ensuring
              comfort, reliability, and elegance for every journey.
            </p>
          </div>

          <!-- Enhanced Services Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
            <div
              v-for="(service, index) in services"
              :key="index"
              @click="navigateToService(service)"
              class="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-[#D4A574]/30 transition-all duration-500 cursor-pointer hover:scale-105 hover:-translate-y-1"
              :style="{ animationDelay: `${index * 0.1}s` }"
            >
              <!-- Hover effect overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-br from-[#F4C7A4]/10 to-[#D4A574]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>

              <div class="relative z-10 flex items-center gap-3">
                <div class="flex-shrink-0">
                  <div
                    class="w-10 h-10 bg-gradient-to-br from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  >
                    <div class="w-5 h-5 bg-white rounded-full"></div>
                  </div>
                </div>
                <div>
                  <span
                    class="text-sm font-semibold group-hover:text-[#D4A574] transition-colors duration-300 block leading-tight"
                  >
                    {{ service.name }}
                  </span>
                  <div
                    class="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] transition-all duration-500 mt-1"
                  ></div>
                </div>
              </div>

              <!-- Decorative corner -->
              <div
                class="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#D4A574]/30 group-hover:border-[#D4A574] transition-colors duration-300"
              ></div>
            </div>
          </div>

          <!-- Enhanced CTA -->
          <div class="mt-8">
            <div class="flex flex-col sm:flex-row gap-4">
              <button
                @click="navigateToBooking"
                class="group relative px-6 py-3 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] text-[#151718] font-[Sarpanch] font-semibold text-base rounded-2xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 overflow-hidden cursor-pointer"
              >
                <span class="relative z-10 flex items-center gap-2">
                  Book Your Service
                  <div
                    class="w-4 h-4 bg-[#151718] rounded-full flex items-center justify-center transition-transform duration-500 group-hover:translate-x-1"
                  >
                    <div class="w-1.5 h-1.5 bg-[#D4A574] rounded-full"></div>
                  </div>
                </span>
                <div
                  class="absolute inset-0 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                ></div>
              </button>

              <button
                @click="navigateToServices"
                class="px-6 py-3 bg-transparent border-2 border-white text-white font-[Sarpanch] font-semibold text-base rounded-2xl transition-all duration-500 hover:bg-white hover:text-[#151718] cursor-pointer"
              >
                View All Services
              </button>
            </div>
          </div>
        </div>

        <!-- Right Visual Section -->
        <div
          class="relative w-full md:w-[40%] flex items-center justify-center py-8 md:py-0"
        >
          <div class="relative group w-full flex justify-center">
            <!-- Main Image Container -->
            <div class="relative">
              <div
                class="absolute inset-0 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-700"
              ></div>
              <div
                class="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 group-hover:border-[#D4A574]/30 transition-all duration-700"
              >
                <img
                  src="/images/car.webp"
                  alt="Luxury chauffeur car for airport transfers and premium transportation services"
                  class="w-full max-w-[300px] md:max-w-[350px] lg:max-w-[400px] object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            <!-- Enhanced Decorative Elements -->
            <div
              class="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full blur-xl animate-pulse"
            ></div>
            <div
              class="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-[#F4C7A4]/15 to-[#D4A574]/15 rounded-full blur-xl animate-pulse delay-1000"
            ></div>
            <div
              class="absolute top-1/2 -left-4 w-16 h-16 bg-gradient-to-br from-[#F4C7A4]/25 to-[#D4A574]/25 rounded-full blur-lg animate-pulse delay-500"
            ></div>

            <!-- Floating Service Cards -->
            <div
              class="absolute top-8 -right-4 w-32 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 animate-float"
            >
              <div class="flex items-center gap-3">
                <div
                  class="w-8 h-8 bg-gradient-to-br from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center"
                >
                  <div class="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div>
                  <p class="text-white text-sm font-semibold">Premium</p>
                  <p class="text-white/70 text-xs">Service</p>
                </div>
              </div>
            </div>

            <div
              class="absolute bottom-8 -left-4 w-32 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 animate-float-delay"
            >
              <div class="flex items-center gap-3">
                <div
                  class="w-8 h-8 bg-gradient-to-br from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center"
                >
                  <div class="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div>
                  <p class="text-white text-sm font-semibold">24/7</p>
                  <p class="text-white/70 text-xs">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
<script setup lang="ts">
const services = computed(() => {
  const baseServices = [
    { name: 'Airport Transfers', slug: 'airport-transfers' },
    { name: 'Winery Tours', slug: 'winery-tours' },
    { name: 'Festival Events', slug: 'festival-event' },
    { name: 'Corporate Events', slug: 'corporate-events' },
    { name: 'Weddings', slug: 'weddings' },
    { name: 'Cruise Transfers', slug: 'cruise-transfers' },
    { name: 'Hotel Transfers', slug: 'hotel-transfers' },
    { name: 'Formal Events', slug: 'formal-events' },
  ];

  return baseServices;
});

const navigateToBooking = () => {
  navigateTo('/booking');
};

const navigateToService = (service: { name: string; slug: string }) => {
  navigateTo(`/services/${service.slug}`);
};

const navigateToServices = () => {
  navigateTo('/services');
};
</script>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes float-delay {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-float-delay {
  animation: float-delay 3s ease-in-out infinite 1.5s;
}
</style>
