<!-- Taha Rashid -->
<!-- Aug 4, 2025 -->

<template>
    <!-- Outer Card -->
    <div :id="`game-card-${props.id}`" class="w-full flex" @click="goToProduct">
        <!-- Image -->
        <div class="w-[30%] bg-gray-100/30 dark:bg-gray-500/30 hover:bg-gray-300/60 hover:dark:bg-gray-500/60 border-[1px] border-gray-300/70 dark:border-gray-500/70 backdrop-blur-[5px] rounded-2xl p-[5px] shadow-sm dark:shadow-gray-400/60 transition-all duration-300 ease-out will-change-transform">
            <div class="relative aspect-[2/1] rounded-2xl transition-all duration-300">
                <img 
                :src="props.splashImage"
                class="w-full aspect-[2/1] object-cover rounded-2xl"
                >
            </div>
        </div>

        <!-- Connector -->
        <div class="w-[2%] h-8 my-auto bg-gray-100/30 dark:bg-gray-500/30 border-t-[1px] border-gray-300/70 dark:border-gray-500/70 backdrop-blur-[5px] p-[5px] shadow-sm dark:shadow-gray-400/60 transition-all duration-300 ease-out will-change-transform"></div>

        <!-- Content -->
        <div class="w-[68%] flex bg-gray-100/30 dark:bg-gray-500/30 border-[1px] border-gray-300/70 dark:border-gray-500/70 backdrop-blur-[5px] rounded-2xl p-[5px] shadow-sm dark:shadow-gray-400/60 transition-all duration-300 ease-out will-change-transform">
            <!-- Details -->
            <div class="w-[30%] h-full">
                <div class="flex flex-col w-full px-1 py-1">
                    <div class="text-base-900 dark-font-outline dm-sans-bold w-full min-h-[23px] text-[18px]">
                        {{ props.title }}
                    </div>

                    <div class="text-gray-400 dm-sans-bold w-full min-h-[16px] text-[12px]">
                        {{ props.developers.join(', ') }}, {{ props.year }}
                    </div>

                    <div class="w-full flex flex-wrap gap-x-2 gap-y-2 mt-2">
                        <div v-for="review in props.reviews" :key="review.logo" class="flex" >
                            <img
                            :src="review.logo"
                            class="m-auto h-[17px] dark:invert"
                            >
                            <div class="px-1 text-gray-900 dm-sans-bold w-full text-[16px] m-auto">
                                - {{ review.rating }}
                            </div>
                        </div>
                    </div>

                    <div class="absolute bottom-3 text-gray-400 dm-sans-bold w-full min-h-[16px] text-[12px]">
                        {{ props.generes.join(', ') }}
                    </div>
                </div>
            </div>

            <!-- Desc and box art -->
            <div class="w-[40%] m-2 bg-gray-100/30 dark:bg-gray-500/30 border-[1px] border-gray-300/70 dark:border-gray-500/70 backdrop-blur-[5px] py-2 px-3 shadow-sm dark:shadow-gray-400/60 rounded-2xl transition-all duration-300 ease-out will-change-transform">
                <div class="text-gray-400 dm-sans-bold w-full min-h-[16px] text-[12px] mt-1">
                    {{ props.description }}
                </div>
            </div>

            <!-- Price and platforms -->
            <div class="w-[40%] flex m-2 ml-0 bg-gray-100/30 dark:bg-gray-500/30 border-[1px] border-gray-300/70 dark:border-gray-500/70 backdrop-blur-[5px] p-[5px] shadow-sm dark:shadow-gray-400/60 rounded-2xl transition-all duration-300 ease-out will-change-transform">
                <!-- Platform -->
                <div class="w-[50%] h-full">
                    <div class="grid grid-cols-2 gap-1 h-full">
                        <div v-for="logo in props.platformLogos" :key="logo" class="flex w-full h-full rounded-xl bg-gray-100/30 dark:bg-gray-500/30 hover:bg-gray-300/60 hover:dark:bg-gray-500/60 border-[1px] border-gray-300/70 dark:border-gray-500/70 backdrop-blur-[5px] p-[5px] shadow-sm dark:shadow-gray-400/60 transition-all duration-300 ease-out will-change-transform">
                            <div class="m-auto">
                                <img :src="logo" class="max-h-[13px] m-auto dark:invert">
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Buy button -->
                <div class="w-[50%] ml-2 h-full flex bg-[#9B5BE9]/70 border-[1px] border-[#7B28E0]/70 backdrop-blur-[5px] font-outline dm-sans-bold text-[12px] text-white mx-auto rounded-2xl">
                    <div class="m-auto">
                        $ Buy
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// import type { IProductCardProp } from '~/types';
// const props = defineProps<IProductCardProp>()

const props = {
    id: 0,
    splashImage: 'https://shared.steamstatic.com/store_item_assets/steam/apps/2161700/header.jpg?t=1744328429',
    developers: ['Atlus'],
    year: 2024,
    title: 'Persona 3: Reload',
    generes: ['Action', 'Adventure', 'Horror'],
    reviews: [
        {logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/IGN_logo.svg/2560px-IGN_logo.svg.png', rating: '98'},
        {logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Metacritic_M.png', rating: '92'}
    ],
    description: 'Dive into the Dark Hour and awaken the depths of your heart. Persona 3 Reload is a captivating reimagining of the genre-defining RPG, reborn for the modern era with cutting-edge graphics and gameplay.',
    platformLogos: [
            'https://upload.wikimedia.org/wikipedia/commons/7/7a/PS5_logo.png',
            'https://upload.wikimedia.org/wikipedia/commons/8/87/PlayStation_4_logo_and_wordmark.svg',
            'https://upload.wikimedia.org/wikipedia/commons/e/e5/Xbox_Logo.svg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Steam_2016_logo_black.svg/800px-Steam_2016_logo_black.svg.png',
        ],
}
</script>