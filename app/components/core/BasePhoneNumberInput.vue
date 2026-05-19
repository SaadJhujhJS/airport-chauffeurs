<template>
  <div class="flex flex-col gap-1.5 w-full">
    <label
      v-if="label"
      :class="[
        'block text-sm font-semibold',
        state === 'error' ? 'text-text-error' : 'text-text-neutral-subtle',
        state === 'disabled' && 'text-text-disabled',
      ]"
    >
      {{ label }}
    </label>

    <IntlTelInput
      ref="intlTelInputRef"
      :modelValue="phone"
      :class="inputWrapperClasses"
      @changeCountry="onChangeCountry"
      @changeValidity="onChangeValidity"
      @changeNumber="onChangeNumber"
      @changeErrorCode="onChangeErrorCode"
      :disabled="props.state === 'disabled'"
      :options="{
        initialCountry: props.initialCountry,
        loadUtils: () => import('intl-tel-input/build/js/utils.js'),
      }"
    />
  </div>
</template>
<script setup lang="ts">
import { type PropType, computed, ref } from 'vue';
import IntlTelInput from 'intl-tel-input/vue';
import 'intl-tel-input/styles';

const props = defineProps({
  label: String,
  modelValue: {
    type: String,
    default: '',
  },
  initialCountry: {
    type: String,
    default: 'au',
  },
  size: {
    type: String as PropType<'large' | 'small'>,
    default: 'large',
  },
  state: {
    type: String as PropType<'enabled' | 'error' | 'disabled'>,
    default: 'enabled',
  },
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'update:phone', value: string): void;
  (e: 'update:countryInitials', value: string): void;
  (e: 'update:isValid', value: boolean): void;
  (e: 'update:countryCode', value: string): void;
}>();

const phone = ref<string>(props.modelValue || '');
const countryInitials = ref<string>(props.initialCountry || 'vn');
const countryCode = ref<string>('');
const isValid = ref<boolean>(false);
const intlTelInputRef = ref<any>(null);

// Method to get country data from IntlTelInput instance
function getCountryData() {
  if (!intlTelInputRef.value) return null;

  try {
    // Try different ways to access the country data
    let countryData = null;

    if (
      intlTelInputRef.value.instance &&
      intlTelInputRef.value.instance.getSelectedCountryData
    ) {
      countryData = intlTelInputRef.value.instance.getSelectedCountryData();
    } else if (intlTelInputRef.value.getSelectedCountryData) {
      countryData = intlTelInputRef.value.getSelectedCountryData();
    } else if (intlTelInputRef.value.$el && window.intlTelInputGlobals) {
      // Fallback: try to get instance from the DOM element
      const instance = window.intlTelInputGlobals.getInstance(
        intlTelInputRef.value.$el.querySelector('input')
      );
      if (instance) {
        countryData = instance.getSelectedCountryData();
      }
    }

    return countryData;
  } catch (error) {
    console.error('Error getting country data:', error);
    return null;
  }
}

// Method to detect country from phone number
function detectCountryFromPhoneNumber(phoneNumber: string) {
  if (!intlTelInputRef.value || !phoneNumber) return;

  try {
    let instance = null;

    if (intlTelInputRef.value.instance) {
      instance = intlTelInputRef.value.instance;
    } else if (intlTelInputRef.value.$el && window.intlTelInputGlobals) {
      instance = window.intlTelInputGlobals.getInstance(
        intlTelInputRef.value.$el.querySelector('input')
      );
    }

    if (instance && instance.setNumber) {
      // Use setNumber to automatically detect country from phone number
      instance.setNumber(phoneNumber);

      // Get the updated country data after setting the number
      const countryData = getCountryData();
      if (countryData) {
        countryInitials.value = countryData.iso2;
        if (countryData.dialCode) {
          countryCode.value = `+${countryData.dialCode}`;
          emit('update:countryCode', countryCode.value);
        }
        emit('update:countryInitials', countryInitials.value);
      }
    }
  } catch (error) {
    console.error('Error detecting country from phone number:', error);
  }
}

function onChangeNumber(value: string) {
  // Only update if the value is actually different to prevent circular updates
  if (phone.value !== value) {
    phone.value = value;
    emit('update:phone', value);
    emit('update:modelValue', value);
  }
}

function onChangeCountry(ci: string) {
  countryInitials.value = ci;

  // Get country code using the reusable method
  const countryData = getCountryData();
  if (countryData && countryData.dialCode) {
    countryCode.value = `+${countryData.dialCode}`;
    emit('update:countryCode', countryCode.value);
  } else {
    console.warn('Could not get country data for:', ci);
  }

  emit('update:countryInitials', countryInitials.value);
}

function onChangeValidity(value: boolean) {
  isValid.value = value;
  emit('update:isValid', isValid.value);
}

function onChangeErrorCode(value: number | null) {
  // To be implemented if needed
}

const inputWrapperClasses = computed(() => {
  return [
    'w-full rounded-md px-3 py-2 outline-none placeholder-gray-400 bg-white text-text-neutral-subtle',
    props.size === 'large' ? 'h-12' : 'h-9',
    'bg-background-base-subtle',
    props.state === 'enabled' &&
      'border border-[#F5F5F5] focus:border-[#D4A574] focus:ring-2 focus:ring-[#D4A574] text-black transition-all duration-300 hover:shadow-sm',
    props.state === 'error' && 'text-red-500 border border-red-500',
    props.state === 'disabled' &&
      'text-text-disabled border border-[#F5F5F5] opacity-90',
  ];
});

// Watch for modelValue changes to update phone ref
watch(
  () => props.modelValue,
  newValue => {
    // Only update if the value is actually different to prevent circular updates
    if (phone.value !== newValue) {
      phone.value = newValue || '';
      // If phone number is provided, try to detect country automatically
      if (newValue && newValue.trim() !== '') {
        // Use setTimeout to ensure IntlTelInput is ready
        setTimeout(() => {
          detectCountryFromPhoneNumber(newValue);
        }, 100);
      }
    }
  },
  { immediate: true }
);

// Initialize country code on mount
onMounted(() => {
  // Set initial country code after component mounts
  setTimeout(() => {
    // If there's already a phone number, try to detect country from it
    if (phone.value && phone.value.trim() !== '') {
      detectCountryFromPhoneNumber(phone.value);
    } else {
      // Otherwise, just get the default country data
      const countryData = getCountryData();
      if (countryData && countryData.dialCode) {
        countryCode.value = `+${countryData.dialCode}`;
        emit('update:countryCode', countryCode.value);
      }
    }
  }, 100); // Small delay to ensure IntlTelInput is fully initialized
});
</script>
