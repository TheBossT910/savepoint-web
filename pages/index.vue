<template>
    <div>
        <div class="relative py-20 px-10">
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
                    <div class="flex bg-rose-700/60 border-[1px] border-rose-600/70 backdrop-blur-[5px] rounded-[6px] p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="m-auto text-white mr-1" viewBox="0 0 16 16">
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z"/>
                        </svg>
                        <div class="m-auto dm-sans-bold text-[14px] text-white uppercase">
                            Buy New
                        </div>
                    </div>

                    <!-- Add to collection -->
                    <div class="flex bg-rose-700/60 border-[1px] border-rose-600/70 backdrop-blur-[5px] rounded-[6px] p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="m-auto text-white mr-1" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
                        </svg>
                        <div class="m-auto dm-sans-bold text-[14px] text-white uppercase">
                            Add to collection
                        </div>
                    </div>

                    <!-- Watch trailer -->
                    <div class="flex bg-rose-700/60 border-[1px] border-rose-600/70 backdrop-blur-[5px] rounded-[6px] p-1">
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
                    <div v-for="logo in detail.platformLogos" :key="logo" class="bg-gray-200/60 border-[1px] border-gray-100/70 backdrop-blur-[5px] rounded-[6px] p-1">
                        <div class="m-auto dm-sans-bold text-[14px] text-white uppercase">
                            <img :src="logo" class="h-[17px]">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mx-20 my-10">
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

            <div class="flex overflow-hidden space-x-4 p-4">
                <div id="slide1" class="flex space-x-4">
                    <div class="carousel-item w-75">
                        <ProductCard :cover-image="coverImage" :is-owned="isOwned" :is-favorite="isFavorite" :detail="detail"/>
                    </div>
                    <div class="carousel-item w-75">
                        <ProductCard :cover-image="coverImage2" :is-owned="isOwned2" :is-favorite="isFavorite2" :detail="detail2"/>
                    </div>
                    <div class="carousel-item w-75">
                        <ProductCard :cover-image="coverImage" :is-owned="isOwned" :is-favorite="isFavorite" :detail="detail" />
                    </div>
                </div>

                <div id="slide2" class="flex space-x-4">
                    <div class="carousel-item w-75">
                        <ProductCard :cover-image="coverImage" :is-owned="isOwned" :is-favorite="isFavorite" :detail="detail"/>
                    </div>
                    <div class="carousel-item w-75">
                        <ProductCard :cover-image="coverImage2" :is-owned="isOwned2" :is-favorite="isFavorite2" :detail="detail2"/>
                    </div>
                    <div class="carousel-item w-75">
                        <ProductCard :cover-image="coverImage" :is-owned="isOwned" :is-favorite="isFavorite" :detail="detail" />
                    </div>
                </div>

                <div id="slide3" class="flex space-x-4">
                    <div class="carousel-item w-75">
                        <ProductCard :cover-image="coverImage" :is-owned="isOwned" :is-favorite="isFavorite" :detail="detail"/>
                    </div>
                    <div class="carousel-item w-75">
                        <ProductCard :cover-image="coverImage2" :is-owned="isOwned2" :is-favorite="isFavorite2" :detail="detail2"/>
                    </div>
                    <div class="carousel-item w-75">
                        <ProductCard :cover-image="coverImage" :is-owned="isOwned" :is-favorite="isFavorite" :detail="detail" />
                    </div>
                </div>

                <div id="slide4" class="flex space-x-4">
                    <div class="carousel-item w-75">
                        <ProductCard :cover-image="coverImage" :is-owned="isOwned" :is-favorite="isFavorite" :detail="detail"/>
                    </div>
                    <div class="carousel-item w-75">
                        <ProductCard :cover-image="coverImage2" :is-owned="isOwned2" :is-favorite="isFavorite2" :detail="detail2"/>
                    </div>
                    <div class="carousel-item w-75">
                        <ProductCard :cover-image="coverImage" :is-owned="isOwned" :is-favorite="isFavorite" :detail="detail" />
                    </div>
                </div>
            </div>

            <!-- Scrolling -->
            <button class="btn" @click="scrollToSlide('slide1')">1</button>
            <button class="btn" @click="scrollToSlide('slide2')">2</button>
            <button class="btn" @click="scrollToSlide('slide3')">3</button>
            <button class="btn" @click="scrollToSlide('slide4')">4</button>
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

// scrolling in carousel
const scrollToSlide = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return
    element.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
}


</script>