<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js';
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
    <!-- <p>isDark? : {{ isDark }}</p> -->
    <button
        @click="toggleDark()"
        class="rounded-lg flex align-center"
    > 
        <Icon
            :icon="isDark? 'mdi:weather-night' : 'mdi:weather-sunny'"
            width="28"
            :color="isDark? 'white': 'black'"
            class=""
        />
    </button>
</template>