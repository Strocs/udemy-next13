import { ProductSlideshow, QuantitySelector, SizeSelector } from '@/components'
import { titleFont } from '@/config'
import { initialData } from '@/seed/seed'
import { notFound } from 'next/navigation'

interface Props {
  params: {
    slug: string
  }
}
export default function ProductPage({ params }: Props) {
  const { slug } = params
  const product = initialData.products.find((product) => product.slug === slug)

  if (!product) {
    notFound()
  }

  return (
    <article className='mt-5 mb-20 grid md:grid-cols-3 gap-3'>
      {/* Slideshow */}
      <section className='col-span-1 md:col-span-2'>
        <ProductSlideshow images={product.images} title={product.title} />
      </section>

      {/* Details */}
      <section className='col-span-1 px-5'>
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className='text-lg mb-5'>${product.price}</p>

        {/* Sizes */}
        <SizeSelector
          selectedSize={product.sizes[0]}
          availableSizes={product.sizes}
        />

        {/* Quantity */}
        <QuantitySelector quantity={1} />

        {/* Add to Cart */}
        <button className='btn-primary my-10'>Add to cart</button>

        {/* Description */}
        <h3 className='font-bold text-sm'>Desription</h3>
        <p className='font-light text-sm'>{product.description}</p>
      </section>
    </article>
  )
}
