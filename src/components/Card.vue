<script setup lang="ts">
const props = defineProps<{
    anime: any
}>()
console.log(`Image URL : ${props.anime.images.webp.image_url}`)
</script>

<template>
	<div class="p-5 max-w-[220px]">
        <a href="#" target="_blank">
            <img :src="props.anime.images.webp.image_url" alt="Image Placeholder"
                class="w-full max-h-[350px] max-w-[] object-cover rounded-lg shadow-md transition-all duration-500
                        hover:scale-105"
            >
            <h3 class="font-bold py-1 max-w-[80%] transition-colors duratoin-500 hover:text-teal-700">{{ props.anime.title }}</h3>
        </a>
	</div>
</template>

<style scoped>

</style>
