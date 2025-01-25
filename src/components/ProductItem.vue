<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useCart } from '@/composables/useCart'

const props = defineProps(['product'])
const product = reactive(props.product)
const cart = useCart()

const isSelected = ref(false)
const amount = ref(1)

function addToCart() {
  isSelected.value = false
  cart.addProduct(product, amount.value)
  product.stock -= amount.value
  amount.value = 1
}
</script>

<template>
  <li class="list-group-item">
    <div class="game-item row" :id="product.id">
      <div class="game-cover col-1">
        <img :src="product.image" :alt="product.name + ' cover'" class="img-fluid" />
      </div>

      <div class="game-info col-9">
        <h3>{{ product.name }}</h3>
        <p class="text-secondary h5 w-75">Developer: {{ product.developer }}</p>
        <p class="h5">
          Price: <span class="badge text-bg-success">{{ product.price }}€</span>
        </p>
      </div>

      <div
        class="game-buy-button col-2 d-flex align-items-center justify-content-center"
        v-if="product.stock > 0"
      >
        <button class="btn btn-primary" v-if="!isSelected" @click="isSelected = true">
          Add to cart
        </button>
        <div class="input-group" v-else>
          <button
            class="btn btn-danger col-2 d-flex justify-content-center"
            @click="isSelected = false"
          >
            <i class="bi bi-x"></i>
          </button>
          <input
            class="col form-control"
            v-model="amount"
            type="number"
            name="quantity"
            id="quantity-input"
            min="1"
            :max="product.stock"
          />
          <button class="btn btn-success col-2 d-flex justify-content-center" @click="addToCart">
            <i class="bi bi-check"></i>
          </button>
        </div>
      </div>
      <div class="col-2 d-flex align-items-center justify-content-center" v-else>
        <p class="badge text-bg-danger">No stock available!</p>
      </div>
    </div>
  </li>
</template>
