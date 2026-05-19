<template>
  <div :class="['py-10 md:py-20', title2 ? 'bg-white' : 'bg-[#425A4D]']">
    <BaseContainer>
      <div class="flex flex-col items-center justify-center mb-10">
        <h2
          :class="[
            'text-4xl md:text-5xl font-[Sarpanch] font-semibold leading-none mb-3 text-center',
            title2 ? 'text-[#222222]' : 'text-white',
          ]"
        >
          {{ title1 }} {{ title2 }}
        </h2>
      </div>

      <!-- Desktop Tabs -->
      <div class="hidden md:flex justify-center flex-wrap gap-6 mb-8">
        <button
          v-for="(category, index) in categories"
          :key="index"
          @click="selectedCategory = category.name"
          :class="[
            'group relative px-6 py-3 rounded-2xl font-[Lato] font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg border-2 cursor-pointer',
            selectedCategory === category.name
              ? 'bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] text-white border-[#D4A574] shadow-xl scale-105'
              : 'bg-white text-[#222222] border-gray-200 hover:border-[#D4A574] hover:text-[#D4A574] hover:shadow-xl',
          ]"
        >
          <!-- Active indicator -->
          <div
            v-if="selectedCategory === category.name"
            class="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full flex items-center justify-center"
          >
            <div class="w-2 h-2 bg-[#D4A574] rounded-full"></div>
          </div>

          <!-- Category icon -->
          <div class="flex items-center gap-2">
            <div
              :class="[
                'w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300',
                selectedCategory === category.name
                  ? 'bg-white/20'
                  : 'bg-gray-100 group-hover:bg-[#D4A574]/10',
              ]"
            >
              <div
                :class="[
                  'w-3 h-3 rounded-full transition-all duration-300',
                  selectedCategory === category.name
                    ? 'bg-white'
                    : 'bg-[#D4A574] group-hover:bg-[#D4A574]',
                ]"
              ></div>
            </div>
            <span class="whitespace-nowrap">{{ category.label }}</span>
          </div>

          <!-- Hover effect -->
          <div
            :class="[
              'absolute inset-0 rounded-2xl transition-all duration-300',
              selectedCategory === category.name
                ? 'bg-gradient-to-r from-[#E88A3F] to-[#C4965A] opacity-0'
                : 'bg-gradient-to-r from-[#F4C7A4]/10 to-[#D4A574]/10 opacity-0 group-hover:opacity-100',
            ]"
          ></div>
        </button>
      </div>

      <!-- Mobile Swiper Tabs -->
      <div class="md:hidden mb-8">
        <Swiper v-bind="tabsSwiperOptions" class="tabs-swiper">
          <SwiperSlide
            v-for="(category, index) in categories"
            :key="index"
            class="!w-auto"
          >
            <button
              @click="selectedCategory = category.name"
              :class="[
                'group relative px-6 py-3 rounded-2xl font-[Lato] font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg border-2 cursor-pointer whitespace-nowrap',
                selectedCategory === category.name
                  ? 'bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] text-white border-[#D4A574] shadow-xl scale-105'
                  : 'bg-white text-[#222222] border-gray-200 hover:border-[#D4A574] hover:text-[#D4A574] hover:shadow-xl',
              ]"
            >
              <!-- Active indicator -->
              <div
                v-if="selectedCategory === category.name"
                class="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full flex items-center justify-center"
              >
                <div class="w-2 h-2 bg-[#D4A574] rounded-full"></div>
              </div>

              <!-- Category icon -->
              <div class="flex items-center gap-2">
                <div
                  :class="[
                    'w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300',
                    selectedCategory === category.name
                      ? 'bg-white/20'
                      : 'bg-gray-100 group-hover:bg-[#D4A574]/10',
                  ]"
                >
                  <div
                    :class="[
                      'w-3 h-3 rounded-full transition-all duration-300',
                      selectedCategory === category.name
                        ? 'bg-white'
                        : 'bg-[#D4A574] group-hover:bg-[#D4A574]',
                    ]"
                  ></div>
                </div>
                <span class="whitespace-nowrap">{{ category.label }}</span>
              </div>

              <!-- Hover effect -->
              <div
                :class="[
                  'absolute inset-0 rounded-2xl transition-all duration-300',
                  selectedCategory === category.name
                    ? 'bg-gradient-to-r from-[#E88A3F] to-[#C4965A] opacity-0'
                    : 'bg-gradient-to-r from-[#F4C7A4]/10 to-[#D4A574]/10 opacity-0 group-hover:opacity-100',
                ]"
              ></div>
            </button>
          </SwiperSlide>
        </Swiper>
      </div>

      <!-- Desktop Cards Grid -->
      <div class="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div
          v-for="(car, index) in filteredImages"
          :key="index"
          :class="[
            'group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100',
            title2 ? 'text-[#222222]' : 'text-white',
          ]"
        >
          <!-- Vehicle Image -->
          <div class="relative h-48 overflow-hidden">
            <img
              :src="car.images[getCurrentImageIndex(car.id)]"
              :alt="`${car.title} luxury chauffeur car - ${car.info} ${car.moreInfo}`"
              class="w-full h-full object-cover transition-all duration-500"
            />
            <!-- Gradient Overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
            ></div>

            <!-- Category Badge -->
            <div class="absolute top-3 right-3">
              <span
                class="px-3 py-1 bg-[#D4A574] text-white text-xs font-bold rounded-full"
              >
                {{ getCategoryLabel(car.category) }}
              </span>
            </div>

            <!-- Image Slider Controls -->
            <div
              v-if="car.images && car.images.length > 1"
              class="absolute bottom-3 left-3 flex gap-1"
            >
              <button
                v-for="(img, imgIndex) in car.images"
                :key="imgIndex"
                aria-label="View image"
                @click="setCurrentImage(car.id, imgIndex)"
                :class="[
                  'w-2 h-2 rounded-full transition-all duration-300 cursor-pointer',
                  getCurrentImageIndex(car.id) === imgIndex
                    ? 'bg-[#D4A574] scale-125'
                    : 'bg-white/60 hover:bg-white/80',
                ]"
              ></button>
            </div>

            <!-- View Details Button -->
            <div class="absolute top-3 left-3">
              <button
                @click="showVehicleModal(car)"
                class="bg-white/90 backdrop-blur-sm text-[#D4A574] px-3 py-1 rounded-full text-xs font-bold hover:bg-[#D4A574] hover:text-white transition-all duration-300 cursor-pointer"
              >
                View Details
              </button>
            </div>
          </div>

          <!-- Enhanced Content Section -->
          <div class="p-6">
            <h3 class="text-xl font-[Sarpanch] font-bold text-[#222222] mb-4">
              {{ car.title }}
            </h3>

            <!-- Specifications Grid -->
            <div class="grid grid-cols-2 gap-4 mb-4">
              <div class="text-center p-3 bg-gray-50 rounded-xl">
                <div
                  class="w-8 h-8 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-2"
                >
                  <IconUser class="w-4 h-4 text-white" />
                </div>
                <p class="text-xs text-gray-500 font-medium">Passengers</p>
                <p class="text-sm font-bold text-[#222222]">{{ car.info }}</p>
              </div>

              <div class="text-center p-3 bg-gray-50 rounded-xl">
                <div
                  class="w-8 h-8 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-2"
                >
                  <IconBriefCase class="w-4 h-4 text-white" />
                </div>
                <p class="text-xs text-gray-500 font-medium">Luggage</p>
                <p class="text-xs font-bold text-[#222222]">
                  {{ car.moreInfo }}
                </p>
              </div>
            </div>

            <!-- Features -->
            <div class="mb-4">
              <h4
                class="text-sm font-bold text-[#222222] mb-2 flex items-center gap-2"
              >
                <div
                  class="w-4 h-4 bg-[#D4A574] rounded-full flex items-center justify-center"
                >
                  <IconTick class="w-3 h-3 text-white" />
                </div>
                Key Features
              </h4>
              <p class="text-sm text-gray-600 leading-relaxed">
                {{ car.features }}
              </p>
            </div>

            <!-- Quote CTA -->
            <div
              class="bg-gradient-to-r from-[#F4C7A4]/10 to-[#D4A574]/10 rounded-xl p-4 text-center"
            >
              <p class="text-sm font-bold text-[#222222] mb-2">
                Get Your Quote
              </p>
              <p class="text-xs text-gray-600 mb-3">
                Professional drivers provide competitive rates
              </p>
              <NuxtLink
                to="/contact-us"
                class="inline-block bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] text-white px-4 py-2 rounded-lg font-bold text-sm hover:from-[#E88A3F] hover:to-[#C4965A] transition-all duration-300 transform hover:scale-105"
              >
                Request Quote
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Swiper Cards -->
      <div class="md:hidden mt-8">
        <Swiper v-bind="cardsSwiperOptions" class="cards-swiper">
          <SwiperSlide v-for="(car, index) in filteredImages" :key="index">
            <div
              :class="[
                'group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 h-full',
                title2 ? 'text-[#222222]' : 'text-white',
              ]"
            >
              <!-- Vehicle Image -->
              <div class="relative h-48 overflow-hidden">
                <img
                  :src="car.images[getCurrentImageIndex(car.id)]"
                  :alt="`${car.title} luxury chauffeur car - ${car.info} ${car.moreInfo}`"
                  class="w-full h-full object-cover transition-all duration-500"
                />
                <!-- Gradient Overlay -->
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                ></div>

                <!-- Category Badge -->
                <div class="absolute top-3 right-3">
                  <span
                    class="px-3 py-1 bg-[#D4A574] text-white text-xs font-bold rounded-full"
                  >
                    {{ getCategoryLabel(car.category) }}
                  </span>
                </div>

                <!-- Image Slider Controls -->
                <div
                  v-if="car.images && car.images.length > 1"
                  class="absolute bottom-3 left-3 flex gap-1"
                >
                  <button
                    v-for="(img, imgIndex) in car.images"
                    :key="imgIndex"
                    aria-label="View image"
                    @click="setCurrentImage(car.id, imgIndex)"
                    :class="[
                      'w-2 h-2 rounded-full transition-all duration-300 cursor-pointer',
                      getCurrentImageIndex(car.id) === imgIndex
                        ? 'bg-[#D4A574] scale-125'
                        : 'bg-white/60 hover:bg-white/80',
                    ]"
                  ></button>
                </div>

                <!-- View Details Button -->
                <div class="absolute top-3 left-3">
                  <button
                    @click="showVehicleModal(car)"
                    class="bg-white/90 backdrop-blur-sm text-[#D4A574] px-3 py-1 rounded-full text-xs font-bold hover:bg-[#D4A574] hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    View Details
                  </button>
                </div>
              </div>

              <!-- Enhanced Content Section -->
              <div class="p-6">
                <h3
                  class="text-xl font-[Sarpanch] font-bold text-[#222222] mb-4"
                >
                  {{ car.title }}
                </h3>

                <!-- Specifications Grid -->
                <div class="grid grid-cols-2 gap-4 mb-4">
                  <div class="text-center p-3 bg-gray-50 rounded-xl">
                    <div
                      class="w-8 h-8 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-2"
                    >
                      <IconUser class="w-4 h-4 text-white" />
                    </div>
                    <p class="text-xs text-gray-500 font-medium">Passengers</p>
                    <p class="text-sm font-bold text-[#222222]">
                      {{ car.info }}
                    </p>
                  </div>

                  <div class="text-center p-3 bg-gray-50 rounded-xl">
                    <div
                      class="w-8 h-8 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-2"
                    >
                      <IconBriefCase class="w-4 h-4 text-white" />
                    </div>
                    <p class="text-xs text-gray-500 font-medium">Luggage</p>
                    <p class="text-xs font-bold text-[#222222]">
                      {{ car.moreInfo }}
                    </p>
                  </div>
                </div>

                <!-- Features -->
                <div class="mb-4">
                  <h4
                    class="text-sm font-bold text-[#222222] mb-2 flex items-center gap-2"
                  >
                    <div
                      class="w-4 h-4 bg-[#D4A574] rounded-full flex items-center justify-center"
                    >
                      <IconTick class="w-3 h-3 text-white" />
                    </div>
                    Key Features
                  </h4>
                  <p class="text-sm text-gray-600 leading-relaxed">
                    {{ car.features }}
                  </p>
                </div>

                <!-- Quote CTA -->
                <div
                  class="bg-gradient-to-r from-[#F4C7A4]/10 to-[#D4A574]/10 rounded-xl p-4 text-center"
                >
                  <p class="text-sm font-bold text-[#222222] mb-2">
                    Get Your Quote
                  </p>
                  <p class="text-xs text-gray-600 mb-3">
                    Professional drivers provide competitive rates
                  </p>
                  <NuxtLink
                    to="/contact-us"
                    class="inline-block bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] text-white px-4 py-2 rounded-lg font-bold text-sm hover:from-[#E88A3F] hover:to-[#C4965A] transition-all duration-300 transform hover:scale-105"
                  >
                    Request Quote
                  </NuxtLink>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div class="flex items-center justify-center mt-8">
        <NuxtLink
          to="/booking"
          aria-label="Book a luxury chauffeur car"
          title="Book a luxury chauffeur car"
        >
          <button
            name="book-a-car"
            :class="[
              'font-[Lato] font-semibold uppercase leading-tight py-3.5 px-15 bg-[#D4A574] hover:bg-transparent border-[1.5px] border-[#D4A574] transition-colors duration-300 rounded-full cursor-pointer',
              title2
                ? 'text-[#151718] hover:text-[#151718]'
                : 'text-[#151718] hover:text-white',
            ]"
          >
            Book a Car
          </button>
        </NuxtLink>
      </div>
    </BaseContainer>
  </div>
