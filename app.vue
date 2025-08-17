<template>
  <div>
    <!-- Navbar -->
    <div class="fixed w-full z-50">
      <BaseNavbar :links=links />
    </div>

    <!-- Navbar dropdown button -->
    <div id="dropdown-portal" class="absolute top-5 left-0 z-50 lg:hidden"/>

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
  { link: '/products/1', name: 'Product' },
  { link: '/developer/components', name: 'Components' },
  { link: '/login', name: 'Sign In' }
]
</script>
