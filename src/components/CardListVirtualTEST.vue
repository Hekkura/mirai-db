<script setup lang="ts">
import Card from '../components/Card.vue';
import CardLoader from '../components/CardLoader.vue';
import { ref, watch } from 'vue';
import { useAnimeListStore } from "../stores/animeList"
import { useVirtualList } from '@vueuse/core';
import { computed } from '@vue/reactivity';

const animeStore = useAnimeListStore()
const listItems = computed(()=> animeStore.animeList)

const { list:virtualList, containerProps, wrapperProps } = useVirtualList(listItems, {
    itemHeight: 100, 
})

</script>

<template>
    <div class="p-5 flex flex-wrap gap-2 lg:gap-5 2xl:gap-6 min-h-[100vh] justify-center bg-stone-100 dark:bg-stone-900 transition-all duration-500"> 
        <CardLoader v-if="animeStore.isLoading" v-for="n in 25"/>
        <TransitionGroup
            enter-active-class="transition-opacity ease-linear duration-300"
            enter-from-class="opacity-0"
            enter-to-class = "opacity-100"
            leave-active-class = "transition-opacity ease-linear duration-300"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
        <div v-bind="containerProps">
            <div v-bind="wrapperProps" class="grid grid-cols-4">
                <Card v-if="!animeStore.isLoading" v-for="{ data, index } in virtualList" 
                    :data="data" :key="index" :category="animeStore.category" class="gap-5"
                />
            </div>

        </div>
            
        </TransitionGroup>
    </div>
</template>
<style scoped>

</style>