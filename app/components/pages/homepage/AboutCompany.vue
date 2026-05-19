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
      <div
        class="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-[#F4C7A4]/8 to-[#D4A574]/8 rounded-full blur-2xl animate-pulse delay-500"
      ></div>
    </div>

    <BaseContainer>
      <section class="py-16 md:py-24 relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-3 mb-6">
            <div
              class="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#D4A574]"
            ></div>
            <span
              class="text-[#D4A574] font-[Sarpanch] font-semibold tracking-widest uppercase"
            >
              {{ title }}
            </span>
            <div
              class="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#D4A574]"
            ></div>
          </div>
          <h2
            class="text-4xl md:text-6xl lg:text-7xl font-[Sarpanch] font-bold text-[#222222] leading-tight mb-6"
          >
            <span class="block">{{ subTitle }}</span>
            <span
              class="block bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] bg-clip-text text-transparent"
            >
              {{ subTitle2 }}
            </span>
          </h2>
        </div>

        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <!-- Left Content -->
          <div class="space-y-8 order-2 lg:order-1">
            <!-- Main Description -->
            <div class="group">
              <div
                class="relative p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div
                  class="absolute inset-0 bg-gradient-to-br from-[#F4C7A4]/5 to-[#D4A574]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                ></div>
                <div class="relative z-10">
                  <p
                    class="text-lg md:text-xl text-[#555555] font-[Lato] leading-relaxed"
                  >
                    {{ firstDescription }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Mission Section -->
            <div class="group">
              <div
                class="relative p-8 bg-gradient-to-br from-[#F4C7A4]/10 to-[#D4A574]/10 rounded-3xl border border-[#D4A574]/20 transition-all duration-500 hover:shadow-xl hover:scale-105"
              >
                <div
                  class="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-[#F4C7A4] to-[#D4A574] rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                ></div>
                <div class="relative z-10">
                  <h3
                    class="text-2xl md:text-3xl font-[Sarpanch] font-bold text-[#222222] mb-4"
                  >
                    {{ mission }}
                  </h3>
                  <p class="text-lg text-[#555555] font-[Lato] leading-relaxed">
                    {{ description }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Additional Description -->
            <div v-if="firstDescriptionLeft" class="group">
              <div
                class="relative p-6 bg-white rounded-2xl border border-gray-200 transition-all duration-500 hover:border-[#D4A574] hover:shadow-lg"
              >
                <div class="flex items-start gap-4">
                  <div
                    class="w-12 h-12 bg-gradient-to-br from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center flex-shrink-0"
                  >
                    <div class="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <p class="text-lg text-[#555555] font-[Lato] leading-relaxed">
                    {{ firstDescriptionLeft }}
                  </p>
                </div>
              </div>
            </div>

            <!-- CTA Button -->
            <div v-if="buttonContent" class="pt-4">
              <NuxtLink
                :to="url"
                aria-label="Learn more about our company"
                title="Learn more about our company"
                class="group inline-block"
              >
                <button
                  name="about-company-button"
                  class="relative px-8 py-4 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] text-[#151718] font-[Sarpanch] font-semibold text-lg rounded-2xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 overflow-hidden cursor-pointer"
                >
                  <span class="relative z-10 flex items-center gap-3">
                    {{ buttonContent }}
                    <div
                      class="w-5 h-5 bg-[#151718] rounded-full flex items-center justify-center transition-transform duration-500 group-hover:translate-x-1"
                    >
                      <div class="w-2 h-2 bg-[#D4A574] rounded-full"></div>
                    </div>
                  </span>
                  <div
                    class="absolute inset-0 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  ></div>
                </button>
              </NuxtLink>
            </div>
          </div>

          <!-- Right Visual Elements -->
          <div class="order-1 lg:order-2">
            <div class="relative">
              <!-- Main Visual Card -->
              <div class="relative group">
                <div
                  class="absolute inset-0 bg-gradient-to-br from-[#F4C7A4] to-[#D4A574] rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-700"
                ></div>
                <div
                  class="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 group-hover:shadow-3xl transition-all duration-700"
                >
                  <!-- Number Badge -->
                  <div
                    class="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center shadow-lg"
                  >
                    <span class="text-2xl font-[Sarpanch] font-bold text-white">
                      ✨
                    </span>
                  </div>

                  <!-- Content -->
                  <div class="pt-8 space-y-6">
                    <div class="text-center">
                      <h4
                        class="text-2xl font-[Sarpanch] font-bold text-[#222222] mb-2"
                      >
                        ABOUT THE COMPANY
                      </h4>
                      <div
                        class="w-16 h-1 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] mx-auto rounded-full"
                      ></div>
                    </div>

                    <!-- Feature Cards -->
                    <div class="grid grid-cols-2 gap-4">
                      <div
                        class="text-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl border transition-all duration-500 border-[#D4A574] shadow-lg"
                      >
                        <div
                          class="w-12 h-12 bg-gradient-to-br from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-3"
                        >
                          <div class="w-6 h-6 bg-white rounded-full"></div>
                        </div>
                        <h5
                          class="font-[Sarpanch] font-semibold text-[#222222] text-sm"
                        >
                          PREMIUM
                        </h5>
                        <p class="text-xs text-[#555555] font-[Lato]">
                          Service
                        </p>
                      </div>

                      <div
                        class="text-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl border transition-all duration-500 border-[#D4A574] shadow-lg"
                      >
                        <div
                          class="w-12 h-12 bg-gradient-to-br from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-3"
                        >
                          <div class="w-6 h-6 bg-white rounded-full"></div>
                        </div>
                        <h5
                          class="font-[Sarpanch] font-semibold text-[#222222] text-sm"
                        >
                          RELIABLE
                        </h5>
                        <p class="text-xs text-[#555555] font-[Lato]">
                          Transport
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Floating Elements -->
              <div
                class="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full blur-xl animate-pulse"
              ></div>
              <div
                class="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-[#F4C7A4]/15 to-[#D4A574]/15 rounded-full blur-xl animate-pulse delay-1000"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </BaseContainer>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  title?: string;
  subTitle?: string;
  subTitle2?: string;
  firstDescription?: string;
  firstDescriptionLeft?: string;
  mission?: string;
  description?: string;
  url?: string;
  buttonContent?: string;
}>();
</script>
