<!-- Taha Rashid -->
<!-- Jun 19, 2025 -->

<template>
    <div>
        <div class="flex h-[60px] bg-base-300/0 backdrop-blur-[3px] border-base-300/10 border-b-[1px] shadow-sm sticky top-0 z-50">
            <!-- SavePoint logo -->
            <div class="my-auto">
                <div class="dropdown">
                    <button class="btn btn-sm btn-ghost mr-1 lg:hidden" tabindex="0">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
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

            <div class="my-auto ml-auto">
                <label class="hidden lg:flex input w-lg">
                    <input type="search" placeholder="Search" class="grow">
                    <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        stroke-width="2.5"
                        fill="none"
                        stroke="currentColor"
                        >
                        <circle cx="11" cy="11" r="8"/>
                        <path d="m21 21-4.3-4.3"/>
                        </g>
                    </svg>
                </label>
            </div>


            <div class="my-auto ml-auto mr-2">
                <!-- Extra small screen -->
                <button class="md:hidden" @click="searchPopupOpen = !searchPopupOpen">
                    <svg class="h-[1em] text-white mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        stroke-width="2.5"
                        fill="none"
                        stroke="currentColor"
                        >
                        <circle cx="11" cy="11" r="8"/>
                        <path d="m21 21-4.3-4.3"/>
                        </g>
                    </svg>
                </button>

                <!-- Small screen -->
                <label class="hidden md:flex lg:hidden input w-lg gap-x-3">
                    <input type="search" placeholder="Search" class="grow">
                    <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        stroke-width="2.5"
                        fill="none"
                        stroke="currentColor"
                        >
                        <circle cx="11" cy="11" r="8"/>
                        <path d="m21 21-4.3-4.3"/>
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
        
        <Transition
            enter-active-class="transition-all duration-200 ease-out"
            enter-from-class="opacity-0 translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition-all duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-2"
        >

            <div v-show="searchPopupOpen" class="bg-base-300/0 border-base-300/20 border-[1px] backdrop-blur-[3px] w-xl p-2 mt-2 rounded-full mx-auto">
                <label class="flex input w-full gap-x-3">
                    <input type="search" placeholder="Search" class="grow">
                    <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        stroke-width="2.5"
                        fill="none"
                        stroke="currentColor"
                        >
                        <circle cx="11" cy="11" r="8"/>
                        <path d="m21 21-4.3-4.3"/>
                        </g>
                    </svg>
                </label>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import type { Link } from '~/types';

// creating props
const props = defineProps<{
    links: Link[]
}>()

const searchPopupOpen = ref(true)
</script>