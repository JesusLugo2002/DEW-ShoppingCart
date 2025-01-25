<script setup lang="ts">
import Header from '@/components/Header.vue'
import { ref, onMounted, provide } from 'vue'
import type { Videogame } from './components/classes/Product'

const products = ref<Videogame[]>([])

async function getProductsData() {
  const response = await fetch('products.json')
  const data = await response.json()
  return data
}

onMounted(async () => {
  products.value = await getProductsData()
})

provide('products', products)
</script>

<template>
  <Header />
  <main class="container mt-3">
    <RouterView />
  </main>
</template>
