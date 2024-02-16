import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'About Description',
  keywords: ['About', 'Ignacio', 'Información']
}

export default function AboutPage () {
  return <h1 className='text-6xl font-bold'>About Page</h1>
}
