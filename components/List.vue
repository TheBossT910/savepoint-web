<!-- Taha Rashid -->
<!-- Aug 4, 2025 -->

<template>
    <!-- Outer Card -->
    <div :id="`game-card-${props.id}`" class="w-full flex lg:min-h-[170px]" @click="goToProduct">
        <div class="flex w-full h-full bg-gray-100/30 dark:bg-gray-500/30 border-[1px] border-gray-300/70 dark:border-gray-500/70 backdrop-blur-[1px] rounded-2xl p-[5px] shadow-[0_0_10px_rgba(38,75,224,0.25)] transition-all duration-300 ease-out will-change-transform">
            <!-- Image -->
            <div class="w-1/3 hidden lg:block">
                <img :src="props.cover" class="w-full h-full object-cover rounded-2xl aspect-16/9" loading="lazy">
            </div>
            <div class="lg:hidden">
                <img :src="props.cover" class="absolute inset-0 w-full h-full object-cover rounded-2xl aspect-16/9" loading="lazy">
                <div class="absolute inset-0 bg-gray-600/20 rounded-2xl backdrop-blur-[2px]"></div>
            </div>
            
            <!-- Content -->
            <div class="lg:w-2/3 flex flex-col">
                <!-- Title -->
                <div class="flex flex-wrap items-center mx-4 z-1">
                    <div class="dm-sans-bold text-[32px]">
                        <span class="hidden lg:block text-base-900 dark-font-outline">
                            {{ props.name }}
                        </span>

                        <span class="lg:hidden text-white font-outline">
                            {{ props.name }}
                        </span>
                    </div>
                </div>

                <div class="flex flex-wrap gap-x-2 gap-y-2 px-4 z-1 mb-1">
                    <!-- Owned badge -->
                    <div class="flex bg-[#10A4DA]/70 border-[1px] border-[#26C1E0]/70 backdrop-blur-[5px] w-[58px] h-[22px] rounded-2xl font-outline dm-sans-bold text-white text-[12px]">
                        <div class="m-auto">
                            Owned
                        </div>
                    </div>

                    <!-- Favorite badge -->
                    <div class="flex items-center justify-center text-white dark-font-outline bg-[#EF4444]/70 border-[1px] border-[#F87171]/70 backdrop-blur-[5px] w-[22px] h-[22px] rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                        </svg>
                    </div>

                    <!-- Reviews -->
                    <div v-for="review in props.reviews" :key="review.id" class="flex" >
                        <img
                        :src="review.logo"
                        class="m-auto lg:h-[17px] md:h-[10px] h-[8px]"
                        loading="lazy"
                        >
                        <div class="px-1 dm-sans-bold w-full m-auto text-[12px]">
                            <span class="hidden lg:flex text-base-900 dark-font-outline">
                                - {{ review.rating }}
                            </span>
                            <span class="flex lg:hidden text-white font-outline">
                                - {{ review.rating }}
                            </span>
                        </div>
                    </div>

                    <!-- Developers -->
                    <div class="flex flex-wrap items-center  dm-sans-bold min-h-[16px] text-[12px]">
                        <span class="hidden lg:flex text-gray-400">
                            <!-- TODO: add year field -->
                            {{ props.developers.map(developer => developer.name).join(', ') }}, 20XX
                        </span>

                        <span class="flex lg:hidden text-white font-outline">
                            <!-- TODO: add year field -->
                            {{ props.developers.map(developer => developer.name).join(', ') }}, 20XX
                        </span>
                    </div>

                    <!-- Genres -->
                    <div class="ml-auto dm-sans-bold text-[12px]">
                        <span class="hidden lg:flex text-gray-400">
                            {{ props.genres.map(genre => genre.name).join(', ') }}
                        </span>

                        <span class="flex lg:hidden text-white font-outline">
                            {{ props.genres.map(genre => genre.name).join(', ') }}
                        </span>
                    </div>
                </div>

                <!-- Desc -->
                <div class="mx-4 dm-sans-bold text-[18px] z-1">
                    <span class="hidden lg:block text-gray-400">
                        {{ props.description }}
                    </span>

                    <span class="lg:hidden text-white font-outline">
                        {{ props.description }}
                    </span>
                </div>

                <div class="mt-auto">
                    <!-- Buy button -->
                    <div class="flex flex-wrap items-center my-3 mx-2 bg-gradient-to-l from-[#26C1E0]/70 to-[#7B28E0]/70 hover:bg-[#7B28E0] border-[1px] border-[#9B5BE9]/70 backdrop-blur-[5px] font-outline dm-sans-bold text-[28px] text-white rounded-2xl transition-all duration-300 ease-out will-change-transform">
                        <div class="mx-auto py-2">
                            $ 79.99
                        </div>
                    </div>

                    <!-- Platform -->
                    <div class="flex mx-2">
                        <div v-for="platform in props.platforms" :key="platform.id" class="flex mx-1 mb-2 w-full h-full rounded-xl bg-gray-100/30 dark:bg-gray-500/30 hover:bg-gray-300/60 hover:dark:bg-gray-500/60 border-[1px] border-gray-300/70 dark:border-gray-500/70 backdrop-blur-[5px] p-[5px] shadow-sm dark:shadow-gray-400/60 transition-all duration-300 ease-out will-change-transform">
                            <div class="m-auto p-3 hidden lg:block">
                                <img :src="platform.platformLogo" class="max-h-[25px] m-auto dark:invert" loading="lazy">
                            </div>
                            <div class="m-auto p-3 lg:hidden">
                                <img :src="platform.platformLogo" class="max-h-[25px] m-auto invert" loading="lazy">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IGame } from '~/types';
const router = useRouter();
const props = defineProps<IGame>()

const goToProduct = () => {
    router.push(`/products/${props.id}`)
}
</script>