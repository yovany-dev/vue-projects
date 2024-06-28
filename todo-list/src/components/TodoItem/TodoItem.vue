<template>
  <div class="p-3 flex gap-2 rounded-md bg-v-white">
    <section>
      <Icon type="check" :completed="props.completed" />
    </section>
    <section class="flex-1">
      <!-- <h2
        class="font-bold text-v-black"
        v-if="!focus"
      >
        {{ props.content }}
      </h2> -->
       <input
        class="font-bold text-v-black"
        type="text"
        :value="props.content"
        ref="inputElement"
        :readonly="read"
      >
      <div class="text-sm text-v-black">{{ props.date }}</div>
    </section>
    <section class="flex gap-2">
      <Icon type="trash" />
      <Icon @click="editTodo" type="pen" />
    </section>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import Icon from '../Icon/Icon.vue';

  const props = defineProps({
    completed: Boolean,
    content: String,
    date: String,
  });

  const value = ref(props.content);
  const inputElement = ref(null);
  const read = ref(true);

  const editTodo = () => {
    inputElement.value.focus();
    read.value = false;
    console.log('edit me!');
  }

  onMounted(() => {
    //
  });
</script>
