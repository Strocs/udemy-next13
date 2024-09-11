import Image from 'next/image'
import Link from 'next/link'
import {
  SidebarItem,
  SidebarLogoutButton,
  SignInButton,
  SignOutButton,
} from '..'
import {
  IoCalendarOutline,
  IoCheckboxOutline,
  IoListOutline,
} from 'react-icons/io5'
import { FaCookie, FaShirt, FaUser } from 'react-icons/fa6'
import { auth } from '@/lib/auth'

const sidebarItems = [
  {
    name: 'Dashboard',
    icon: <IoCalendarOutline size={30} />,
    path: '/dashboard',
  },
  {
    name: 'Profile',
    icon: <FaUser size={30} />,
    path: '/dashboard/profile',
  },
  {
    name: 'Rest Todos',
    icon: <IoCheckboxOutline size={30} />,
    path: '/dashboard/rest-todos',
  },
  {
    name: 'Server Actions',
    icon: <IoListOutline size={30} />,
    path: '/dashboard/server-todos',
  },
  {
    name: 'Cookies',
    icon: <FaCookie size={30} />,
    path: '/dashboard/cookies',
  },
  {
    name: 'Products',
    icon: <FaShirt size={30} />,
    path: '/dashboard/products',
  },
]

export const Sidebar = async () => {
  const session = await auth()

  return (
    <aside className='ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]'>
      <div>
        <div className='-mx-6 px-6 py-4'>
          <Link href='/dashboard' title='home'>
            <Image
              height={36}
              width={128}
              src='https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg'
              className='w-32'
              alt='Tailus Logo'
              priority
            />
          </Link>
        </div>

        <div className='mt-8 text-center'>
          <Image
            height={112}
            width={112}
            src={
              session?.user?.image ??
              'https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp'
            }
            alt={`${session?.user?.image ?? 'Tailus'} Avatar`}
            className='w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28'
          />
          <h5 className='hidden mt-4 text-xl font-semibold text-gray-600 lg:block'>
            {session?.user?.name ?? 'Guess'}
          </h5>
          <span className='hidden text-gray-400 lg:block capitalize'>
            {session?.user?.roles?.join(', ')}
          </span>
        </div>

        <ul className='space-y-2 tracking-wide mt-8'>
          {sidebarItems.map((item) => (
            <SidebarItem key={item.name} {...item} />
          ))}
        </ul>
      </div>

      {session ? <SignOutButton /> : <SignInButton />}
    </aside>
  )
}
