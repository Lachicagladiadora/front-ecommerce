import { type Product } from './interfaceProduct'

export interface Products {
  product: Product
}

export interface WishList {
  id: number
  products: Products
  userId: string
}