</template>

<script setup lang="ts">
import IconUser from '~/components/icons/IconUser.vue';
import IconTick from '~/components/icons/IconTick.vue';
import IconBriefCase from '~/components/icons/IconBriefCase.vue';
import Swal from 'sweetalert2';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Swiper options for tabs
const tabsSwiperOptions = {
  modules: [Autoplay, Navigation, FreeMode],
  slidesPerView: 'auto',
  spaceBetween: 16,
  centeredSlides: false,
  grabCursor: true,
  freeMode: true,
  breakpoints: {
    320: { spaceBetween: 12 },
    480: { spaceBetween: 16 },
    640: { spaceBetween: 20 },
  },
} as any;

// Swiper options for cards
const cardsSwiperOptions = {
  modules: [Autoplay, Navigation, FreeMode],
  slidesPerView: 1.2,
  spaceBetween: 16,
  centeredSlides: false,
  grabCursor: true,
  freeMode: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 12,
    },
    480: {
      slidesPerView: 1.5,
      spaceBetween: 16,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 24,
    },
  },
} as any;

defineProps<{
  title1?: string;
  title2?: string;
}>();

// Use centralized fleet data
const { categories, getAllVehicles } = useFleetData();

// Transform fleet data to match component structure
const images = computed(() => {
  const allVehicles = getAllVehicles();
  const transformedData: { [key: string]: any[] } = {};

  // Group vehicles by category using the fleet data structure
  allVehicles.forEach(vehicle => {
    // Map vehicle category to the correct key (matching fleet data keys)
    let categoryKey = '';
    if (vehicle.category.includes('Executive')) categoryKey = 'executiveSedans';
    else if (
      vehicle.category.includes('Premium') &&
      vehicle.category.includes('Sedan')
    )
      categoryKey = 'premiumSedans';
    else if (
      vehicle.category.includes('Premium') &&
      vehicle.category.includes('SUV')
    )
      categoryKey = 'premiumSUVs';
    else if (vehicle.category.includes('Electric'))
      categoryKey = 'electricVehicles';
    else if (vehicle.category.includes('Minibus'))
      categoryKey = 'luxuryMinibuses';
    else if (vehicle.category.includes('Van')) categoryKey = 'vans';

    if (!transformedData[categoryKey]) {
      transformedData[categoryKey] = [];
    }

    transformedData[categoryKey].push({
      id: vehicle.id,
      title: vehicle.name,
      images: vehicle.images,
      info: vehicle.passengers,
      moreInfo: vehicle.luggage,
      features: vehicle.features,
      category: categoryKey,
    });
  });

  return transformedData;
});

