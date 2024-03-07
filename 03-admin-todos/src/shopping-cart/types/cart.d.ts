import type { Product } from "@/products/types/products"

export type Cart = { [id: string]: number }

export interface ProductInCart {
  product: Product
  quantity: number
}