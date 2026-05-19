<template>
  <div
    v-if="isScrolled && isMobile"
    data-mobile-sticky-navbar
    class="fixed top-4 left-4 right-4 z-50 transition-all duration-300"
    :class="
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
    "
  >
    <div
      class="bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg"
    >
      <BaseContainer>
        <div class="flex items-center justify-between py-3">
          <NuxtLink to="/" aria-label="Homepage" class="flex-shrink-0">
            <img
              src="/images/logo-v2.png"
              alt="Premium Airport Chauffeurs Logo"
              width="120"
              height="40"
              decoding="async"
              class="h-10 w-auto object-contain"
            />
          </NuxtLink>

          <button
            type="button"
            @click="toggleMobileMenu"
            class="inline-flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-300 cursor-pointer"
            :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
          >
            <IconHamburger
              v-if="!mobileMenuOpen"
              class="w-6 h-6"
              stroke="#000"
            />
            <IconCross v-else class="w-6 h-6" stroke="#000" />
          </button>
        </div>
      </BaseContainer>
    </div>

    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="mobileMenuOpen"
        class="mt-2 bg-white/95 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl overflow-hidden"
      >
        <BaseContainer>
          <div class="py-4">
            <nav>
              <ul class="space-y-2">
                <li v-for="(link, index) in navbarLinks" :key="index">
                  <NuxtLink
                    :to="link.path"
                    :aria-label="`Navigate to ${link.name}`"
                    @click="mobileMenuOpen = false"
                    :class="[
                      'flex items-center gap-3 px-4 py-3 rounded-xl font-[Lato] font-medium text-gray-700 hover:text-[#D4A574] hover:bg-white/50 transition-all duration-300 group',
                      route.path === link.path
                        ? 'text-[#D4A574] bg-white/50 shadow-sm font-semibold'
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
            </nav>

            <div class="mt-6 pt-4 border-t border-gray-200/50">
              <div class="flex flex-col gap-3">
                <NuxtLink to="/contact-us" @click="mobileMenuOpen = false">
                  <button
                    class="w-full px-6 py-3 rounded-full font-[Lato] font-semibold text-white bg-[#D4A574] hover:bg-[#D4A574]/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
                  >
                    Contact Us
                  </button>
                </NuxtLink>
                <NuxtLink to="/booking" @click="mobileMenuOpen = false">
                  <button
                    class="w-full px-6 py-3 rounded-full font-[Lato] font-semibold text-[#D4A574] bg-transparent border-2 border-[#D4A574] hover:bg-[#D4A574] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
                  >
                    Book Online
                  </button>
                </NuxtLink>
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const isScrolled = ref(false);
const isVisible = ref(false);
const isMobile = ref(false);
const mobileMenuOpen = ref(false);

const navbarLinks = ref([
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Airport Transfers', path: '/services/airport-transfers' },
  { name: 'Services', path: '/services' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'Locations', path: '/locations' },
  { name: 'Fleet', path: '/fleet' },
  { name: 'Contact Us', path: '/contact-us' },
  { name: 'Book Online', path: '/booking' },
]);

const toggleMobileMenu = () => {
  setTimeout(() => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
  }, 10);
};

const checkMobile = () => {
  isMobile.value = window.innerWidth < 1280;
};

const handleScroll = () => {
  const scrollY = window.scrollY;
  const threshold = 100;

  isScrolled.value = scrollY > threshold;

  if (scrollY > threshold) {
    setTimeout(() => {
      isVisible.value = true;
    }, 50);
  } else {
    isVisible.value = false;
  }
};

const handleClickOutside = (event: Event) => {
  if (mobileMenuOpen.value) {
    const target = event.target as HTMLElement;
    const navbar = target.closest('[data-mobile-sticky-navbar]');
    const isMenuButton = target.closest('button[aria-label*="menu"]');

    if (!navbar && !isMenuButton) {
      mobileMenuOpen.value = false;
    }
  }
};

onMounted(() => {
  checkMobile();
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', checkMobile);
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', checkMobile);
  document.removeEventListener('click', handleClickOutside);
});

watch(route, () => {
  mobileMenuOpen.value = false;
});

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
