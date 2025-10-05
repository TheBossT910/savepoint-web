<!-- Taha Rashid -->
<!-- Aug 2, 2025 -->

<template>
    <!-- Outer Card -->
    <div :id="`game-card-${props.id}`" class="flex flex-col bg-gray-100/30 dark:bg-gray-500/30 hover:bg-gray-300/60 hover:dark:bg-gray-500/60 border-[1px] border-gray-300/70 dark:border-gray-500/70 backdrop-blur-[1px] rounded-2xl p-[5px] shadow-sm dark:shadow-gray-400/60 transition-all duration-300 ease-out will-change-transform" @click="goToProduct">
        <div class="relative aspect-[2/3] rounded-2xl transition-all duration-300">
            <!-- Image -->
            <img 
            :src="props.game.cover"
            class="w-full aspect-[2/3] object-cover rounded-2xl"
            loading="lazy"
            >

            <!-- Buy button -->
            <div class="flex absolute left-2 right-2 bottom-2 bg-gradient-to-l from-[#26C1E0]/70 to-[#7B28E0]/70 hover:bg-[#7B28E0] border-[1px] border-[#9B5BE9]/70 backdrop-blur-[5px] font-outline dm-sans-bold text-[12px] text-white h-[55px] mx-auto rounded-2xl transition-all duration-300 ease-out will-change-transform">
                <div class="m-auto">
                    $ Buy
                </div>
            </div>

            <!-- Platform badges -->
            <div v-if="props.game.platforms.length != 0" class="flex p-1 absolute left-2 right-2 bottom-18 bg-[#10A4DA]/70 border-[1px] border-[#26C1E0]/70 backdrop-blur-[5px] min-h-[25px] mx-auto rounded-2xl">
                <div class="w-full flex flex-wrap gap-x-2 gap-y-2 m-auto">
                    <img
                    v-for="platform in props.game.platforms" :key="platform.id" 
                    :src="platform.platformLogo"
                    class="mx-auto max-h-[13px] my-1 invert"
                    loading="lazy"
                    >
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

        <!-- Content -->
        <div class="flex flex-col w-full px-1 py-1">
            <div class="text-base-900 dark-font-outline dm-sans-bold w-full text-[18px]">
                {{ props.game.name }}
            </div>

            <div class="text-gray-400 dm-sans-bold w-full text-[12px]">
                <!-- TODO: add 'year' property to game -->
                {{ props.game.developers.map(developer => developer.name).join(', ') }}, 20XX
            </div>
        </div>

        <!-- Genres -->
        <div class="text-gray-400 dm-sans-bold w-full text-[12px] px-1 py-1 mt-auto">
            {{ props.game.genres.map(genre => genre.name).join(', ') }}
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IGame } from '~/types';

let card: HTMLElement | null = null
const router = useRouter();
const props = defineProps<{
    game: IGame,
    id: string
}>()

onMounted(() => {
    card = document.getElementById(`game-card-${props.id}`)
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
    router.push(`/products/${props.id}`)
}
</script>