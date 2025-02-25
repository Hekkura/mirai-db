<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import { useAnimeListStore } from "./stores/animeList"
import  Header from "./components/Header.vue"
import CardList from './components/CardList.vue';
import CardListVirtualTEST from './components/CardListVirtualTEST.vue';
import CardListVirtualTest2 from './components/CardListVirtualTest2.vue';
import CardListInfiniteTest from './components/CardListInfiniteTest.vue';

const animeStore = useAnimeListStore()

watch(animeStore, () => {
	// console.log(animeStore.isLoading)
	// console.log(typeof(animeStore.isLoading))
})

</script>

<template> 
	<div class="bg-emerald-500 dark:bg-emerald-800 w-full h-7">

	</div>
	<Header class="sticky top-0 z-50"></Header>

	<main class="scrollbar-custom">
		<!-- <CardLoader v-if="animeStore.isLoading" v-for="n in 20"/>
		<Card v-for="anime in animeStore.animeList" 
			:data="anime" :category="animeStore.category"
		/> -->
		<CardList class=""/>
		<!-- <CardListInfiniteTest/> -->


		<!-- FAIL -->
		<!-- <CardListVirtualTEST/> -->
		 <!-- <CardListVirtualTest2/> -->
	</main>
</template>

<style>
html.dark {
	color-scheme: dark;
}

::-webkit-scrollbar {
	width: 0.5rem;
}

::-webkit-scrollbar-track {
  background: #f0f0f0; 
}

::-webkit-scrollbar-thumb {
  background: #b4b2b2; 
}

::-webkit-scrollbar-thumb:hover {
  background: #848484; 
}

html.dark ::-webkit-scrollbar-track {
  background: #4e4f4e; 
}

html.dark  ::-webkit-scrollbar-thumb {
  background: #888; 
}

html.dark  ::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
 
</style>
