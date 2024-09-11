'use client'
import { WidgetItem } from '@/components/WidgetItem'
import { useSession } from 'next-auth/react'

export default function ProfilePage() {
  const { data: session, status } = useSession()

  return (
    <div className='grid gap-6 md:grid-cols-1 lg:grid-cols-1'>
      <WidgetItem title='Get User on Client Side'>
        <div>
          <p>
            {status === 'loading'
              ? 'Loading User Info...'
              : status === 'unauthenticated'
                ? 'Unauthenticated'
                : JSON.stringify(session)}
          </p>
        </div>
      </WidgetItem>
    </div>
  )
}
