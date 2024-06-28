<template>
  <button
    class="py-2 px-3 text-sm font-medium rounded-md text-white bg-v-blue"
    v-if="!props.dark"
  >
    {{ props.text }}
  </button>

  <button
    class="w-[100px] py-2 px-2 flex justify-between items-center text-sm font-medium rounded-md text-v-black bg-v-gray"
    v-if="props.dark"
  >
    {{ props.text }}
    <i class="fa-solid fa-chevron-down text-sm"></i>
  </button>
</template>

<script setup>
  const props = defineProps({
    text: String,
    dark: Boolean,
  });
</script>
