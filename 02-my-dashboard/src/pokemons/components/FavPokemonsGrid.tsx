'use client'
import { useAppSelector } from '@/store'
import { PokemonGrid } from '..'
import { useEffect, useState } from 'react'
import { IoHeartOutline } from 'react-icons/io5'

export const FavPokemonsGrid = () => {
  const favPokemons = useAppSelector(state => state.pokemonsSlice.favorites)

  //* Esta funcionalidad sirve para no eliminar automáticamente los pokemons favoritos de la UI
  //* OPCIONAL
  // const [pokemons, setPokemons] = useState(favPokemons)
  // useEffect(() => {
  //   setPokemons(favPokemons)
  // }, [])

  return (
    <>
      {Object.keys(favPokemons) ? (
        <PokemonGrid pokemons={Object.values(favPokemons)} />
      ) : (
        <NotFavorites />
      )}
    </>
  )
}

export const NotFavorites = () => {
  return (
    <div className='flex flex-col h-[50vh] items-center'>
      <IoHeartOutline size={200} className='text-red-500' />
      <span>No favorites yet</span>
    </div>
  )
}
