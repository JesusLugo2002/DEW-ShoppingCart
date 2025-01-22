<script setup lang="ts">
import Header from './components/Header.vue'
import type { Videogame } from '@/components/Product'

const productsData: Videogame[] = [
  { id: 1, name: 'Sekiro: Shadows Die Twice', quantity: 10, price: 30, image: 'url' },
  { id: 2, name: 'Elden Ring', quantity: 20, price: 60, image: 'url' },
  { id: 3, name: 'Hollow Knight', quantity: 30, price: 15, image: 'url' },
  { id: 4, name: 'Minecraft', quantity: 15, price: 30, image: 'url' },
  { id: 5, name: 'Stardew Valley', quantity: 25, price: 15, image: 'url' },
]
</script>

<template>
  <Header />
  <main class="container">
    <RouterView />
  </main>
</template>
