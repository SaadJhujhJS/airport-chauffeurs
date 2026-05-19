<template>
  <svg
    :fill="fill"
    width="24px"
    height="24px"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#ffffff"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M760 380.4l-61.6-61.6-263.2 263.1-109.6-109.5L264 534l171.2 171.2L760 380.4z"
      ></path>
    </g>
  </svg>
</template>
<script setup lang="ts">
defineProps({
  fill: {
    type: String,
    defualt: '#000',
  },
});
</script>
