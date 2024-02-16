import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Pricing Description',
  keywords: ['Pricing', 'Ignacio', 'Información']
}

export default function PricingPage () {
  return <h1 className='text-6xl font-bold'>Pricing Page</h1>
}
