<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Videogame } from '@/components/classes/Product'

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
  <h1>Shop</h1>
  <hr />
  <h2>All videogames</h2>
  {{ products }}
</template>
