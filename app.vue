<template>
  <div>
    <BaseNavbar :links = links />
    <!-- This displays our current pages -->
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
// Navbar Links
const links = [
    { link: '/', name: 'Home' }, 
    { link: '/login', name: 'Sign In'}
]
</script>