const selectedCategory = ref('executiveSedans');
const currentImageIndex = ref<{ [key: string]: number }>({});

const filteredImages = computed(() => {
  if (selectedCategory.value === 'all') {
    return Object.values(images.value).flat();
  }
  return images.value[selectedCategory.value] || [];
});

// Helper function to get category label
const getCategoryLabel = (category: string) => {
  const categoryMap: { [key: string]: string } = {
    executiveSedans: 'Executive',
    premiumSedans: 'Premium',
    premiumSUVs: 'SUV',
    electricVehicles: 'Electric',
    luxuryMinibuses: 'Minibus',
    vans: 'Van',
  };
  return categoryMap[category] || 'Vehicle';
};

// Image slider functions
const getCurrentImageIndex = (vehicleId: string) => {
  return currentImageIndex.value[vehicleId] || 0;
};

const setCurrentImage = (vehicleId: string, index: number) => {
  currentImageIndex.value[vehicleId] = index;
};

// Modal function to show vehicle details
const showVehicleModal = (vehicle: any) => {
  Swal.fire({
    title: vehicle.title,
    html: `
      <div class="text-left">
        <div class="mb-4 relative">
          <img src="${vehicle.images[0]}" alt="${vehicle.title}" class="w-full h-48 object-cover rounded-lg mb-4">
        </div>
        <div class="space-y-3">
          <div class="flex justify-between">
            <span class="font-bold">Category:</span>
            <span>${getCategoryLabel(vehicle.category)}</span>
          </div>
          <div class="flex justify-between">
            <span class="font-bold">Passengers:</span>
            <span>${vehicle.info}</span>
          </div>
          <div class="flex justify-between">
            <span class="font-bold">Luggage:</span>
            <span>${vehicle.moreInfo}</span>
          </div>
          <div class="mt-4">
            <h4 class="font-bold mb-2">Key Features:</h4>
            <p class="text-sm text-gray-600">${vehicle.features}</p>
          </div>
          <div class="mt-4 p-3 bg-[#D4A574]/10 rounded-lg">
            <p class="text-sm font-bold text-[#D4A574]">Custom pricing available - Get your personalized quote!</p>
          </div>
        </div>
      </div>
    `,
    width: '600px',
    showCancelButton: true,
    confirmButtonText: 'Book This Vehicle',
    cancelButtonText: 'Get Quote',
    confirmButtonColor: '#D4A574',
    cancelButtonColor: '#6c757d',
  }).then(result => {
    if (result.isConfirmed) {
      navigateTo('/booking');
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      navigateTo('/contact-us');
    }
  });
};
</script>

<style scoped>
@media (max-width: 768px) {
  .tabs-swiper {
    padding: 6px 16px;
  }

  .cards-swiper {
    padding: 0 16px 16px 16px;
  }
}
</style>
