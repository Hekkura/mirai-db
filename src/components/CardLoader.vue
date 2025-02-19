<script setup lang="ts">
import { useAnimeListStore } from "../stores/animeList"
</script>

<template>
	<div class="w-[140px] lg:w-[200px] xl:w-[230px] animate-pulse">
            <div alt="Image Loader"
                class="aspect-3/4 w-full object-cover rounded-lg bg-gray-500"
            ></div>
            <div class="rounded-md my-1 transition-colors duration-500 h-[1.35rem] bg-gray-500"
            >
            </div>
            <div class="rounded-md my-1 transition-colors duration-500 h-[2.4rem] bg-gray-500">

            </div>
	</div>
</template>