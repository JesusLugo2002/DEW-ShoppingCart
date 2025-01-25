<script setup lang="ts">
import CartItem from '@/components/CartItem.vue'
import { useCart } from '@/composables/useCart'

const cart = useCart()
</script>

<template>
  <h1 class="display-1">Cart</h1>
  <hr />
  <div class="row" v-if="!cart.getIsEmpty()">
    <div class="col-8">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Cover</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <CartItem v-for="(item, index) in cart.getProducts()" :item="item" :key="index" />
        </tbody>
      </table>
    </div>

    <div class="col">
      <h2>Resume</h2>
      <p class="mt-3 fs-5">
        <span class="fw-bold">Total: </span>
        <span class="text-success fw-bold">{{ cart.getSubtotal() }}€</span> ({{ cart.getIGIC() }}€
        IGIC)
      </p>
      <button class="btn btn-outline-danger w-100" @click="cart.emptyCart()">Empty cart</button>
    </div>
  </div>
  <div class="alert alert-primary" role="alert" v-else>No have items on shopping cart.</div>
</template>
