'use client'
import { signOut, signIn, useSession } from 'next-auth/react'
import { CiLogout } from 'react-icons/ci'

export const SignOutButton = () => {
  const { status } = useSession()

  async function handleSignOut() {
    if (status === 'authenticated') {
      await signOut()
    }

    if (status === 'unauthenticated') {
      await signIn()
    }
  }

  return (
    <div className='px-6 -mx-6 pt-4 flex justify-between items-center border-t'>
      <button
        onClick={handleSignOut}
        className='px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group'
      >
        <CiLogout />
        <span className='group-hover:text-gray-700'>
          {status === 'authenticated'
            ? 'Sign out'
            : status === 'unauthenticated'
              ? 'Sign in'
              : 'Wait'}
        </span>
      </button>
    </div>
  )
}
