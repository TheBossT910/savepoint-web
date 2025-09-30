<!-- Taha Rashid -->
<!-- Aug 2, 2025 -->

<template>
    <!-- Outer Card -->
    <div :id="`game-card-with-preview-${props.id}`" class="flex flex-row gap-x-3 bg-gray-100/30 dark:bg-gray-500/30 hover:bg-gray-300/60 hover:dark:bg-gray-500/60 border-[1px] border-gray-300/70 dark:border-gray-500/70 backdrop-blur-[1px] rounded-2xl p-[5px] shadow-sm dark:shadow-gray-400/60 transition-all duration-300 ease-out will-change-transform" @click="goToProduct">
        <!-- Game cover section -->
        <div class="relative rounded-2xl transition-all duration-300 w-[0%] md:w-[30%] hidden md:block">
            <!-- Image -->
            <img 
            :src="props.coverImage"
            class="w-full h-full object-cover rounded-2xl"
            loading="lazy"
            >

            <!-- Buy button -->
           <div class="flex absolute left-0 right-0 bottom-2 bg-gradient-to-l from-[#26C1E0]/70 to-[#7B28E0]/70 hover:bg-[#7B28E0] border-[1px] border-[#9B5BE9]/70 backdrop-blur-[5px] font-outline dm-sans-bold text-[12px] text-white h-[105px] w-[95%] mx-auto rounded-2xl transition-all duration-300 ease-out will-change-transform">
                <div class="m-auto">
                    $ Buy
                </div>
            </div>

            <!-- Owned badge -->
            <div class="flex absolute top-[16px] left-[16px] bg-[#10A4DA]/70 border-[1px] border-[#26C1E0]/70 backdrop-blur-[5px] w-[58px] h-[22px] rounded-2xl font-outline dm-sans-bold text-white text-[12px]">
                <div class="m-auto">
                    Owned
                </div>
            </div>

            <!-- Favorite badge -->
            <div class="flex items-center justify-center text-white dark-font-outline absolute top-[16px] right-[16px] bg-[#EF4444]/70 border-[1px] border-[#F87171]/70 backdrop-blur-[5px] w-[22px] h-[22px] rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                </svg>
            </div>
        </div>

        <!-- Video section -->
        <div class="relative rounded-2xl transition-all duration-300 w-full md:w-[70%]">
            <!-- Video -->
            <div class="aspect-video">
                <iframe 
                    class="w-full h-full object-cover rounded-2xl"
                    src="https://www.youtube.com/embed/SKpSpvFCZRw" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
            </div>

            <!-- Buy button -->
            <div class="flex bg-[#9B5BE9]/70 border-[1px] border-[#7B28E0]/70 backdrop-blur-[5px] font-outline dm-sans-bold text-[12px] text-white h-[55px] w-full mx-auto rounded-2xl mt-2 md:hidden">
                <div class="m-auto">
                    $ Buy
                </div>
            </div>

            <!-- Details -->
            <div class="h-auto pt-2 px-3">
                <div class="flex text-gray-400 dm-sans-bold w-full text-[12px] md:text-[16px] lg:text-[20px]">
                    {{ props.developers.join(', ') }}, {{ props.year }}

                    <!-- Owned badge -->
                    <div class="flex ml-auto bg-[#10A4DA]/70 border-[1px] border-[#26C1E0]/70 backdrop-blur-[5px] w-[58px] h-[22px] rounded-2xl font-outline dm-sans-bold text-white text-[12px] md:hidden">
                        <div class="m-auto">
                            Owned
                        </div>
                    </div>

                    <!-- Favorite badge -->
                    <div class="flex ml-2 items-center justify-center text-white dark-font-outline bg-[#EF4444]/70 border-[1px] border-[#F87171]/70 backdrop-blur-[5px] w-[22px] h-[22px] rounded-full md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                        </svg>
                    </div>
                </div>

                <div class="text-base-900 dark-font-outline dm-sans-bold w-full text-[18px] md:text-[22px] lg:text-[26px]">
                    {{ props.title }}
                </div>

                <div class="w-full flex flex-wrap gap-x-2 gap-y-2 p-2">
                    <img
                    v-for="logo in props.platformLogos" :key="logo" 
                    :src="logo"
                    class="mx-auto h-[10px] sm:h-[17px] dark:invert"
                    loading="lazy"
                    >
                </div>

                <div class="text-gray-400 dm-sans-bold w-full pb-2 text-[12px] md:text-[16px] lg:text-[20px]">
                    {{ props.generes.join(', ') }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IProductCardProp } from '~/types';

const props = defineProps<IProductCardProp>()
let card: HTMLElement | null = null

onMounted(() => {
    card = document.getElementById(`game-card-with-preview-${props.id}`)
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