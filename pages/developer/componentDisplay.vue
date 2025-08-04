<!-- Taha Rashid -->
<!-- Aug 2, 2025 -->

<template>
    <div>
        <div class="px-20 pb-10 pt-30">
            <div class="flex flex-col gap-y-5">
                <div>
                    Game Card
                    <GameCard :="productCardProps[0]" class="w-[30%]"/>
                </div>
                <div>
                    Game Card with Preview
                    <GameCardWithPreview :="productCardProps[0]"/>
                </div>
                <div>
                    Game Poster
                    <GamePoster :="productCardProps[0]" class="w-[30%]"/>
                </div>
                <div>
                    Game Stack
                    <GameStack :game-poster="productCardProps" class="w-[30%]"/>
                </div>
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
</script>