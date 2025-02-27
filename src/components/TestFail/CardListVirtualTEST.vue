<script setup lang="ts">
import Card from '../Card.vue';
import CardLoader from '../CardLoader.vue';
import { ref, useTemplateRef, watch } from 'vue';
import { useAnimeListStore } from "../../stores/animeList"
import { useVirtualList, useInfiniteScroll, useWindowSize, useThrottleFn, useThrottle } from '@vueuse/core';
import { computed } from '@vue/reactivity';

const { width } = useWindowSize();
const animeStore = useAnimeListStore()
const listItems = computed(()=> animeStore.animeList)

const itemHeightDynamic = (():number => {
    const rem = 16
    if (width.value < 640) {
        return (310+2*rem)/2
    } else if (width.value >= 640 && width.value < 1024 ) {
        return (310+2*rem)/3
    } else if (width.value >= 1024 && width.value < 1280 ) {
        return (350+5*rem)/4
    } else if (width.value >= 1280 && width.value < 1536 ) {
        return (390+6*rem)/5
    } else if (width.value >= 1536) {
        return (390+6*rem)/6
    } else {
        return (310+2*rem)/2
    }
})

watch(width,() => {
    itemHeightDynamic()
})

const { list:virtualList, containerProps, wrapperProps } = useVirtualList(listItems, {
    itemHeight: itemHeightDynamic, 
})

const scroll_element = useTemplateRef<HTMLElement>('infinite-scroll')

const throttleGetMore = useThrottleFn(() => {
    animeStore.getMoreScroll()
}, 2000) 

// console.log(containerProps.ref)
// watch(width, () => {
//     console.log(width.value)
// 	// console.log(animeStore.isLoading)
// 	// console.log(typeof(animeStore.isLoading))
// })

// watch(itemHeightDynamic, () => {
//     console.log(`ITEM HEIGHT : ${itemHeightDynamic.value}`)
// })

useInfiniteScroll(
    scroll_element,
    // containerProps.ref,
    () => {
        throttleGetMore()
    },
    {
        distance: 250,
    }
)



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
            <div v-bind="containerProps" class="">
                <div v-bind="wrapperProps" 
                    class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6
                    gap-5 overflow-hidden h-full "
                >
                    <Card v-if="!animeStore.isLoading" v-for="{ data, index } in virtualList" 
                        :data="data" :key="index" :category="animeStore.category" class="gap-5"
                    />
                    <div ref="infinite-scroll"></div>
                </div>

            </div>
        </TransitionGroup>
    </div>
</template>
<style scoped>

</style>