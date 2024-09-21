'use client'
import { useUIStore } from '@/store'
import { IoCloseOutline } from 'react-icons/io5'

export const CloseSidebar = () => {
  const closeSideMenu = useUIStore((state) => state.closeSideMenu)

  return (
    <IoCloseOutline
      size={50}
      className='absolute top-5 right-5 cursor-pointer'
      onClick={closeSideMenu}
    />
  )
}
