import { OpenSidebar } from '@/components'
import { titleFont } from '@/config/fonts/fonts'
import Link from 'next/link'
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5'

export const TopMenu = () => {
  return (
    <nav className='flex px-5 container mx-auto relative justify-between items-center w-full'>
      {/* Logo */}
      <div>
        <Link href='/'>
          <span className={`${titleFont.className} antialiased font-bold`}>
            Teslo
          </span>
          <span> | Shop</span>
        </Link>
      </div>
      {/* Center Menu */}
      <div className='hidden absolute inset-x-0 w-fit mx-auto sm:block'>
        <Link
          className='m-2 p-2 rounded-md transition-all hover:bg-slate-100 '
          href='/category/men'
        >
          Hombres
        </Link>
        <Link
          className='m-2 p-2 rounded-md transition-all hover:bg-slate-100 '
          href='/category/women'
        >
          Mujeres
        </Link>
        <Link
          className='m-2 p-2 rounded-md transition-all hover:bg-slate-100 '
          href='/category/kids'
        >
          Niños
        </Link>
      </div>
      {/* Search, Cart, Menu */}
      <div className='flex items-center gap-2'>
        <Link href='/search'>
          <IoSearchOutline className='w-5 h-5 mx-2' />
        </Link>

        <Link href='/cart' className='block relative'>
          <span className='absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white'>
            3
          </span>
          <IoCartOutline className='w-5 h-5' />
        </Link>

        <OpenSidebar />
      </div>
    </nav>
  )
}
