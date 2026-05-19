<template>
  <div class="fixed bottom-6 right-6 z-50">
    <div class="relative">
      <button
        name="contact-button"
        aria-label="Contact Button"
        @click="togglePopup"
        :class="[
          'relative z-10 w-14 h-14 rounded-full bg-[#D4A574] hover:bg-[#D4A574] text-white flex items-center justify-center shadow-lg hover:scale-110 hover:ring-4 hover:ring-[#D4A574]/30 transition-all duration-300 cursor-pointer transform hover:-translate-y-1',
          isPopupOpen ? 'bg-[#D4A574] ring-4 ring-[#CBAE52]/30 scale-105' : '',
        ]"
      >
        <span
          v-if="!isPopupOpen"
          class="transition-transform duration-300 hover:rotate-12"
        >
          <IconQuickPhone stroke="#ffffff" class="w-6 h-6" />
        </span>
        <span v-else class="transition-transform duration-300 hover:rotate-90">
          <IconCross />
        </span>
      </button>
      <span
        :class="[
          !isPopupOpen
            ? 'absolute inset-0 rounded-full bg-[#D4A574] opacity-30 animate-ping'
            : '',
        ]"
      ></span>
    </div>
  </div>
  <transition name="fade">
    <div
      v-if="isPopupOpen"
      class="fixed inset-0 flex items-end justify-end mr-4 mb-26 z-50"
      @click.self="togglePopup"
    >
      <div
        class="bg-white overflow-hidden rounded-2xl shadow-2xl drop-shadow-2xl border-[0.3px] border-gray-200 py-6 w-72 text-center flex flex-col gap-4 transform transition-all duration-300 hover:scale-105"
      >
        <div class="flex items-center gap-2 group">
          <div
            class="-ml-0.5 w-3 h-6 rounded-full bg-[#1A1F2C] sm:bg-transparent sm:group-hover:bg-[#1A1F2C] transition-colors ease-in-out duration-300"
          ></div>
          <a
            href="tel:+61461302970"
            aria-label="Call Us Now"
            class="w-full flex items-center gap-3 mr-2.5 px-4 py-3 rounded-xl font-medium hover:bg-gray-100 transition-all duration-300 group transform hover:-translate-y-1"
          >
            <span
              class="p-3 bg-[#1A1F2C] rounded-full transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
            >
              <IconQuickPhone stroke="#ffffff" class="w-5 h-5 text-white" />
            </span>
            <div class="text-left">
              <p class="text-navy font-semibold text-base">Call Us Now</p>
              <p class="text-sm text-gray-600 font-medium">
                Immediate assistance
              </p>
            </div>
          </a>
        </div>
        <div class="flex items-center gap-2 group">
          <div
            class="-ml-0.5 w-3 h-6 rounded-full bg-green-500 sm:bg-transparent sm:group-hover:bg-green-500 transition-colors ease-in-out duration-300"
          ></div>
          <a
            :href="whatsappLink"
            aria-label="Whatsapp Us"
            target="_blank"
            class="w-full flex items-center gap-3 mr-2.5 px-4 py-3 rounded-xl font-medium hover:bg-gray-100 transition-all duration-300 group transform hover:-translate-y-1"
          >
            <span
              class="p-3 bg-green-500 rounded-full transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
            >
              <IconWhatsapp class="w-5 h-5 text-white" />
            </span>
            <div class="text-left">
              <p class="text-navy font-semibold text-base">Whatsapp Us</p>
              <p class="text-sm text-gray-600 font-medium">
                Quick chat support
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
const isPopupOpen = ref(false);

const togglePopup = () => {
  isPopupOpen.value = !isPopupOpen.value;
};

const phone = '+61461302970';
const text = encodeURIComponent('Hello! I would like to book a service.');
const whatsappLink = `https://api.whatsapp.com/send?phone=${phone}&text=${text}`;
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
