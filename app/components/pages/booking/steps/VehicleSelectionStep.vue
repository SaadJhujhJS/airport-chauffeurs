<template>
  <div class="space-y-6">
    <!-- Step Header -->
    <div class="text-center">
      <h2
        class="text-2xl md:text-3xl font-[Sarpanch] font-bold text-[#222222] mb-2"
      >
        Choose Your Vehicle Category (Optional)
      </h2>
      <p class="text-base text-gray-600 max-w-2xl mx-auto">
        Select a preferred vehicle category for your journey, or skip to
        continue with our standard service
      </p>
    </div>

    <!-- Desktop Category Selection -->
    <div
      class="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4"
    >
      <div
        v-for="category in availableCategories"
        :key="category.id"
        @click="selectCategory(category)"
        :class="[
          'group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border-2 cursor-pointer',
          selectedCategory?.id === category.id
            ? 'border-[#D4A574] ring-2 ring-[#D4A574]/20'
            : 'border-gray-100 hover:border-[#D4A574]',
        ]"
      >
        <div class="p-4">
          <!-- Header with Icon and Selection -->
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center">
              <div
                class="w-10 h-10 bg-gradient-to-br from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center mr-3"
              >
                <span class="text-base text-white">{{ category.icon }}</span>
              </div>
              <div>
                <h3 class="text-lg font-[Sarpanch] font-bold text-[#222222]">
                  {{ category.label }}
                </h3>
              </div>
            </div>

            <!-- Selection Indicator -->
            <div
              :class="[
                'w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300',
                selectedCategory?.id === category.id
                  ? 'bg-[#D4A574]'
                  : 'bg-gray-200 group-hover:bg-[#D4A574]/50',
              ]"
            >
              <IconTick
                v-if="selectedCategory?.id === category.id"
                class="w-4 h-4 text-white"
              />
              <span
                v-else
                class="text-xs font-bold text-gray-600 group-hover:text-white"
              >
                {{ category.id.charAt(0).toUpperCase() }}
              </span>
            </div>
          </div>

          <!-- Description -->
          <p class="text-sm text-gray-600 mb-4 leading-relaxed">
            {{ category.description }}
          </p>

          <!-- Category Specs -->
          <div class="grid grid-cols-2 gap-3">
            <div class="bg-gray-50 rounded-lg p-3 text-center">
              <p class="text-xs text-gray-500 font-medium mb-1">Capacity</p>
              <p class="text-sm font-semibold text-[#222222]">
                {{ category.capacity }}
              </p>
            </div>
            <div class="bg-gray-50 rounded-lg p-3 text-center">
              <p class="text-xs text-gray-500 font-medium mb-1">Luggage</p>
              <p class="text-sm font-semibold text-[#222222]">
                {{ category.luggage }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Category Swiper -->
    <div class="md:hidden">
      <Swiper v-bind="categorySwiperOptions" class="category-swiper">
        <SwiperSlide v-for="category in availableCategories" :key="category.id">
          <div
            @click="selectCategory(category)"
            :class="[
              'group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border-2 cursor-pointer h-full',
              selectedCategory?.id === category.id
                ? 'border-[#D4A574] ring-2 ring-[#D4A574]/20'
                : 'border-gray-100 hover:border-[#D4A574]',
            ]"
          >
            <div class="p-3 h-full">
              <!-- Header with Icon and Selection -->
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center">
                  <div
                    class="w-8 h-8 bg-gradient-to-br from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center mr-3"
                  >
                    <span class="text-sm text-white">{{ category.icon }}</span>
                  </div>
                  <div>
                    <h3
                      class="text-base font-[Sarpanch] font-bold text-[#222222]"
                    >
                      {{ category.label }}
                    </h3>
                  </div>
                </div>

                <!-- Selection Indicator -->
                <div
                  :class="[
                    'w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300',
                    selectedCategory?.id === category.id
                      ? 'bg-[#D4A574]'
                      : 'bg-gray-200 group-hover:bg-[#D4A574]/50',
                  ]"
                >
                  <IconTick
                    v-if="selectedCategory?.id === category.id"
                    class="w-3 h-3 text-white"
                  />
                  <span
                    v-else
                    class="text-xs font-bold text-gray-600 group-hover:text-white"
                  >
                    {{ category.id.charAt(0).toUpperCase() }}
                  </span>
                </div>
              </div>

              <!-- Description -->
              <p class="text-xs text-gray-600 mb-3 leading-relaxed">
                {{ category.description }}
              </p>

              <!-- Category Specs -->
              <div class="grid sm:grid-cols-2 gap-2">
                <div
                  class="bg-gray-50 rounded-lg p-2 flex flex-row sm:flex-col justify-between sm:text-center"
                >
                  <p class="text-xs text-gray-500 font-medium mb-1">Capacity</p>
                  <p class="text-xs font-semibold text-[#222222]">
                    {{ category.capacity }}
                  </p>
                </div>
                <div
                  class="bg-gray-50 rounded-lg p-2 flex flex-row sm:flex-col justify-between sm:text-center"
                >
                  <p class="text-xs text-gray-500 font-medium mb-1">Luggage</p>
                  <p class="text-xs font-semibold text-[#222222]">
                    {{ category.luggage }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <!-- Selected Category Summary -->
    <div
      v-if="selectedCategory"
      class="bg-gradient-to-r from-[#F4C7A4]/10 to-[#D4A574]/10 rounded-2xl p-4 border border-[#D4A574]/20"
    >
      <div class="flex items-center gap-3">
        <div
          class="w-12 h-12 bg-gradient-to-br from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center"
        >
          <span class="text-lg text-white">
            {{ selectedCategory.icon }}
          </span>
        </div>
        <div class="flex-1">
          <h3 class="text-base font-[Sarpanch] font-bold text-[#222222]">
            {{ selectedCategory.label }}
          </h3>
          <p class="text-sm text-gray-600">
            {{ selectedCategory.capacity }} •
            {{ selectedCategory.luggage }}
          </p>
        </div>
        <div class="text-right">
          <p class="text-sm text-gray-500">Selected Category</p>
          <p class="text-base font-bold text-[#D4A574]">Ready to Book</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconTick from '~/components/icons/IconTick.vue';
import IconUser from '~/components/icons/IconUser.vue';
import IconBriefCase from '~/components/icons/IconBriefCase.vue';
import IconArrowRight from '~/components/icons/IconArrowRight.vue';
import type { FleetCategory } from '~/composables/useFleetData';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const { categories } = useFleetData();

const props = defineProps<{
  selectedCategory?: FleetCategory | null;
}>();

const emit = defineEmits<{
  'update:selectedCategory': [category: FleetCategory | null];
}>();

const selectedCategory = ref<FleetCategory | null>(
  props.selectedCategory || null
);

// Available categories (excluding 'all')
const availableCategories = computed(() => {
  return categories.filter(category => category.id !== 'all');
});

// Swiper options for category cards
const categorySwiperOptions = {
  modules: [Autoplay, Navigation],
  slidesPerView: 1.2,
  spaceBetween: 16,
  centeredSlides: false,
  grabCursor: true,
  freeMode: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 12,
    },
    480: {
      slidesPerView: 1.3,
      spaceBetween: 16,
    },
    640: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
  },
} as any;

const selectCategory = (category: FleetCategory) => {
  if (selectedCategory.value?.id === category.id) {
    // If clicking the same category, unselect it
    selectedCategory.value = null;
    emit('update:selectedCategory', null);
  } else {
    // Otherwise, select the new category
    selectedCategory.value = category;
    emit('update:selectedCategory', category);
  }
};

// Watch for prop changes
watch(
  () => props.selectedCategory,
  newValue => {
    selectedCategory.value = newValue;
  }
);
</script>

<style scoped>
@media (max-width: 768px) {
  .tabs-swiper {
    padding: 6px 6px 10px 6px;
  }
}
</style>
