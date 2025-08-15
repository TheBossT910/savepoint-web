<!-- Taha Rashid -->
<!-- Aug 3, 2025 -->

<template>
    <!-- Stack of posters -->
    <div class="relative flex justify-center items-center">
      <!-- Sets the height for the view -->
      <div class="invisible w-[100%]">
        <GamePoster v-bind="props.gamePoster[0]" />
      </div>

      <div 
        v-for="(game, index) in props.gamePoster.slice(0, gamePoster.length >= 5 ? 5: gamePoster.length)" 
        :key="game.id"
        class="absolute transition-transform duration-300 w-[80%]"
        :style="{ 
          transform: `rotate(${getAngle(index)}deg) ${getOffset(index)}`,
          zIndex: `${index}`
        }"
      >
        <GamePoster :id="game.id" :image="game.coverImage" />
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
    'translate(-10px, -10px)',
    'translate(5px, 10px)',
    'translate(-5px, -10px)',
    'translate(15px, -5px)',
    'translate(0px, 0px)',
    'translate(-10px, 10px)'
  ]
  return offsets[index % offsets.length]
}
</script>