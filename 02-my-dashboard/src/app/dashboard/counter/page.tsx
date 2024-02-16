import { CartCounter } from '@/app/shopping-cart/components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: 'Simple counter'
}

export default function CounterPage () {
  // Solicitud a DB para obtener número del Cart Shopping y enviarla al client component

  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <span>Products in Cart</span>
      <CartCounter value={20} />
    </div>
  )
}
