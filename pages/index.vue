<template>
    <div>
        <div class="relative py-30 px-10">
            <!-- Splash image -->
            <img 
            src="https://shared.steamstatic.com/store_item_assets/steam/apps/1687950/library_hero_2x.jpg?t=1733297203" 
            alt=""
            class="absolute inset-0 h-full w-full object-cover">

            <!-- Overlay on splash image -->
            <div class="absolute inset-0 bg-black/30"></div>

            <div class="flex flex-col w-full h-full">
                <!-- Title -->
                <div class="dm-sans-bold text-[48px] text-white w-full h-auto z-1">
                    Persona 5: Royal
                </div>

                <!-- Reviews -->
                <div class="flex mt-2 w-100 h-[20px]">
                    <!-- Metacritic -->
                    <div class="flex px-2 bg-gray-200/60 border-[1px] border-gray-100/70 backdrop-blur-[5px] rounded-[12px]">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Metacritic_M.png" class="ml-1 h-[17px] my-auto">
                        <div class="dm-sans-bold text-[12px] text-white ml-1">100/100</div>
                    </div>

                    <!-- IGN -->
                    <div class="flex ml-5 px-2 bg-gray-200/60 border-[1px] border-gray-100/70 backdrop-blur-[5px] rounded-[12px]">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/IGN_logo.svg/2560px-IGN_logo.svg.png" class="h-[17px] my-auto">
                        <div class="dm-sans-bold text-[12px] text-white ml-1">10/10</div>
                    </div>
                </div>

                <!-- Description -->
                <div class="mt-5 w-full md:w-[50%] xl:w-[35%] h-auto bg-gray-200/60 border-[1px] border-gray-100/70 backdrop-blur-[5px] rounded-[12px]">
                    <div class="p-2 dm-sans-bold text-[14px] text-white font-outline">
                        Don the mask and join the Phantom Thieves of Hearts as they stage grand heists, infiltrate the minds of the corrupt, and make them change their ways!
                    </div>
                </div>

                <!-- Buttons -->
                <div class="mt-2 flex flex-wrap gap-2">
                    <!-- Buy -->
                    <div class="flex bg-rose-700/60 hover:bg-rose-600/60 border-[1px] border-rose-600/70 backdrop-blur-[5px] rounded-[6px] p-1 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="m-auto text-white mr-1" viewBox="0 0 16 16">
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z"/>
                        </svg>
                        <div class="m-auto dm-sans-bold text-[14px] text-white uppercase">
                            Buy New
                        </div>
                    </div>

                    <!-- Add to collection -->
                    <div class="flex bg-rose-700/60 hover:bg-rose-600/60 border-[1px] border-rose-600/70 backdrop-blur-[5px] rounded-[6px] p-1 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="m-auto text-white mr-1" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
                        </svg>
                        <div class="m-auto dm-sans-bold text-[14px] text-white uppercase">
                            Add to collection
                        </div>
                    </div>

                    <!-- Watch trailer -->
                    <div class="flex bg-rose-700/60 hover:bg-rose-600/60 border-[1px] border-rose-600/70 backdrop-blur-[5px] rounded-[6px] p-1 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="m-auto text-white mr-1" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
                        </svg>
                        <div class="m-auto dm-sans-bold text-[14px] text-white uppercase">
                            Watch trailer
                        </div>
                    </div>
                </div>

                <!-- Platform badges-->
                <div class="mt-10 flex gap-x-[16px]">
                    <div v-for="logo in platformLogos" :key="logo" class="bg-gray-200/60 border-[1px] hover:bg-gray-100/80 border-gray-100/70 backdrop-blur-[5px] rounded-[6px] p-1 transition-all duration-300">
                        <div class="m-auto dm-sans-bold text-[14px] text-white uppercase">
                            <img :src="logo" class="h-[17px]">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Products -->
        <div class="mx-20 my-10">
            <div>
                <div class="text-base-900 dark-font-outline dm-sans-bold w-full pl-4 min-h-[23px] text-[36px]">Highest Rated</div>
                <BaseCarousel :product-card-props="productCardProps" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IProductCardProp } from '~/types'

