<script setup lang="ts">
import { ref } from 'vue';
// import { RouterLink, RouterView } from 'vue-router'
import { useAnimeListStore } from "../stores/animeList"
import type { Category } from "../../types/categories";

const categoryList: Category[] = [
	{ id: "1", name:"Anime", value:"anime" },
	{ id: "2", name:"Characters", value:"characters" },
	{ id: "3", name:"Manga", value:"manga" },
] 

const searchQuery = ref("")
const selectCategory = ref("")
const animeStore = useAnimeListStore()
</script>

<template>
    <header class="text-lg font-fira p-5 overflow-hidden bg-slate-300">
		<h1 class=" text-gray-700 text-3xl text-center uppercase 
                hover:text-gray-900 hover:scale-105 transition-all duration-500">
		Mirai<b class="text-cyan-800">DB</b>
		</h1>

	<form class="flex justify-between p-5 mx-auto max-w-[800px] w-full" @submit.prevent="animeStore.getAnime(selectCategory, searchQuery)">
		<select v-model="selectCategory" id="category" name="category" class="px-3 rounded-xl bg-slate-800 text-white w-[20%]">
			<option v-for="category in categoryList" :value="category.value">{{ category.name }}</option>
		</select>
		<input 	type="search" name="" id="search" placeholder="Search for an anime..."
				class="w-[65%] p-3 rounded-xl hover:outline-3 focus:outline-3 focus:shadow-2xs
					outline-stone-600 shadow-lg bg-white" 
				required v-model="searchQuery"
		>
		<button type="submit" class="px-3 rounded-xl bg-slate-800 text-white">Search</button>
	</form>

  </header>
</template>

<style scoped>

</style>
