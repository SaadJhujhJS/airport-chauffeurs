<script setup lang="ts">
defineProps({
  stroke: {
    type: String,
    default: '#ffffff',
  },
});
</script>

<template>
  <svg
    width="44px"
    height="44px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 7L4 7"
      :stroke="stroke"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M20 12L4 12"
      :stroke="stroke"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M20 17L4 17"
      :stroke="stroke"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
</template>
