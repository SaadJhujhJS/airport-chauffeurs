<template>
  <nav class="relative">
    <BaseContainer>
      <div class="w-full flex items-center justify-between py-3 md:py-4">
        <!-- Logo -->
        <NuxtLink to="/" aria-label="Homepage" class="flex-shrink-0">
          <img
            src="/images/logo-v2.png"
            srcset="
              /images/logo-image1@1x.png 1x,
              /images/logo-image2@2x.png 2x
            "
            alt="Premium Airport Chauffeurs Logo"
            width="180"
            height="64"
            decoding="async"
            class="h-12 md:h-16 w-auto object-contain"
          />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden xl:flex items-center gap-8">
          <ul
            class="flex items-center gap-7 list-none text-white font-[Lato] font-medium"
          >
            <li v-for="(link, index) in navbarLinks" :key="index">
              <NuxtLink
                :to="link.path"
                :class="[
                  'inline-flex items-center hover:text-[#D4A574] transition-colors duration-300 relative group',
                  route.path === link.path ? 'text-[#D4A574]' : '',
                ]"
              >
                {{ link.name }}
                <span
                  v-if="route.path === link.path"
                  class="absolute -bottom-1 left-0 w-full h-0.5 bg-[#D4A574] rounded-full"
                ></span>
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Desktop CTA Buttons -->
        <div class="hidden xl:flex items-center gap-3">
          <NuxtLink to="/contact-us">
            <button
              class="px-6 py-2.5 rounded-full font-[Lato] font-semibold text-white bg-[#D4A574] hover:bg-[#D4A574]/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
            >
              Contact Us
            </button>
          </NuxtLink>
          <NuxtLink to="/booking">
            <button
              class="px-6 py-2.5 rounded-full font-[Lato] font-semibold text-[#D4A574] bg-transparent border-2 border-[#D4A574] hover:bg-[#D4A574] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
            >
              Book Online
            </button>
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          type="button"
          class="xl:hidden inline-flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-300 cursor-pointer"
          :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
        >
          <IconHamburger v-if="!mobileMenuOpen" class="w-6 h-6" />
        </button>
      </div>
    </BaseContainer>

    <!-- Mobile Menu Overlay -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="mobileMenuOpen"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 xl:hidden"
        @click="mobileMenuOpen = false"
      ></div>
    </transition>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 transform translate-x-full"
      enter-to-class="opacity-100 transform translate-x-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 transform translate-x-0"
      leave-to-class="opacity-0 transform translate-x-full"
    >
      <div
        v-if="mobileMenuOpen"
        class="fixed top-0 right-0 w-full h-full bg-white shadow-2xl z-50 xl:hidden overflow-hidden"
      >
        <!-- Mobile Menu Header -->
        <div class="bg-gradient-to-r from-[#F4C7A4] to-[#D4A574]/90 px-6 py-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div>
                <h2 class="text-white font-[Sarpanch] font-semibold text-sm">
                  Premium Airport Chauffeurs
                </h2>
                <p class="text-white/80 font-[Lato] text-xs">
                  Luxury Transportation
                </p>
              </div>
            </div>
            <button
              type="button"
              @click="mobileMenuOpen = false"
              class="inline-flex items-center justify-center p-2 rounded-full text-white hover:bg-white/20 transition-colors duration-300 cursor-pointer"
              aria-label="Close menu"
            >
              <IconCross class="w-7 h-7" />
            </button>
          </div>
        </div>

        <!-- Mobile Menu Content -->
        <div class="flex flex-col h-full bg-gray-50 overflow-y-auto">
          <!-- Navigation Links -->
          <nav class="px-6 py-2 pb-8">
            <div class="mb-6">
              <ul>
                <li v-for="(link, index) in navbarLinks" :key="index">
                  <NuxtLink
                    :to="link.path"
                    :aria-label="`Navigate to ${link.name}`"
                    @click="mobileMenuOpen = false"
                    :class="[
                      'flex items-center gap-3 px-4 py-3 rounded-xl font-[Lato] font-medium text-gray-700 hover:text-[#D4A574] hover:bg-white transition-all duration-300 group',
                      route.path === link.path
                        ? 'text-[#D4A574] bg-white shadow-sm font-semibold'
                        : '',
                    ]"
                  >
                    <div
                      :class="[
                        'w-2 h-2 rounded-full transition-colors duration-300',
                        route.path === link.path
                          ? 'bg-[#D4A574]'
                          : 'bg-gray-300 group-hover:bg-[#D4A574]',
                      ]"
                    ></div>
                    <span>{{ link.name }}</span>
                    <IconArrowRight
                      v-if="route.path === link.path"
                      class="w-4 h-4 ml-auto text-[#D4A574]"
                    />
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </transition>
  </nav>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const navbarLinks = ref([
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Services', path: '/services' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'Locations', path: '/locations' },
  { name: 'Fleet', path: '/fleet' },
  { name: 'Contact Us', path: '/contact-us' },
  { name: 'Book Online', path: '/booking' },
]);
const mobileMenuOpen = ref(false);
const toggleMobileMenu = () => (mobileMenuOpen.value = !mobileMenuOpen.value);

watch(mobileMenuOpen, isOpen => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    setTimeout(() => {
      document.body.style.overflow = 'auto';
    }, 300);
  }
});

onUnmounted(() => {
  document.body.style.overflow = 'auto';
});
</script>
