<template>
  <div class="space-y-6 scroll-reveal">
    <div class="text-[#222222]">
      <h2
        class="text-3xl md:text-4xl font-[Sarpanch] font-bold leading-tight mb-4"
      >
        Step 4 – Review & Confirm
      </h2>
    </div>
    <!-- Personal Information Section -->
    <div
      class="w-full border-[0.5px] border-[#00000042] font-[Lato] rounded-[30px] px-5 py-6 mb-6"
    >
      <h3 class="text-lg sm:text-[22px] font-bold ml-1 mb-5 sm:mb-7.5">
        Personal Information
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="relative">
          <IconInputUser class="absolute top-4 left-3" />
          <input
            ref="nameInputRef"
            v-model="name"
            name="name"
            type="text"
            placeholder="Name*"
            required
            :class="[
              'w-full pl-10 p-3 rounded-md bg-white text-black placeholder-gray-400 border outline-none transition-all duration-300 hover:shadow-sm',
              isNameMissing
                ? 'border-red-500'
                : 'border-[#F5F5F5] focus:border-[#D4A574] focus:ring-1 focus:ring-[#D4A574]',
            ]"
          />
        </div>

        <div class="relative" ref="phoneWrapperRef">
          <ClientOnly>
            <BasePhoneNumberInput
              v-model="phoneNumber"
              :state="
                !isPhoneValid && phoneNumber
                  ? 'error'
                  : isPhoneMissing
                    ? 'error'
                    : 'enabled'
              "
            />
          </ClientOnly>
        </div>

        <div class="relative">
          <IconInputEmail class="absolute top-[19px] left-3" />
          <input
            v-model="email"
            name="email"
            type="email"
            placeholder="Email"
            :class="[
              'w-full pl-10 p-3 rounded-md bg-white text-black placeholder-gray-400 border outline-none transition-all duration-300 hover:shadow-sm',
              isEmailMissing
                ? 'border-red-500'
                : 'border-[#F5F5F5] focus:border-[#D4A574] focus:ring-1 focus:ring-[#D4A574]',
            ]"
          />
        </div>

        <div>
          <input
            v-model="numberOfPassengers"
            name="numberOfPassengers"
            type="number"
            min="0"
            placeholder="Number of Passengers"
            :class="[
              'w-full p-3 rounded-md bg-white text-black placeholder-gray-400 border outline-none transition-all duration-300 hover:shadow-sm',
              isNumberOfPassengersMissing
                ? 'border-red-500'
                : 'border-[#F5F5F5] focus:border-[#D4A574] focus:ring-1 focus:ring-[#D4A574]',
            ]"
          />
        </div>
      </div>
    </div>

    <div
      class="hidden md:block w-full border-[0.5px] border-[#00000042] font-[Lato] rounded-[30px] px-5 py-6"
    >
      <h3 class="text-lg sm:text-[22px] font-bold ml-1 mb-5 sm:mb-7.5">
        Appointment Details
      </h3>

      <!-- Trip Details - Required -->
      <div class="mb-5">
        <h4
          class="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wide"
        >
          Trip Details
        </h4>
        <div class="flex flex-wrap gap-4">
          <div
            class="flex-1 min-w-[200px] bg-white rounded-2xl px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          >
            <p class="text-sm text-gray-500 font-medium">Pick Up Location</p>
            <p class="text-base font-semibold">
              {{ displayValue(pickUpLocation) }}
            </p>
          </div>
          <div
            class="flex-1 min-w-[200px] bg-white rounded-2xl px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          >
            <p class="text-sm text-gray-500 font-medium">Drop Off Location</p>
            <p class="text-base font-semibold">
              {{ displayValue(dropOffLocation) }}
            </p>
          </div>
          <div
            class="flex-1 min-w-[200px] bg-white rounded-2xl px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          >
            <p class="text-sm text-gray-500 font-medium">Date & Time</p>
            <p class="text-base font-semibold">{{ dateTime }}</p>
          </div>
          <div
            class="flex-1 min-w-[200px] bg-white rounded-2xl px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          >
            <p class="text-sm text-gray-500 font-medium">
              Number of Passengers
            </p>
            <p class="text-base font-semibold">
              {{ displayValue(numberOfPassengers) }}
            </p>
          </div>
        </div>
        <!-- Additional Information - Optional -->
        <div
          v-if="stops && stops.length > 0"
          class="bg-white rounded-2xl px-4 py-3 my-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
        >
          <p class="text-sm text-gray-500 font-medium">Stops</p>
          <div class="text-base font-semibold">
            <div v-for="(stop, index) in stops" :key="index" class="mb-1">
              {{ index + 1 }}. {{ stop.value }}
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Information - Required -->
      <div class="mb-5">
        <h4
          class="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wide"
        >
          Contact Information
        </h4>
        <div class="flex flex-wrap gap-4">
          <div
            class="flex-1 min-w-[200px] bg-white rounded-2xl px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          >
            <p class="text-sm text-gray-500 font-medium">Name</p>
            <p class="text-base font-semibold">{{ displayValue(name) }}</p>
          </div>
          <div
            class="flex-1 min-w-[200px] bg-white rounded-2xl px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          >
            <p class="text-sm text-gray-500 font-medium">Phone / WhatsApp</p>
            <p class="text-base font-semibold">
              {{ displayValue(phoneNumber) }}
            </p>
          </div>
          <div
            v-if="email && email.trim() !== ''"
            class="flex-1 min-w-[200px] bg-white rounded-2xl px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          >
            <p class="text-sm text-gray-500 font-medium">Email</p>
            <p class="text-base font-semibold">{{ displayValue(email) }}</p>
          </div>
        </div>
      </div>

      <!-- Booking Details -->
      <div class="mb-5">
        <h4
          class="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wide"
        >
          Booking Details
        </h4>
        <div class="flex flex-wrap gap-4">
          <div
            class="flex-1 min-w-[200px] bg-white rounded-2xl px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          >
            <p class="text-sm text-gray-500 font-medium">Service Type</p>
            <p class="text-base font-semibold">
              {{ displayValue(serviceType) }}
            </p>
          </div>
          <div
            class="flex-1 min-w-[200px] bg-white rounded-2xl px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          >
            <p class="text-sm text-gray-500 font-medium">Transfer Type</p>
            <p class="text-base font-semibold">
              {{ transferType === 'one-way' ? 'One Way' : 'Return' }}
            </p>
          </div>
          <div
            v-if="selectedVehicle"
            class="flex-1 min-w-[200px] bg-white rounded-2xl px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          >
            <p class="text-sm text-gray-500 font-medium">
              Selected Vehicle Category
            </p>
            <p class="text-base font-semibold">
              {{ formattedVehicleCategory }}
            </p>
          </div>
        </div>
      </div>
      <div
        v-if="additionalInfo && additionalInfo.trim() !== ''"
        class="bg-white rounded-2xl px-4 py-3 shadow-sm mt-5 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
      >
        <p class="text-sm text-gray-500 font-medium">Additional Information</p>
        <p class="text-base font-semibold">{{ additionalInfo }}</p>
      </div>
      <div class="flex justify-end items-center mt-8">
        <div class="text-sm text-gray-500 font-[Lato]">
          Click "Complete Booking" below to submit your request
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, nextTick } from 'vue';
import { useBookingForm } from '~/composables/useBookingForm';
import type { FleetCategory } from '~/composables/useFleetData';

