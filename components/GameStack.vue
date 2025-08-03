<!-- Taha Rashid -->
<!-- Aug 3, 2025 -->

<template>
  <div class="relative w-full h-[400px]">
    <!-- Stack of posters -->
    <div 
      v-for="(game, index) in props.gamePoster.slice(0, gamePoster.length >= 5 ? 5: gamePoster.length)" 
      :key="game.id"
      class="absolute w-[30%] transition-transform duration-300"
      :style="{ 
        transform: `rotate(${getAngle(index)}deg) ${getOffset(index)}`,
        zIndex: `${index}`
      }"
    >
      <GamePoster v-bind="game" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProductCardProp } from '~/types'

const props = defineProps<{
  gamePoster: IProductCardProp[]
}>()

// get a nice angle
const getAngle = (index: number) => {
  const angles = [8, -15, 3, -8, 0, 25, -25, 15]
  return angles[index % angles.length]
}

// slight position offset
const getOffset = (index: number) => {
  const offsets = [
    'translate(10px, 15px)',
    'translate(-20px, -10px)',
    'translate(5px, 10px)',
    'translate(-5px, -10px)',
    'translate(15px, -5px)',
    'translate(0px, 0px)',
    'translate(-10px, 10px)'
  ]
  return offsets[index % offsets.length]
}
</script>