<!-- Taha Rashid -->
<!-- Aug 13, 2025 -->

<template>
    <div>
        <div class="bg-gray-100/30 dark:bg-gray-500/30 hover:bg-gray-300/60 hover:dark:bg-gray-500/60 border-[1px] border-gray-300/70 dark:border-gray-500/70 backdrop-blur-[1px] rounded-3xl p-1 shadow-[0_0_10px_rgba(38,75,224,0.25)] transition-all duration-300 ease-out">
            <!-- Top -->
            <div class="relative h-[60vh]">
                <!-- Map -->
                <img src="public/images/map.png" class="absolute inset-0 p-2 pb-0 w-full h-full  object-cover rounded-t-2xl">

                <!-- Address -->
                <div class="absolute bottom-2 w-full">
                    <div class="px-4 h-full">
                        <div class="flex flex-wrap bg-[#9B5BE9]/70 border-[#7B28E0]/70 border-[1px] backdrop-blur-[5px] w-full px-2 mb-2 rounded-2xl">
                            <span class="dm-sans-bold m-auto text-[20px] md:text-[24px] text-white font-outline">
                                1800 Sheppard Ave E u275, North York
                            </span>
                        </div>
                        
                        <div class="md:flex">
                            <div class="flex flex-wrap bg-[#9B5BE9]/70 border-[#7B28E0]/70 border-[1px] backdrop-blur-[5px] w-full md:w-[40%] px-2 md:mr-1 rounded-2xl mb-2 md:mb-0">
                                <span class="dm-sans-bold m-auto text-[20px] md:text-[24px] text-white font-outline">
                                    10am - 9pm
                                </span>
                            </div>

                            <div class="flex flex-wrap bg-[#9B5BE9]/70 border-[#7B28E0]/70 border-[1px] backdrop-blur-[5px] w-full md:w-[60%] px-2 md:ml-1 rounded-2xl">
                                <span class="dm-sans-bold m-auto text-[20px] md:text-[24px] text-white font-outline">
                                    +1-(416)-492-7181
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom -->
            <div class="px-2 my-2">
                <div class="bg-blue-600/60 border-blue-500 border-[1px] px-2 mb-2 rounded-2xl">
                    <div class="flex flex-wrap dm-sans-bold text-[18px] md:text-[20px] text-base-900 dark-font-outline w-full h-auto">
                        Excellent <span class="ml-auto px-2">###</span>
                    </div>
                </div>

                <div class="bg-green-500/60 border-green-400 border-[1px] px-2 mb-2 rounded-2xl">
                    <div class="flex flex-wrap dm-sans-bold text-[18px] md:text-[20px] text-base-900 dark-font-outline w-full h-auto">
                        Very Good <span class="ml-auto px-2">###</span>
                    </div>
                </div>

                <div class="bg-yellow-500/60 border-yellow-400 border-[1px] px-2 mb-2 rounded-2xl">
                    <div class="flex flex-wrap dm-sans-bold text-[18px] md:text-[20px] text-base-900 dark-font-outline w-full h-auto">
                        Good <span class="ml-auto px-2">###</span>
                    </div>
                </div>

                <div class="bg-red-600/60 border-red-500 border-[1px] px-2 rounded-2xl">
                    <div class="flex flex-wrap dm-sans-bold text-[18px] md:text-[20px] text-base-900 dark-font-outline w-full h-auto">
                        Acceptable <span class="ml-auto px-2">###</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>