<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import { useAnimeListStore } from "./stores/animeList"
import Card from './components/Card.vue';
import CardLoader from './components/CardLoader.vue';
import  Header from "./components/Header.vue"

const animeStore = useAnimeListStore()

// const handleSearch = async ({ category, query } : { category: string; query: string }) => {
//   await animeStore.getAnime(category, query);
// };


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
// watch(searchQu ery, () => { 
// 	console.log(`Search Query : ${searchQuery.value}`)

// })

watch(animeStore, () => {
	// console.log(animeStore.isLoading)
	// console.log(typeof(animeStore.isLoading))
})

</script>

<template> 
	<Header class="sticky top-0 z-50"></Header>

	<main class="p-5 flex flex-wrap gap-2 lg:gap-4 2xl:gap-6 min-h-[100vh] justify-center bg-stone-100 dark:bg-stone-900 transition-all duration-500">
		<CardLoader v-if="animeStore.isLoading" v-for="n in 20"/>
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
