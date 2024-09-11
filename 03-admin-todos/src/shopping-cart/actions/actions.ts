// 'use client'

import { getCookie, hasCookie, setCookie } from 'cookies-next'
import { Cart } from '../types/cart'
import { products } from '@/products/data'

const productsIdData = products.map((product) => product.id)

export const getCookieCart = (): Cart => {
  if (hasCookie('cart')) {
    const cookieCart: Cart = JSON.parse((getCookie('cart') as string) ?? '{}')
    // Evaluation with Data
    for (const id of Object.keys(cookieCart)) {
      if (!productsIdData.includes(id)) {
        delete cookieCart[id]
      }
    }
    return cookieCart
  }

  return {}
}

export const addProductToCart = (id: string) => {
  const cookieCart = getCookieCart()
  if (cookieCart[id]) {
    cookieCart[id]++
  } else {
    cookieCart[id] = 1
  }

  setCookie('cart', JSON.stringify(cookieCart))
}

export const removeProductFromCart = (id: string) => {
  const cookieCart = getCookieCart()
  delete cookieCart[id]

  setCookie('cart', JSON.stringify(cookieCart))
}

export const getProductCount = (id: string): number => {
  const cookieCart = getCookieCart()
  return cookieCart[id] ?? 0
}

export const removeSingleItemFromCart = (id: string) => {
  const cookieCart = getCookieCart()
  if (!cookieCart[id]) return

  if (cookieCart[id] > 1) {
    cookieCart[id]--
  } else {
    delete cookieCart[id]
  }

  setCookie('cart', JSON.stringify(cookieCart))
}

