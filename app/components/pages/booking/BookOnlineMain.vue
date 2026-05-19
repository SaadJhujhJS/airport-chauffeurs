<template>
  <BaseContainer>
    <div class="pb-16 sm:pb-20 pt-28 sm:pt-20">
      <div
        class="sm:hidden pointer-events-none absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/50 to-transparent"
      ></div>
      <div class="text-center mb-12">
        <div
          class="inline-flex items-center gap-2 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] px-4 py-2 rounded-full mb-6"
        >
          <div class="w-2 h-2 bg-[#D4A574] rounded-full animate-pulse"></div>
          <span class="font-[Lato] font-medium">
            Premium Booking Experience
          </span>
        </div>

        <h2
          class="text-4xl sm:text-5xl md:text-6xl font-bold font-[Sarpanch] text-[#222222] mb-6 leading-tight"
        >
          Book Your
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-[#F4C7A4] to-[#D4A574]"
          >
            Luxury Ride
          </span>
        </h2>

        <p
          class="text-lg sm:text-xl font-[Lato] text-gray-600 max-w-3xl mx-auto"
        >
          Experience premium chauffeur service with our seamless booking
          process. Fill out the form below and we'll take care of the rest.
        </p>
      </div>
      <div class="space-y-8">
        <div ref="stepsProgressRef">
          <MultiStepProgressBar
            :steps="['Schedule', 'Details', 'Vehicle', 'Confirm']"
            :current-step="currentStep"
          />
        </div>
        <div
          class="bg-white rounded-3xl shadow-lg border border-gray-200 px-4 sm:px-7.5 py-8"
        >
          <component
            :is="currentComponent"
            :missing-fields="missingFields"
            :show-validation="showValidationMessage"
            :selected-category="selectedCategory"
            :form-section-refs="formSectionRefs"
            :selected-vehicle="selectedCategory"
            @route-validation-change="handleRouteValidationChange"
            @update:selected-category="selectedCategory = $event"
          />

          <div
            :class="[
              'flex flex-col sm:flex-row item-center gap-4 sm:gap-0 text-lg font-medium sm:mr-5 mt-5',
              currentStep === 0 ? 'sm:justify-end' : 'sm:justify-between',
            ]"
          >
            <button
              v-if="currentStep > 0"
              @click="prevStep"
              class="flex items-center justify-center gap-2.5 px-10 py-3 bg-transparent text-[#222222] font-[Lato] font-semibold border border-[#D4A574] rounded-full shadow-md cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <span
                class="-rotate-180 transition-transform duration-300 hover:rotate-0"
              >
                <IconArrowRight />
              </span>
              Back
            </button>
            <button
              @click="nextStep"
              class="flex items-center justify-center gap-2.5 px-10 py-3 text-[#222222] font-semibold font-[Lato] bg-[#D4A574] rounded-full shadow-md cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              {{
                currentStep === stepsComponents.length - 1
                  ? 'Complete Booking'
                  : 'Next Step'
              }}
              <span
                class="transition-transform duration-300 group-hover:translate-x-1"
              >
                <IconArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </BaseContainer>
</template>
<script setup lang="ts">
import BookingForm from './BookingForm.vue';
import VehicleSelectionStep from './steps/VehicleSelectionStep.vue';
import ChooseDateTime from './ChooseDateTime.vue';
import ReviewDetails from './ReviewDetails.vue';
import { useBookingForm } from '~/composables/useBookingForm';
import { useMobileScroll } from '~/composables/useMobileScroll';
import type { FleetCategory } from '~/composables/useFleetData';
import Swal from 'sweetalert2';

const stepsComponents = [
  ChooseDateTime,
  BookingForm,
  VehicleSelectionStep,
  ReviewDetails,
];
const currentStep = ref(0);
const showValidationMessage = ref(false);
const missingFields = ref<string[]>([]);
const isRouteValid = ref(true);
const selectedCategory = ref<FleetCategory | null>(null);

// Mobile scroll functionality
const { scrollToFirstValidationError, scrollToElement } = useMobileScroll();

// Refs for form sections to enable mobile scrolling
const formSectionRefs = ref<Record<string, HTMLElement | null>>({
  pickup: null,
  dropoff: null,
  stops: null,
  date: null,
  time: null,
});

// Ref for steps progress bar
const stepsProgressRef = ref<HTMLElement | null>(null);

const {
  name,
  phoneNumber,
  email,
  pickUpLocation,
  dropOffLocation,
  selectedDate,
  selectedTime,
  stops,
  serviceType,
  additionalInfo,
  numberOfPassengers,
  transferType,
} = useBookingForm();

const currentComponent = computed(() => stepsComponents[currentStep.value]);

// Handle route validation change from BookingForm
function handleRouteValidationChange(isValid: boolean) {
  isRouteValid.value = isValid;
}

// Watch for field changes to remove validation highlighting
watch(
  [pickUpLocation, dropOffLocation, stops],
  () => {
    // Only clear validation for route fields when on step 1 (Details)
    if (showValidationMessage.value && currentStep.value === 1) {
      showValidationMessage.value = false;
      missingFields.value = [];
    }
  },
  { deep: true }
);

