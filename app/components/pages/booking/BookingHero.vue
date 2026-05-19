<template>
  <section
    class="hidden sm:block relative w-full bg-gradient-to-br from-[#425A4D] to-[#2F3B35] py-16 md:py-20"
  >
    <div class="absolute inset-0 bg-black/20"></div>

    <div class="relative z-10 text-white mt-5">
      <BaseContainer>
        <div class="text-center max-w-4xl mx-auto">
          <!-- Main Title -->
          <h1
            class="text-4xl md:text-6xl font-[Sarpanch] font-bold mb-6 leading-tight"
          >
            Book Your
            <span class="text-[#D4A574]">Premium</span>
            Chauffeur Service
          </h1>

          <!-- Subtitle -->
          <p
            class="text-xl md:text-2xl font-[Lato] font-medium mb-8 text-gray-200 leading-relaxed"
          >
            Experience luxury transportation with our professional chauffeurs.
            Get instant quotes and secure your booking in just 3 simple steps.
          </p>

          <!-- Benefits List -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10">
            <div class="flex flex-col items-center text-center">
              <div
                class="w-16 h-16 bg-[#D4A574] rounded-full flex items-center justify-center mb-4"
              >
                <IconTick class="w-8 h-8 text-[#2F3B35]" />
              </div>
              <h2 class="text-lg font-[Sarpanch] font-semibold mb-2">
                Instant Quote
              </h2>
              <p class="text-gray-300 text-sm">
                Get immediate pricing for your journey
              </p>
            </div>

            <div class="flex flex-col items-center text-center">
              <div
                class="w-16 h-16 bg-[#D4A574] rounded-full flex items-center justify-center mb-4"
              >
                <IconTick class="w-8 h-8 text-[#2F3B35]" />
              </div>
              <h2 class="text-lg font-[Sarpanch] font-semibold mb-2">
                Professional Drivers
              </h2>
              <p class="text-gray-300 text-sm">
                Experienced chauffeurs with local knowledge
              </p>
            </div>

            <div class="flex flex-col items-center text-center">
              <div
                class="w-16 h-16 bg-[#D4A574] rounded-full flex items-center justify-center mb-4"
              >
                <IconTick class="w-8 h-8 text-[#2F3B35]" />
              </div>
              <h2 class="text-lg font-[Sarpanch] font-semibold mb-2">
                24/7 Support
              </h2>
              <p class="text-gray-300 text-sm">
                Round-the-clock customer assistance
              </p>
            </div>
          </div>

          <!-- Call to Action -->
          <div
            class="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <div class="flex items-center gap-2 text-[#D4A574]">
              <IconTick class="w-5 h-5" fill="#fff" />
              <span class="font-[Lato] font-medium">No hidden fees</span>
            </div>
            <div class="flex items-center gap-2 text-[#D4A574]">
              <IconTick class="w-5 h-5" fill="#fff" />
              <span class="font-[Lato] font-medium">Free cancellation</span>
            </div>
            <div class="flex items-center gap-2 text-[#D4A574]">
              <IconTick class="w-5 h-5" fill="#fff" />
              <span class="font-[Lato] font-medium">GPS tracking</span>
            </div>
          </div>
        </div>
      </BaseContainer>
    </div>

    <!-- Decorative Elements -->
    <div
      class="absolute top-10 left-10 w-20 h-20 bg-[#D4A574]/10 rounded-full"
    ></div>
    <div
      class="absolute bottom-10 right-10 w-32 h-32 bg-[#D4A574]/5 rounded-full"
    ></div>
    <div
      class="absolute top-1/2 left-1/4 w-16 h-16 bg-[#D4A574]/10 rounded-full"
    ></div>
  </section>
</template>

<script setup lang="ts">
// No props needed - this is a self-contained hero section
</script>
