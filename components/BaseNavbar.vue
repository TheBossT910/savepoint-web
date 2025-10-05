<!-- Taha Rashid -->
<!-- Jun 19, 2025 -->

<template>
    <div>
        <div class="flex h-[60px] bg-base-300/0 backdrop-blur-[3px] border-base-300/10 border-b-[1px] shadow-sm sticky top-0" @click="searchResultsPopupOpen = false">
            <!-- SavePoint logo -->
            <div class="my-auto">
                <!-- Dummy button to create space -->
                <button class="btn btn-sm btn-ghost ml-2 pt-1 mr-1 lg:hidden invisible">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                </button>

                <!-- Actual button -->
                <Teleport to="#dropdown-portal">
                    <div class="dropdown lg:hidden sticky mt-4">
                        <button class="btn btn-sm btn-ghost ml-2 pt-1 mr-1" tabindex="0">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                        </button>

                        <ul class="menu dropdown-content w-50 bg-gray-100/30 dark:bg-gray-500/30 border-[1px] border-gray-300/70 dark:border-gray-500/70 rounded-xl p-1 ml-2 mt-6 gap-y-3 shadow-sm dark:shadow-gray-400/60 backdrop-blur-[3px]" tabindex="0">
                            <li v-for="link in props.links" :key="link.name">
                                <a class="hover:bg-gray-300/60 hover:dark:bg-gray-500/60 dm-sans-bold text-[16px] text-white font-outline rounded-xl" :href="link.link">{{ link.name }}</a>
                            </li>
                        </ul>
                    </div>
                </Teleport>

                <a href="/" class="dm-sans-bold text-[32px] text-white font-outline lg:ml-3">
                    SavePoint
                </a>
            </div>

            <div class="my-auto ml-auto">
                <label class="hidden lg:flex input w-lg">
                    <input v-model="searchText" type="search" placeholder="Search" class="grow" @keydown="search">
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
                    <input v-model="searchText" type="search" placeholder="Search" class="grow" @keydown="search">
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

            <div v-show="searchPopupOpen" class="bg-base-300/0 border-base-300/20 border-[1px] backdrop-blur-[3px] w-full p-2 mt-2 rounded-full mx-auto">
                <label class="flex input w-full gap-x-3">
                    <input v-model="searchText" type="search" placeholder="Search" class="grow" @keydown="search">
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

        <!-- Search results pop-up -->
        <Transition
            enter-active-class="transition-all duration-200 ease-out"
            enter-from-class="opacity-0 translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition-all duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-2"
        >

            <div v-show="searchResultsPopupOpen" class="bg-base-300/0 border-base-300/20 rounded-lg border-[3px] backdrop-blur-[3px] mx-auto h-[93vh] w-[99vw] mt-2 overflow-y-auto" @click="searchResultsPopupOpen = false">
                <div v-if="games" class="flex flex-col scale-75 gap-y-5 origin-top pt-5 pb-10 mb-5 rounded-lg h-full">
                    <div v-for="game in games" :key="game.id">
                        <List :="game"/>
                    </div> 
                    <div v-if="games.length == 0">
                        <div class="text-base-900 dark-font-outline dm-sans-bold w-full pl-4 min-h-[23px] text-[48px]">No games found.</div>
                        <div class="text-gray-400 dark-font-outline dm-sans-bold w-full pl-4 min-h-[23px] text-[36px]">Try using a different search term.</div>
                    </div>                
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { searchGames } from '~/api/searchService';
import type { IGame, Link } from '~/types';

// creating props
const props = defineProps<{
    links: Link[]
}>()

const searchPopupOpen = ref(false)
const searchResultsPopupOpen = ref(false)
const games = ref<IGame[]>();
const searchText = ref("");
let debounceTimer = 0;

const search = async () => {
    searchResultsPopupOpen.value = false
    if (debounceTimer) clearTimeout(debounceTimer)

    debounceTimer = window.setTimeout(async () => {
        games.value = (await searchGames(searchText.value)).data
        searchResultsPopupOpen.value = true
    }, 500)
}
</script>