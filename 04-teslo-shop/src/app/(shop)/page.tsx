import { ProductGrid, Title } from '@/components'
import { Product } from '@/interfaces'
import { initialData } from '@/seed/seed'

const products: Product[] = initialData.products

export default function Home() {
  return (
    <>
      <Title title='Shop' subtitle='All products' />
      <ProductGrid products={products} />
    </>
  )
}
