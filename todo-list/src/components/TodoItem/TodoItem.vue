<template>
  <div class="p-3 flex gap-2 rounded-md bg-v-white text-ellipsis">
    <section>
      <Icon
        type="check"
        :completed="props.completed"
        @click="onCompleted"
      />
    </section>
    <section class="flex-1">
      <h2
        class="font-bold text-v-black max-w-[500px] truncate"
        v-show="!editContent"
      >
        {{ props.content }}
      </h2>
       <input
        class="font-bold text-v-black focus:outline focus:outline-v-blue"
        type="text"
        ref="inputElement"
        v-show="editContent"
        :value="props.content"
        @input="event => text = event.target.value"
        @blur="onContent"
      >
      <div class="text-sm text-v-black">{{ props.date }}</div>
    </section>
    <section class="flex gap-2">
      <Icon @click="deleteTodo" type="trash" />
      <Icon @click="editTodo" type="pen" />
    </section>
  </div>
</template>

<script setup>
  import { nextTick, ref } from 'vue';
  import getDate from '../../assets/js/date';
  import Icon from '../Icon/Icon.vue';

  const props = defineProps({
    uuid: String,
    completed: Boolean,
    content: String,
    date: String,
  });

  const inputElement = ref(null);
  const editContent = ref(false);
  const emit = defineEmits(['update', 'delete']);

  const updateTodo = (todo) => {
    emit('update', todo, props.uuid);
  }

  const deleteTodo = () => {
    emit('delete', props.uuid);
  }

  const onContent = () => {
    editContent.value = false;
    if (props.content !== inputElement.value.value) {
      const todo = {
        ...props,
        content: inputElement.value.value,
        date: getDate(),
      }
      updateTodo(todo);
    }
  }

  const editTodo = () => {
    editContent.value = true;
    nextTick(() => inputElement.value.focus());
  }

  const onCompleted = () => {
    const todo = {
      ...props,
      completed: !props.completed,
      date: getDate(),
    }
    updateTodo(todo);
  }
</script>
