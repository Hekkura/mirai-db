<script setup lang="ts">
import { ref, watch, computed, onMounted } from 'vue';
import { useAnimeListStore } from "../../stores/animeList"
import { useWindowSize, useVirtualList } from '@vueuse/core';
import Card from '../Card.vue';
import CardLoader from '../CardLoader.vue';

const { width } = useWindowSize();
const containerRef = ref(null)

const CARD_WIDTH = 200
const CARD_HEIGHT = 250
const GAP = 32

//define pinia store
const animeStore = useAnimeListStore()
const listItems = computed(() => animeStore.animeList)

//compute number of columns
const columnCount = computed(() => Math.floor((width.value - GAP ) / (CARD_WIDTH + GAP)) || 1 )

//compute row count
const rowCount = computed(() => Math.ceil( listItems.value.length / columnCount.value ))
//generate array of row indices using array.from
const rowIndexes = computed (() => Array.from({ length : rowCount.value }, (_, i) => i ))


//setup grids
const { list, containerProps, wrapperProps } = useVirtualList(rowIndexes, {
    itemHeight: CARD_HEIGHT + GAP,
});

onMounted(() => {

})
console.log(animeStore.$state.category)
console.log(listItems.value)
console.log(columnCount.value)
console.log(rowCount.value)
console.log(rowIndexes.value)
console.log(list.value)


</script>

<template>
    <div class="p-5 flex flex-wrap gap-2 lg:gap-4 2xl:gap-6 min-h-[100vh] justify-center bg-stone-100 dark:bg-stone-900 transition-all duration-500"> 
        <!-- <CardLoader v-if="animeStore.isLoading" v-for="n in 25"/> -->
        
        <TransitionGroup
            enter-active-class="transition-opacity ease-linear duration-300"
            enter-from-class="opacity-0"
            enter-to-class = "opacity-100"
            leave-active-class = "transition-opacity ease-linear duration-300"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div v-bind="containerProps" ref="containerRef">
                <div v-bind="wrapperProps">
                    <div v-for="(row, rowIndex) in list" :key="row.index">
                        <!-- <Card  v-for="col in columnCount" :key="col" v-if="animeStore.animeList[row.index * columnCount ]"
                            :data="animeStore.animeList[row.index * columnCount + col-1]" :category="animeStore.category"
                        />
                        <CardLoader v-else v-for=""/> -->
                    </div>
                    
                </div>
            </div>    
                
        </TransitionGroup>
    </div>
</template>
<style scoped>

</style>