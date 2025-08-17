<!-- Taha Rashid -->
<!-- Aug 17, 2025 -->

<template>
    <div class="bg-base-300/0 backdrop-blur-[1px] border-base-300/80 border-t-[1px] shadow-sm z-50 px-4 py-1 mt-10 ">
        <!-- Platform badges -->
        <div class="flex">
            <div class="m-auto py-2 flex flex-wrap gap-x-4 gap-y-2">
                <a v-for="logo in platformLogos" :key="logo" href="#">
                    <img :src="logo" class="mx-auto max-h-[20px]">
                </a>
            </div>
        </div>

        <!-- Links -->
        <div class="flex text-gray-400 dm-sans-bold w-full text-[12px] uppercase p-1">
            <div class="flex mx-auto gap-x-4">
                <a href="#" class="hover:text-gray-500 transition-all duration-300 ease-out will-change-transform">Terms and Conditions</a>
                <a href="#" class="hover:text-gray-500 transition-all duration-300 ease-out will-change-transform">Privacy and Policy</a>
                <a href="#" class="hover:text-gray-500 transition-all duration-300 ease-out will-change-transform">Press Room</a>
            </div>
        </div>

        <!-- Copyrights -->
        <div class="flex text-gray-400 dm-sans-bold w-full text-[12px] uppercase p-1 ">
            <div class="flex mx-auto gap-x-4">
                <span>&copy; 2025 SavePoint by Taha Rashid</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const platformLogos: string[] = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png',
    'https://www.svgrepo.com/show/445786/github.svg',
    'https://www.svgrepo.com/show/452138/youtube.svg',
]
</script>