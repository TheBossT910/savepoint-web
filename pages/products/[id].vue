<template>
    <div>
        <!-- Splash -->
        <div class="relative pt-30 pb-10 px-2 sm:px-5 md:px-20">
            <!-- Splash image -->
            <img 
            :src="game?.splash" 
            alt=""
            class="absolute inset-0 h-full w-full object-cover">

            <!-- Overlay on splash image -->
            <div class="absolute inset-0 bg-black/50"></div>

            <div class="flex gap-x-10">
                <!-- Details -->
                <div class="flex flex-col w-full h-full">
                    <!-- Title -->
                    <div class="flex dm-sans-bold text-[48px] text-white w-full h-auto z-1">
                        {{ game?.name }}
                        <!-- Favorite badge -->
                        <div class="ml-2 flex items-center justify-center my-auto text-white dark-font-outline bg-[#EF4444]/70 border-[1px] border-[#F87171]/70 backdrop-blur-[5px] w-[22px] h-[22px] rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                            </svg>
                        </div>
                    </div>

                    <!-- Reviews -->
                    <div class="flex mt-2 w-100 h-[20px] opacity-0 transition-opacity duration-700 ease-out" :class="loaded ? 'opacity-100' : ''">
                        <!-- Metacritic -->
                        <div v-for="review in game?.reviews" :key="review.id" class="flex px-2 z-1 rounded-xl">
                            <img :src="review.logo" class="ml-1 h-[17px] my-auto">
                            <div class="dm-sans-bold text-[12px] text-white ml-1">{{ review.rating }}</div>
                        </div>
                    </div>

                    <!-- Buttons -->
                    <div class="mt-2 flex flex-wrap gap-2 opacity-0 transition-opacity duration-700 ease-out" :class="loaded ? 'opacity-100' : ''" :style="{ transitionDelay: `200ms` }">
                        <!-- Buy -->
                        <div class="flex bg-gradient-to-l from-[#26C1E0]/70 to-[#7B28E0]/70 hover:bg-[#7B28E0] border-[1px] border-[#9B5BE9]/70 backdrop-blur-[5px] rounded-xl py-1 px-4 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="m-auto text-white mr-1" viewBox="0 0 16 16">
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z"/>
                            </svg>
                            <div class="m-auto dm-sans-bold text-[14px] text-white uppercase">
                                Buy New
                            </div>
                        </div>

                        <!-- Add to collection -->
                        <div class="flex bg-gradient-to-r from-[#26C1E0]/70 to-[#7B28E0]/70 hover:bg-[#7B28E0] border-[1px] border-[#9B5BE9]/70 backdrop-blur-[5px] rounded-xl py-1 px-4 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="m-auto text-white mr-1" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
                            </svg>
                            <div class="m-auto dm-sans-bold text-[14px] text-white uppercase">
                                Add to collection
                            </div>
                        </div>

                        <!-- Watch trailer -->
                        <div class="flex bg-gradient-to-l from-[#26C1E0]/70 to-[#7B28E0]/70 hover:bg-[#7B28E0] border-[1px] border-[#9B5BE9]/70 backdrop-blur-[5px] rounded-xl py-1 px-4 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="m-auto text-white mr-1" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
                            </svg>
                            <div class="m-auto dm-sans-bold text-[14px] text-white uppercase">
                                Watch trailer
                            </div>
                        </div>
                    </div>

                    <!-- Platform badges-->
                    <div class="mt-2 mb-5 flex gap-x-[16px] opacity-0 transition-opacity duration-700 ease-out" :class="loaded ? 'opacity-100' : ''" :style="{ transitionDelay: `200ms` }">
                        <div v-for="platform in game?.platforms" :key="platform.id" class="bg-[#10A4DA]/70 hover:bg-[#10A4DA] border-[1px] border-[#26C1E0]/70 backdrop-blur-[5px] rounded-xl py-1 px-2 transition-all duration-300">
                            <div class="m-auto dm-sans-bold text-[14px] text-white uppercase">
                                <a :href="platform.url">
                                    <img :src="platform.platformLogo" class="h-[17px] invert">
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Preview video -->
                    <div v-if="game?.videos" class="flex overflow-x-auto gap-x-4 z-1 mb-10 opacity-0 transition-opacity duration-700 ease-out" :class="loaded ? 'opacity-100' : ''" :style="{ transitionDelay: `400ms` }">
                        <iframe 
                        v-for="video in game.videos.map(video => video.url)" 
                        :key="video"
                        class="aspect-16/9 w-full lg:w-[50%] rounded-xl"
                        :src="video" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                        </iframe>
                    </div>

                    <!-- HLTB -->
                    <div class="my-5 flex flex-wrap gap-2 opacity-0 transition-opacity duration-700 ease-out" :class="loaded ? 'opacity-100' : ''" :style="{ transitionDelay: `600ms` }">
                        <!-- Main -->
                        <div class="flex bg-[#10A4DA]/70 border-[1px] border-[#26C1E0]/70 backdrop-blur-[5px] rounded-md p-1 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="m-auto text-white mr-1" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                            </svg>
                            <div class="m-auto dm-sans-bold text-[14px] text-white uppercase">
                                Main: {{ game?.playTime.main }}
                            </div>
                        </div>

                        <!-- Main + Sides -->
                        <div class="flex bg-[#10A4DA]/70 border-[1px] border-[#26C1E0]/70 backdrop-blur-[5px] rounded-md p-1 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="m-auto text-white mr-1" viewBox="0 0 16 16">
                                <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"/>
                            </svg>
                            <div class="m-auto dm-sans-bold text-[14px] text-white uppercase">
                                Main + Sides: {{ game?.playTime.mainPlusSides }}
                            </div>
                        </div>

                        <!-- Completionist -->
                        <div class="flex bg-[#10A4DA]/70 border-[1px] border-[#26C1E0]/70 backdrop-blur-[5px] rounded-md p-1 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="m-auto text-white mr-1" viewBox="0 0 16 16">
                                <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"/>
                            </svg>
                            <div class="m-auto dm-sans-bold text-[14px] text-white uppercase">
                                Completionist: {{ game?.playTime.completionist }}
                            </div>
                        </div>

                        <!-- All styles -->
                        <div class="flex bg-[#10A4DA]/70 border-[1px] border-[#26C1E0]/70 backdrop-blur-[5px] rounded-md p-1 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="m-auto text-white mr-1" viewBox="0 0 16 16">
                                <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v3a.5.5 0 0 1-.5.5h-3A1.5 1.5 0 0 0 0 6.5v3A1.5 1.5 0 0 0 1.5 11h3a.5.5 0 0 1 .5.5v3A1.5 1.5 0 0 0 6.5 16h3a1.5 1.5 0 0 0 1.5-1.5v-3a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 0 16 9.5v-3A1.5 1.5 0 0 0 14.5 5h-3a.5.5 0 0 1-.5-.5v-3A1.5 1.5 0 0 0 9.5 0zm1.288 2.34a.25.25 0 0 1 .424 0l.799 1.278A.25.25 0 0 1 8.799 4H7.201a.25.25 0 0 1-.212-.382zm0 11.32-.799-1.277A.25.25 0 0 1 7.201 12H8.8a.25.25 0 0 1 .212.383l-.799 1.278a.25.25 0 0 1-.424 0Zm-4.17-4.65-1.279-.798a.25.25 0 0 1 0-.424l1.279-.799A.25.25 0 0 1 4 7.201V8.8a.25.25 0 0 1-.382.212Zm10.043-.798-1.278.799A.25.25 0 0 1 12 8.799V7.2a.25.25 0 0 1 .383-.212l1.278.799a.25.25 0 0 1 0 .424Z"/>
                            </svg>
                            <div class="m-auto dm-sans-bold text-[14px] text-white uppercase">
                                All Styles: {{ game?.playTime.allStyles }}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card (on >=md) -->
                <LazyGamePoster :id="1" :image="game?.cover" class="hidden md:flex w-full h-full lg:w-[40%]" />
            </div>

            <!-- Card (on <md) -->
            <LazyGamePoster :id="1" :image="game?.cover" class="mx-auto h-full md:hidden w-[70%] md:w-75" />
        </div>

        <div class="relative w-full">
            <!-- Image container -->
            <div v-if="game?.images" class="sticky inset-0 w-full h-full z-0 bg-black space-y-4">
                <InfiniteScroll :images="game.images.map(images => images.url).slice(0, 3)" :height="'33vh'" :duration="180" :poster="false"/>
                <InfiniteScroll :images="game.images.map(images => images.url).slice(3, 6)" :height="'33vh'" :duration="180" :poster="false" reverse/>
                <InfiniteScroll :images="game.images.map(images => images.url).slice(6)" :height="'33vh'" :duration="180" :poster="false"/>
            </div>

            <!-- Dummy hidden description -->
            <div class="invisible z-10 mx-auto px-2 sm:px-5 md:px-20 py-20 space-y-10">
                <div class="mt-5 w-full lg:w-[50%] h-auto backdrop-blur-[1px]">
                    <div class="rounded-2xl bg-[#10A4DA]/70 border-[1px] border-[#26C1E0]/70 px-10 py-8 dm-sans-bold text-[18px] text-white font-outline">
                        <p class="whitespace-pre-line">{{ game?.description }}</p>
                    </div>
                </div>
            </div>

            <!-- Visible description -->
            <div class="absolute top-0 z-10 mx-auto px-2 sm:px-5 md:px-20 py-20 space-y-10">
                <div class="mt-5 w-full lg:w-[50%] h-auto backdrop-blur-[1px]">
                    <div class="rounded-2xl bg-[#10A4DA]/70 border-[1px] border-[#26C1E0]/70 px-10 py-8 dm-sans-bold text-[18px] text-white font-outline">
                        <p class="whitespace-pre-line">{{ game?.description }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="relative mt-5 px-2 sm:px-5 md:px-20">
            <div class="dm-sans-bold text-[48px] text-base-900 dark-font-outline w-full h-auto">
                Retailers
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="flex flex-col gap-2">
                    <LazyRetailerCard />
                    <LazyRetailerCard />
                    <LazyRetailerCard />
                </div>                
                <LazyRetailerMap />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getGame } from '~/api/gamesService';
import type { IGame } from '~/types';

const loaded = ref(false)
const route = useRoute()

const game = ref<IGame>();

onMounted(async () => {
  loaded.value = true
  console.log(route.params.id)

  // CBBB41CF-7B6E-469A-5C36-08DDE0F2EF3E is Persona 5: Reload
  // B798433E-F36B-1410-875B-00DF911A1189 is Metaphor: Refantazio
  const id = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id
  game.value = (await getGame(id)).data
  console.log(game)
  console.log(game.value!.videos.map(video => video.url))
})
</script>