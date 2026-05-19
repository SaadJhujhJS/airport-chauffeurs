<template>
  <div>
    <section
      class="relative w-full overflow-hidden h-[450px] bg-[#333333]"
    >
      <img
        :src="backgroundImage"
        :alt="title"
        width="1920"
        height="450"
        fetchpriority="high"
        decoding="async"
        class="absolute inset-0 w-full h-full object-cover object-center select-none"
      />
      <div class="absolute inset-0 bg-black/60 z-10"></div>

      <div class="relative z-20 text-white">
        <BaseContainer>
          <div class="flex flex-col justify-center items-center py-30 lg:py-41">
            <h1
              class="text-3xl lg:text-5xl font-[Sarpanch] font-semibold"
              :class="{ '!text-4xl text-[#D4A574]': isBlogDetail }"
            >
              {{ title }}
            </h1>
            <h2
              v-if="isBlogDetail && subTitle"
              class="text-[26px] font-[Sarpanch] font-semibold leading-tight pt-2.5"
            >
              {{ subTitle }}
            </h2>
          </div>
        </BaseContainer>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
defineProps({
  backgroundImage: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  subTitle: {
    type: String,
    default: '',
  },
  isBlogDetail: {
    type: Boolean,
    default: false,
  },
});
</script>
