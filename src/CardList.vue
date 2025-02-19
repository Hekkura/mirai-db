<script setup lang="ts">
import { useAnimeListStore } from './stores/animeList';
import Card from './components/Card.vue';

const animeStore = useAnimeListStore();

// Async setup: Wait for the data to be fetched
await new Promise<void>((resolve) => {
  const interval = setInterval(() => {
    if (!animeStore.isLoading) {
      clearInterval(interval);
      resolve();
    }
  }, 100);
});
</script>

<template>
    <template v-if="animeStore.animeList.length > 0">
    <Card v-for="anime in animeStore.animeList" :data="anime" :category="animeStore.category" />
  </template>
  <template v-else>
    <p>No results found.</p>
  </template>

</template>