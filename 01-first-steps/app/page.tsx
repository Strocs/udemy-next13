import Link from 'next/link'

export default function Home () {
  return (
    <main className='flex flex-col items-center p-24'>
      <span className='text-8xl font-black'>Hola Mundo</span>
      <div className='flex gap-8 w-fit tracking-wider'>
        <Link href='/about'>About Page</Link>
        <Link href='/pricing'>Pricing Page</Link>
        <Link href='/contact'>Contact Page</Link>
      </div>
    </main>
  )
}
