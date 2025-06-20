<!-- Taha Rashid -->
<!-- June 19, 2025 -->

<template>
    <div>
        <!-- Outer Product Card -->
        <!-- W-270 -->
        <div class="bg-gray-300 border-gray-300 w-[270px] h-[510px] border-[10px] rounded-[12px]" @click="goToProduct">
            <!-- Image -->
            <div class="bg-gray-400 w-[250px] h-[370px] rounded-t-[12px]">
                <img 
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/2161700/library_600x900_2x.jpg?t=1744328429"
                class="w-full h-full object-cover"
                >
            </div>

            <!-- Content -->
            <div class="w-[250px] h-[120px] flex flex-col gap-y-[12px]">
                <div class="text-gray-400 dm-sans-bold w-[250px], h-[16px] mt-[12px] text-[12px]">
                    Atlus, 2024
                </div>

                <div class="text-gray-900 dm-sans-bold w-[250px] h-[23px] text-[18px]">
                    Persona 3: Reload
                </div>

                <div class="w-[250px] h-[17px] flex">
                    <!-- TODO: Add logos -->
                     <img 
                     src="https://upload.wikimedia.org/wikipedia/commons/7/7a/PS5_logo.png"
                     class="mx-auto h-[17px]"
                     >

                     <img 
                     src="https://upload.wikimedia.org/wikipedia/commons/8/87/PlayStation_4_logo_and_wordmark.svg"
                     class="mx-auto h-[17px]"
                     >

                     <img 
                     src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Xbox_Logo.svg"
                     class="mx-auto h-[17px]"
                     >

                    <img 
                     src="https://static-00.iconduck.com/assets.00/steam-icon-2026x2048-3b7rynay.png"
                     class="mx-auto h-[17px]"
                     >
                </div>

                <div class="text-gray-400 dm-sans-bold w-[250px] h-[16px] text-[12px]">
                    Action, Adventure, Horror
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const goToProduct = () => {
    console.log('goToProduct clicked')
}
</script>