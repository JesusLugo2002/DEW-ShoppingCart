<script setup lang="ts">
import { inject } from 'vue'
import type { Videogame } from '@/components/classes/Product'
import ProductItem from '@/components/ProductItem.vue'

const products = inject<Videogame[]>('products')
</script>

<template>
  <h1 class="display-1">Shop</h1>
  <hr />
  <ul class="list-group list-group-flush">
    <ProductItem v-for="product in products" :product="product" />
  </ul>
</template>
