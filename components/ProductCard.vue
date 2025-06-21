<!-- Taha Rashid -->
<!-- June 19, 2025 -->

<template>
    <!-- Outer Product Card -->
    <div class="bg-gray-50 p-[10px] rounded-[12px] shadow-xl/25" @click="goToProduct">
        <div class="relative bg-gray-400 aspect-[3/4] rounded-t-[12px]">
            <!-- Image -->
            <img 
            :src="props.coverImage"
            class="w-full aspect-[3/4] object-cover rounded-t-[12px]"
            >

            <!-- Buy button -->
            <div class="flex absolute text-gray-900 bottom-0 bg-green-500/60 border-[1px] border-b-0 border-green-400/70 backdrop-blur-[5px] dm-sans-bold text-[12px] w-full h-[48px] rounded-t-[12px]">
                <div class="m-auto">
                    $ Buy
                </div>
            </div>

            <!-- Owned badge -->
            <div class="flex absolute text-gray-900 top-[16px] left-[16px] bg-yellow-500/60 border-[1px] border-yellow-400/70 backdrop-blur-[5px] w-[58px] h-[22px] rounded-[12px] dm-sans-bold text-[12px]">
                <div class="m-auto">
                    Owned
                </div>
            </div>

            <!-- Favorite badge -->
            <div class="flex items-center justify-center text-gray-900 absolute top-[16px] right-[16px] bg-red-500/60 border-[1px] border-red-400/70 backdrop-blur-[5px] w-[22px] h-[22px] rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                </svg>
            </div>
        </div>

        <!-- Content -->
        <div class="w-full min-h-[120px] flex flex-col gap-y-[12px]">
            <div class="text-gray-400 dm-sans-bold w-full min-h-[16px] mt-[12px] text-[12px]">
                {{ props.detail.developers.join(', ') }}, {{ props.detail.year }}
            </div>

            <div class="text-gray-900 dm-sans-bold w-full min-h-[23px] text-[18px]">
                {{ props.detail.title }}
            </div>

            <div class="w-full flex flex-wrap gap-x-2 gap-y-2">
                    <img
                    v-for="logo in props.detail.platformLogos" :key="logo" 
                    :src="logo"
                    class="mx-auto h-[17px]"
                    >
            </div>

            <div class="text-gray-400 dm-sans-bold w-full min-h-[16px] text-[12px]">
                {{ props.detail.generes.join(', ') }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ProductDetail } from '~/types';

const props = defineProps<{
    coverImage: string,
    isOwned: boolean,
    isFavorite: boolean,
    detail: ProductDetail
}>()

const goToProduct = () => {
    console.log('goToProduct clicked')
}
</script>