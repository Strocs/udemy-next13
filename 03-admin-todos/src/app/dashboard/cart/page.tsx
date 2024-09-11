import { cookies } from 'next/headers'
import { Cart, ProductInCart } from '@/shopping-cart/types/cart'
import { products } from '@/products/data'
import { ItemCard } from '@/shopping-cart'
import { WidgetItem } from '@/components'

export const metadata = {
  title: 'Cart Page',
  description: 'Cart Page',
}

const getProductsInCart = (cart: Cart): ProductInCart[] => {
  const productsInCart: ProductInCart[] = []

  for (const id of Object.keys(cart)) {
    const product = products.find((prod) => prod.id === id)
    if (product) {
      productsInCart.push({ product, quantity: cart[id] })
    }
  }

  return productsInCart
}

export default function CartPage() {
  const cookieStore = cookies()
  const cart: Cart = JSON.parse(cookieStore.get('cart')?.value || '{}')
  const productsInCart = getProductsInCart(cart)
  const totalToPay = productsInCart.reduce(
    (prev, { product, quantity }) => product.price * quantity + prev,
    0
  )
  return (
    <div>
      <h1 className='pb-6 text-5xl font-bold'>Your cart items</h1>

      <div className='flex flex-col sm:flex-row gap-4 w-full'>
        <div className='flex flex-col gap-2 w-full sm:w-[60%] shrink-0'>
          {productsInCart.map(({ product, quantity }) => (
            <ItemCard key={product.id} product={product} quantity={quantity} />
          ))}
        </div>
        <div className='flex flex-col w-full sm:w-full'>
          <WidgetItem title='Total to pay'>
            <div className='mt-2 flex justify-center gap-4'>
              <h3 className='text-3xl font-bold text-gray-700'>
                ${(totalToPay * 1.19).toFixed(2)}
              </h3>
            </div>
            <span className='block text-center text-gray-500'>
              ${totalToPay} + 19%
              <small>(${(totalToPay * 0.19).toFixed(2)})</small>
            </span>
          </WidgetItem>
        </div>
      </div>
    </div>
  )
}
