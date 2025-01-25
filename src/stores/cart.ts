import { defineStore } from 'pinia'
import type { CartItem } from '@/components/classes/Product'

export const useCartStore = defineStore('cart', {
  state: () => ({
    products: [] as CartItem[],
  }),

  getters: {
    totalValue: (state) => {
      return state.products.reduce((result, product) => {
        return result + product.price * product.units
      }, 0)
    },
    isEmpty: (state) => {
      return state.products.length == 0
    },
  },

  actions: {
    addProduct(product: CartItem): void {
      this.products.push(product)
    },
    removeProduct(id: number): void {
      this.products = this.products.filter((product: CartItem) => product.id !== id)
    },
    updateQuantity(id: number, units: number, adding: boolean = false): void {
      const index = this.products.findIndex((product: CartItem) => product.id === id)
      if (index > -1) {
        if (adding) {
          this.products[index].units += units
        } else {
          this.products[index].units = units
        }
      }
    },
    emptyCart(): void {
      this.products = []
    },
  },
})
