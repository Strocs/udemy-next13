'use client'

import { useState } from 'react'

interface Props {
  value?: number
}

export const CartCounter = ({ value = 0 }: Props) => {
  const [count, setCount] = useState(value)
  return (
    <>
      <span className='text-9xl font-black'>{count}</span>
      <div className='flex gap-2'>
        <button
          onClick={() => setCount(prevState => prevState + 1)}
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition w-[100px]'
        >
          +1
        </button>
        <button
          onClick={() => setCount(prevState => prevState - 1)}
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition w-[100px]'
        >
          -1
        </button>
      </div>
    </>
  )
}
