<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import Card from './components/Card.vue';
import { useAnimeListStore } from "./stores/animeList"
import  Header from "./components/Header.vue"

const animeStore = useAnimeListStore()

// async function handleSearch() {
// 	loading.value = true
// 	try{ 
// 		const response = await fetch(`https://api.jikan.moe/v4/anime?q=${searchQuery.value}`)
// 		if(!response.ok){
// 			throw new Error (`HTTP Error : ${response.status}`)
// 		}
// 		const result = await response.json()
// 		animeList.value = result.data

// 		// console.log(animeList.value)
// 	} catch (err) { 
// 		error.value = err instanceof Error ? err.message : String(err);
// 		console.log(`Error : ${err}`)
// 	} finally { 
// 		loading.value = false
// 	}
// }

//DEBUG
// watch(searchQuery, () => { 
// 	console.log(`Search Query : ${searchQuery.value}`)

// })

// watch(handleSearch, () => {
// 	console.log(`HandleSearch : ${handleSearch}`)
// })

</script>

<template> 
	<Header class="sticky top-0 z-50"></Header>

	<main class="p-5 flex flex-wrap gap-2 lg:gap-4 2xl:gap-6 justify-center bg-stone-100 dark:bg-stone-900 transition-all duration-500">
		<Card v-for="anime in animeStore.animeList" 
				:data="anime" :category="animeStore.category"
		/>
	</main>
</template>

<style scoped>
html.dark {
	color-scheme: dark;
}
</style>
