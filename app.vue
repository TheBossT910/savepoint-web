<template>
  <div>
    <div class="fixed w-full z-50">
      <BaseNavbar :links = links />
    </div>
   
    <!-- This displays our current pages -->
    <div>
      <NuxtPage />
    </div>
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
