<script setup lang="ts">
import { ref, watch } from 'vue';
import { useAnimeListStore } from "../stores/animeList"
import Card from '../components/Card.vue';
import CardLoader from '../components/CardLoader.vue';

const animeStore = useAnimeListStore()


</script>

<template>
    <div class="p-5 flex flex-wrap gap-2 lg:gap-4 2xl:gap-6 min-h-[100vh] 
                justify-center bg-stone-100 dark:bg-stone-900 transition-all duration-500"> 
        <CardLoader v-if="animeStore.isLoading" v-for="n in 25"/>
        <TransitionGroup
            enter-active-class="transition-opacity ease-linear duration-300"
            enter-from-class="opacity-0"
            enter-to-class = "opacity-100"
            leave-active-class = "transition-opacity ease-linear duration-300"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <Card v-if="!animeStore.isLoading" v-for="anime in animeStore.animeList" 
                :data="anime" :category="animeStore.category"
            />
        </TransitionGroup>
    </div>
</template>
<style scoped>

</style>