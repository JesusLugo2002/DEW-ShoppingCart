<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Videogame } from '@/components/classes/Product'
import ProductItem from '@/components/ProductItem.vue'

const products = ref<Videogame[] | null>(null)

async function getProductsData() {
  const response = await fetch('products.json')
  const data = await response.json()
  return data
}

onMounted(async () => {
  products.value = await getProductsData()
})
</script>

<template>
  <h1 class="display-1">Shop</h1>
  <hr />
  <ul class="list-group list-group-flush">
    <ProductItem v-for="product in products" :product="product" />
  </ul>
</template>
