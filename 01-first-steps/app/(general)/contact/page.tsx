import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Description',
  keywords: ['Contact', 'Ignacio', 'Información']
}

export default function ContactPage () {
  return <h1 className='text-6xl font-bold'>Contact Page</h1>
}
