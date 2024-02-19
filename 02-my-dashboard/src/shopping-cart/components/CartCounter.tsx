'use client'

import { useAppDispatch, useAppSelector } from '@/store'
import {
  addOne,
  subtractOne,
  resetCount,
  initCounterState
} from '@/store/counter/counterSlice'
import { useEffect } from 'react'
// import { useState } from 'react'

interface Props {
  value?: number
}

export interface CounterResponse {
  method: string
  count: number
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch('/api/counter').then(res => res.json())
  return data
}

export const CartCounter = ({ value = 0 }: Props) => {
  // const [count, setCount] = useState(value)

  const { count } = useAppSelector(state => state.counterSlice)

  const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(initCounterState(value))
  // }, [dispatch, value])

  useEffect(() => {
    getApiCounter().then(data => dispatch(initCounterState(data.count)))
  }, [dispatch, value])

  return (
    <>
      <span className='text-9xl font-black'>{count}</span>
      <div className='flex gap-2'>
        <button
          onClick={() => dispatch(addOne())}
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition w-[100px]'
        >
          +1
        </button>
        <button
          onClick={() => dispatch(subtractOne())}
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition w-[100px]'
        >
          -1
        </button>
      </div>
    </>
  )
}
