<template>
  <div class="relative">
    <form @submit.prevent="sendForm" class="space-y-6">
      <!-- Name Field -->
      <div class="relative group" ref="nameSection">
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Full Name
          <span class="text-red-500">*</span>
        </label>
        <div class="relative">
          <IconInputUser
            class="absolute top-4 left-3 text-gray-400 group-focus-within:text-[#D4A574] transition-colors duration-300"
          />
          <input
            v-model="name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            required
            :class="[
              'w-full pl-10 pr-4 py-3 rounded-lg bg-white text-black placeholder-gray-400 focus:border-[#D4A574] focus:ring-2 focus:ring-[#D4A574] outline-none transition-all duration-300 hover:shadow-sm border',
              isNameMissing
                ? 'border-red-500 ring-2 ring-red-200'
                : 'border-gray-200',
            ]"
          />
        </div>
        <p v-if="errors.name" class="mt-1 text-sm text-red-500">
          {{ errors.name }}
        </p>
      </div>

      <!-- Phone Field -->
      <div class="relative group" ref="phoneSection">
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Phone Number
          <span class="text-red-500">*</span>
        </label>
        <div class="relative">
          <ClientOnly>
            <phone-input
              v-model="phoneNumber"
              v-bind="bindProps"
              name="phone"
              @validate="onPhoneValidate"
              :class="[
                'w-full px-3 py-3 rounded-lg !bg-white text-black placeholder-gray-400 focus-within:ring-2 !outline-none transition-all duration-300 hover:!shadow-sm',
                isPhoneMissing
                  ? '!border-red-500 !ring-2 !ring-red-200'
                  : '!border-gray-200',
                // Phone validation states
                !isPhoneValid && phoneNumber
                  ? 'focus-within:!border-red-500 focus-within:!ring-red-500'
                  : '',
                (isPhoneValid || !phoneNumber) && !isPhoneMissing
                  ? 'focus-within:!border-[#D4A574] focus-within:!ring-[#D4A574]'
                  : '',
              ]"
            />
          </ClientOnly>
        </div>
        <p
          v-if="!isPhoneValid && phoneNumber"
          class="mt-1 text-sm text-red-500"
        >
          Please enter a valid phone number
        </p>
        <p v-if="errors.phone" class="mt-1 text-sm text-red-500">
          {{ errors.phone }}
        </p>
      </div>

      <!-- Email Field -->
      <div class="relative group" ref="emailSection">
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Email Address
          <span class="text-red-500">*</span>
        </label>
        <div class="relative">
          <IconInputEmail
            class="absolute top-4 left-3 text-gray-400 group-focus-within:text-[#D4A574] transition-colors duration-300"
          />
          <input
            v-model="email"
            name="email"
            type="email"
            placeholder="Enter your email address"
            required
            :class="[
              'w-full pl-10 pr-4 py-3 rounded-lg bg-white text-black placeholder-gray-400 focus:border-[#D4A574] focus:ring-2 focus:ring-[#D4A574] outline-none transition-all duration-300 hover:shadow-sm border',
              isEmailMissing
                ? 'border-red-500 ring-2 ring-red-200'
                : 'border-gray-200',
            ]"
          />
        </div>
        <p v-if="errors.email" class="mt-1 text-sm text-red-500">
          {{ errors.email }}
        </p>
      </div>

      <!-- Message Field -->
      <div class="relative group" ref="messageSection">
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Message
          <span class="text-red-500">*</span>
        </label>
        <div class="relative">
          <textarea
            v-model="message"
            name="message"
            rows="5"
            placeholder="Tell us how we can help you..."
            required
            :class="[
              'w-full px-4 py-3 rounded-lg bg-white text-black placeholder-gray-400 focus:border-[#D4A574] focus:ring-2 focus:ring-[#D4A574] outline-none resize-none transition-all duration-300 hover:shadow-sm border',
              isMessageMissing
                ? 'border-red-500 ring-2 ring-red-200'
                : 'border-gray-200',
            ]"
          ></textarea>
        </div>
        <div class="flex justify-between items-center mt-1">
          <p v-if="errors.message" class="text-sm text-red-500">
            {{ errors.message }}
          </p>
          <p class="text-xs text-gray-500 ml-auto">
            {{ message.length }}/500 characters
          </p>
        </div>
      </div>

      <!-- Submit Button -->
      <div class="flex justify-start items-center pt-4">
        <button
          name="submit"
          type="submit"
          :disabled="isSubmitting"
          class="group flex items-center gap-3 py-4 px-8 rounded-full bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] text-white font-[Lato] font-bold hover:from-[#E88A3F] hover:to-[#C4965A] transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          <span
            v-if="!isSubmitting"
            class="transition-transform duration-300 group-hover:translate-x-1"
          >
            <IconArrowRight class="w-5 h-5" />
          </span>
          <div
            v-if="isSubmitting"
            class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
          ></div>
          {{ isSubmitting ? 'Sending Message...' : 'Send Message' }}
        </button>
      </div>

      <!-- Privacy Notice -->
      <div class="text-xs text-gray-500 mt-4">
        <p>
          By submitting this form, you agree to our privacy policy. We'll only
          use your information to respond to your inquiry.
        </p>
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
import Swal from 'sweetalert2';
import { useMobileScroll } from '~/composables/useMobileScroll';

