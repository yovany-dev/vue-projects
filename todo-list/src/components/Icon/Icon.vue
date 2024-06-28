<template>
  <div :class="classStyles">
    <i :class="iconType"></i>
  </div>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    type: String,
    completed: Boolean,
  });

  const completed = computed(() => {
    return props.completed ? 'fa-check' : '';
  });

  const bg = computed(() => {
    return props.completed ? 'bg-v-blue text-v-white' : 'bg-v-gray text-v-black';
  });

  const classStyles = computed(() => {
    return `w-[30px] h-[30px] cursor-pointer flex justify-center items-center rounded-md ${bg.value}`;
  });

  const iconType = computed(() => {
    const types = {
      check: completed.value,
      trash: 'fa-trash',
      pen: 'fa-pen',
    }
    return `fa-solid ${types[props.type]} ${bg.value}`;
  });
</script>
