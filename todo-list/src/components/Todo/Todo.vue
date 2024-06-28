<template>
  <section class="p-5 rounded-md flex flex-col gap-5 bg-v-light-gray">
    <TodoItem
      v-for="(todo, index) in todos"
      :key="index"
      :completed="todo.completed"
      :content="todo.content"
      :date="todo.date"
    />
  </section>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import TodoItem from '../TodoItem/TodoItem.vue';

  const localStorage = window.localStorage;
  const todos = ref([]);

  const getTodos = () => {
    try {
      const stringify = localStorage.getItem('todos');
      todos.value = JSON.parse(stringify);
    } catch (error) {
      throw new Error(error);
    }
  }

  onMounted(() => {
    getTodos();
  });


  // const todos = [
  //   {
  //     completed: false,
  //     content: 'Create a vue project',
  //     date: '13:57 PM - 27/06/2024',
  //   },
  //   {
  //     completed: false,
  //     content: 'Learn Vue.js',
  //     date: '13:57 PM - 27/06/2024',
  //   },
  //   {
  //     completed: true,
  //     content: 'Create a todo list',
  //     date: '13:57 PM - 27/06/2024',
  //   },
  // ]
  // localStorage.setItem('todos', JSON.stringify(todos));
</script>
