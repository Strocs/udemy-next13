import { Sidebar } from '@/components'
import Link from 'next/link'

export default function NotFoundPage () {
  return (
    <div className='bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white'>
      <div className='flex'>
        <Sidebar />
        <div className='w-full text-slate-900'>
          <main className='h-screen w-full flex flex-col justify-center items-center'>
            <h1 className='text-9xl font-extrabold text-gray-900 tracking-widest'>
              404
            </h1>
            <div className='bg-blue-500 text-white px-2 text-sm rounded rotate-12 absolute'>
              Page Not Found
            </div>
            <button className='mt-5'>
              <div className='relative inline-block text-sm font-medium text-blue-500 group active:text-orange-500 focus:outline-none focus:ring'>
                <span className='absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-blue-500 group-hover:translate-y-0 group-hover:translate-x-0'></span>

                <span className='relative block px-8 py-3 bg-white text-blue-500 border border-current'>
                  <Link href='/dashboard/main'>Go Home</Link>
                </span>
              </div>
            </button>
          </main>
        </div>
      </div>
    </div>
  )
}
