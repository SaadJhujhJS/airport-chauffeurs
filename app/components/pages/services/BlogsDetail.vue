<template>
  <div
    class="py-5 md:py-20 w-full mx-auto h-fit max-w-[1140px] flex flex-col md:flex-row gap-4 md:gap-12 px-5"
  >
    <div class="md:w-1/2 flex flex-col justify-center">
      <div
        class="pl-5 text-[#111111] text-4xl font-[Sarpanch] font-semibold mb-8 border-l border-[#333333] leading-8 uppercase"
      >
        <h2>{{ title }}</h2>
      </div>
      <div
        class="flex flex-col gap-4 pt-8 md:pt-[50px] text-xl font-[Lato] font-medium text-[#111111]"
      >
        <p>
          {{ detail1 }}
        </p>
        <p>
          {{ detail2 }}
        </p>
      </div>
    </div>
    <div class="md:w-1/2 h-[500px] overflow-hidden">
      <img
        :src="image"
        :alt="title"
        class="size-full object-cover rounded-3xl"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  image: {
    type: String,
    defualt: '',
  },
  title: {
    type: String,
    defualt: '',
  },
  detail1: {
    type: String,
    defualt: '',
  },
  detail2: {
    type: String,
    defualt: '',
  },
});
</script>
