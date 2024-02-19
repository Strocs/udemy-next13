import { Title, WidgetsGrid } from '@/components'

export const metadata = {
  title: 'Dashboard',
  description: 'Dashboard Content'
}

export default function MainPage () {
  return (
    <main className='text-black'>
      <Title title='Dashboard' pre='General Info' />
      <WidgetsGrid />
    </main>
  )
}
