'use client'

import Image from 'next/image'

import { IoAddCircleOutline, IoRemove } from 'react-icons/io5'
// import {  } from "../shopping-cart/actions";

import { useRouter } from 'next/navigation'
import { Product } from '@/products/types/products'
import { addProductToCart, removeSingleItemFromCart } from '..'

interface Props {
  product: Product
  quantity: number
}

export const ItemCard = ({ product, quantity }: Props) => {
  const router = useRouter()

  function onAddToCart() {
    addProductToCart(product.id)
    router.refresh()
  }

  function onRemoveItem() {
    removeSingleItemFromCart(product.id)
    router.refresh()
  }

  return (
    <div className='flex p-4 gap-4 items-center shadow rounded-lg w-full bg-gray-800 border-gray-100'>
      <Image
        width={140}
        height={140}
        className='rounded'
        src={product.image}
        alt={product.name}
      />
      <div className='flex flex-col justify-between h-full w-full'>
        {/* Product Image */}

        {/* Title */}
        <div className='w-full flex flex-col'>
          <a href='#'>
            <h3 className='flex gap-1 items-center font-semibold text-xl tracking-tight text-white'>
              {product.name} -
              <small className='text-sm'>${product.price.toFixed(2)}</small>
            </h3>
          </a>

          {/* Price and Add to Cart */}
          <div className='flex flex-col items-start justify-between'>
            <span className='text-gray-900 dark:text-white'>
              Cantidad: {quantity}
            </span>
            <span className='font-bold text-white'>
              Total: ${(product.price * quantity).toFixed(2)}
            </span>
          </div>
        </div>

        <div className='flex items-center justify-between w-full'>
          <button
            onClick={onAddToCart}
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            <IoAddCircleOutline size={25} />
          </button>
          <span className='text-2xl text-white mx-6'>{quantity}</span>
          <button
            onClick={onRemoveItem}
            className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
          >
            <IoRemove size={25} />
          </button>
        </div>
      </div>
    </div>
  )
}