// Watch for personal information field changes
watch(
  [name, phoneNumber],
  () => {
    // Only clear validation for personal info fields when on step 3 (Review)
    if (showValidationMessage.value && currentStep.value === 3) {
      showValidationMessage.value = false;
      missingFields.value = [];
    }
  },
  { deep: true }
);

// Watch for route validation changes to clear highlighting when route becomes valid
watch(isRouteValid, newValue => {
  if (newValue && showValidationMessage.value && currentStep.value === 1) {
    // If route becomes valid, clear the highlighting
    showValidationMessage.value = false;
    missingFields.value = [];
  }
});

// Watch for date/time changes to remove validation highlighting
watch([selectedDate, selectedTime], () => {
  // Only clear validation for date/time when on step 0 (Schedule)
  if (showValidationMessage.value && currentStep.value === 0) {
    showValidationMessage.value = false;
    missingFields.value = [];
  }
});

// Validation for each step
const canProceedToNext = computed(() => {
  switch (currentStep.value) {
    case 0: // Step 1 - Schedule validation (Date and time)
      return selectedDate.value !== null && selectedTime.value !== null;
    case 1: // Step 2 - Form validation including route (no personal info)
      // Check if all stops have values when they exist
      const allStopsFilled =
        stops.value.length === 0 ||
        stops.value.every(stop => stop.value.trim() !== '');
      return (
        pickUpLocation.value.trim() !== '' &&
        dropOffLocation.value.trim() !== '' &&
        isRouteValid.value &&
        allStopsFilled
      );
    case 2: // Step 3 - Vehicle selection validation (optional)
      return true; // Vehicle selection is optional
    case 3: // Step 4 - Personal information validation
      return name.value.trim() !== '' && phoneNumber.value.trim() !== '';
    default:
      return false;
  }
});

function nextStep() {
  // Check which fields are missing and show validation message
  if (!canProceedToNext.value) {
    checkMissingFields();
    showValidationMessage.value = true;

    // Scroll to first validation error on mobile
    nextTick(() => {
      scrollToFirstValidationError(missingFields.value, formSectionRefs.value);
    });
    return;
  }

  // Hide validation message when proceeding successfully
  showValidationMessage.value = false;
  missingFields.value = [];

  if (currentStep.value < stepsComponents.length - 1) {
    currentStep.value++;

    // Scroll to top of form (steps progress bar) on mobile when moving to next step
    nextTick(() => {
      if (stepsProgressRef.value) {
        scrollToElement(stepsProgressRef.value, 50);
      }
    });
  } else if (currentStep.value === stepsComponents.length - 1) {
    // Final step - submit the booking
    submitFinalBooking();
  }
}

function checkMissingFields() {
  missingFields.value = [];

  switch (currentStep.value) {
    case 0: // Step 1 - Schedule validation (Date and time)
      if (!selectedDate.value) missingFields.value.push('date');
      if (!selectedTime.value) missingFields.value.push('time');
      break;
    case 1: // Step 2 - Form validation (route only)
      if (!pickUpLocation.value.trim()) missingFields.value.push('pickup');
      if (!dropOffLocation.value.trim()) missingFields.value.push('dropoff');
      // Check if any stops are empty when they exist
      if (stops.value.length > 0) {
        const emptyStops = stops.value.some(stop => !stop.value.trim());
        if (emptyStops) missingFields.value.push('stops');
      }
      // Add route validation highlighting
      if (!isRouteValid.value) {
        missingFields.value.push('pickup');
        missingFields.value.push('dropoff');
      }
      break;
    case 2: // Step 3 - Vehicle selection validation (optional)
      // Vehicle selection is optional, no validation needed
      break;
    case 3: // Step 4 - Personal information validation
      if (!name.value.trim()) missingFields.value.push('name');
      if (!phoneNumber.value.trim()) missingFields.value.push('phone');
      break;
  }
}

function prevStep() {
  if (currentStep.value > 0) {
    currentStep.value--;
    // Hide validation message when going back
    showValidationMessage.value = false;
    missingFields.value = [];

    // Scroll to top of form (steps progress bar) on mobile when going back
    nextTick(() => {
      if (stepsProgressRef.value) {
        scrollToElement(stepsProgressRef.value, 50);
      }
    });
  }
}

function getValidationMessage() {
  switch (currentStep.value) {
    case 0:
      const fieldNames = {
        name: 'Name',
        phone: 'Phone Number',
        pickup: 'Pick Up Location',
        dropoff: 'Drop Off Location',
        stops: 'Stop Locations',
      };
      const missingFieldNames = missingFields.value
        .map(field => fieldNames[field as keyof typeof fieldNames])
        .filter(Boolean);
      return `Please fill in: ${missingFieldNames.join(', ')}`;
    case 1:
      // Vehicle selection is optional, no validation message needed
      return '';
    case 2:
      if (
        missingFields.value.includes('date') &&
        missingFields.value.includes('time')
      ) {
        return 'Please select both date and time';
      } else if (missingFields.value.includes('date')) {
        return 'Please select a date';
      } else if (missingFields.value.includes('time')) {
        return 'Please select a time';
      }
      return 'Please select both date and time';
    default:
      return '';
  }
}

