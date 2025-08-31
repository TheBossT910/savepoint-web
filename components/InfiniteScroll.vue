<!-- Taha Rashid -->
<!-- Aug 31, 2025 -->
<!-- Created with assistance from ChatGPT -->

<template>
  <div class="relative overflow-hidden w-full">
    <div 
    :class="[ 'flex w-max', reverse ? 'scroll-reverse' : 'scroll' ]" 
    :style="{ '--scroll-duration': `${duration}s` }"
    >
      <div
      v-for="(img, index) in filledImages"
      :key="index"
      class="flex-shrink-0 mx-2"
      >
      <LazyGamePoster v-if="poster" :id="index" :image="img" class="w-auto object-cover" :style="{ height: height }"/>
      <img v-else :src="img" class="w-auto object-cover" :style="{ height: height }">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"

const props = withDefaults(
    defineProps<{
        images: string[]
        height: string
        poster?: boolean
        reverse?: boolean
        duration?: number
    }>(),
    {
        poster: true,
        reverse: false,
        duration: 20
    }
)

// Ensure enough images to cover at least ~2x the screen
const filledImages = computed(() => {
  const minRepeat = 10 // repeat enough times to make it seamless
  let arr: string[] = []
  while (arr.length < props.images.length * minRepeat) {
    arr = arr.concat(props.images)
  }
  return arr
})
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes scroll-reverse {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.scroll {
  animation: scroll var(--scroll-duration, 20s) linear infinite;
}

.scroll-reverse {
  animation: scroll-reverse var(--scroll-duration, 20s) linear infinite;
}
</style>