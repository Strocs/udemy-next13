import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import { ActiveLink } from '..'

const navItems = [
  { path: '/about', text: 'About' },
  { path: '/pricing', text: 'Pricing' },
  { path: '/contact', text: 'Contact' }
]

export const Navbar = () => {
  return (
    <nav className='flex bg-blue-800/20 px-6 py-3 m-2 rounded-lg justify-between'>
      <Link href='/' className='flex items-center gap-x-2'>
        <HomeIcon />
        <span>Home</span>
      </Link>
      <div className='flex gap-2'>
        {navItems.map(navItem => (
          <ActiveLink key={navItem.path} {...navItem} />
        ))}
      </div>
    </nav>
  )
}
