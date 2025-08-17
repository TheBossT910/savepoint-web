<template>
  <div>
    <!-- Navbar -->
    <div class="fixed w-full z-50">
      <BaseNavbar :links=links />
    </div>

    <!-- This displays our current pages -->
    <div class="bg-dot">
      <NuxtPage />
    </div>

     <!-- Footer -->
    <div class="w-full z-50">
      <BaseFooter />
    </div>
  </div>
</template>


<script setup lang="ts">
import type { Link } from './types';

// Navbar Links
const links: Link[] = [
  { link: '/', name: 'Home' },
  { link: '/login', name: 'Sign In' }
]
</script>
