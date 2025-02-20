<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { Icon } from '@iconify/vue'
// import { RouterLink, RouterView } from 'vue-router'
import { useAnimeListStore } from "../stores/animeList"
import type { Category } from "../../types/categories"
import DarkMode from './icons/DarkMode.vue';
import { useDebounceFn } from '@vueuse/core'

const categoryList: Category[] = [
	{ id: "1", name:"Anime", value:"anime" },
	{ id: "2", name:"Characters", value:"characters" },
	{ id: "3", name:"Manga", value:"manga" },
] 

const searchQuery = ref("")
const selectCategory = ref("")
const animeStore = useAnimeListStore()

const emit = defineEmits(['search']) 

const debouncedSearch = useDebounceFn(() => {
	animeStore.getAnime(
						selectCategory.value as string, 
						searchQuery.value as string
						)
}, 1000)

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
    <header class="font-fira overflow-hidden bg-stone-100 dark:bg-stone-900">
		<div class="flex justify-between w-full p-3 border-b-1 border-zinc-300 dark:border-zinc-700">
			<div></div>
			<h1 class=" text-stone-700 dark:text-stone-300 text-xl text-center uppercase font-light
                hover:scale-108 transition-all duration-200">
				Mirai<b class="text-emerald-800 dark:text-emerald-500 font-medium">DB</b>
			</h1>
			<button>
				<DarkMode></DarkMode>
			</button>
		</div>
		
		<form class="flex text-base font-light justify-center gap-5 w-full border-b-1 border-zinc-300 dark:border-zinc-700 
					md:border-0 md:px-5 md:py-6 mx-auto mb-8 md:m-1" 
				@input="debouncedSearch()"
		>

			<select v-model="selectCategory" id="category" name="category" 
					class="	px-3 py-4 md:shadow-md bg-stone-300 duration-200 text-stone-900 border-zinc-300
							md:hover:border-emerald-800 dark:border-zinc-600  md:dark:hover:border-emerald-500 dark:bg-stone-700
							md:rounded-sm  dark:text-zinc-100  md:border-1 md:py-2 focus:outline-none md:active:border-1"
					@change.prevent="debouncedSearch()"
			>
				<option v-for="category in categoryList" :key="category.id" :value="category.value">
					{{ category.name }}
				</option>
			</select>
			<input 	type="search" name="" id="search" placeholder="Search for an anime..."
					class="w-full md:max-w-[1080px] md:w-[60vw] px-3 py-4 md:shadow-md bg-transparent md:rounded-sm md:border-1 border-zinc-300
						dark:border-zinc-600 md:hover:border-emerald-800 md:dark:hover:border-emerald-500 focus:outline-none md:active:border-1 
						outline-stone-600  dark:text-white md:py-2" 
					required v-model="searchQuery"
			>
		</form>
  </header>
</template>

<style scoped>

</style>
