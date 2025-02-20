<script setup lang="ts">
import { useAnimeListStore } from "../stores/animeList"
</script>

<template>
	<div class="w-[140px] lg:w-[200px] xl:w-[230px] animate-pulse">
            <div alt="Image Loader"
                class="aspect-3/4 w-full object-cover rounded-lg bg-stone-300 dark:bg-stone-700">
            </div>
            <div class="rounded-md my-1 transition-colors duration-500 h-[1.35rem] bg-stone-300 dark:bg-stone-700">
            </div>
            <div class="rounded-md my-1 transition-colors duration-500 h-[2.4rem] bg-stone-300 dark:bg-stone-700">
            </div>
	</div>
</template>