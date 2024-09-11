import { WidgetItem } from '@/components'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const session = await auth()

  // if (!session) {
  //   redirect("/api/auth/signin");
  // }

  return (
    <div className='grid gap-6 md:grid-cols-1 lg:grid-cols-1'>
      <WidgetItem title='Get User on Server Side'>
        <div>
          <p>{session ? JSON.stringify(session) : 'Unauthenticated'}</p>
        </div>
      </WidgetItem>
    </div>
  )
}
