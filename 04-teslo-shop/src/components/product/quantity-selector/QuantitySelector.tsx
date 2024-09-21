'use client'
import clsx from 'clsx'
import { ChangeEvent, useState } from 'react'
import { IoAdd, IoRemove } from 'react-icons/io5'

interface Props {
  quantity: number
}
export const QuantitySelector = ({ quantity }: Props) => {
  const [count, setCount] = useState(quantity)
  const [showLimitMessage, setShowLimitMessage] = useState(false)

  const increment = () => {
    if (count === 5) return setShowLimitMessage(true)
    setCount((prevState) => prevState + 1)
  }

  const decrement = () => {
    if (count <= 1) return
    if (count <= 5 && !!showLimitMessage) setShowLimitMessage(false)
    setCount((prevState) => prevState - 1)
  }

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (isNaN(+e.target.value)) return
    if (showLimitMessage) setShowLimitMessage(false)
    if (+e.target.value < 1) return setCount(1)
    if (+e.target.value > 5) {
      setShowLimitMessage(true)
      setCount(5)
      return
    }

    setCount(+e.target.value)
  }

  return (
    <div>
      <h3 className='font-medium'>Quantity</h3>
      <div className='flex mt-2'>
        <button onClick={decrement}>
          <IoRemove
            size={16}
            className={clsx({ 'text-slate-400': count <= 1 })}
          />
        </button>

        <div>
          <input
            value={count}
            onChange={handleInput}
            placeholder={count.toString()}
            className='w-20 mx-3 py-1 px-5 bg-slate-100 text-center rounded-md placeholder:text-center'
          />
        </div>

        <button onClick={increment}>
          <IoAdd size={16} className={clsx({ 'text-slate-400': count >= 5 })} />
        </button>
      </div>

      {showLimitMessage && (
        <p className='text-red-400'>Max Quantity Allowed: 5</p>
      )}
    </div>
  )
}
