<template>
    <div>
        <div class="relative py-30 px-2 sm:px-5 md:px-20">
            <!-- Splash image -->
            <img 
            :src="splashGame?.splash" 
            alt=""
            class="absolute inset-0 h-full w-full object-cover">

            <!-- Overlay on splash image -->
            <div class="absolute inset-0 bg-black/30"></div>

            <div class="flex flex-col w-full h-full">
                <!-- Title -->
                <div class="flex dm-sans-bold text-[48px] text-white w-full h-auto z-1" @click="goToProduct(splashGame?.id)">
                    {{ splashGame?.name }}
                    <!-- Favorite badge -->
                    <div class="ml-2 flex items-center justify-center my-auto text-white dark-font-outline bg-[#EF4444]/70 border-[1px] border-[#F87171]/70 backdrop-blur-[5px] w-[22px] h-[22px] rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                        </svg>
                    </div>
                </div>

                <!-- Reviews -->
                <div class="flex mt-2 ml-1 w-100 h-[20px] opacity-0 transition-opacity duration-700 ease-out" :class="loaded ? 'opacity-100' : ''">
                    <div v-for="review in splashGame?.reviews" :key="review.id" class="flex px-2 z-1 rounded-xl">
                        <img :src="review.logo" class="ml-1 h-[17px] my-auto">
                        <div class="dm-sans-bold text-[12px] text-white ml-1">{{ review.rating }}</div>
                    </div>
                </div>

                <!-- Description -->
                <div class="mt-5 w-full md:w-[50%] xl:w-[35%] bg-[#10A4DA]/70 border-[1px] border-[#26C1E0]/70 backdrop-blur-[5px] rounded-xl opacity-0 transition-opacity duration-700 ease-out" :class="loaded ? 'opacity-100' : ''" :style="{ transitionDelay: `200ms` }" @click="goToProduct(splashGame?.id)">
                    <div class="p-2 dm-sans-bold text-[14px] text-white font-outline">
                        {{ splashGame?.description }}
                    </div>
                </div>

                <!-- Buttons -->
                <div class="mt-2 flex flex-wrap gap-2 opacity-0 transition-opacity duration-700 ease-out" :class="loaded ? 'opacity-100' : ''" :style="{ transitionDelay: `400ms` }">
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
                    <div v-if="splashGame?.videos" class="flex bg-gradient-to-l from-[#26C1E0]/70 to-[#7B28E0]/70 hover:bg-[#7B28E0] border-[1px] border-[#9B5BE9]/70 backdrop-blur-[5px] rounded-xl py-1 px-4 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="m-auto text-white mr-1" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
                        </svg>
                        <a :href="splashGame.videos[0].url" target="_blank">
                            <div class="m-auto dm-sans-bold text-[14px] text-white uppercase">
                                Watch trailer
                            </div>
                        </a>
                    </div>
                </div>

                <!-- Platform badges-->
                <div class="mt-10 flex gap-x-[16px] opacity-0 transition-opacity duration-700 ease-out" :class="loaded ? 'opacity-100' : ''" :style="{ transitionDelay: `600ms` }">
                    <div v-for="platform in splashGame?.platforms" :key="platform.id" class="bg-[#10A4DA]/70 hover:bg-[#10A4DA] border-[1px] border-[#26C1E0]/70 backdrop-blur-[5px] rounded-xl py-1 px-2 transition-all duration-300">
                        <a :href="platform.url" target="_blank">
                            <div class="m-auto dm-sans-bold text-[14px] text-white uppercase">
                                <img :src="platform.platformLogo" class="h-[17px] invert">
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Content -->
        <div class="my-10 mx-2 sm:mx-5 md:mx-20">
            <!-- Filter Buttons -->
            <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-4">                
                <div class="flex bg-gradient-to-l from-[#26C1E0]/70 to-[#7B28E0]/70 hover:bg-[#7B28E0] border-[1px] border-[#9B5BE9]/70 backdrop-blur-[5px] rounded-xl py-1 px-4 transition-all duration-300">
                    <div class="m-auto dm-sans-bold text-[32px] text-white font-outline">
                        Top Rated
                    </div>
                </div>
                <div class="flex bg-gradient-to-l from-[#26C1E0]/70 to-[#7B28E0]/70 hover:bg-[#7B28E0] border-[1px] border-[#9B5BE9]/70 backdrop-blur-[5px] rounded-xl py-1 px-4 transition-all duration-300">
                    <div class="m-auto dm-sans-bold text-[32px] text-white font-outline">
                        New Releases
                    </div>
                </div>
                <div class="flex bg-gradient-to-l from-[#26C1E0]/70 to-[#7B28E0]/70 hover:bg-[#7B28E0] border-[1px] border-[#9B5BE9]/70 backdrop-blur-[5px] rounded-xl py-1 px-4 transition-all duration-300">
                    <div class="m-auto dm-sans-bold text-[32px] text-white font-outline">
                        Classics
                    </div>
                </div>
                <div class="flex bg-gradient-to-l from-[#26C1E0]/70 to-[#7B28E0]/70 hover:bg-[#7B28E0] border-[1px] border-[#9B5BE9]/70 backdrop-blur-[5px] rounded-xl py-1 px-4 transition-all duration-300">
                    <div class="m-auto dm-sans-bold text-[32px] text-white font-outline">
                        Trending Now
                    </div>
                </div>
                <div class="flex bg-gradient-to-l from-[#26C1E0]/70 to-[#7B28E0]/70 hover:bg-[#7B28E0] border-[1px] border-[#9B5BE9]/70 backdrop-blur-[5px] rounded-xl py-1 px-4 transition-all duration-300">
                    <div class="m-auto dm-sans-bold text-[32px] text-white font-outline">
                        Indie Picks
                    </div>
                </div>
                <div class="flex bg-gradient-to-l from-[#26C1E0]/70 to-[#7B28E0]/70 hover:bg-[#7B28E0] border-[1px] border-[#9B5BE9]/70 backdrop-blur-[5px] rounded-xl py-1 px-4 transition-all duration-300">
                    <div class="mx-auto dm-sans-bold text-[32px] text-white font-outline">
                        Multiplayer
                    </div>
                </div>
            </div>

            <!-- See more button -->
            <div class="flex mt-2">
                <div class="inline-flex ml-auto relative py-1 px-4 bg-[#10A4DA]/70 hover:bg-[#10A4DA] border-[1px] border-[#26C1E0]/70 backdrop-blur-[5px] rounded-xl transition-all duration-300">
                    <span class="mx-auto dm-sans-bold text-[14px] text-white">
                        See More >
                    </span>
                </div>
            </div>

            <LazyBaseCarousel v-if="games" :id="'main'" :games="games" />            

            <div v-if="previewGame1" class="md:flex px-4">
                <div class="md:w-[70%] flex">
                    <LazyGameCardWithPreview :="previewGame1" class="m-auto w-full"/>
                </div>
                <div class="md:w-[30%] flex">
                    <LazyGameStack v-if="games" :games="getRandomSubset<IGame>(games)" class="m-auto"/>
                </div>
            </div>
            <div v-else class="mt-10">
                <div class="text-base-900 dark-font-outline dm-sans-bold w-full pl-4 min-h-[23px] text-[36px]">Everyone's Playing</div>
                <div class="sm:flex gap-x-10 px-4">
                    <LazyGameStack v-if="games" :games="getRandomSubset<IGame>(games)" class="m-auto"/>
                    <LazyGameStack v-if="games" :games="getRandomSubset<IGame>(games)" class="m-auto"/>
                    <LazyGameStack v-if="games" :games="getRandomSubset<IGame>(games)" class="m-auto"/>
                </div>
            </div>

            <div class="mt-10">
                <div class="text-base-900 dark-font-outline dm-sans-bold w-full pl-4 min-h-[23px] text-[36px]">All-Time Favourites</div>
                <LazyBaseCarousel v-if="games" :id="'all-time-favourites'" :games="games"/>     
            </div>

            <div class="mt-10">
                <div class="text-base-900 dark-font-outline dm-sans-bold w-full pl-4 min-h-[23px] text-[36px]">Featured</div>
                <LazyBaseCarousel v-if="games" :id="'featured'" :games="games"/>     
            </div>

            <div class="mt-10">
                <div class="text-base-900 dark-font-outline dm-sans-bold w-full pl-4 min-h-[23px] text-[36px]">Staff-Favourite Stacks</div>
                <div class="sm:flex gap-x-10 px-4">
                    <LazyGameStack v-if="games" :games="getRandomSubset<IGame>(games)" class="m-auto"/>
                    <LazyGameStack v-if="games" :games="getRandomSubset<IGame>(games)" class="m-auto"/>
                    <LazyGameStack v-if="games" :games="getRandomSubset<IGame>(games)" class="m-auto"/>
                </div>
            </div>

            <div  v-if="previewGame2" class="flex flex-col mt-10">
                <div class="text-base-900 dark-font-outline dm-sans-bold w-full pl-4 min-h-[23px] text-[36px]">Recommended</div>
                <div class="px-4">
                    <LazyGameCardWithPreview :="previewGame2" class="m-auto w-full"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getGames } from '~/api/gamesService';
import { getRandomItem, getRandomSubset } from '~/helpers/utility';
import type { IGame } from '~/types';
const router = useRouter();

const loaded = ref(false)
const games = ref<IGame[]>();

const splashGame = ref<IGame>();
const previewGame1 = ref<IGame>();
const previewGame2 = ref<IGame>();

// TODO: automatically set these
const page = 0;
const pageSize = 100;

onMounted(async () => {
  loaded.value = true
  games.value = (await getGames(page, pageSize)).data
  
  if (games.value != undefined) {
    splashGame.value = getRandomItem<IGame>(games.value)
    previewGame1.value = getRandomItem<IGame>(games.value)
    previewGame2.value = getRandomItem<IGame>(games.value)
  }
})

const goToProduct = (id: string | undefined) => {
    if (id == undefined) return
    router.push(`/products/${id}`)
}
</script>