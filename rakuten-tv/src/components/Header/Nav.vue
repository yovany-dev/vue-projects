<template>
  <nav class="flex items-center gap-10">
    <div>
      <RakutenLogo class="w-[114px]" />
    </div>
    <ul class="flex">
      <li
        v-for="(link, index) in links"
        :key="index"
        class="h-min px-5 rounded-full btn"
      >
        <a href="#" class="font-bold">{{ link }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
  import RakutenLogo from '../../assets/RakutenLogo.vue';
  const links = ['Inicio', 'Gratis', 'Tienda', 'Canales TV'];
</script>

<style scoped></style>
