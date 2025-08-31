<template>
    <div>
        <div class="relative pt-20 pb-10 px-2 sm:px-5 md:px-20 bg-gradient-to-l from-[#26C1E0]/40 to-[#7B28E0]/40">
            <div class="space-y-4 inset-0 h-full w-full object-cover">
                <!-- Images -->
                <InfiniteScroll :images="images.slice(0, 3)" :height="'10rem'" :duration="50" class="opacity-0 transition-opacity duration-700 ease-out" :class="loaded ? 'opacity-100' : ''"/>
                <InfiniteScroll :images="images.slice(3, 6)" :height="'10rem'" reverse :duration="50" class="opacity-0 transition-opacity duration-700 ease-out" :class="loaded ? 'opacity-100' : ''" :style="{ transitionDelay: `200ms` }"/>
                <InfiniteScroll :images="images.slice(6)" :height="'10rem'" :duration="50" class="opacity-0 transition-opacity duration-700 ease-out" :class="loaded ? 'opacity-100' : ''" :style="{ transitionDelay: `400ms` }"/>

                <!-- Overlay on splash image -->
                <div class="absolute inset-0 bg-black/20"></div>
            </div>

            <!-- Title -->
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="flex dm-sans-bold text-[48px] text-white z-1 font-outline">
                    All Games
                </div>
            </div>
        </div>

        <!-- Content -->
        <div class="my-10 mx-2 sm:mx-5 md:mx-20">
            <!-- All games -->
            <div class="grid gap-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                <div v-for="(product, index) in productCardProps" :key="index">  
                    <LazyGameCard :="product" class="h-full"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IProductCardProp } from '~/types'

const loaded = ref(false)

onMounted(() => {
  loaded.value = true
})

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

const images = [
    'https://shared.steamstatic.com/store_item_assets/steam/apps/1687950/library_600x900_2x.jpg?t=1733297203',
    'https://shared.steamstatic.com/store_item_assets/steam/apps/2161700/library_600x900_2x.jpg?t=1744328429',
    'https://shared.steamstatic.com/store_item_assets/steam/apps/2679460/library_600x900_2x.jpg?t=1749196863',

    'https://shared.steamstatic.com/store_item_assets/steam/apps/1551360/library_600x900_2x.jpg?t=1746471486',
    'https://shared.steamstatic.com/store_item_assets/steam/apps/2215430/library_600x900_2x.jpg?t=1750948509',
    'https://shared.steamstatic.com/store_item_assets/steam/apps/1151640/library_600x900_2x.jpg?t=1750105811',

    'https://cdn2.steamgriddb.com/thumb/c2526ac91cf2dba8f8b1b58935c7597c.jpg',
    'https://cdn2.steamgriddb.com/thumb/505870c8848f2d550944bf64008c9472.jpg',
    'https://cdn2.steamgriddb.com/thumb/ae758fbcbd5bd841516c53b3c08ebc6f.jpg'
]
</script>