const isSubmitting = ref(false);
const showValidationMessage = ref(false);
const missingFields = ref<string[]>([]);

// Mobile scroll functionality
const { scrollToFirstValidationError } = useMobileScroll();

// Form section refs for mobile scrolling
const formSectionRefs = ref<Record<string, HTMLElement | null>>({
  name: null,
  phone: null,
  email: null,
  message: null,
});

const name = ref<string>('');
const phoneNumber = ref<string>('');
const email = ref<string>('');
const message = ref<string>('');
const isPhoneValid = ref(true);

// Form section refs for mobile scrolling
const nameSection = ref<HTMLElement | null>(null);
const phoneSection = ref<HTMLElement | null>(null);
const emailSection = ref<HTMLElement | null>(null);
const messageSection = ref<HTMLElement | null>(null);
const onPhoneValidate = (payload: { valid: boolean; number: string }) => {
  isPhoneValid.value = payload.valid;
};

const PhoneInput = defineAsyncComponent(async () => {
  await import('vue-tel-input/vue-tel-input.css');
  const module = await import('vue-tel-input');
  return module.VueTelInput || module.default;
});

const bindProps = {
  validCharactersOnly: true,
  enableValidCheck: true,
  required: true,
  inputOptions: {
    placeholder: 'Enter your phone number',
  },
};

// Field label mapping for error messages
const getFieldLabel = (field: string): string => {
  const labels: { [key: string]: string } = {
    name: 'Full Name',
    phone: 'Phone Number',
    email: 'Email Address',
    message: 'Message',
  };
  return labels[field] || field;
};

// Computed properties for field validation highlighting
const isNameMissing = computed(
  () => missingFields.value.includes('name') && showValidationMessage.value
);
const isPhoneMissing = computed(
  () => missingFields.value.includes('phone') && showValidationMessage.value
);
const isEmailMissing = computed(
  () => missingFields.value.includes('email') && showValidationMessage.value
);
const isMessageMissing = computed(
  () => missingFields.value.includes('message') && showValidationMessage.value
);

// Update form section refs when component mounts
onMounted(() => {
  formSectionRefs.value.name = nameSection.value;
  formSectionRefs.value.phone = phoneSection.value;
  formSectionRefs.value.email = emailSection.value;
  formSectionRefs.value.message = messageSection.value;
});

// Watch for field changes to remove validation highlighting
watch([name, phoneNumber, email, message], () => {
  if (showValidationMessage.value) {
    showValidationMessage.value = false;
    missingFields.value = [];
  }
  // Clear individual field errors when user starts typing
  errors.value = {};
});

const showSuccessModal = () => {
  Swal.fire({
    icon: 'success',
    title: 'Message Sent Successfully!',
    html: `
      <div class="text-center">
        <p class="mb-4">Thank you for contacting us!</p>
        <p class="text-sm text-gray-600">We'll get back to you within 24 hours.</p>
      </div>
    `,
    confirmButtonColor: '#D4A574',
    confirmButtonText: 'Great!',
  });
};

const showErrorModal = () => {
  Swal.fire({
    icon: 'error',
    title: 'Oops! Something went wrong',
    html: `
      <div class="text-center">
        <p class="mb-4">We couldn't send your message right now.</p>
        <p class="text-sm text-gray-600">Please try again or contact us directly.</p>
      </div>
    `,
    confirmButtonColor: '#D4A574',
    confirmButtonText: 'Try Again',
  });
};

interface ApiResponse {
  success: boolean;
  message: string;
}

const errors = ref<{ [key: string]: string }>({});

const validateForm = () => {
  errors.value = {};
  missingFields.value = [];

  if (!name.value || name.value.length < 3) {
    errors.value.name = 'Name must be at least 3 characters';
    missingFields.value.push('name');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value || !emailRegex.test(email.value)) {
    errors.value.email = 'Enter a valid email address';
    missingFields.value.push('email');
  }

  if (!isPhoneValid.value || !phoneNumber.value) {
    errors.value.phone = 'Enter a valid phone number';
    missingFields.value.push('phone');
  }

  if (!message.value || message.value.length < 10) {
    errors.value.message = 'Message must be at least 10 characters long';
    missingFields.value.push('message');
  } else if (message.value.length > 500) {
    errors.value.message = 'Message must not exceed 500 characters';
    missingFields.value.push('message');
  }

  return Object.keys(errors.value).length === 0;
};

const sendForm = async () => {
  if (isSubmitting.value) return;
  if (!validateForm()) {
    showValidationMessage.value = true;

    // Scroll to first validation error on mobile
    nextTick(() => {
      scrollToFirstValidationError(missingFields.value, formSectionRefs.value);
    });
    return;
  }

  showValidationMessage.value = false;
  isSubmitting.value = true;

  try {
    const response = await $fetch<ApiResponse>('/api/send-contact-email', {
      method: 'POST',
      body: {
        name: name.value,
        phoneNumber: phoneNumber.value,
        email: email.value,
        message: message.value,
      },
    });

    if (response.success) {
      showSuccessModal();
      name.value = '';
      phoneNumber.value = '';
      email.value = '';
      message.value = '';
    } else {
      showErrorModal();
    }
  } catch (error) {
    console.error('Error sending form:', error);
    showErrorModal();
  } finally {
    isSubmitting.value = false;
  }
};
</script>
