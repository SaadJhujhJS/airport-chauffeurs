<template>
  <div>
    <main>
      <LoginForm />
    </main>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: false,
});

usePageSeo({
  title: 'Login to Your Account | Premium Airport Chauffeurs',
  description:
    'Sign in to your Premium Airport Chauffeurs account to manage bookings, view trip history, and access exclusive member benefits.',
  path: '/login',
  robots: 'noindex, nofollow',
});
</script>