const props = defineProps<{
  selectedVehicle?: FleetCategory | null;
  missingFields?: string[];
  showValidation?: boolean;
}>();

const nameInputRef = ref<HTMLInputElement | null>(null);
const phoneWrapperRef = ref<HTMLElement | null>(null);

// Phone validation state
const isPhoneValid = ref(true);

// Computed properties for field validation highlighting
const isNameMissing = computed(
  () => props.missingFields?.includes('name') && props.showValidation
);
const isPhoneMissing = computed(
  () => props.missingFields?.includes('phone') && props.showValidation
);
const isEmailMissing = computed(() => false); // Email is always optional
const isNumberOfPassengersMissing = computed(
  () =>
    props.missingFields?.includes('numberOfPassengers') && props.showValidation
);

const {
  name,
  phoneNumber,
  email,
  numberOfPassengers,
  pickUpLocation,
  dropOffLocation,
  stops,
  selectedDate,
  selectedTime,
  serviceType,
  additionalInfo,
  transferType,
} = useBookingForm();

// Helper function to display dash for empty values
const displayValue = (value: any): string => {
  if (value === null || value === undefined || value === '' || value === 0) {
    return '—';
  }
  return String(value);
};

const dateTime = computed(() => {
  if (!selectedDate.value || !selectedTime.value) {
    return '—';
  }
  return `${selectedDate.value.toDateString()} ${selectedTime.value}`;
});

const formattedVehicleCategory = computed(() => {
  // selectedVehicle is actually a FleetCategory, use the label property
  return props.selectedVehicle?.label || '';
});

// Scroll to a field smoothly
const scrollToField = (element: HTMLElement | null) => {
  if (!element) return;

  const rect = element.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const elementTop = rect.top + scrollTop;
  const offset = 100; // Offset from top of viewport

  window.scrollTo({
    top: elementTop - offset,
    behavior: 'smooth',
  });
};

watch(
  () => [props.showValidation, props.missingFields],
  () => {
    if (
      props.showValidation &&
      props.missingFields &&
      props.missingFields.length > 0
    ) {
      nextTick(() => {
        const fieldPriority = ['name', 'phone'];

        for (const field of fieldPriority) {
          if (props.missingFields?.includes(field)) {
            let targetElement: HTMLElement | null = null;

            switch (field) {
              case 'name':
                targetElement = nameInputRef.value;
                break;
              case 'phone':
                targetElement = phoneWrapperRef.value;
                break;
            }

            if (targetElement) {
              scrollToField(targetElement);
              break; // Scroll to empty fields
            }
          }
        }
      });
    }
  },
  { immediate: false }
);
</script>
