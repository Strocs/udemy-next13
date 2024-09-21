'use client'
import type { Size } from '@/interfaces'
import clsx from 'clsx'

interface Props {
  selectedSize: Size
  availableSizes: Size[]
}

export const SizeSelector = ({ selectedSize, availableSizes }: Props) => {
  return (
    <div className='my-5 '>
      <h3 className='font-medium'>Size</h3>
      <div className='flex gap-4'>
        {availableSizes.map((size) => (
          <button
            key={size}
            className={clsx(
              'hover:after:w-full font-bold relative after:transition-[width]',
              'after:contents-[""] after:absolute after:bottom-0 after:inset-x-0 after:h-0.5 after:w-0 after:bg-black after:rounded-full',
              {
                'after:w-full': size === selectedSize,
              },
            )}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  )
}
