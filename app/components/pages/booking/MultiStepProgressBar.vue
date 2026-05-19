<template>
  <div class="w-full max-w-4xl mx-auto">
    <!-- Progress Container -->
    <div class="relative">
      <!-- Progress Line -->
      <div
        class="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 rounded-full"
      ></div>
      <div
        class="absolute top-5 left-0 h-0.5 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] rounded-full transition-all duration-500 ease-out"
        :style="{ width: progressWidth }"
      ></div>

      <!-- Steps -->
      <div class="relative flex justify-between items-start">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="flex flex-col items-center relative z-10"
        >
          <!-- Step Circle -->
          <div class="relative mb-2">
            <!-- Background Circle -->
            <div
              class="w-10 h-10 rounded-full border-2 transition-all duration-300 flex items-center justify-center"
              :class="[
                currentStep >= index
                  ? 'border-[#D4A574] bg-white shadow-lg'
                  : 'border-gray-300 bg-white',
              ]"
            >
              <!-- Completed Step -->
              <div
                v-if="currentStep > index"
                class="w-6 h-6 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center"
              >
                <IconTick class="w-3 h-3 text-white" />
              </div>

              <!-- Current Step -->
              <div
                v-else-if="currentStep === index"
                class="w-6 h-6 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center animate-pulse"
              >
                <div class="w-2 h-2 bg-white rounded-full"></div>
              </div>

              <!-- Future Step -->
              <div v-else class="w-6 h-6 bg-gray-200 rounded-full"></div>
            </div>

            <!-- Step Number -->
            <div
              v-if="currentStep < index"
              class="absolute inset-0 flex items-center justify-center"
            >
              <span class="text-xs font-semibold text-gray-500">
                {{ index + 1 }}
              </span>
            </div>
          </div>

          <!-- Step Label -->
          <div class="text-center max-w-20">
            <h3
              class="text-sm font-medium transition-colors duration-300 mb-1 leading-tight"
              :class="[
                currentStep >= index ? 'text-[#222222]' : 'text-gray-400',
              ]"
            >
              {{ step }}
            </h3>
            <div
              class="w-4 h-0.5 mx-auto rounded-full transition-all duration-300"
              :class="[
                currentStep >= index
                  ? 'bg-gradient-to-r from-[#F4C7A4] to-[#D4A574]'
                  : 'bg-gray-300',
              ]"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface StepsProps {
  steps: string[];
  currentStep: number;
}

const props = defineProps<StepsProps>();

// Calculate progress width
const progressWidth = computed(() => {
  if (props.steps.length <= 1) return '0%';
  const progress = props.currentStep / (props.steps.length - 1);
  return `${Math.min(progress * 100, 100)}%`;
});
</script>
