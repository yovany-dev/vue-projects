<template>
  <h1 class="font-bold text-4xl text-center text-v-black mt-10">TODO LIST</h1>
  <div class="content max-w-[700px] v-780:max-w-[600px] v-660:max-w-[500px] v-530:max-w-[400px] v-430:max-w-[360px] min-w-[360px] mx-auto my-10 flex flex-col gap-[10px]">
    <Todo />
  </div>
</template>

<script setup>
  import Todo from './components/Todo/Todo.vue';
</script>
