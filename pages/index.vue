<template>
    <div>
        <div class="mx-20 mt-10">
            <!-- Products -->
            <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10">
                <ProductCard :cover-image="coverImage" :is-owned="isOwned" :is-favorite="isFavorite" :detail="detail"/>
                <ProductCard :cover-image="coverImage2" :is-owned="isOwned2" :is-favorite="isFavorite2" :detail="detail2"/>
                <ProductCard :cover-image="coverImage" :is-owned="isOwned" :is-favorite="isFavorite" :detail="detail" />
                <ProductCard :cover-image="coverImage2" :is-owned="isOwned2" :is-favorite="isFavorite2" :detail="detail2" />                
            </div>

            <!-- Inventory -->
            <div class="mt-10 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10">
                <InventoryCard :cover-image="coverImage" :is-owned="isOwned" :is-favorite="isFavorite" :detail="detail" />
                <InventoryCard :cover-image="coverImage" :is-owned="isOwned" :is-favorite="isFavorite" :detail="detail" />
                <InventoryCard :cover-image="coverImage" :is-owned="isOwned" :is-favorite="isFavorite" :detail="detail" />
                <InventoryCard :cover-image="coverImage" :is-owned="isOwned" :is-favorite="isFavorite" :detail="detail" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ProductDetail } from '~/types'

const coverImage = 'https://shared.steamstatic.com/store_item_assets/steam/apps/2161700/library_600x900_2x.jpg?t=1744328429'
const isOwned = false
const isFavorite = false
const detail: ProductDetail = {
    developers: ['Atlus'],
    year: 2024,
    title: 'Persona 3: Reload',
    platformLogos: [
        'https://upload.wikimedia.org/wikipedia/commons/7/7a/PS5_logo.png',
        'https://upload.wikimedia.org/wikipedia/commons/8/87/PlayStation_4_logo_and_wordmark.svg',
        'https://upload.wikimedia.org/wikipedia/commons/e/e5/Xbox_Logo.svg',
        'https://static-00.iconduck.com/assets.00/steam-icon-2026x2048-3b7rynay.png'
    ],
    generes: ['Action', 'Adventure', 'Horror']
}

const coverImage2 = 'https://cdn2.steamgriddb.com/thumb/c2526ac91cf2dba8f8b1b58935c7597c.jpg'
const isOwned2 = true
const isFavorite2 = true
const detail2: ProductDetail = {
    developers: ['Nintendo'],
    year: 2025,
    title: 'Mario Kart World',
    platformLogos: [
        'https://upload.wikimedia.org/wikipedia/commons/a/a8/Nintendo_Switch_2_logo_transparent_black.svg'
    ],
    generes: ['Action', 'Multiplayer', 'Racing', 'Open World', 'Family-Friendly', 'Party', '4-Player']
}


</script>