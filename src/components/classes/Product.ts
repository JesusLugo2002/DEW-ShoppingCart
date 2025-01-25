export interface Videogame {
  id: number
  name: string
  stock: number
  price: number
  image: string
  developer: string
  year: number
}

export interface CartItem {
  id: number
  name: string
  image: string
  price: number
  units: number
}
