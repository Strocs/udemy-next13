import { Product } from '@/interfaces'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  product: Product
}
export const ProductGridItem = ({ product }: Props) => {
  return (
    <div className='rounded-md overflow-hidden fade-in'>
      <Link
        aria-label={`see ${product.title}`}
        href={`/product/${product.slug}`}
      >
        <picture className='relative group'>
          <Image
            src={`/products/${product.images[0]}`}
            alt={product.title}
            className='w-full object-cover rounded-md'
            width={500}
            height={500}
          />
          {/* Alternative solution to hover effect, avoiding useState and keep component on server */}
          {/* Implement statefull solution with: useState to change index of the image and onMouseEnter/Leave events. */}
          <Image
            src={`/products/${product.images[1]}`}
            alt={product.title}
            className='w-full object-cover rounded-md opacity-0 absolute inset-0 group-hover:z-10 group-hover:opacity-100 -z-10'
            loading='lazy'
            width={500}
            height={500}
          />
        </picture>
      </Link>
      <div className='p-4 flex flex-col'>
        <Link
          href={`/product/${product.slug}`}
          className='hover:text-slate-500'
        >
          {product.title}
        </Link>
        <span className='font-bold'>${product.price}</span>
      </div>
    </div>
  )
}