const productCardProps: IProductCardProp[] = [
    {
        id: 0,
        coverImage: 'https://shared.steamstatic.com/store_item_assets/steam/apps/2161700/library_600x900_2x.jpg?t=1744328429',
        isOwned: false,
        isFavorite: false,
        developers: ['Atlus'],
        year: 2024,
        title: 'Persona 3: Reload',
        platformLogos: [
            'https://upload.wikimedia.org/wikipedia/commons/7/7a/PS5_logo.png',
            'https://upload.wikimedia.org/wikipedia/commons/8/87/PlayStation_4_logo_and_wordmark.svg',
            'https://upload.wikimedia.org/wikipedia/commons/e/e5/Xbox_Logo.svg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Steam_2016_logo_black.svg/800px-Steam_2016_logo_black.svg.png'
        ],
        generes: ['Action', 'Adventure', 'Horror']
    },
    {
        id: 1,
        coverImage: 'https://cdn2.steamgriddb.com/thumb/c2526ac91cf2dba8f8b1b58935c7597c.jpg',
        isOwned: true,
        isFavorite: true,
        developers: ['Nintendo'],
        year: 2025,
        title: 'Mario Kart World',
        platformLogos: [
            'https://upload.wikimedia.org/wikipedia/commons/a/a8/Nintendo_Switch_2_logo_transparent_black.svg'
        ],
        generes: ['Action', 'Multiplayer', 'Racing', 'Open World', 'Family-Friendly', 'Party', '4-Player']
    },
     {
        id: 2,
        coverImage: 'https://shared.steamstatic.com/store_item_assets/steam/apps/2161700/library_600x900_2x.jpg?t=1744328429',
        isOwned: false,
        isFavorite: false,
        developers: ['Atlus'],
        year: 2024,
        title: 'Persona 3: Reload',
        platformLogos: [
            'https://upload.wikimedia.org/wikipedia/commons/7/7a/PS5_logo.png',
            'https://upload.wikimedia.org/wikipedia/commons/8/87/PlayStation_4_logo_and_wordmark.svg',
            'https://upload.wikimedia.org/wikipedia/commons/e/e5/Xbox_Logo.svg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Steam_2016_logo_black.svg/800px-Steam_2016_logo_black.svg.png'
        ],
        generes: ['Action', 'Adventure', 'Horror']
    },
    {
        id: 3,
        coverImage: 'https://cdn2.steamgriddb.com/thumb/c2526ac91cf2dba8f8b1b58935c7597c.jpg',
        isOwned: true,
        isFavorite: true,
        developers: ['Nintendo'],
        year: 2025,
        title: 'Mario Kart World',
        platformLogos: [
            'https://upload.wikimedia.org/wikipedia/commons/a/a8/Nintendo_Switch_2_logo_transparent_black.svg'
        ],
        generes: ['Action', 'Multiplayer', 'Racing', 'Open World', 'Family-Friendly', 'Party', '4-Player']
    },
     {
        id: 4,
        coverImage: 'https://shared.steamstatic.com/store_item_assets/steam/apps/2161700/library_600x900_2x.jpg?t=1744328429',
        isOwned: false,
        isFavorite: false,
        developers: ['Atlus'],
        year: 2024,
        title: 'Persona 3: Reload',
        platformLogos: [
            'https://upload.wikimedia.org/wikipedia/commons/7/7a/PS5_logo.png',
            'https://upload.wikimedia.org/wikipedia/commons/8/87/PlayStation_4_logo_and_wordmark.svg',
            'https://upload.wikimedia.org/wikipedia/commons/e/e5/Xbox_Logo.svg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Steam_2016_logo_black.svg/800px-Steam_2016_logo_black.svg.png'
        ],
        generes: ['Action', 'Adventure', 'Horror']
    },
    {
        id: 5,
        coverImage: 'https://cdn2.steamgriddb.com/thumb/c2526ac91cf2dba8f8b1b58935c7597c.jpg',
        isOwned: true,
        isFavorite: true,
        developers: ['Nintendo'],
        year: 2025,
        title: 'Mario Kart World',
        platformLogos: [
            'https://upload.wikimedia.org/wikipedia/commons/a/a8/Nintendo_Switch_2_logo_transparent_black.svg'
        ],
        generes: ['Action', 'Multiplayer', 'Racing', 'Open World', 'Family-Friendly', 'Party', '4-Player']
    },
     {
        id: 6,
        coverImage: 'https://shared.steamstatic.com/store_item_assets/steam/apps/2161700/library_600x900_2x.jpg?t=1744328429',
        isOwned: false,
        isFavorite: false,
        developers: ['Atlus'],
        year: 2024,
        title: 'Persona 3: Reload',
        platformLogos: [
            'https://upload.wikimedia.org/wikipedia/commons/7/7a/PS5_logo.png',
            'https://upload.wikimedia.org/wikipedia/commons/8/87/PlayStation_4_logo_and_wordmark.svg',
            'https://upload.wikimedia.org/wikipedia/commons/e/e5/Xbox_Logo.svg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Steam_2016_logo_black.svg/800px-Steam_2016_logo_black.svg.png'
        ],
        generes: ['Action', 'Adventure', 'Horror']
    },
    {
        id: 7,
        coverImage: 'https://cdn2.steamgriddb.com/thumb/c2526ac91cf2dba8f8b1b58935c7597c.jpg',
        isOwned: true,
        isFavorite: true,
        developers: ['Nintendo'],
        year: 2025,
        title: 'Mario Kart World',
        platformLogos: [
            'https://upload.wikimedia.org/wikipedia/commons/a/a8/Nintendo_Switch_2_logo_transparent_black.svg'
        ],
        generes: ['Action', 'Multiplayer', 'Racing', 'Open World', 'Family-Friendly', 'Party', '4-Player']
    },
     {
        id: 8,
        coverImage: 'https://shared.steamstatic.com/store_item_assets/steam/apps/2161700/library_600x900_2x.jpg?t=1744328429',
        isOwned: false,
        isFavorite: false,
        developers: ['Atlus'],
        year: 2024,
        title: 'Persona 3: Reload',
        platformLogos: [
            'https://upload.wikimedia.org/wikipedia/commons/7/7a/PS5_logo.png',
            'https://upload.wikimedia.org/wikipedia/commons/8/87/PlayStation_4_logo_and_wordmark.svg',
            'https://upload.wikimedia.org/wikipedia/commons/e/e5/Xbox_Logo.svg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Steam_2016_logo_black.svg/800px-Steam_2016_logo_black.svg.png'
        ],
        generes: ['Action', 'Adventure', 'Horror']
    },
    {
        id: 9,
        coverImage: 'https://cdn2.steamgriddb.com/thumb/c2526ac91cf2dba8f8b1b58935c7597c.jpg',
        isOwned: true,
        isFavorite: true,
        developers: ['Nintendo'],
        year: 2025,
        title: 'Mario Kart World',
        platformLogos: [
            'https://upload.wikimedia.org/wikipedia/commons/a/a8/Nintendo_Switch_2_logo_transparent_black.svg'
        ],
        generes: ['Action', 'Multiplayer', 'Racing', 'Open World', 'Family-Friendly', 'Party', '4-Player']
    },
     {
        id: 10,
        coverImage: 'https://shared.steamstatic.com/store_item_assets/steam/apps/2161700/library_600x900_2x.jpg?t=1744328429',
        isOwned: false,
        isFavorite: false,
        developers: ['Atlus'],
        year: 2024,
        title: 'Persona 3: Reload',
        platformLogos: [
            'https://upload.wikimedia.org/wikipedia/commons/7/7a/PS5_logo.png',
            'https://upload.wikimedia.org/wikipedia/commons/8/87/PlayStation_4_logo_and_wordmark.svg',
            'https://upload.wikimedia.org/wikipedia/commons/e/e5/Xbox_Logo.svg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Steam_2016_logo_black.svg/800px-Steam_2016_logo_black.svg.png'
        ],
        generes: ['Action', 'Adventure', 'Horror']
    },
    {
        id: 11,
        coverImage: 'https://cdn2.steamgriddb.com/thumb/c2526ac91cf2dba8f8b1b58935c7597c.jpg',
        isOwned: true,
        isFavorite: true,
        developers: ['Nintendo'],
        year: 2025,
        title: 'Mario Kart World',
        platformLogos: [
            'https://upload.wikimedia.org/wikipedia/commons/a/a8/Nintendo_Switch_2_logo_transparent_black.svg'
        ],
        generes: ['Action', 'Multiplayer', 'Racing', 'Open World', 'Family-Friendly', 'Party', '4-Player']
    },
]

// for splash image
const platformLogos = [
    'https://upload.wikimedia.org/wikipedia/commons/7/7a/PS5_logo.png',
    'https://upload.wikimedia.org/wikipedia/commons/8/87/PlayStation_4_logo_and_wordmark.svg',
    'https://upload.wikimedia.org/wikipedia/commons/e/e5/Xbox_Logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Steam_2016_logo_black.svg/800px-Steam_2016_logo_black.svg.png'
]

</script>