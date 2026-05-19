<template>
  <footer class="bg-black border-t border-gray-800">
    <BaseContainer>
      <!-- Main Footer Content -->
      <div class="py-12 md:py-16">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <!-- Company Info -->
          <div class="text-center md:text-left">
            <div class="mb-6">
              <img
                src="/images/logo-v2.png"
                srcset="
                  /images/logo-image1@1x.png 1x,
                  /images/logo-image2@2x.png 2x
                "
                alt="Premium Airport Chauffeurs Logo"
                width="192"
                height="64"
                loading="lazy"
                decoding="async"
                class="w-48 h-auto mx-auto md:mx-0 cursor-pointer object-contain"
                @click="scrollToTop"
              />
            </div>
            <p
              class="text-gray-400 font-[Lato] text-sm leading-relaxed max-w-sm mx-auto md:mx-0"
            >
              Premium Airport Chauffeured has been offering comfort,
              convenience, and luxury in Australia since 2000.
            </p>
          </div>

          <!-- Quick Links -->
          <div class="text-center md:text-left">
            <h3 class="text-lg font-[Sarpanch] font-semibold mb-6 text-white">
              Quick Links
            </h3>
            <nav class="space-y-2.5">
              <NuxtLink
                v-for="(link, index) in navbarLinks"
                :key="index"
                :to="link.path"
                class="block text-gray-400 font-[Lato] font-medium hover:text-white hover:translate-x-1 transition-all duration-300 transform"
              >
                {{ link.name }}
              </NuxtLink>
            </nav>
          </div>

          <!-- Social Media -->
          <div class="text-center md:text-left">
            <h3 class="text-lg font-[Sarpanch] font-semibold mb-6 text-white">
              Follow Us
            </h3>
            <div
              class="flex items-center justify-center md:justify-start gap-4 mb-6"
            >
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                class="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-[#D4A574] hover:text-[#D4A574] hover:scale-110 transition-all duration-300 transform"
              >
                <IconFaceBookFooter class="w-4 h-4" />
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                class="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-[#D4A574] hover:text-[#D4A574] hover:scale-110 transition-all duration-300 transform"
              >
                <IconTwitterFooter class="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                class="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-[#D4A574] hover:text-[#D4A574] hover:scale-110 transition-all duration-300 transform"
              >
                <IconYoutubeFooter class="w-4 h-4" />
              </a>
            </div>
            <div class="bg-gray-900 rounded-lg p-4 border border-gray-700">
              <p class="text-white font-[Lato] font-medium text-sm mb-2">
                Need immediate assistance?
              </p>
              <a
                href="tel:+61461302970"
                class="text-[#D4A574] font-[Lato] font-semibold hover:text-white transition-colors duration-300"
              >
                Call Now: +61 461 302 970
              </a>
              <div class="mt-3 pt-3 border-t border-gray-700">
                <a
                  href="mailto:bookings@airportchauffeurs.com.au"
                  class="flex items-center gap-2 text-gray-400 font-[Lato] text-sm hover:text-[#D4A574] transition-colors duration-300"
                >
                  <IconMail class="w-4 h-4" />
                  <span>bookings@airportchauffeurs.com.au</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="border-t border-gray-800 py-6">
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm font-[Lato]"
        >
          <p>
            &copy; {{ currentYear }} AirportChauffeurs.com.au. All rights
            reserved.
          </p>
          <div class="flex items-center gap-4">
            <a
              href="/privacy-policy"
              class="hover:text-[#D4A574] transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <span>•</span>
            <a
              href="/terms-of-service"
              class="hover:text-[#D4A574] transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </BaseContainer>
  </footer>
</template>

<script setup lang="ts">
const navbarLinks = ref([
  { name: 'About', path: '/about-us' },
  { name: 'Services', path: '/services' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'Locations', path: '/locations' },
  { name: 'Fleet', path: '/fleet' },
  { name: 'Contact Us', path: '/contact-us' },
  { name: 'Book Online', path: '/booking' },
]);

const currentYear = new Date().getFullYear();

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
</script>
