<script setup lang="ts">
// import { computed } from 'vue';

const props = defineProps<{
    data: any
}>()

const capitalize = (word: any) => {
    if(!word) { return '' }
    return String(word).charAt(0).toUpperCase() + String(word).slice(1)
}
// console.log(`Image URL : ${props.data}`)
</script>

<template>
	<div class="w-[180px] lg:w-[250px]">
        <a href="#" target="_blank" class="flex flex-col pb-4">
            <img :src="props.data.images.webp.image_url" alt="Image Placeholder"
                class="aspect-3/4 w-full object-cover rounded-lg"
            >
            <h3 class="font-base py-1 max-w-[80%] transition-colors duratoin-500 text-stone-700 hover:text-teal-700 dark:hover:text-teal-300 dark:text-stone-200">
                {{ props.data.title || props.data.name }}
            </h3>
            
            <div class="">
                <h2 class="font-sm text-sm py-1 text-stone-600 dark:text-stone-400">
                    {{ capitalize(props.data.season) }} {{ props.data.aired.prop.from.year }}
                </h2>

                <h2 class="font-sm text-sm py-1 text-stone-600 dark:text-stone-400">
                    Episodes {{  }}
                </h2>
            </div>
            
        
        </a>
	</div>
</template>

<style scoped>

</style>
