import { defineStore } from 'pinia'
import type { Videogame } from '@/components/classes/Product'

const useCartStore = defineStore('cart', {
  state: () => ({
    products: [] as Videogame[],
  }),

  getters: {
    totalValue: (state) => {
      return state.products.reduce((result, product) => {
        return result + product.price * product.quantity
      }, 0)
    },
  },

  actions: {
    addProduct(product: Videogame): void {
      this.products.push(product)
    },
    removeProduct(id: number): void {
      this.products = this.products.filter((product: Videogame) => product.id !== id)
    },
    updateQuantity(id: number, quantity: number): void {
      const index = this.products.findIndex((product: Videogame) => product.id === id)
      if (index > -1) {
        this.products[index].quantity = quantity
      }
    },
    emptyCart(): void {
      this.products = []
    },
  },
})
