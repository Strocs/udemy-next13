import { TabBar } from '@/components'
import { cookies } from 'next/headers'

export const metadata = {
  title: 'Cookies Page',
  description: 'Cookies Page Description'
}

export default function CookiesPage () {
  const cookieStore = cookies()
  const cookieTab = cookieStore.get('selectedTab')?.value ?? '1'

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
      <div className='flex flex-col gap-3'>
        <h1 className='pb-6 text-5xl font-bold'>Tabs</h1>
        <TabBar tabNumbers={5} currentTab={+cookieTab} />
      </div>
    </div>
  )
}
