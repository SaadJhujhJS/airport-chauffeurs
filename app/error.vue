<template>
  <NuxtLayout>
    <section
      class="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[#2F3B35] via-[#3a4f42] to-[#425A4D] py-24"
    >
      <BaseContainer class="text-center text-white">
        <p
          class="text-[#D4A574] font-[Sarpanch] font-semibold tracking-widest uppercase mb-4"
        >
          Error {{ statusCode }}
        </p>
        <h1
          class="text-5xl md:text-7xl font-[Sarpanch] font-bold mb-6 leading-tight"
        >
          {{ heading }}
        </h1>
        <p class="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10">
          {{ message }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/">
            <button
              class="px-8 py-4 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] text-[#151718] font-[Sarpanch] font-semibold text-lg rounded-2xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 cursor-pointer"
            >
              Back to Home
            </button>
          </NuxtLink>
          <NuxtLink to="/contact-us">
            <button
              class="px-8 py-4 bg-transparent border-2 border-white text-white font-[Sarpanch] font-semibold text-lg rounded-2xl transition-all duration-500 hover:bg-white hover:text-[#151718] cursor-pointer"
            >
              Contact Support
            </button>
          </NuxtLink>
        </div>

        <div class="mt-12 pt-10 border-t border-white/15">
          <p
            class="text-sm uppercase tracking-widest text-white/70 font-[Sarpanch] mb-6"
          >
            Explore Popular Pages
          </p>
          <nav
            class="flex flex-wrap justify-center gap-x-6 gap-y-3 font-[Lato] text-white/90"
          >
            <NuxtLink
              to="/services"
              class="hover:text-[#D4A574] transition-colors"
              >Our Services</NuxtLink
            >
            <NuxtLink
              to="/fleet"
              class="hover:text-[#D4A574] transition-colors"
              >Luxury Fleet</NuxtLink
            >
            <NuxtLink
              to="/services/airport-transfers"
              class="hover:text-[#D4A574] transition-colors"
              >Airport Transfers</NuxtLink
            >
            <NuxtLink
              to="/booking"
              class="hover:text-[#D4A574] transition-colors"
              >Book Online</NuxtLink
            >
            <NuxtLink
              to="/about-us"
              class="hover:text-[#D4A574] transition-colors"
              >About Us</NuxtLink
            >
          </nav>
        </div>
      </BaseContainer>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
interface NuxtError {
  statusCode?: number;
  statusMessage?: string;
  message?: string;
}

const props = defineProps<{ error: NuxtError }>();

const statusCode = computed(() => props.error?.statusCode || 500);

const heading = computed(() => {
  if (statusCode.value === 404) return 'Page Not Found';
  if (statusCode.value === 403) return 'Access Forbidden';
  return 'Something Went Wrong';
});

const message = computed(() => {
  if (statusCode.value === 404)
    return 'The page you\'re looking for doesn\'t exist or has been moved. Try heading back to the homepage or browse our chauffeur services.';
  return 'An unexpected error occurred. Please try again or contact our 24/7 support team.';
});

usePageSeo({
  title: `${statusCode.value} — ${heading.value}`,
  description: message.value,
  path: '/error',
  robots: 'noindex, follow',
});
</script>
