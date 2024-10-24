import { QuantitySelector, Title } from '@/components'
import { initialData } from '@/seed/seed'
import Link from 'next/link'
import Image from 'next/image'

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
  initialData.products[3],
]

export default function CartPage() {
  return (
    <article className='flex flex-col justify-center items-center mb-72 px-10 sm:px-0'>
      <header className='flex flex-col w-full max-w-[1000px]'>
        <Title title='Cart' />
      </header>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
        {/* Carrito */}
        <section className='order-last sm:order-first flex flex-col'>
          <span className='text-xl'>Add more items</span>
          <Link href='/' className='underline'>
            Continue Shopping
          </Link>

          <ul className='space-y-5 pt-5'>
            {/* Items */}
            {productsInCart.map((product) => (
              <li key={product.slug} className='flex'>
                <Image
                  src={'/products/' + product.images[0]}
                  alt={product.title}
                  width={100}
                  height={100}
                  className='mr-5 rounded object-cover'
                />
                <div>
                  <span className='block'>{product.title}</span>
                  <span className='text-xl'>${product.price}</span>
                  <QuantitySelector quantity={4} />
                  <button className='underline mt-3'>Remove</button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Checkout */}
        <section className='bg-white rounded-xl shadow-xl p-7 h-fit'>
          <h2 className='text-2xl mb-2'>Order Resume</h2>
          <ul>
            <li className='w-full grid grid-cols-2'>
              <span>Quantity</span>
              <span className='text-right'>3 articles</span>
            </li>
            <li className='w-full grid grid-cols-2'>
              <span>Subtotal</span>
              <span className='text-right'>$100</span>
            </li>

            <li className='w-full grid grid-cols-2'>
              <span>Taxes (10%)</span>
              <span className='text-right'>$10</span>
            </li>
            <li className='w-full grid grid-cols-2'>
              <span className='text-2xl mt-5'>Total</span>
              <span className='mt-5 text-2xl text-right'>$110</span>
            </li>
          </ul>
          <Link
            className='flex btn-primary justify-between mt-5 mb-2 w-full'
            href='/checkout/address'
          >
            Checkout
          </Link>
        </section>
      </div>
    </article>
  )
}
