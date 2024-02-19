'use client'
import { IoCartOutline } from 'react-icons/io5'
import { SimpleWidget } from '..'
import { useAppSelector } from '@/store'

export const WidgetsGrid = () => {
  const { count } = useAppSelector(state => state.counterSlice)

  return (
    <div className='flex flex-wrap p-2 justify-center'>
      <SimpleWidget
        label='Counter'
        title={`${count}`}
        subTitle='Shopping Items'
        icon={<IoCartOutline size={40} />}
        href='/dashboard/counter'
      />
      <SimpleWidget title='151' />
    </div>
  )
}
