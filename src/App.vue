<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import card from './components/card.vue';

import { ref } from 'vue';

const searchQuery = ref("")
const animeList = ref([])
// const handleSearch = async () => { 
// 						animeList.value = await fetch(``)

// 					}

</script>

<template>
  <header class="text-lg font-fira p-5">
    <h1 class=" text-gray-700 text-3xl text-center uppercase 
                hover:text-gray-900 hover:scale-105 transition-all duration-500">
      Mirai<Strong>DB</Strong>
    </h1>

	<form class="flex justify-center p-5 mx-auto max-w-[800px] w-full">
		<input 	type="search" name="" id="" placeholder="Search for an anime..."
				class="w-[100%] p-3 mix-blend-difference rounded-xl hover:outline-3 focus:outline-3 focus:shadow-2xs
					outline-slate-400 shadow-lg bg-slate-200" 
				required
		>
	</form>

  </header>
  <main class="p-7 flex flex-wrap gap-1">
	<card/>
  </main>
</template>

<style scoped>

</style>
