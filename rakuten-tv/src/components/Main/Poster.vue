<template>
  <div class="">
    <img class="w-full h-full" :src="getURL" alt="poster movie">
  </div>
</template>

<script setup>
  import { computed } from 'vue';

  const POSTER_URL = import.meta.env.VITE_POSTER_URL;
  const props = defineProps({
    pathImage: String
  })

  const getURL = computed(() => {
    return `${POSTER_URL}${props.pathImage}`
  })
</script>

<style scoped></style>
