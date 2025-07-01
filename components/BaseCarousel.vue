<!-- Taha Rashid -->
<!-- Jul 1, 2025 -->

<template>
    <div>
        <div class="relative flex">
            <!-- Scroll left -->
            <div class="absolute flex h-[75%] pl-2 z-1">
                <button class="btn m-auto" :disabled="!(groupPosition != 0)" @click="scrollToSlide(`slide${groupPosition - 1}`); groupPosition = groupPosition - 1;">❮</button>
            </div>

            <!-- Carousel -->
            <div class="relative flex rounded overflow-hidden space-x-4 p-4">
                <div v-for="(groupNumber, index) in groupSize" :id="`slide${ index }`" :key="index" class="flex space-x-4">  
                    <div v-for="(product, productIndex) in props.productCardProps.slice(index * displaySize, displaySize + (index * displaySize))" :key="productIndex" class="carousel-item w-75">
                        <ProductCard :="product" />
                    </div>
                </div>
            </div>

            <!-- Scroll right -->
            <div class="absolute flex right-0 pr-2 h-[75%] z-1">
                <button class="btn m-auto" :disabled="!(groupPosition + 1 != groupSize)" @click="scrollToSlide(`slide${groupPosition + 1}`); groupPosition = groupPosition + 1;">❯</button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { IProductCardProp } from '~/types'

const props = defineProps<{
    productCardProps: IProductCardProp[]
}>()

// dynamically changes depending on the viewport
const displaySize = ref(0)
const groupSize = ref(4)
const groupPosition = ref(0)

onMounted( () => {
    window.addEventListener('resize', handleResize)
    handleResize()
})

onUnmounted( () => {
    window.removeEventListener('resize', handleResize)
})

// scrolling in carousel
const scrollToSlide = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return
    element.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
}

// resizing carousel display
const handleResize = () => {
    const width = window.innerWidth

    // set displaySize
    if (width >= 1280) displaySize.value = 4         // xl
    else if (width >= 1024) displaySize.value = 3    // lg
    else if (width >= 768) displaySize.value = 2     // md
    else displaySize.value = 1                       // <= sm

    // set group size
    groupSize.value = Math.ceil(props.productCardProps.length / displaySize.value)
}

</script>