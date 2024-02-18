import Link from 'next/link'
import { SimplePokemon } from '..'
import Image from 'next/image'
import { IoHeartOutline } from 'react-icons/io5'

interface Props {
  pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon }: Props) => {
  return (
    <div className='mx-auto right-0 mt-2 w-60'>
      <div className='bg-white rounded-xl overflow-hidden shadow-lg'>
        <div className='text-center p-6 bg-gray-800 border-b'>
          <Image
            key={pokemon.id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            alt={pokemon.name}
            width={100}
            height={100}
            className='mx-auto max-h-24 w-full'
            priority={false}
          />
          <p className='pt-2 text-lg font-semibold text-gray-50 capitalize'>
            {pokemon.name}
          </p>
          <div className='mt-5'>
            <Link
              href={`pokemons/${pokemon.name}`}
              className='border rounded-full py-2 px-4 text-xs font-semibold text-gray-100'
            >
              More info
            </Link>
          </div>
        </div>
        <div className='border-b'>
          <Link
            className='px-4 py-2 hover:bg-gray-100 flex items-center'
            href='/dashboard/pokemons'
          >
            <div className='text-red-600'>
              <IoHeartOutline size={20} />
            </div>
            <div className='pl-3'>
              <p className='text-sm font-medium text-gray-800 leading-none'>
                Add to Favorite
              </p>
              <p className='text-xs text-gray-500'>Do you like this pokemon?</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
