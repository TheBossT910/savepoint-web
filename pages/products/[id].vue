<template>
    <div>
        <!-- Splash -->
        <div class="relative pt-30 pb-10 px-10">
            <!-- Splash image -->
            <img 
            src="https://shared.steamstatic.com/store_item_assets/steam/apps/1687950/library_hero_2x.jpg?t=1733297203" 
            alt=""
            class="absolute inset-0 h-full w-full object-cover">

            <!-- Overlay on splash image -->
            <div class="absolute inset-0 bg-black/50"></div>

            <div class="flex gap-x-10">
                <!-- Details -->
                <div class="flex flex-col w-full h-full">
                    <!-- Title -->
                    <div class="dm-sans-bold text-[48px] text-white w-full h-auto z-1">
                        Persona 5: Royal
                    </div>

                    <!-- Reviews -->
                    <div class="flex mt-2 w-100 h-[20px]">
                        <!-- Metacritic -->
                        <div class="flex px-2 bg-gray-200/60 border-[1px] border-gray-100/70 backdrop-blur-[5px] rounded-[12px]">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Metacritic_M.png" class="ml-1 h-[17px] my-auto">
                            <div class="dm-sans-bold text-[12px] text-white ml-1">100/100</div>
                        </div>

                        <!-- IGN -->
                        <div class="flex ml-5 px-2 bg-gray-200/60 border-[1px] border-gray-100/70 backdrop-blur-[5px] rounded-[12px]">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/IGN_logo.svg/2560px-IGN_logo.svg.png" class="h-[17px] my-auto">
                            <div class="dm-sans-bold text-[12px] text-white ml-1">10/10</div>
                        </div>
                    </div>

                    <!-- Buttons -->
                    <div class="mt-5 flex flex-wrap gap-2">
                        <!-- Buy -->
                        <div class="flex bg-rose-700/60 hover:bg-rose-600/60 border-[1px] border-rose-600/70 backdrop-blur-[5px] rounded-[6px] p-1 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="m-auto text-white mr-1" viewBox="0 0 16 16">
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z"/>
                            </svg>
                            <div class="m-auto dm-sans-bold text-[14px] text-white uppercase">
                                Buy New
                            </div>
                        </div>

                        <!-- Add to collection -->
                        <div class="flex bg-rose-700/60 hover:bg-rose-600/60 border-[1px] border-rose-600/70 backdrop-blur-[5px] rounded-[6px] p-1 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="m-auto text-white mr-1" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
                            </svg>
                            <div class="m-auto dm-sans-bold text-[14px] text-white uppercase">
                                Add to collection
                            </div>
                        </div>

                        <!-- Watch trailer -->
                        <div class="flex bg-rose-700/60 hover:bg-rose-600/60 border-[1px] border-rose-600/70 backdrop-blur-[5px] rounded-[6px] p-1 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="m-auto text-white mr-1" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
                            </svg>
                            <div class="m-auto dm-sans-bold text-[14px] text-white uppercase">
                                Watch trailer
                            </div>
                        </div>
                    </div>

                    <!-- HLTB -->
                    <div class="mt-5 mb-5 flex flex-wrap gap-2">
                        <!-- Main -->
                        <div class="flex bg-sky-600 hover:bg-sky-500 border-[1px] border-sky-500 backdrop-blur-[5px] rounded-[6px] p-1 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="m-auto text-white mr-1" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                            </svg>
                            <div class="m-auto dm-sans-bold text-[14px] text-white uppercase">
                                Main: 101 hrs
                            </div>
                        </div>

                        <!-- Main + Sides -->
                        <div class="flex bg-sky-600 hover:bg-sky-500 border-[1px] border-sky-500 backdrop-blur-[5px] rounded-[6px] p-1 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="m-auto text-white mr-1" viewBox="0 0 16 16">
                                <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"/>
                            </svg>
                            <div class="m-auto dm-sans-bold text-[14px] text-white uppercase">
                                Main + Sides: 123 hrs
                            </div>
                        </div>

                        <!-- Completionist -->
                        <div class="flex bg-sky-600 hover:bg-sky-500 border-[1px] border-sky-500 backdrop-blur-[5px] rounded-[6px] p-1 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="m-auto text-white mr-1" viewBox="0 0 16 16">
                                <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"/>
                            </svg>
                            <div class="m-auto dm-sans-bold text-[14px] text-white uppercase">
                                Completionist: 142 Hrs 
                            </div>
                        </div>

                        <!-- All styles -->
                        <div class="flex bg-sky-600 hover:bg-sky-500 border-[1px] border-sky-500 backdrop-blur-[5px] rounded-[6px] p-1 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="m-auto text-white mr-1" viewBox="0 0 16 16">
                                <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v3a.5.5 0 0 1-.5.5h-3A1.5 1.5 0 0 0 0 6.5v3A1.5 1.5 0 0 0 1.5 11h3a.5.5 0 0 1 .5.5v3A1.5 1.5 0 0 0 6.5 16h3a1.5 1.5 0 0 0 1.5-1.5v-3a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 0 16 9.5v-3A1.5 1.5 0 0 0 14.5 5h-3a.5.5 0 0 1-.5-.5v-3A1.5 1.5 0 0 0 9.5 0zm1.288 2.34a.25.25 0 0 1 .424 0l.799 1.278A.25.25 0 0 1 8.799 4H7.201a.25.25 0 0 1-.212-.382zm0 11.32-.799-1.277A.25.25 0 0 1 7.201 12H8.8a.25.25 0 0 1 .212.383l-.799 1.278a.25.25 0 0 1-.424 0Zm-4.17-4.65-1.279-.798a.25.25 0 0 1 0-.424l1.279-.799A.25.25 0 0 1 4 7.201V8.8a.25.25 0 0 1-.382.212Zm10.043-.798-1.278.799A.25.25 0 0 1 12 8.799V7.2a.25.25 0 0 1 .383-.212l1.278.799a.25.25 0 0 1 0 .424Z"/>
                            </svg>
                            <div class="m-auto dm-sans-bold text-[14px] text-white uppercase">
                                All Styles: 123 Hrs
                            </div>
                        </div>
                    </div>
                    
                    <!-- Preview video -->
                    <div class="flex overflow-x-auto gap-x-4 z-1 mb-10">
                        <iframe 
                        class="aspect-16/9 w-full lg:w-[50%] rounded-[6px]"
                        src="https://www.youtube.com/embed/SKpSpvFCZRw" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                        </iframe>

                        <iframe 
                        class="aspect-16/9 w-full lg:w-[50%] rounded-[6px]"
                        src="https://www.youtube.com/embed/o9QjlLdYK5I" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                        </iframe>

                        <iframe 
                        class="aspect-16/9 w-full lg:w-[50%] rounded-[6px]"
                        src="https://www.youtube.com/embed/91tGkPg1txE" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                        </iframe>

                        <iframe 
                        class="aspect-16/9 w-full lg:w-[50%] rounded-[6px]"
                        src="https://www.youtube.com/embed/IR_7H_zzU7Y" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                        </iframe>
                    </div>
                </div>

                <!-- Card (on >=md) -->
                <div class="hidden md:flex w-full lg:w-[40%] bg-gray-100/30 dark:bg-gray-500/30 hover:bg-gray-300/60 hover:dark:bg-gray-500/60 border-[1px] border-gray-300/70 dark:border-gray-500/70 backdrop-blur-[5px] rounded-[12px] p-1 shadow-sm dark:shadow-gray-400/60 transition-all duration-300 ease-out">
                    <div>
                        <img 
                        :src="coverImage"
                        class="w-full h-full object-cover rounded-[12px]"
                        >
                    </div>
                </div>
            </div>

            <!-- Card (on <md) -->
            <div class="mx-auto aspect-[3/4] w-[70%] md:hidden md:w-75 bg-gray-100/30 dark:bg-gray-500/30 hover:bg-gray-300/60 hover:dark:bg-gray-500/60 border-[1px] border-gray-300/70 dark:border-gray-500/70 backdrop-blur-[5px] rounded-[12px] p-1 shadow-sm dark:shadow-gray-400/60 transition-all duration-300 ease-out">
                <div>
                    <img 
                    :src="coverImage"
                    class="w-full h-full object-cover rounded-[12px]"
                    >
                </div>
            </div>
        </div>

        <div class="relative">
            <!-- Images -->
            <div class="sticky top-0 overflow-hidden w-full h-[100vh]">
                <!-- Top -->
                <div class="flex gap-x-4 mb-4 w-[200%] h-1/3 animate-scroll-start">
                    <div>
                        <img 
                        src="https://images.igdb.com/igdb/image/upload/t_720p/sc6vq2.webp" 
                        alt=""
                        class="w-auto h-full object-cover">
                    </div>

                    <div>
                        <img 
                        src="https://images.igdb.com/igdb/image/upload/t_720p/sc6vps.webp" 
                        alt=""
                        class="w-auto h-full object-cover">
                    </div>

                    <div>
                        <img 
                        src="https://images.igdb.com/igdb/image/upload/t_720p/sc6vpt.webp" 
                        alt=""
                        class="w-auto h-full  object-cover">
                    </div>

                    <!-- Repeating imgs for smooth scroll -->
                    <div>
                        <img 
                        src="https://images.igdb.com/igdb/image/upload/t_720p/sc6vq2.webp" 
                        alt=""
                        class="w-auto h-full object-cover">
                    </div>

                    <div>
                        <img 
                        src="https://images.igdb.com/igdb/image/upload/t_720p/sc6vps.webp" 
                        alt=""
                        class="w-auto h-full object-cover">
                    </div>

                    <div>
                        <img 
                        src="https://images.igdb.com/igdb/image/upload/t_720p/sc6vpt.webp" 
                        alt=""
                        class="w-auto h-full  object-cover">
                    </div>
                </div>

                <!-- Center -->
                <div class="flex gap-x-4 mb-4 w-[200%] h-1/3 animate-scroll-end">
                    <div>
                        <img 
                        src="https://images.igdb.com/igdb/image/upload/t_720p/sc6vpu.webp" 
                        alt=""
                        class="w-auto h-full object-cover">
                    </div>

                    <div>
                        <img 
                        src="https://images.igdb.com/igdb/image/upload/t_720p/sc6vpw.webp" 
                        alt=""
                        class="w-auto h-full object-cover">
                    </div>

                    <div>
                        <img 
                        src="https://images.igdb.com/igdb/image/upload/t_720p/sc6vq1.webp" 
                        alt=""
                        class="w-auto h-full  object-cover">
                    </div>

                    <!-- Repeating imgs for smooth scroll -->
                    <div>
                        <img 
                        src="https://images.igdb.com/igdb/image/upload/t_720p/sc6vpu.webp" 
                        alt=""
                        class="w-auto h-full object-cover">
                    </div>

                    <div>
                        <img 
                        src="https://images.igdb.com/igdb/image/upload/t_720p/sc6vpw.webp" 
                        alt=""
                        class="w-auto h-full object-cover">
                    </div>

                    <div>
                        <img 
                        src="https://images.igdb.com/igdb/image/upload/t_720p/sc6vq1.webp" 
                        alt=""
                        class="w-auto h-full  object-cover">
                    </div>
                </div>

                <!-- End -->
                <div class="flex gap-x-4 w-[200%] h-1/3 animate-scroll-start">
                    <div>
                        <img 
                        src="https://images.igdb.com/igdb/image/upload/t_720p/sc6vq0.webp" 
                        alt=""
                        class="w-auto h-full object-cover">
                    </div>

                    <div>
                        <img 
                        src="https://images.igdb.com/igdb/image/upload/t_720p/sc6vpy.webp" 
                        alt=""
                        class="w-auto h-full object-cover">
                    </div>

                    <div>
                        <img 
                        src="https://images.igdb.com/igdb/image/upload/t_720p/sc6vpz.webp" 
                        alt=""
                        class="w-auto h-full  object-cover">
                    </div>

                    <!-- Repeating imgs for smooth scroll -->
                    <div>
                        <img 
                        src="https://images.igdb.com/igdb/image/upload/t_720p/sc6vq0.webp" 
                        alt=""
                        class="w-auto h-full object-cover">
                    </div>

                    <div>
                        <img 
                        src="https://images.igdb.com/igdb/image/upload/t_720p/sc6vpy.webp" 
                        alt=""
                        class="w-auto h-full object-cover">
                    </div>

                    <div>
                        <img 
                        src="https://images.igdb.com/igdb/image/upload/t_720p/sc6vpz.webp" 
                        alt=""
                        class="w-auto h-full  object-cover">
                    </div>
                </div>
            </div>

            <!-- Description -->
            <div class="mt-[-100vh] flex flex-col px-10 pb-5">
                <div class=" mt-5 w-full lg:w-[50%] h-auto bg-gray-200/60 dark:bg-gray-800/60 border-[1px] border-gray-100/70 backdrop-blur-[5px] rounded-[12px]">
                    <div class="px-10 py-8 dm-sans-bold text-[18px] text-white font-outline">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, maiores aut. Consectetur alias assumenda totam nemo, id laboriosam necessitatibus minima nisi, dolor delectus natus accusamus voluptates. Enim labore sit delectus.
                        Placeat laborum commodi accusamus nulla nisi optio nam voluptatum eligendi in reiciendis sint ipsum pariatur, impedit exercitationem sunt vero. Repudiandae quisquam repellendus quaerat in quidem eligendi voluptas illo officiis? Tempora?
                        Expedita enim a quibusdam magnam ipsam quia, suscipit saepe dicta? Eaque omnis consequatur, ad eligendi est cupiditate atque odio blanditiis soluta temporibus natus ut quae. Libero soluta accusantium inventore omnis.
                        Suscipit dolorum quod itaque neque odit ullam quisquam, inventore ad architecto fuga a sint nemo quasi doloribus et. Quam molestias, mollitia nesciunt cupiditate natus nulla suscipit voluptatum culpa quos officia!
                        Distinctio blanditiis quam deleniti recusandae alias at enim quas ab quod nemo inventore dolore, similique eius perferendis? Laborum at minus aut! Nam qui fuga ipsum dolores ea nihil dicta dolorum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, tenetur? Possimus nisi corporis ipsa veritatis quis voluptates ullam consequatur commodi. Ex tempore ab laudantium dolores, natus architecto officiis sunt excepturi?
                        Explicabo dolorum natus sapiente sit, quasi necessitatibus nisi quae quia optio? Tempora facilis, magni tempore beatae at ut, reprehenderit commodi quam, consequatur nemo odio repudiandae laboriosam cum obcaecati magnam asperiores.
                        Nulla animi placeat labore accusantium cumque aliquid laudantium sit voluptate doloremque itaque magni totam quibusdam aperiam corrupti ipsum odio minima esse architecto ipsam sed accusamus, dolorum deserunt cupiditate nobis. Fuga?
                        Reprehenderit repudiandae minus eaque quod obcaecati a adipisci rem temporibus facilis porro iste doloremque, quisquam ad. Velit consequatur, illum quo officiis debitis adipisci, fuga praesentium unde magni asperiores earum libero!
                        Nobis excepturi eaque quibusdam totam consequuntur qui harum voluptate quasi eos aperiam id laborum itaque iste sint, quas consectetur necessitatibus quae voluptatem. Accusantium maiores architecto possimus nobis minus similique iste.
                        Tenetur, cum maxime distinctio voluptatem, sint dolorum at qui harum earum molestias, corrupti deserunt debitis eligendi cupiditate quisquam dolores! Incidunt repellendus eius esse illum sequi, aspernatur ducimus commodi asperiores at.
                        Minima fuga reprehenderit eius, dolorem pariatur excepturi natus, vel assumenda enim amet eveniet perferendis labore ipsum praesentium nihil cupiditate ipsam maiores ad. Esse sint provident omnis, pariatur consequatur deleniti dolor.
                        Fugit consequatur architecto eveniet, eaque molestiae iure aliquam enim molestias sit, ut fuga. Dicta reprehenderit vero iusto quae excepturi nemo. Eum obcaecati, odio nihil delectus magni perspiciatis minima velit id.
                        Incidunt impedit maxime consectetur accusamus consequuntur iste dolorem officiis at dignissimos, ex quos odio voluptas dolore dolor voluptatibus placeat illum cum? Fugiat quisquam aliquid reiciendis voluptates cupiditate? In, est esse.
                        Enim ut blanditiis, quisquam reiciendis, dolor laudantium voluptate laborum est ratione nulla sit at veniam deserunt maiores molestiae magnam commodi. Quisquam id quam iusto dolores omnis adipisci culpa assumenda reiciendis!
                    </div>
                </div>
            </div>
        </div>

        <div class="relative px-10">
            <div class="dm-sans-bold text-[48px] text-base-900 dark-font-outline w-full h-auto">
                Retailers
            </div>

            <div class="flex flex-wrap gap-y-5">
                <div class="w-[100%] lg:w-[50%]">
                    <div class="flex flex-col lg:mx-5">
                        <!-- Retailer card -->
                        <div class="sm:flex bg-gray-100/30 dark:bg-gray-500/30 hover:bg-gray-300/60 hover:dark:bg-gray-500/60 border-[1px] border-gray-300/70 dark:border-gray-500/70 backdrop-blur-[5px] rounded-[24px] p-1 shadow-sm dark:shadow-gray-400/60 transition-all duration-300 ease-out">
                            <div class="sm:w-[40%] p-2">
                                <!-- Title -->
                                <div class="dm-sans-bold text-[48px] text-base-900 dark-font-outline w-full h-auto">
                                    EB Games
                                </div>

                                <!-- Stars -->
                                <div class="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-base-900 dark-font-outline ml-1" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-base-900 dark-font-outline ml-1" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-base-900 dark-font-outline ml-1" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-base-900 dark-font-outline ml-1" viewBox="0 0 16 16">
                                        <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-base-900 dark-font-outline ml-1" viewBox="0 0 16 16">
                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                                    </svg>
                                </div>
                            </div>

                            <div class="sm:w-[25%] m-2 my-auto">
                                <div class="bg-green-500/60 border-green-400 border-[1px] p-2 rounded-[12px]">
                                    <div class="dm-sans-bold text-[16px] text-base-900 dark-font-outline w-full h-auto">
                                        $9.99 - $49.99
                                    </div>
                                </div>
                            </div>

                            <div class="sm:w-[35%] mt-4 sm:mt-0 sm:mt-0 my-auto p-2 gap-y-2">
                                <!-- Condiitons -->
                                <div class="bg-blue-600/60 border-blue-500 border-[1px] px-2 mb-2 rounded-[12px]">
                                    <div class="dm-sans-bold text-[24px] text-base-900 dark-font-outline w-full h-auto">
                                        New
                                    </div>
                                </div>

                                <div class="bg-green-500/60 border-green-400 border-[1px] px-2 mb-2 rounded-[12px]">
                                    <div class="dm-sans-bold text-[24px] text-base-900 dark-font-outline w-full h-auto">
                                        Complete
                                    </div>
                                </div>

                                <div class="bg-yellow-500/60 border-yellow-400 border-[1px] px-2 rounded-[12px]">
                                    <div class="dm-sans-bold text-[24px] text-base-900 dark-font-outline w-full h-auto">
                                        Used
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-[100%] lg:w-[50%]">
                    <div class="flex flex-col">
                        <!-- Map -->
                        <div class="bg-gray-100/30 dark:bg-gray-500/30 hover:bg-gray-300/60 hover:dark:bg-gray-500/60 border-[1px] border-gray-300/70 dark:border-gray-500/70 backdrop-blur-[5px] rounded-[24px] p-1 shadow-sm dark:shadow-gray-400/60 transition-all duration-300 ease-out">
                            <div class="h-3/5 p-2 rounded-t-[12px]">
                                <img src="public/images/map.png" class="object-cover h-full w-full rounded-[12px]">
                            </div>

                            <div class="sm:flex h-2/5">
                                <!-- Address -->
                                <div class="p-[10px] sm:w-1/2">
                                    <div class="h-1/3 flex">
                                        <div class="dm-sans-bold my-auto text-[32px] lg:text-[24px] text-base-900 dark-font-outline">
                                            1800 Sheppard Ave E u275, North York
                                        </div>
                                    </div>

                                    <div class="h-1/3 mt-4 flex">
                                        <div class="dm-sans-bold mt-auto text-[32px] lg:text-[24px] text-base-900 dark-font-outline">
                                            10am - 9pm
                                        </div>
                                    </div>

                                    <div class="h-1/3 flex">
                                        <div class="dm-sans-bold my-auto text-[32px] lg:text-[24px] text-base-900 dark-font-outline">
                                            +1-(416)-492-7181
                                        </div>
                                    </div>
                                </div>

                                <!-- Conditions -->
                                <div class="p-[10px] sm:w-1/2 my-auto">
                                    <div class="flex justify-between h-1/4">
                                        <div class="flex flex-wrap bg-blue-600/60 border-blue-500/70 border-[1px] backdrop-blur-[5px] w-full px-2 mb-2 rounded-[12px]">
                                            <div class="dm-sans-bold my-auto text-[32px] lg:text-[24px] text-base-900 dark-font-outline">
                                                Excellent
                                            </div>
                                            <div class="dm-sans-bold my-auto text-[32px] lg:text-[24px] text-base-900 dark-font-outline ml-auto">
                                                ###
                                            </div>
                                        </div>
                                    </div>

                                    <div class="flex justify-between h-1/4">
                                        <div class="flex flex-wrap bg-green-500/60 border-green-400/70 border-[1px] backdrop-blur-[5px] w-full px-2 mb-2 rounded-[12px]">
                                            <div class="dm-sans-bold my-auto text-[32px] lg:text-[24px] ttext-base-900 dark-font-outline">
                                                Great
                                            </div>
                                            <div class="dm-sans-bold my-auto text-[32px] lg:text-[24px] text-base-900 dark-font-outline ml-auto">
                                                ###
                                            </div>
                                        </div>
                                    </div>

                                    <div class="flex justify-between h-1/4">
                                        <div class="flex flex-wrap bg-yellow-500/60 border-yellow-400/70 border-[1px] backdrop-blur-[5px] w-full px-2 mb-2 rounded-[12px]">
                                            <div class="dm-sans-bold my-auto text-[32px] lg:text-[24px] text-base-900 dark-font-outline">
                                                Good
                                            </div>
                                            <div class="dm-sans-bold my-auto text-[32px] lg:text-[24px] text-base-900 dark-font-outline ml-auto">
                                                ###
                                            </div>
                                        </div>
                                    </div>

                                    <div class="flex justify-between h-1/4">
                                        <div class="flex flex-wrap bg-red-600/60 border-red-500/70 border-[1px] backdrop-blur-[5px] w-full px-2 mb-2 rounded-[12px]">
                                            <div class="dm-sans-bold my-auto text-[32px] lg:text-[24px] text-base-900 dark-font-outline">
                                                Acc.
                                            </div>
                                            <div class="dm-sans-bold my-auto text-[32px] lg:text-[24px] text-base-900 dark-font-outline ml-auto">
                                                ###
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// for splash image
const platformLogos = [
    'https://upload.wikimedia.org/wikipedia/commons/7/7a/PS5_logo.png',
    'https://upload.wikimedia.org/wikipedia/commons/8/87/PlayStation_4_logo_and_wordmark.svg',
    'https://upload.wikimedia.org/wikipedia/commons/e/e5/Xbox_Logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Steam_2016_logo_black.svg/800px-Steam_2016_logo_black.svg.png'
]

const coverImage = 'https://shared.steamstatic.com/store_item_assets/steam/apps/1687950/library_600x900_2x.jpg?t=1733297203'
</script>