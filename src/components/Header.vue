<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { Icon } from '@iconify/vue'
// import { RouterLink, RouterView } from 'vue-router'
import { useAnimeListStore } from "../stores/animeList"
import type { Category } from "../../types/categories"
import DarkMode from './icons/DarkMode.vue';


const categoryList: Category[] = [
	{ id: "1", name:"Anime", value:"anime" },
	{ id: "2", name:"Characters", value:"characters" },
	{ id: "3", name:"Manga", value:"manga" },
] 

const searchQuery = ref("")
const selectCategory = ref("")
const animeStore = useAnimeListStore()

onMounted(() => {
	selectCategory.value = categoryList[0].value
	animeStore.getAnime(selectCategory.value, searchQuery.value)
})
// watch(selectCategory, async() => {
// 	// if(selectCategory.value === 'characters') {
// 		console.log(animeStore.getCharacterDetail(224257))
// 	// }
// })
</script>

<template>
    <header class="text-lg font-fira overflow-hidden bg-stone-100 dark:bg-stone-900">
		<div class="flex justify-between w-full p-3 border-b-1 border-zinc-300 dark:border-zinc-800">
			<div></div>
			<h1 class=" text-stone-700 dark:text-stone-300 text-xl text-center uppercase 
                hover:scale-108 transition-all duration-200">
				Mirai<b class="text-emerald-800 dark:text-emerald-500">DB</b>
			</h1>
			<button>
				<DarkMode></DarkMode>
			</button>
		</div>
		

		<form class="flex text-xs lg:text-sm xl:text-base font-light justify-between gap-5 px-5 py-6 mx-auto max-w-[1080px] w-full" @submit.prevent="animeStore.getAnime(selectCategory, searchQuery)">
			<select v-model="selectCategory" id="category" name="category" 
					class="px-3 rounded-md shadow-md bg-stone-200 text-stone-700 dark:bg-stone-700 duration-200
							dark:text-zinc-100  border-1 border-zinc-300 dark:border-zinc-600 hover:border-emerald-800 dark:hover:border-emerald-500 focus:outline-none active:border-1"
							@change.prevent="animeStore.getAnime(selectCategory, searchQuery)"
			>
				<option v-for="category in categoryList" :key="category.id" :value="category.value">
					{{ category.name }}
				</option>
			</select>
			<input 	type="search" name="" id="search" placeholder="Search for an anime..."
					class="w-full px-3 py-2 rounded-md border-1 border-zinc-300 dark:border-zinc-600 hover:border-emerald-800 dark:hover:border-emerald-500 focus:outline-none active:border-1 
						outline-stone-600 shadow-lg bg-transparent dark:text-white" 
					required v-model="searchQuery"
			>
			<!-- <button type="submit" class="px-3 rounded-xl bg-slate-800 text-white dark:bg-teal-500 dark:text-slate-900">
				<Icon 
					icon="mdi:magnify"
					width="28"
				/>
			</button> -->
		</form>
  </header>
</template>

<style scoped>

</style>
