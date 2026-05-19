<template>
  <div v-if="faqs.length" class="bg-[#425A4D]">
    <BaseContainer>
      <div class="py-10">
        <h2
          class="text-3xl md:text-5xl font-[Sarpanch] font-semibold mb-4 text-center text-white"
        >
          Frequently asked questions
        </h2>
        <p
          class="text-center text-white/80 font-[Lato] text-lg mb-10 max-w-2xl mx-auto"
        >
          Quick answers about this topic and how Premium Airport Chauffeurs can
          help.
        </p>

        <div class="py-8 cursor-pointer">
          <div v-for="(faq, index) in faqs" :key="index">
            <div
              class="p-5.5 bg-[#F3F3F3] rounded-xl mb-7.5 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
            >
              <div
                @click="toggleFaq(index)"
                class="w-full flex justify-between items-center text-left font-[Sarpanch] font-semibold text-3xl pr-2 sm:pr-0"
              >
                <h3>{{ faq.question }}</h3>
                <span
                  class="border border-[#161618] rounded-full p-2 sm:p-3 transition-transform duration-300"
                  :class="{ 'rotate-180': activeIndex === index }"
                >
                  <IconPlus v-if="activeIndex !== index" class="w-4 h-4" />
                  <IconMinus v-else class="w-4 h-4" />
                </span>
              </div>

              <!-- Smooth animation with height calculation -->
              <transition
                @enter="enter"
                @after-enter="afterEnter"
                @leave="leave"
              >
                <div
                  v-if="activeIndex === index"
                  class="overflow-hidden faq-content text-xl font-[Lato] font-medium text-gray-600"
                >
                  <p class="pt-5 mt-5 border-t border-b-[#161618]">
                    {{ faq.answer }}
                  </p>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </BaseContainer>
  </div>
</template>

<script setup lang="ts">
import type { BlogFaq } from '~/data/blogPosts';
import IconMinus from '~/components/icons/IconMinus.vue';
import IconPlus from '~/components/icons/IconPlus.vue';

const props = defineProps<{
  faqs: BlogFaq[];
}>();

const activeIndex = ref<number | null>(null);

watch(
  () => props.faqs,
  () => {
    activeIndex.value = null;
  },
  { deep: true }
);

function toggleFaq(index: number) {
  activeIndex.value = activeIndex.value === index ? null : index;
}

// Smooth accordion animations
function enter(el: HTMLElement) {
  el.style.height = '0px';
  el.style.opacity = '0';
  el.style.transition = 'height 0.35s ease, opacity 0.35s ease';

  requestAnimationFrame(() => {
    el.style.height = el.scrollHeight + 'px';
    el.style.opacity = '1';
  });
}

function afterEnter(el: HTMLElement) {
  el.style.height = 'auto';
}

function leave(el: HTMLElement) {
  el.style.height = el.scrollHeight + 'px';
  el.style.opacity = '1';
  el.style.transition = 'height 0.35s ease, opacity 0.35s ease';

  requestAnimationFrame(() => {
    el.style.height = '0px';
    el.style.opacity = '0';
  });
}
</script>

<style scoped>
/* Optional smoothness enhancements */
.faq-content {
  will-change: height;
}
</style>
