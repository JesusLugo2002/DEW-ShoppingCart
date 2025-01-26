import { useCartStore } from '@/stores/cart'
import type { Videogame, CartItem } from '@/components/classes/Product'
import { reactive } from 'vue'

export function useCart() {
  const store = useCartStore()

  function toCartItem(product: Videogame, amount: number = 1): CartItem {
    return reactive({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      units: amount,
    })
  }

  function productExists(cartItem: CartItem): boolean {
    const index = store.products.findIndex((item: CartItem) => item.id === cartItem.id)
    return index > -1
  }

  function getIsEmpty(): boolean {
    return store.isEmpty
  }

  function getProducts(): CartItem[] {
    return store.products
  }

  function getSubtotal(): number {
    return store.totalValue
  }

  function getIGIC(): number {
    const IGIC = 0.07
    const result = IGIC * getSubtotal()
    return Number(result.toFixed(2))
  }

  function addProduct(product: Videogame, amount: number = 1) {
    const cartItem: CartItem = toCartItem(product, amount)
    if (productExists(cartItem)) {
      store.updateQuantity(cartItem.id, amount, true)
    } else {
      store.addProduct(cartItem)
    }
  }

  function removeProduct(cartItem: CartItem) {
    store.removeProduct(cartItem.id)
  }

  function emptyCart() {
    store.emptyCart()
  }

  function updateQuantity(id: number, units: number) {
    store.updateQuantity(id, units)
  }

  return {
    getProducts,
    addProduct,
    getSubtotal,
    getIGIC,
    removeProduct,
    emptyCart,
    getIsEmpty,
    updateQuantity,
  }
}
