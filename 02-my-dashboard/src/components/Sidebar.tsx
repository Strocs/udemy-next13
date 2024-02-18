import Image from 'next/image'
import {
  IoBrowsersOutline,
  IoCalculator,
  IoFootball,
  IoLogoReact
} from 'react-icons/io5'
import { SidebarMenuItem } from '.'
import Link from 'next/link'

const menuItem = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsersOutline size={20} />,
    title: 'Dashboard',
    subTitle: 'Visualization'
  },
  {
    path: '/dashboard/counter',
    icon: <IoCalculator size={20} />,
    title: 'Counter',
    subTitle: 'Client Side Counter'
  },
  {
    path: '/dashboard/pokemons',
    icon: <IoFootball size={20} />,
    title: 'Pokemons',
    subTitle: 'Static Generation'
  }
]

export const Sidebar = () => {
  return (
    <div
      id='menu'
      className='bg-gray-900 min-h-screen sticky top-0 z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll shrink-0'
    >
      <div id='logo' className='my-4 px-6'>
        <h1 className='flex items-center text-lg md:text-2xl font-bold text-white'>
          <IoLogoReact className='mr-2' />
          <span>Next</span>
          <span className='text-blue-500'>13</span>+
        </h1>
        <p className='text-slate-500 text-sm'>
          Activities and exercises to learn NextJs 13+
        </p>
      </div>
      <div id='profile' className='px-6 py-10'>
        <p className='text-slate-500'>Welcome back,</p>
        <Link href='/' className='inline-flex space-x-2 items-center'>
          <span>
            <Image
              src='https://avatars.githubusercontent.com/u/71996940?v=4'
              className='rounded-full w-8 h-8'
              alt='User Image'
              width={32}
              height={32}
            />
          </span>
          <span className='text-sm md:text-base font-bold'>Ignacio Molina</span>
        </Link>
      </div>
      <div id='nav' className='w-full px-6'>
        {menuItem.map(item => (
          <SidebarMenuItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  )
}
