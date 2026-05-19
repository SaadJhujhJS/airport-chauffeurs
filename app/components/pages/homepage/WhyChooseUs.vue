<template>
  <div class="relative overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-[#F4C7A4]/10 to-[#D4A574]/10 rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-[#F4C7A4]/5 to-[#D4A574]/5 rounded-full blur-3xl animate-pulse delay-1000"
      ></div>
    </div>

    <BaseContainer class="py-16 md:py-24 relative z-10">
      <div
        class="w-full flex flex-col lg:flex-row items-start lg:justify-between gap-8 lg:gap-12"
      >
        <!-- Left Visual Section -->
        <div class="w-full lg:w-[45%] order-2 lg:order-1">
          <div class="space-y-8">
            <!-- Enhanced Header -->
            <div class="flex items-center gap-6">
              <div class="relative group">
                <div
                  class="absolute inset-0 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"
                ></div>
                <img
                  src="/images/why-choose.png"
                  alt="Why choose Premium Airport Chauffeurs icon"
                  class="relative w-20 h-20 md:w-24 md:h-24 object-cover transition-all duration-500 hover:scale-110 hover:rotate-12"
                />
              </div>
              <div>
                <p
                  class="text-xl md:text-2xl text-[#222222] font-[Lato] font-semibold"
                >
                  Why Choose Us
                </p>
              </div>
            </div>

            <!-- Enhanced Progress Bar -->
            <div class="relative">
              <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  class="h-2 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] rounded-full transition-all duration-1000 ease-out hover:w-full w-3/4"
                ></div>
              </div>
              <div
                class="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] rounded-full animate-pulse"
              ></div>
            </div>

            <!-- Description moved to left -->
            <div class="relative">
              <div
                class="absolute inset-0 bg-gradient-to-r from-[#F4C7A4]/5 to-[#D4A574]/5 rounded-2xl blur-xl"
              ></div>
              <div
                class="relative p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100"
              >
                <p
                  class="text-base md:text-lg text-[#555555] font-[Lato] font-medium leading-relaxed"
                >
                  With a wealth of experience in transportation, our chauffeured
                  car service surpasses expectations by providing last-minute
                  ride accommodations, enhancing convenience for our clients.
                  Operating in major cities, our extensive fleet of vehicles is
                  ready to meet the diverse demands of our customers.
                </p>
              </div>
            </div>

            <!-- Custom Visual Elements -->
            <div class="relative">
              <div class="grid grid-cols-2 gap-6">
                <!-- Stats Card 1 -->
                <div
                  class="group relative bg-gradient-to-br from-[#F4C7A4]/10 to-[#D4A574]/10 backdrop-blur-sm rounded-2xl p-6 border border-[#D4A574]/20 hover:border-[#D4A574]/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
                >
                  <div class="text-center">
                    <div
                      class="text-3xl font-[Sarpanch] font-bold text-[#D4A574] mb-2"
                    >
                      50+
                    </div>
                    <div class="text-sm font-[Lato] font-medium text-[#222222]">
                      Professional Agents
                    </div>
                  </div>
                  <div
                    class="absolute top-2 right-2 w-3 h-3 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] rounded-full animate-pulse"
                  ></div>
                </div>

                <!-- Stats Card 2 -->
                <div
                  class="group relative bg-gradient-to-br from-[#F4C7A4]/10 to-[#D4A574]/10 backdrop-blur-sm rounded-2xl p-6 border border-[#D4A574]/20 hover:border-[#D4A574]/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
                >
                  <div class="text-center">
                    <div
                      class="text-3xl font-[Sarpanch] font-bold text-[#D4A574] mb-2"
                    >
                      24/7
                    </div>
                    <div class="text-sm font-[Lato] font-medium text-[#222222]">
                      Customer Support
                    </div>
                  </div>
                  <div
                    class="absolute top-2 right-2 w-3 h-3 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] rounded-full animate-pulse delay-500"
                  ></div>
                </div>

                <!-- Stats Card 3 -->
                <div
                  class="group relative bg-gradient-to-br from-[#F4C7A4]/10 to-[#D4A574]/10 backdrop-blur-sm rounded-2xl p-6 border border-[#D4A574]/20 hover:border-[#D4A574]/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
                >
                  <div class="text-center">
                    <div
                      class="text-3xl font-[Sarpanch] font-bold text-[#D4A574] mb-2"
                    >
                      100%
                    </div>
                    <div class="text-sm font-[Lato] font-medium text-[#222222]">
                      Reliable Service
                    </div>
                  </div>
                  <div
                    class="absolute top-2 right-2 w-3 h-3 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] rounded-full animate-pulse delay-1000"
                  ></div>
                </div>

                <!-- Stats Card 4 -->
                <div
                  class="group relative bg-gradient-to-br from-[#F4C7A4]/10 to-[#D4A574]/10 backdrop-blur-sm rounded-2xl p-6 border border-[#D4A574]/20 hover:border-[#D4A574]/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
                >
                  <div class="text-center">
                    <div
                      class="text-3xl font-[Sarpanch] font-bold text-[#D4A574] mb-2"
                    >
                      5★
                    </div>
                    <div class="text-sm font-[Lato] font-medium text-[#222222]">
                      Customer Rating
                    </div>
                  </div>
                  <div
                    class="absolute top-2 right-2 w-3 h-3 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] rounded-full animate-pulse delay-300"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Content Section -->
        <div class="w-full lg:w-[50%] order-1 lg:order-2 text-[#111111]">
          <div class="space-y-6">
            <!-- Enhanced Header -->
            <div class="space-y-3">
              <div class="inline-flex items-center gap-3">
                <div
                  class="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#D4A574]"
                ></div>
                <span
                  class="text-[#D4A574] font-[Sarpanch] font-semibold tracking-widest uppercase"
                >
                  We Are
                </span>
                <div
                  class="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#D4A574]"
                ></div>
              </div>

              <h2
                class="text-3xl md:text-4xl lg:text-5xl font-[Sarpanch] font-bold leading-tight"
              >
                Trustworthy
                <span
                  class="block bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] bg-clip-text text-transparent"
                >
                  Chauffeured Car Service
                </span>
                <span class="block">For Reliable Travels</span>
              </h2>
            </div>

            <!-- Enhanced Features List -->
            <div class="space-y-3">
              <div
                v-for="(feature, index) in features"
                :key="index"
                class="group flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 hover:border-[#D4A574]/30 transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
                :style="{ animationDelay: `${index * 0.1}s` }"
              >
                <div class="flex-shrink-0">
                  <div
                    class="w-3 h-3 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] rounded-full transition-all duration-300 group-hover:scale-150"
                  ></div>
                </div>
                <span
                  class="text-base font-medium text-[#222222] group-hover:text-[#D4A574] transition-colors duration-300"
                >
                  {{ feature }}
                </span>
              </div>
            </div>

            <!-- Enhanced CTA Button -->
            <div class="pt-2">
              <NuxtLink
                to="/contact-us"
                aria-label="Get a quote for our chauffeur services"
                title="Get a quote for our chauffeur services"
                class="group inline-block"
              >
                <button
                  name="get-a-quote"
                  class="relative px-6 py-3 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] text-[#151718] font-[Sarpanch] font-semibold text-base rounded-2xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 overflow-hidden cursor-pointer"
                >
                  <span class="relative z-10 flex items-center gap-2">
                    Get a Quote
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
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </BaseContainer>
  </div>
</template>

<script setup lang="ts">
const features = [
  'Experienced Chauffeurs',
  'On-Demand Rides',
  'Airport Transfers to/from Anywhere',
  '50+ Operational Agents',
  'Wide Range of Limousines and Vehicles',
];
</script>
