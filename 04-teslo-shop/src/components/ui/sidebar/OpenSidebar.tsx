'use client'

import { useUIStore } from '@/store'

export const OpenSidebar = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu)

  return (
    <button
      onClick={openSideMenu}
      className='m-2 p-2 rounded-md transition-all hover:bg-slate-100'
    >
      Menú
    </button>
  )
}
