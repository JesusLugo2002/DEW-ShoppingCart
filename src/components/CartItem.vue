<script setup lang="ts">
import { useCart } from '@/composables/useCart'
import { watch } from 'vue'

const { item } = defineProps(['item'])
const cart = useCart()

watch(() => item.units, (newUnits) => {
  if (newUnits < 1) {
    cart.removeProduct(item)
  }
})

</script>

<template>
  <tr>
    <td><img :src="item.image" :alt="item.name + ' cover'" width="64" /></td>
    <td class="fw-bold">{{ item.name }}</td>
    <td class="text-success fw-bold">{{ item.price }}€</td>
    <td>
      <button class="btn" @click="item.units--"><i class="bi bi-dash"></i></button>
      {{ item.units }}
      <button class="btn" @click="item.units++"><i class="bi bi-plus"></i></button>
    </td>
    <td class="text-success fw-bold">{{ item.price * item.units }}€</td>
    <td>
      <button class="btn btn-danger w-100" @click="cart.removeProduct(item)">Remove</button>
    </td>
  </tr>
</template>
