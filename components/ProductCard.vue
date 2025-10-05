<!-- Taha Rashid -->
<!-- June 19, 2025 -->

<template>
    <!-- Outer Product Card -->
    <div :id="`product-card-${props.id}`" class="bg-gray-100/30 dark:bg-gray-500/30 hover:bg-gray-300/60 hover:dark:bg-gray-500/60 border-[1px] border-gray-300/70 dark:border-gray-500/70 backdrop-blur-[1px] rounded-[12px] shadow-sm dark:shadow-gray-400/60 transition-all duration-300 ease-out will-change-transform" @click="goToProduct">
        <div class="relative bg-gray-400 aspect-[3/4] rounded-t-[12px] transition-all duration-300">
            <!-- Image -->
            <img 
            :src="props.coverImage"
            class="w-full aspect-[3/4] object-cover rounded-t-[12px]"
            loading="lazy"
            >

            <!-- Buy button -->
            <div class="flex absolute text-base-900 dark-font-outline bottom-0 bg-green-500/60 border-[1px] border-b-0 border-green-400/70 backdrop-blur-[5px] dm-sans-bold text-[12px] w-full h-[48px] rounded-t-[12px]">
                <div class="m-auto">
                    $ Buy (N/A)
                </div>
            </div>

            <!-- Owned badge -->
            <div class="flex absolute text-base-900 dark-font-outline top-[16px] left-[16px] bg-yellow-500/60 border-[1px] border-yellow-400/70 backdrop-blur-[5px] w-[58px] h-[22px] rounded-[12px] dm-sans-bold text-[12px]">
                <div class="m-auto">
                    Owned
                </div>
            </div>

            <!-- Favorite badge -->
            <div class="flex items-center justify-center text-base-900 dark-font-outline absolute top-[16px] right-[16px] bg-red-500/60 border-[1px] border-red-400/70 backdrop-blur-[5px] w-[22px] h-[22px] rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                </svg>
            </div>
        </div>

        <!-- Content -->
        <div class="w-full min-h-[120px] flex flex-col gap-y-[12px] p-[10px]">
            <div class="text-gray-400 dm-sans-bold w-full min-h-[16px] text-[12px]">
                {{ props.developers.join(', ') }}, {{ props.year }}
            </div>

            <div class="text-base-900 dark-font-outline dm-sans-bold w-full min-h-[23px] text-[18px]">
                {{ props.title }}
            </div>

            <div class="w-full flex flex-wrap gap-x-2 gap-y-2">
                    <img
                    v-for="logo in props.platformLogos" :key="logo" 
                    :src="logo"
                    class="mx-auto h-[17px] dark:invert"
                    loading="lazy"
                    >
            </div>

            <div class="text-gray-400 dm-sans-bold w-full min-h-[16px] text-[12px]">
                {{ props.generes.join(', ') }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IProductCardProp } from '~/types';

const props = defineProps<IProductCardProp>()
let card: HTMLElement | null = null

onMounted(() => {
    card = document.getElementById(`product-card-${props.id}`)
    // add event listeners
    if (!card) return
    card.addEventListener("mousemove", mouseMove)
    card.addEventListener("mouseleave", mouseLeave)
})

onUnmounted(() => {
    // remove listeners
    if (!card) return 
    card.removeEventListener('mousemove', mouseMove)
    card.removeEventListener('mouseleave', mouseLeave)
})

const mouseMove = (e: MouseEvent) => {
    if (!card) return
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left // x position within the card
    const y = e.clientY - rect.top  // y position within the card

    // Degrees to rotate by
    const rotateX = ((y / rect.height) - 0.5) * 6
    const rotateY = ((x / rect.width) - 0.5) * -6

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
}

const mouseLeave = () => {
    if (!card) return
    card.style.transform = "rotateX(0deg) rotateY(0deg)"
}

const goToProduct = () => {
    console.log('goToProduct clicked')
}
</script>