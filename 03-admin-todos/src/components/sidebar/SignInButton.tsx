import { signIn } from '@/lib/auth'
import { CiLogout } from 'react-icons/ci'

export const SignInButton = () => {
  return (
    <form
      action={async () => {
        'use server'
        await signIn()
      }}
      className='px-6 -mx-6 pt-4 flex justify-between items-center border-t'
    >
      <button
        type='submit'
        className='px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group'
      >
        <CiLogout />
        <span className='group-hover:text-gray-700'>Sign In</span>
      </button>
    </form>
  )
}
