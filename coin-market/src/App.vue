<script setup>
  import { onMounted, ref } from 'vue'

  const coins = ref([]);
  const filteredCoins = ref([]);
  const titles = ref(['#', 'Moneda', 'Precio', 'Cambio de Precio', 'Volumen en 24h']);
  const textSearch = ref('');

  const searchCoin = () => {
    filteredCoins.value = coins.value.filter(coin =>
      coin.name.toLowerCase().includes(textSearch.value.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(textSearch.value.toLowerCase())
    );
  }

  onMounted(async() => {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
    const data = await res.json();

    coins.value = data;
    filteredCoins.value = data;
  })
</script>

<template>
  <div class="container">
    <div class="row">
      <h1 class="mt-4">Coin Market</h1>
      <input
        type="text"
        class="form-control bg-dark text-light rounded-0 border-0 my-4"
        placeholder="Buscar Moneda"
        @keyup="searchCoin()"
        v-model="textSearch"
      >
      <table class="table table-dark">
        <thead>
          <tr>
            <th v-for="title in titles" :key="title">{{ title }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(coin, index) in filteredCoins" :key="coin.id">
            <td>
              <span class="text-secondary">{{ index+1 }}</span>
            </td>
            <td>
              <img :src="coin.image" :alt="coin.name" style="width: 2rem;" class="me-2">
              <span>{{ coin.name }}</span>
              <span class="ms-2 text-uppercase text-secondary">{{ coin.symbol }}</span>
            </td>
            <td>
              <span>${{ coin.current_price }}</span>
            </td>
            <td>
              <span :class="[coin.price_change_percentage_24h>0 ? 'text-success' : 'text-danger']">{{ coin.price_change_percentage_24h }} %</span>
            </td>
            <td>
              <span>${{ coin.total_volume.toLocaleString() }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
input::placeholder {
  color: rgb(108, 117, 125);
}
</style>
