import Image from 'next/image'
import { IoAddCircleOutline, IoTrashOutline } from 'react-icons/io5'
import { Star } from './Star'

interface Props {
  image: string
  name: string
  price: number
  rating: number
}

export const ProductCard = ({ image, name, price, rating }: Props) => {
  const ratingStars = Array.from(new Array(rating), (_, i) => i)

  return (
    <div className='bg-white shadow rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-100'>
      {/* Product Image */}
      <div className='p-2'>
        <Image
          width={500}
          height={500}
          className='rounded'
          src={image}
          alt='product image'
        />
      </div>

      {/* Title */}
      <div className='px-5 pb-5'>
        <a href='#'>
          <h3 className='text-gray-900 font-semibold text-xl tracking-tight dark:text-white'>
            {name}
          </h3>
        </a>
        <div className='flex items-center mt-2.5 mb-5'>
          {[...Array(5)].map((_, index) => (
            <Star key={index} active={ratingStars.includes(index)} />
          ))}

          {/* Rating Number */}
          <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3'>
            {rating}.0
          </span>
        </div>

        {/* Price and Add to Cart */}
        <div className='flex items-center justify-between'>
          <span className='text-3xl font-bold text-gray-900 dark:text-white'>
            ${price}
          </span>

          <div className='flex'>
            <button className='text-white mr-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 md:px-5 py-1.5 md:py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
              <IoAddCircleOutline size={23} />
            </button>
            <button className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 md:px-5 py-1.5 md:py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'>
              <IoTrashOutline size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
