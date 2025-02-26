<script setup lang="ts">
import { ref, watch } from 'vue';
import { useAnimeListStore } from "../../stores/animeList"
import Card from '../Card.vue';
import CardLoader from '../CardLoader.vue';
import Grid from 'vue-virtual-scroll-grid';

const animeStore = useAnimeListStore()

const pageProvider3 = (pageNumber: any, pageSize: any) =>
  new Promise((resolve) =>
    setTimeout(
      () => resolve(new Array(pageSize).fill("Loaded Item")),
      Math.round(3000 * Math.random())
    )
  );

const pageProvider4 = async(pageNumber:any, pageSize: any): Promise<string[]> => {
    console.log(`Page Number : ${pageNumber}`)
    console.log(`pageSize : ${pageSize}`)
    await new Promise(resolve => setTimeout(resolve, Math.round(3000 * Math.random())));
    return new Array(pageSize).fill("Loaded Item");
}

const pageProvider5 = async(pageNumber:any, pageSize:any): Promise<string[]> => {
    try{
        console.log("FETCH")
        const response = await await fetch(`https://api.jikan.moe/v4/anime?q=?page=${pageNumber}`)
        const result = await response.json()
        const animeList:any[] = []
        animeList.push(...result.data)
        const animeTitles = result.data.map((anime:any)=> anime.title || "")
        return animeTitles
    }catch(err){
    
        return []
    }

    
}

</script>

<template>
    <div class="p-5 flex flex-wrap gap-2 lg:gap-4 2xl:gap-6 min-h-[100vh] 
                justify-center bg-stone-100 dark:bg-stone-900 transition-all duration-500"> 
        <!-- <CardLoader v-if="animeStore.isLoading" v-for="n in 25"/> -->
        
        <Grid :length="100" :pageSize="5"  :pageProvider="pageProvider5" :pageProviderDebounceTime="2.5"
                class="grid grid-cols-4 gap-5 overflow-hidden w-full">
            <template v-slot:probe>
                <div class="item h-[300px]">Probe</div>
            </template>

            <!-- When the item is not loaded, a placeholder is rendered -->
            <template v-slot:placeholder="{ index, style }">
                <div class="item h-[300px]" :style="style">Placeholder {{ index }}</div>
            </template>

            <!-- Render a loaded item -->
            <template v-slot:default="{ item, style, index }">
                <!-- <Card :data="item" :style="style"/> -->
                <div class="item bg-red-500 h-[300px]" :style="style">{{ item }} {{ index }}</div>
            </template>
        </Grid>
    </div>
</template>
<style scoped>

</style>