'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
  icon: React.ReactNode
  name: string
  path: string
}

export const SidebarItem = ({ icon, name, path }: Props) => {
  const currentPath = usePathname()
  const activeStyle =
    currentPath === path
      ? 'text-white bg-gradient-to-r from-sky-600 to-cyan-400 from-40% to-60% bg-center [background-size:300%] hover:bg-left transition-[background-position] duration-300'
      : 'text-gray-500 hover:bg-gray-100 transition-[background-color] duration-150'

  return (
    <li>
      <Link
        href={path}
        className={`relative px-4 py-3 flex items-center space-x-4 rounded-xl ${activeStyle}`}
      >
        {icon}
        <span className='-mr-1 font-medium'>{name}</span>
      </Link>
    </li>
  )
}
