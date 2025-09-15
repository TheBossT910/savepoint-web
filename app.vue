<template>
  <div>
    <!-- Navbar -->
    <div class="fixed w-full z-50">
      <BaseNavbar :links=links />
    </div>

    <!-- Navbar dropdown button -->
    <div id="dropdown-portal" class="fixed z-50"/>

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
  { link: '/products/CBBB41CF-7B6E-469A-5C36-08DDE0F2EF3E', name: '1' },
  { link: '/products/B798433E-F36B-1410-875B-00DF911A1189', name: '2' },
  { link: '/search', name: 'Games' },
  { link: '/developer/components', name: 'Components' },
  { link: '/login', name: 'Sign In' }
]
</script>
