<!-- Taha Rashid -->
<!-- Aug 4, 2025 -->

<template>
    <!-- Outer Card -->
    <div :id="`game-card-${props.id}`" class="w-full flex lg:min-h-[170px]" @click="goToProduct">
        <!-- Content (sm) -->
        <div class="md:hidden w-full">
            <div class="bg-gray-100/30 dark:bg-gray-500/30 border-[1px] border-gray-300/70 dark:border-gray-500/70 backdrop-blur-[5px] rounded-2xl p-[5px] shadow-sm dark:shadow-gray-400/60 transition-all duration-300 ease-out will-change-transform">
                <!-- Top -->
                <div>
                    <div class="flex rounded-2xl">
                        <img 
                        :src="props.horizontalImage"
                        class="w-full object-cover rounded-2xl"
                        >
                    </div>

                    <div class="flex flex-wrap gap-x-2 gap-y-2 px-2">
                        <!-- Reviews -->
                        <div v-for="review in props.reviews" :key="review.logo" class="flex" >
                            <img
                            :src="review.logo"
                            class="m-auto lg:h-[17px] md:h-[10px] h-[8px]"
                            >
                            <div class="px-1 text-base-900 dark-font-outline dm-sans-bold w-full m-auto text-[12px]">
                                - {{ review.rating }}
                            </div>
                        </div>

                        <!-- Genres -->
                        <div class="ml-auto text-gray-400 dm-sans-bold text-[12px]">
                            {{ props.generes.join(', ') }}
                        </div>
                    </div>
                </div>

                <!-- Bottom -->
                <div class="flex h-[80%]">
                    <div class="w-[100%]">
                        <div class="flex h-full bg-gray-100/30 dark:bg-gray-500/30 border-[1px] border-gray-300/70 dark:border-gray-500/70 backdrop-blur-[5px] p-[5px] shadow-sm dark:shadow-gray-400/60 rounded-2xl transition-all duration-300 ease-out will-change-transform">
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
                            <div class="w-[50%] ml-2 flex flex-wrap items-center bg-[#9B5BE9]/70 hover:bg-[#7B28E0]/70 border-[1px] border-[#7B28E0]/70 backdrop-blur-[5px] font-outline dm-sans-bold text-[12px] text-white mx-auto rounded-2xl transition-all duration-300 ease-out will-change-transform">
                                <div class="mx-auto">
                                    $ Buy
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Content (md) -->
        <div class="hidden md:flex lg:hidden  w-full h-full min-h-[280px] bg-gray-100/30 dark:bg-gray-500/30 border-[1px] border-gray-300/70 dark:border-gray-500/70 backdrop-blur-[5px] rounded-2xl p-[5px] shadow-sm dark:shadow-gray-400/60 transition-all duration-300 ease-out will-change-transform">
            <!-- Image -->
            <div class="w-[30%]">
                <div class="flex h-full pr-1 rounded-2xl transition-all duration-300">
                    <img 
                    :src="props.verticalImage"
                    class="h-full object-cover rounded-2xl"
                    >
                </div>
            </div>

            <div class="w-[70%]">
                <!-- Top -->
                <div class="h-[30%] px-2">
                    <!-- Title -->
                    <div class="h-auto flex flex-wrap items-center">
                        <div class="text-base-900 dark-font-outline dm-sans-bold">
                            {{ props.title }}
                        </div>
                    </div>

                    <!-- Developers -->
                    <div class="text-gray-400 dm-sans-bold w-full text-[12px] mb-1">
                        {{ props.developers.join(', ') }}, {{ props.year }}
                    </div>

                    <div class="flex flex-wrap gap-x-2 gap-y-2">
                        <!-- Reviews -->
                        <div v-for="review in props.reviews" :key="review.logo" class="flex" >
                            <img
                            :src="review.logo"
                            class="m-auto lg:h-[17px] md:h-[10px] h-[8px]"
                            >
                            <div class="px-1 text-base-900 dark-font-outline dm-sans-bold w-full m-auto text-[17px]">
                                - {{ review.rating }}
                            </div>
                        </div>

                        <!-- Genres -->
                        <div class="ml-auto text-gray-400 dm-sans-bold text-[10px]">
                            {{ props.generes.join(', ') }}
                        </div>
                    </div>
                </div>

                <!-- Bottom -->
                <div class="flex h-[70%]">
                    <div class="w-[100%]">
                        <div class="flex h-full bg-gray-100/30 dark:bg-gray-500/30 border-[1px] border-gray-300/70 dark:border-gray-500/70 backdrop-blur-[5px] p-[5px] shadow-sm dark:shadow-gray-400/60 rounded-2xl transition-all duration-300 ease-out will-change-transform">
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
                            <div class="w-[50%] ml-2 flex flex-wrap items-center bg-[#9B5BE9]/70 hover:bg-[#7B28E0]/70 border-[1px] border-[#7B28E0]/70 backdrop-blur-[5px] font-outline dm-sans-bold text-[12px] text-white mx-auto rounded-2xl transition-all duration-300 ease-out will-change-transform">
                                <div class="mx-auto">
                                    $ Buy
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Content (lg) -->
        <div class="hidden lg:flex w-full h-full bg-gray-100/30 dark:bg-gray-500/30 border-[1px] border-gray-300/70 dark:border-gray-500/70 backdrop-blur-[5px] rounded-2xl p-[5px] shadow-sm dark:shadow-gray-400/60 transition-all duration-300 ease-out will-change-transform">
            <!-- Image -->
            <div class="w-[30%]">
                <div class="flex h-full pr-1 rounded-2xl transition-all duration-300">
                    <img 
                    :src="props.horizontalImage"
                    class="h-full object-cover rounded-2xl"
                    >
                </div>
            </div>

            <div class="w-[70%]">
                <!-- Top -->
                <div class="h-[20%]">
                    <!-- Title -->
                    <div class="h-auto flex flex-wrap items-center">
                        <div class="text-base-900 px-2 dark-font-outline dm-sans-bold">
                            {{ props.title }}
                        </div>
                    </div>
                </div>

                <!-- Bottom -->
                <div class="flex h-[80%]">
                    <div class="w-[35%]">
                        <div class="flex flex-col w-full h-full px-2 pb-1">
                            <!-- Developers -->
                            <div class="text-gray-400 dm-sans-bold w-full min-h-[16px] text-[12px] mb-1">
                                {{ props.developers.join(', ') }}, {{ props.year }}
                            </div>

                            <!-- Reviews -->
                            <div class="flex flex-wrap gap-x-2 gap-y-2">
                                <div v-for="review in props.reviews" :key="review.logo" class="flex" >
                                    <img
                                    :src="review.logo"
                                    class="m-auto lg:h-[17px] md:h-[10px] h-[8px]"
                                    >
                                    <div class="px-1 text-base-900 dark-font-outline dm-sans-bold w-full m-auto text-[17px]">
                                        - {{ review.rating }}
                                    </div>
                                </div>
                            </div>

                            <!-- Genres -->
                            <div class="mt-auto text-gray-400 dm-sans-bold w-full min-h-[16px] text-[12px]">
                                {{ props.generes.join(', ') }}
                            </div>
                        </div>
                    </div>

                    <div class="w-[65%]">
                        <div class="flex h-full bg-gray-100/30 dark:bg-gray-500/30 border-[1px] border-gray-300/70 dark:border-gray-500/70 backdrop-blur-[5px] p-[5px] shadow-sm dark:shadow-gray-400/60 rounded-2xl transition-all duration-300 ease-out will-change-transform">
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
                            <div class="w-[50%] ml-2 flex flex-wrap items-center bg-[#9B5BE9]/70 hover:bg-[#7B28E0]/70 border-[1px] border-[#7B28E0]/70 backdrop-blur-[5px] font-outline dm-sans-bold text-[12px] text-white mx-auto rounded-2xl transition-all duration-300 ease-out will-change-transform">
                                <div class="mx-auto">
                                    $ Buy
                                </div>
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