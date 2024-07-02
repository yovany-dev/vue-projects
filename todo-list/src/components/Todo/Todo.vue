<template>
  <section class="flex justify-between items-center">
    <Button :addTodo="addTodo" text="Add task" />
    <Button text="All" dark="true" />
  </section>

  <section class="p-5 rounded-md flex flex-col gap-5 bg-v-light-gray">
    <TodoItem
      v-for="(todo, index) in todos"
      :key="index"
      :uuid="todo.uuid"
      :completed="todo.completed"
      :content="todo.content"
      :date="todo.date"
      @update="updateTodo"
      @delete="deleteTodo"
    />
    <p v-show="empty" class="text-v-black">there are no tasks.</p>
  </section>
</template>

<script setup>
  import { computed, onMounted, ref } from 'vue';
  import Button from '../Button/Button.vue';
  import TodoItem from '../TodoItem/TodoItem.vue';
  import Database from '../../assets/js/db';
  import uuidv4 from '../../assets/js/uuid';
  import getDate from '../../assets/js/date';

  const todos = ref([]);
  const db = new Database('todos');

  const addTodo = () => {
    const todo = {
      uuid: uuidv4(),
      completed: false,
      content: 'Untitled',
      date: getDate(),
    }
    if (todos.value && todos.value != '') {
      const newTodos = [todo, ...todos.value];
      todos.value = newTodos;
    } else {
      todos.value = [todo];
    }
    db.add(todos.value);
  }

  const updateTodo = (todo, uuid) => {
    const index = todos.value.findIndex(t => t.uuid === uuid);
    const newTodos = [...todos.value]
    newTodos[index] = todo;
    todos.value = newTodos;
    db.add(todos.value);
  }

  const deleteTodo = (uuid) => {
    const newTodos = todos.value.filter(t => t.uuid !== uuid);
    todos.value = newTodos;
    db.add(todos.value);
  }

  const empty = computed(() => {
    if (todos.value && todos.value != '') {
      return false;
    }
    return true;
  });

  const getTodos = () => {
    try {
      todos.value = db.get();
    } catch (error) {
      throw new Error(error);
    }
  }

  onMounted(() => {
    getTodos();
  });
</script>
