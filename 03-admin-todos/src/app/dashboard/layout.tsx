import { Sidebar, TopMenu } from '@/components'
import { SessionProvider } from 'next-auth/react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Sidebar />
      <div className='ml-auto pb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen'>
        <TopMenu />
        <SessionProvider>
          <div className='p-6'>{children}</div>
        </SessionProvider>
      </div>
    </>
  )
}
