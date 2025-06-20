<template>
  <div>
    <BaseNavbar :links = links />
    <!-- This displays our current pages -->
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import type { Link } from './types';

// Navbar Links
const links: Link[] = [
    { link: '/', name: 'Home' }, 
    { link: '/login', name: 'Sign In'}
]
</script>
