'use client'
import Link from 'next/link'
import Image from 'next/image'
import type { SimplePokemon } from '..'
import { useAppDispatch, useAppSelector } from '@/store'
import { IoHeart, IoHeartOutline } from 'react-icons/io5'
import { toggleFavorite } from '@/store/pokemons/pokemonsSlice'

interface Props {
  pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon }: Props) => {
  const isFavorite = useAppSelector(
    state => !!state.pokemonsSlice.favorites[pokemon.id]
  )
  const dispatch = useAppDispatch()

  const onToggle = () => {
    dispatch(toggleFavorite(pokemon))
  }

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
          <button
            className='px-4 py-2 hover:bg-gray-100 flex items-center w-full'
            onClick={onToggle}
          >
            <div className='text-red-600'>
              {isFavorite ? (
                <IoHeart size={20} />
              ) : (
                <IoHeartOutline size={20} />
              )}
            </div>
            <div className='pl-3 text-start'>
              <p className='text-sm font-medium text-gray-800 leading-none'>
                {isFavorite ? 'Favorite' : 'Add to favorites'}
              </p>
              <p className='text-xs text-gray-500'>
                {isFavorite
                  ? 'You like this pokemon!'
                  : 'Do you like this pokemon?'}
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
