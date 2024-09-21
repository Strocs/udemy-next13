'use client'

import { CloseSidebar } from '@/components'
import { useUIStore } from '@/store'
import clsx from 'clsx'
import Link from 'next/link'
import {
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from 'react-icons/io5'

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen)
  const closeSideMenu = useUIStore((state) => state.closeSideMenu)

  return (
    <aside>
      {/* Blurred Background */}
      {isSideMenuOpen && (
        <div
          onClick={closeSideMenu}
          className='fixed fade-in inset-0 w-dvw h-dvh z-10 bg-black/30 backdrop-blur-sm'
        />
      )}
      {/* Sidemenu */}
      <nav
        className={clsx(
          'fixed p-5 right-0 top-0 w-full max-w-sm h-dvh bg-white z-20 shadow-2xl transform transition-all duration-300',
          {
            'translate-x-full': !isSideMenuOpen,
          },
        )}
      >
        <CloseSidebar />
        {/* Input */}
        <div className='relative mt-14'>
          <IoSearchOutline size={20} className='absolute top-2 left-2' />
          <input
            placeholder='Search'
            className='w-full bg-slate-50 rounded pl-10 py-1 pr-10 border-b-2 text-lg border-slate-200 focus:outline-none focus:border-slate-500'
          />
        </div>
        {/* Menu */}
        <Link
          href='/'
          className='flex items-center mt-6 p-2 hover:bg-slate-100 rounded-md transition-all'
        >
          <IoPersonOutline size={30} />
          <span className='ml-3 text-lg'>Perfil</span>
        </Link>

        <Link
          href='/'
          className='flex items-center mt-6 p-2 hover:bg-slate-100 rounded-md transition-all'
        >
          <IoTicketOutline size={30} />
          <span className='ml-3 text-lg'>Orders</span>
        </Link>

        <Link
          href='/'
          className='flex items-center mt-6 p-2 hover:bg-slate-100 rounded-md transition-all'
        >
          <IoLogInOutline size={30} />
          <span className='ml-3 text-lg'>Sign in</span>
        </Link>

        <Link
          href='/'
          className='flex items-center mt-6 p-2 hover:bg-slate-100 rounded-md transition-all'
        >
          <IoLogOutOutline size={30} />
          <span className='ml-3 text-lg'>Sign out</span>
        </Link>
        {/* Line Separator */}
        <div className='w-full h-px bg-slate-200 my-10' />

        <Link
          href='/'
          className='flex items-center mt-6 p-2 hover:bg-slate-100 rounded-md transition-all'
        >
          <IoShirtOutline size={30} />
          <span className='ml-3 text-lg'>Products</span>
        </Link>

        <Link
          href='/'
          className='flex items-center mt-6 p-2 hover:bg-slate-100 rounded-md transition-all'
        >
          <IoTicketOutline size={30} />
          <span className='ml-3 text-lg'>Orders</span>
        </Link>

        <Link
          href='/'
          className='flex items-center mt-6 p-2 hover:bg-slate-100 rounded-md transition-all'
        >
          <IoPeopleOutline size={30} />
          <span className='ml-3 text-lg'>Users</span>
        </Link>
      </nav>
    </aside>
  )
}
