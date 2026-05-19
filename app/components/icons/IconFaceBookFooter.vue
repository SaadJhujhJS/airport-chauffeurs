<template>
  <svg
    width="8"
    height="14"
    viewBox="0 0 8 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.53809 7.99264H7.19951L7.86408 5.33436H5.53809V4.00523C5.53809 3.32072 5.53809 2.67609 6.86723 2.67609H7.86408V0.443137C7.64743 0.414561 6.82935 0.350098 5.96541 0.350098C4.1611 0.350098 2.87982 1.45129 2.87982 3.47357V5.33436H0.886108V7.99264H2.87982V13.6415H5.53809V7.99264Z"
      :fill="fill || 'white'"
    />
  </svg>
</template>
<script setup lang="ts">
defineProps<{
  fill?: string;
}>();
</script>
