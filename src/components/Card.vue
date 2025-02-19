<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useAnimeListStore } from "../stores/animeList"
// import { computed } from 'vue';

const props = defineProps<{
    data: any
}>()

const capitalize = (word: any) => {
    if(!word) { return '' }
    return String(word).charAt(0).toUpperCase() + String(word).slice(1)
}
const animeStore = useAnimeListStore()
// let displayResult = ref('')
// console.log(`Image URL : ${props.data}`)

// async function fetchCharacterDetail() { 
//     try {
//             const response = await fetch(`https://api.jikan.moe/v4/characters/${props.data?.mal_id}/anime`)
//             if(!response.ok) {
//                 throw new Error(`HTTP Error : ${response.status}`)
//             }
//             const result = await response.json()

//             displayResult = await result.data[0].anime.title
//             // return result.data[0]?.anime?.title
//         } catch (err) {
//             const error = err instanceof Error ? err.message : String(err);
//         }
// }

onMounted(() => {
    if(animeStore.category === 'characters') {
        // fetchCharacterDetail()
        // console.log(displayResult.value)
    }
})

</script>

<template>
	<div class="w-[140px] lg:w-[200px] xl:w-[230px]">
        <a href="#" target="_blank" class="flex flex-col pb-4">
            <img :src="props.data.images.webp.image_url" alt="Image Placeholder"
                class="aspect-3/4 w-full object-cover rounded-lg"
            >
            <h3 class="font-semibold py-1 lg:max-w-[80%] transition-colors duration-500 text-xs lg:text-sm xl:text-base 
             text-stone-800 hover:text-teal-700 dark:hover:text-teal-300 dark:text-stone-200 line-clamp-2"
            >
                {{ props.data.title || props.data.name }}
            </h3>

            <!-- ========================= ANIME ========================= -->
            <div v-if="animeStore.$state.category=='anime'" 
                class=" divide-stone-600 whitespace-nowrap"
            >
                <div class="flex justify-between gap-5 lg:gap-8 divide-solid font-sm text-tiny lg:text-xs w-[70%] text-stone-500">
                    <h2 >
                        {{ capitalize(props.data.season) }} {{ props.data.aired?.prop?.from?.year }}
                    </h2>
                    
                    <h2 v-if="props.data.type=='Movie'">
                        Movie
                    </h2>
                    <h2 v-else>
                        {{ props.data.episodes }} Episodes 
                    </h2>
                </div>

                <h2 class="text-xs lg:text-sm text-stone-700 dark:text-stone-400">
                    {{ props.data.studios[0]?.name }}
                </h2>
            </div>

            <!-- ======================== CHARACTERS ========================== -->
            <div v-else-if="animeStore.$state.category=='characters'">
                <h2 class="text-xs lg:text-sm text-stone-700 dark:text-stone-400">
                    <!-- {{ displayResult }} -->
                </h2>
            </div>

            <!-- ========================= MANGA ========================= -->
            <div v-else-if="animeStore.$state.category=='manga'">
                <div class="flex justify-between gap-5 lg:gap-8 divide-solid font-sm text-tiny lg:text-xs w-[70%] text-stone-500">
                    <h2 >
                        {{ props.data.published?.prop?.from?.year }}
                    </h2>
                </div>
                
                <h2 class="text-xs lg:text-sm text-stone-700 dark:text-stone-400">
                    {{ props.data.authors[0]?.name }}
                </h2>
            </div>            
        
        </a>
	</div>
</template>

<style scoped>

</style>
