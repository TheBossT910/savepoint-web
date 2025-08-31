<!-- Taha Rashid -->
<!-- June 21, 2025 -->

<template>
    <!-- Outer Inventory Card -->
    <div class="bg-gray-50 p-[10px] rounded-[12px] shadow-xl/25" @click="goToProduct">
        <div class="relative bg-gray-400 aspect-[3/4] rounded-t-[12px]">
            <!-- Image -->
            <img 
            :src="props.coverImage"
            class="w-full aspect-[3/4] object-cover rounded-t-[12px]"
            loading="lazy"
            >

            <div class="flex absolute top-[16px] left-0 right-0 pl-[16px] justify-between">
                <!-- Top Left -->
                <div class="flex flex-col gap-y-[10px] dm-sans-bold text-[14px] md:text-[10px] lg:text-[14px]">
                    <!-- New -->
                    <div class="flex justify-between px-2 bg-gray-200/60 border-[1px] border-gray-100/70 backdrop-blur-[5px] max-w-[135px] h-[22px] rounded-[12px]">
                        <div class="mr-auto my-auto">
                            New
                        </div>
                        <div class="pl-2 ml-auto my-auto">
                            ###
                        </div>
                    </div>

                    <!-- Complete -->
                    <div class="flex justify-between px-2 bg-gray-200/60 border-[1px] border-gray-100/70 backdrop-blur-[5px] max-w-[135px] h-[22px] rounded-[12px]">
                        <div class="mr-auto my-auto">
                            Complete
                        </div>
                        <div class="pl-2 ml-auto my-auto">
                            ###
                        </div>
                    </div>

                    <!-- Loose -->
                    <div class="flex px-2 bg-gray-200/60 border-[1px] border-gray-100/70 backdrop-blur-[5px] max-w-[135px] h-[22px] rounded-[12px]">
                        <div class="mr-auto my-auto">
                            Loose
                        </div>
                        <div class="pl-2 ml-auto my-auto">
                            ###
                        </div>
                    </div>
                </div>

                <!-- Top Right -->
                <div class="flex gap-y-[10px] dm-sans-bold text-[10px] md:text-[12px] ml-2">
                    <!-- Quick Add -->
                    <div class="flex bg-gray-200/60 border-[1px] border-gray-100/70 backdrop-blur-[5px] max-w-[82px] h-[84px] rounded-l-[12px]">
                        <div class="m-auto px-1">
                            Quick Add + 
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom -->
            <div class="flex flex-col absolute bottom-[10px] left-0 right-0 px-[16px] md:px-[10px] gap-y-[10px] dm-sans-bold text-[18px] md:text-[14px] lg:text-[18px]">
                <!-- Excellent -->
                <div class="flex justify-between">
                    <div class="px-2 bg-blue-600/60 border-[1px] border-blue-500/70 backdrop-blur-[5px] w-[135px] rounded-[12px]">
                        <div class="mr-auto my-auto ">
                            Excellent
                        </div>
                    </div>
                    <div class="px-2 bg-blue-600/60 border-[1px] border-blue-500/70 backdrop-blur-[5px] w-[68px] rounded-[12px] ml-2">
                        <div class="ml-auto my-auto">
                            ###
                        </div>
                    </div>                    
                </div>

                <!-- Great -->
                <div class="flex justify-between">
                    <div class="px-2 bg-green-500/60 border-[1px] border-green-400/70 backdrop-blur-[5px] w-[135px] rounded-[12px]">
                        <div class="mr-auto my-auto ">
                            Great   
                        </div>
                    </div>
                    <div class="px-2 bg-green-500/60 border-[1px] border-green-400/70 backdrop-blur-[5px] w-[68px] rounded-[12px] ml-2">
                        <div class="ml-auto my-auto">
                            ###
                        </div>
                    </div>                    
                </div>

                <!-- Good -->
                <div class="flex justify-between">
                    <div class="px-2 bg-yellow-500/60 border-[1px] border-yellow-400/70 backdrop-blur-[5px] w-[135px] rounded-[12px]">
                        <div class="mr-auto my-auto ">
                            Good
                        </div>
                    </div>
                    <div class="px-2 bg-yellow-500/60 border-[1px] border-yellow-400/70 backdrop-blur-[5px] w-[68px] rounded-[12px] ml-2">
                        <div class="ml-auto my-auto">
                            ###
                        </div>
                    </div>                    
                </div>

                <!-- Acceptable -->
                <div class="flex justify-between">
                    <div class="px-2 bg-red-600/60 border-[1px] border-red-500/70 backdrop-blur-[5px] w-[135px] rounded-[12px]">
                        <div class="mr-auto my-auto ">
                            Acc.
                        </div>
                    </div>
                    <div class="px-2 bg-red-600/60 border-[1px] border-red-500/70 backdrop-blur-[5px] w-[68px] rounded-[12px] ml-2">
                        <div class="ml-auto my-auto">
                            ###
                        </div>
                    </div>                    
                </div>
            </div>
        </div>

        <!-- Content -->
        <div class="w-full min-h-[120px] flex flex-col gap-y-[12px]">
            <div class="text-gray-400 dm-sans-bold w-full min-h-[16px] mt-[12px] text-[12px]">
                {{ props.developers.join(', ') }}, {{ props.year }}
            </div>

            <div class="text-gray-900 dm-sans-bold w-full min-h-[23px] text-[18px]">
                {{ props.title }}
            </div>

            <div class="w-full flex flex-wrap gap-x-2 gap-y-2">
                    <img
                    v-for="logo in props.platformLogos" :key="logo" 
                    :src="logo"
                    class="mx-auto h-[17px]"
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

// TODO: create seperate inventory card prop
const props = defineProps<IProductCardProp>()

const goToProduct = () => {
    console.log('goToProduct clicked')
}
</script>