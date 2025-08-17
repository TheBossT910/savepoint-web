<!-- Taha Rashid -->
<!-- Aug 4, 2025 -->

<template>
    <!-- Outer Card -->
    <div :id="`game-card-${props.id}`" class="w-full flex lg:min-h-[170px]">
        <div class="flex w-full h-full bg-gray-100/30 dark:bg-gray-500/30 border-[1px] border-gray-300/70 dark:border-gray-500/70 backdrop-blur-[1px] rounded-2xl p-[5px] shadow-[0_0_10px_rgba(38,75,224,0.25)] transition-all duration-300 ease-out will-change-transform">
            <!-- Image -->
            <div class="w-1/3 hidden lg:block">
                <img :src="props.horizontalImage" class="w-full h-full object-cover rounded-2xl">
            </div>
            <div class="lg:hidden">
                <img :src="props.horizontalImage" class="absolute inset-0 w-full h-full object-cover rounded-2xl">
                <div class="absolute inset-0 bg-gray-600/20 rounded-2xl backdrop-blur-[2px]"></div>
            </div>
            
            <!-- Content -->
            <div class="lg:w-2/3 flex flex-col">
                <!-- Title -->
                <div class="flex flex-wrap items-center mx-4 z-1">
                    <div class="dm-sans-bold text-[32px]">
                        <span class="hidden lg:block text-base-900 dark-font-outline">
                            {{ props.title }}
                        </span>

                        <span class="lg:hidden text-white font-outline">
                            {{ props.title }}
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
                    <div v-for="review in props.reviews" :key="review.logo" class="flex" >
                        <img
                        :src="review.logo"
                        class="m-auto lg:h-[17px] md:h-[10px] h-[8px]"
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
                            {{ props.developers.join(', ') }}, {{ props.year }}
                        </span>

                        <span class="flex lg:hidden text-white font-outline">
                            {{ props.developers.join(', ') }}, {{ props.year }}
                        </span>
                    </div>

                    <!-- Genres -->
                    <div class="ml-auto dm-sans-bold text-[12px]">
                        <span class="hidden lg:flex text-gray-400">
                            {{ props.generes.join(', ') }}
                        </span>

                        <span class="flex lg:hidden text-white font-outline">
                            {{ props.generes.join(', ') }}
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
                        <div v-for="logo in props.platformLogos" :key="logo" class="flex mx-1 mb-2 w-full h-full rounded-xl bg-gray-100/30 dark:bg-gray-500/30 hover:bg-gray-300/60 hover:dark:bg-gray-500/60 border-[1px] border-gray-300/70 dark:border-gray-500/70 backdrop-blur-[5px] p-[5px] shadow-sm dark:shadow-gray-400/60 transition-all duration-300 ease-out will-change-transform">
                            <div class="m-auto p-3 hidden lg:block">
                                <img :src="logo" class="max-h-[25px] m-auto dark:invert">
                            </div>
                            <div class="m-auto p-3 lg:hidden">
                                <img :src="logo" class="max-h-[25px] m-auto invert">
                            </div>
                        </div>
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
    horizontalImage: 'https://shared.steamstatic.com/store_item_assets/steam/apps/2161700/header.jpg?t=1744328429',
    horizontalImage2: 'https://shared.steamstatic.com/store_item_assets/steam/apps/284160/header.jpg?t=1743607204',
    horizontalImage3: 'https://cdn2.steamgriddb.com/hero_thumb/e295402f4bc2d05c3daba18c489b2dbb.jpg',
    horizontalImage4: 'https://shared.steamstatic.com/store_item_assets/steam/apps/1687950/header.jpg?t=1733297203',
    verticalImage: 'https://shared.steamstatic.com/store_item_assets/steam/apps/2161700/library_600x900_2x.jpg?t=1744328429',
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