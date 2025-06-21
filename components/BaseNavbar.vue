<!-- Taha Rashid -->
<!-- Jun 19, 2025 -->

<template>
    <div class="navbar bg-base-300/0 backdrop-blur-[3px] shadow-sm sticky top-0 z-50">
        <div class="navbar-start">
            <div class="dropdown">
                <button class="btn btn-sm btn-ghost mr-1 lg:hidden" tabindex="0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                </button>
                <ul v-for="link in props.links" :key="link.name" class="menu dropdown-content gap-y-3 bg-base-300 mt-6 rounded-box shadow w-50" tabindex="0">
                    <li>
                        <a class="link link-hover link-neutral-content dm-sans-bold text-[16px] text-white font-outline" :href="link.link">{{ link.name }}</a>
                    </li>
                </ul>
            </div>
            <a href="#" class="dm-sans-bold text-[32px] text-white font-outline lg:ml-3">
                SavePoint
            </a>
        </div>
        <div class="navbar-center">
            <label class="hidden lg:flex input w-lg">
                <input type="search" placeholder="Search" class="grow"/>
                <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2.5"
                    fill="none"
                    stroke="currentColor"
                    >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
            </label>
        </div>
        <div class="navbar-end">
            <!-- Small screen -->
            <label class="lg:hidden input w-lg gap-x-3">
                <input type="search" placeholder="Search" class="grow"/>
                <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2.5"
                    fill="none"
                    stroke="currentColor"
                    >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
            </label>
            <!-- Large screen -->
            <div class="hidden lg:flex">
                <ul v-for="link in props.links" :key="link.name" class="menu menu-horizontal gap-x-3">
                    <li>
                        <a class="link link-hover link-neutral-content dm-sans-bold text-[16px] text-white font-outline" :href="link.link">{{ link.name }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Link } from '~/types';

// creating props
const props = defineProps<{
    links: Link[]
}>()
</script>