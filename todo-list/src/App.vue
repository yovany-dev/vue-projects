<template>
  <h1 class="font-bold text-4xl text-center text-v-black mt-10">TODO LIST</h1>

  <div class="content max-w-[700px] mx-auto mt-10 flex flex-col gap-[10px]">
    <Filters />
    <Todo />
  </div>
</template>

<script setup>
  import Filters from './components/Filters/Filters.vue';
  import Todo from './components/Todo/Todo.vue';
</script>
