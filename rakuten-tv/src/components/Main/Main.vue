<template>
  <main class="mt-[290px]">
    <Head />
    <section ref="containerMovies" class="grid grid-cols-7 gap-x-2 gap-y-24">
      <Poster v-for="(movie, index) in movies" :key="index" :pathImage="movie.poster_path" />
    </section>
  </main>
</template>

<script setup>
  import Head from './Head.vue';
  import Poster from './Poster.vue';
  import { computed, onMounted, onUpdated, ref, watch } from 'vue';

  const page = ref(1);
  const containerMovies = ref(null);
  const movies = ref([]);
  const API_KEY = import.meta.env.VITE_API_KEY;

  const callback = entries => {
    const [ entry ] = entries;

    if (entry.isIntersecting) {
      nextPage();
    }
  }

  const options = {
    root: null,
    rootMargin: '0px 0px 10px 0px',
    threshold: 1.0,
  }

  const nextPage = () => {
    page.value++;
  }

  const getURL = computed(() => {
    return `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-MX&page=${page.value}`;
  });

  const getMovies = async() => {
    const res = await fetch(getURL.value);
    const data = await res.json();
    movies.value = [...movies.value, ...data.results];
  }

  watch(page, () => {
    getMovies();
  });

  onMounted(() => {
    getMovies();
  });

  onUpdated(() => {
    if (page.value > 1000) return;

    const amount = containerMovies.value.children.length - 7;
    const observe = containerMovies.value.children[amount];

    const observer = new IntersectionObserver(callback, options);
    observer.observe(observe);
  });
</script>

<style scoped>
</style>
