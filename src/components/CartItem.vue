<script setup lang="ts">
import { useCart } from '@/composables/useCart'
import { reactive } from 'vue'

const { item } = defineProps(['item'])
const cart = useCart()
</script>

<template>
  <tr>
    <td><img :src="item.image" :alt="item.name + ' cover'" width="64" /></td>
    <td class="fw-bold">{{ item.name }}</td>
    <td class="text-success fw-bold">{{ item.price }}€</td>
    <td>
      {{ item.units }}
    </td>
    <td class="text-success fw-bold">{{ item.price * item.units }}€</td>
    <td>
      <button class="btn btn-danger w-100" @click="cart.removeProduct(item)">
        Remove
      </button>
    </td>
  </tr>
</template>
