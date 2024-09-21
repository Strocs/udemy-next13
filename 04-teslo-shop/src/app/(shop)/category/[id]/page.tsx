import { ProductGrid, Title } from '@/components'
import { Product } from '@/interfaces'
import { initialData } from '@/seed/seed'
import { notFound } from 'next/navigation'

interface Props {
  params: {
    id: string
  }
}

const products: Product[] = initialData.products

export default function CategoryPage({ params }: Props) {
  const { id } = params

  const productsByCategory = products.filter((product) => product.gender === id)

  if (productsByCategory.length === 0) {
    notFound()
  }

  // logic business
  const label = id === 'kid' ? 'kids' : id

  return (
    <>
      <Title
        title='Shop'
        subtitle={`${label.replace(label[0], label[0].toUpperCase())} products`}
      />
      <ProductGrid products={productsByCategory} />
    </>
  )
}
