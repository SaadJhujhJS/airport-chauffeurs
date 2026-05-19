<template>
  <svg
    width="12"
    height="11"
    viewBox="0 0 12 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.96269 0.731445H10.6273L6.99103 4.89807L11.2693 10.5688H7.91987L5.2946 7.13025L2.29407 10.5688H0.627889L4.51695 6.11069L0.414673 0.732221H3.84939L6.2188 3.87463L8.96269 0.731445ZM8.37732 9.57021H9.29996L3.34542 1.67812H2.3561L8.37732 9.57021Z"
      :fill="fill || 'white'"
    />
  </svg>
</template>
<script setup lang="ts">
defineProps<{
  fill?: string;
}>();
</script>