async function submitFinalBooking() {
  try {
    // Show loading state
    Swal.fire({
      title: 'Processing Your Booking',
      text: 'Please wait while we confirm your booking details.',
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    // Format date to readable format (e.g., "16th October, 2025")
    const formatDate = (date: Date) => {
      const day = date.getDate();
      const month = date.toLocaleDateString('en-US', { month: 'long' });
      const year = date.getFullYear();

      // Add ordinal suffix to day
      const getOrdinalSuffix = (day: number) => {
        if (day >= 11 && day <= 13) return 'th';
        switch (day % 10) {
          case 1:
            return 'st';
          case 2:
            return 'nd';
          case 3:
            return 'rd';
          default:
            return 'th';
        }
      };

      return `${day}${getOrdinalSuffix(day)} ${month}, ${year}`;
    };

    const formattedDate = selectedDate.value
      ? formatDate(selectedDate.value)
      : null;

    // Get user's timezone automatically
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const bookingData = {
      name: name.value,
      phoneNumber: phoneNumber.value,
      email: email.value,
      numberOfPassengers: numberOfPassengers.value,
      pickUpLocation: pickUpLocation.value,
      dropOffLocation: dropOffLocation.value,
      stops: stops.value.map(stop => ({
        value: stop.value,
        // Only include essential place data if available
        place: stop.place
          ? {
              formatted_address: stop.place.formatted_address,
              geometry: stop.place.geometry
                ? {
                    location: {
                      lat: stop.place.geometry.location.lat(),
                      lng: stop.place.geometry.location.lng(),
                    },
                  }
                : null,
            }
          : null,
      })),
      serviceType: serviceType.value,
      additionalInfo: additionalInfo.value,
      transferType: transferType.value,
      date: formattedDate,
      time: selectedTime.value,
      timezone: userTimezone,
      vehicleCategory: selectedCategory.value
        ? {
            id: selectedCategory.value.id,
            name: selectedCategory.value.name,
            label: selectedCategory.value.label,
            capacity: selectedCategory.value.capacity,
            luggage: selectedCategory.value.luggage,
          }
        : null,
    };

    // Send booking email to admin
    const adminResponse = await $fetch('/api/send-booking-email', {
      method: 'POST',
      body: bookingData,
    });

    if (adminResponse.success) {
      // Send user confirmation email (only if email is provided)
      let userConfirmationSent = false;
      if (email.value && email.value.trim() !== '') {
        try {
          // Pass the same booking reference from admin email to customer email
          const bookingReference =
            'bookingReference' in adminResponse
              ? adminResponse.bookingReference
              : undefined;
          const userResponse = await $fetch('/api/send-user-confirmation', {
            method: 'POST',
            body: {
              ...bookingData,
              ...(bookingReference && { bookingReference }),
            },
          });
          userConfirmationSent = userResponse.success;
        } catch (userError) {
          console.warn('Failed to send user confirmation email:', userError);
          // Don't fail the entire booking if user email fails
        }
      }

      // Close loading modal and show success modal
      Swal.close();

      const successMessage = userConfirmationSent
        ? `
          <div class="text-center">
            <p class="mb-4">Your booking request has been successfully submitted!</p>
            <p class="text-sm text-gray-600 mb-2">✅ Confirmation email sent to ${email.value}</p>
            <p class="text-sm text-gray-600">Our team will contact you shortly to confirm the details and provide your quote.</p>
          </div>
        `
        : `
          <div class="text-center">
            <p class="mb-4">Your booking request has been successfully submitted!</p>
            <p class="text-sm text-gray-600">Our team will contact you shortly to confirm the details and provide your quote.</p>
          </div>
        `;

      await Swal.fire({
        icon: 'success',
        title: 'Booking Confirmed!',
        html: successMessage,
        confirmButtonColor: '#D4A574',
        confirmButtonText: 'Thank You!',
      });

      // Reset form
      resetForm();
    } else {
      throw new Error(adminResponse.message || 'Failed to send booking email');
    }
  } catch (error) {
    await Swal.fire({
      icon: 'error',
      title: 'Booking Failed',
      text: 'We encountered an issue while processing your booking. Please try again or contact us directly.',
      confirmButtonColor: '#D4A574',
    });
  }
}

function resetForm() {
  // Reset all form fields
  name.value = '';
  phoneNumber.value = '';
  email.value = '';
  pickUpLocation.value = '';
  dropOffLocation.value = '';
  numberOfPassengers.value = null;
  stops.value = [];
  selectedDate.value = null;
  selectedTime.value = null;
  serviceType.value = '';
  additionalInfo.value = '';

  // Reset to first step
  currentStep.value = 0;
  showValidationMessage.value = false;
  missingFields.value = [];
  selectedCategory.value = null;
}
</script>
