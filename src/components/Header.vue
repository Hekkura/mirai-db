<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

const searchQuery = ref("")
const animeList = ref([])
const loading = ref(false)
const error = ref('')

async function handleSearch() {
	loading.value = true
	try{ 
		const response = await fetch(`https://api.jikan.moe/v4/anime?q=${searchQuery.value}`)
		if(!response.ok){
			throw new Error (`HTTP Error : ${response.status}`)
		}
		const result = await response.json()
		animeList.value = result.data
		
		// .then(res => res.json())
		// 	.then(data => data.results);
			// console.log(animeList.value)
	} catch (err) { 
		error.value = err instanceof Error ? err.message : String(err);
		console.log(`Error : ${err}`)
	} finally { 
		loading.value = false
	}
}
</script>

<template>
    <header class="text-lg font-fira p-5 overflow-hidden">
    <h1 class=" text-gray-700 text-3xl text-center uppercase 
                hover:text-gray-900 hover:scale-105 transition-all duration-500">
      Mirai<b>DB</b>
    </h1>

	<form class="flex justify-center p-5 mx-auto max-w-[800px] w-full" @submit.prevent="handleSearch">
		<input 	type="search" name="" id="" placeholder="Search for an anime..."
				class="w-[100%] p-3 mix-blend-difference rounded-xl hover:outline-3 focus:outline-3 focus:shadow-2xs
					outline-slate-400 shadow-lg bg-slate-200" 
				required v-model="searchQuery"
		>
	</form>

  </header>
</template>

<style scoped>

</style>
