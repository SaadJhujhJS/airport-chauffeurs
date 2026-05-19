<template>
  <section
    class="relative overflow-hidden bg-gradient-to-br from-[#2F3B35] via-[#3a4f42] to-[#425A4D]"
  >
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-[#F4C7A4]/10 to-[#D4A574]/10 rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-[#F4C7A4]/8 to-[#D4A574]/8 rounded-full blur-3xl animate-pulse delay-1000"
      ></div>
    </div>

    <BaseContainer class="py-16 md:py-24 relative z-10">
      <div class="text-center text-white">
        <div class="mb-8">
          <nav
            class="flex flex-wrap items-center justify-center gap-2 text-sm"
            aria-label="Breadcrumb"
          >
            <template v-for="(crumb, i) in breadcrumbs" :key="i">
              <NuxtLink
                v-if="crumb.to"
                :to="crumb.to"
                class="text-white/70 hover:text-[#D4A574] transition-colors"
              >
                {{ crumb.label }}
              </NuxtLink>
              <span v-else class="text-[#D4A574]">{{ crumb.label }}</span>
              <span v-if="i < breadcrumbs.length - 1" class="text-white/50">
                /
              </span>
            </template>
          </nav>
        </div>

        <h1
          class="text-4xl md:text-6xl lg:text-7xl font-[Sarpanch] font-bold mb-6 leading-tight"
        >
          {{ titleLine1 }}
          <span
            class="block bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] bg-clip-text text-transparent"
          >
            {{ titleLine2 }}
          </span>
        </h1>

        <p
          class="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed"
        >
          {{ description }}
        </p>

        <div v-if="showCta" class="flex justify-center">
          <NuxtLink to="/booking">
            <button
              type="button"
              class="px-8 py-4 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] text-[#151718] font-[Sarpanch] font-semibold text-lg rounded-2xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 cursor-pointer"
            >
              {{ ctaLabel }}
            </button>
          </NuxtLink>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
export interface HeroBreadcrumb {
  label: string;
  to?: string;
}

withDefaults(
  defineProps<{
    breadcrumbs: HeroBreadcrumb[];
    titleLine1: string;
    titleLine2: string;
    description: string;
    showCta?: boolean;
    ctaLabel?: string;
  }>(),
  {
    showCta: true,
    ctaLabel: 'Book Online',
  }
);
</script>
