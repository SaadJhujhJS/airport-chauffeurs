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
      <div class="flex flex-col items-center justify-center">
        <!-- Enhanced Header -->
        <div class="text-center mb-16 max-w-4xl">
          <div class="inline-flex items-center gap-3 mb-6">
            <div
              class="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#D4A574]"
            ></div>
            <span
              class="text-[#D4A574] font-[Sarpanch] font-semibold tracking-widest uppercase"
            >
              Essential Features
            </span>
            <div
              class="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#D4A574]"
            ></div>
          </div>

          <h2
            class="text-4xl md:text-5xl lg:text-6xl font-[Sarpanch] font-bold leading-tight mb-6"
          >
            {{ headerTitle1 }}
            <span
              class="block bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] bg-clip-text text-transparent"
            >
              {{ headerTitle2 }}
            </span>
          </h2>
        </div>

        <!-- Enhanced Features Grid -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full"
        >
          <div
            v-for="(feature, index) in features"
            :key="index"
            :class="[
              'group relative flex flex-col rounded-3xl p-6 lg:p-8 transition-all duration-700 transform hover:-translate-y-4 hover:shadow-2xl overflow-hidden',
              index === 0 || feature.title1 === 'Assured Payment'
                ? 'bg-gradient-to-br from-[#161618] to-[#2a2a2a] text-white'
                : 'bg-white hover:bg-gradient-to-br hover:from-[#161618] hover:to-[#2a2a2a] hover:text-white border border-gray-100 hover:border-transparent',
            ]"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <!-- Background decorative elements -->
            <div
              class="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-[#F4C7A4]/10 to-[#D4A574]/10 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"
            ></div>
            <div
              class="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-[#F4C7A4]/5 to-[#D4A574]/5 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"
            ></div>

            <!-- Enhanced Content -->
            <div class="flex-1 space-y-4">
              <h3
                :class="[
                  'text-2xl lg:text-3xl font-[Sarpanch] font-bold transition-all duration-500 leading-tight',
                  index === 0 || feature.title1 === 'Assured Payment'
                    ? 'text-white'
                    : 'text-[#161618] group-hover:text-white',
                ]"
              >
                {{ feature.title1 }}
                <span class="block">{{ feature.title2 }}</span>
              </h3>

              <p
                :class="[
                  'text-lg font-[Lato] font-medium leading-relaxed transition-all duration-500',
                  index === 0 || feature.title1 === 'Assured Payment'
                    ? 'text-white/90'
                    : 'text-gray-700 group-hover:text-white/90',
                ]"
              >
                {{ feature.description }}
              </p>
            </div>

            <!-- Enhanced Interactive Elements -->
            <div class="mt-8 space-y-4">
              <!-- Progress indicator -->
              <div
                :class="[
                  'flex items-center justify-between gap-4 transition-all duration-700',
                  index === 0 || feature.title1 === 'Assured Payment'
                    ? 'opacity-100 hidden'
                    : 'opacity-100 group-hover:opacity-0',
                ]"
              >
                <div
                  class="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden"
                >
                  <div
                    class="h-1 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] rounded-full transition-all duration-1000 ease-out w-3/4"
                  ></div>
                </div>
                <div
                  class="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center transition-all duration-500 group-hover:border-[#D4A574] group-hover:bg-[#D4A574]"
                >
                  <IconArrowRightTop
                    class="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300"
                  />
                </div>
              </div>

              <!-- Decorative bottom element -->
              <div
                :class="[
                  'absolute bottom-0 right-0 transition-all duration-700',
                  index === 0 || feature.title1 === 'Assured Payment'
                    ? 'opacity-100'
                    : 'opacity-0 group-hover:opacity-100',
                ]"
              >
                <img
                  src="/images/eclipse2.png"
                  alt=""
                  aria-hidden="true"
                  class="w-20 h-auto transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseContainer>
  </div>
</template>

<script setup lang="ts">
interface Feature {
  title1: string;
  title2: string;
  description: string;
}
defineProps<{
  headerTitle1?: string;
  headerTitle2?: string;
  features?: Feature[];
}>();
</script>
