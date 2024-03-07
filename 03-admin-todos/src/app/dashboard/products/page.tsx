import { products } from '@/data'
import { ProductCard } from './components/ProductCard'

export default function ProductsPage () {
  return (
    <div className='flex flex-col gap-2'>
      <h1 className='pb-6 text-5xl font-bold'>Products</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-fit'>
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}
