import { type Product } from './interfaceProduct'

export interface WishList {
  id: number
  products: Product[]
  userId: number
}
