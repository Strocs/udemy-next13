import { titleFont } from '@/config'
import Link from 'next/link'

export const Footer = () => {
  return (
    <div className='flex space-x-6 w-full justify-center text-xs mb-10'>
      <Link href='/'>
        <span className={`${titleFont.className} antialiased font-bold`}>
          Teslo
        </span>
        <span> | Shop </span>
        <span>© {new Date().getFullYear()}</span>
      </Link>

      <Link href='/'>Privacy & Legal</Link>

      <Link href='/'>Locations</Link>
    </div>
  )
}
