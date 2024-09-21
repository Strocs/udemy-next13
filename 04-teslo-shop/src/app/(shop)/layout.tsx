import { TopMenu } from '@/components'
import { Sidebar } from '@/components/ui/sidebar/Sidebar'

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <TopMenu />
      <Sidebar />
      <main className='h-full min-h-dvh container mx-auto md:px-5'>
        {children}
      </main>
    </>
  )
}
