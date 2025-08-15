<!-- Taha Rashid -->
<!-- Aug 2, 2025 -->

<template>
    <!-- Outer Card -->
    <div :id="`game-poster-${props.id}`" class="bg-gray-100/30 dark:bg-gray-500/30 hover:bg-gray-300/60 hover:dark:bg-gray-500/60 border-[1px] border-gray-300/70 dark:border-gray-500/70 backdrop-blur-[1px] rounded-2xl p-[5px] shadow-sm dark:shadow-gray-400/60 transition-all duration-300 ease-out will-change-transform">
        <!-- Image -->
        <img :src="props.coverImage" class="w-full aspect-[2/3] object-cover rounded-2xl">
    </div>
</template>

<script setup lang="ts">
import type { IProductCardProp } from '~/types';

const props = defineProps<IProductCardProp>()
</script>