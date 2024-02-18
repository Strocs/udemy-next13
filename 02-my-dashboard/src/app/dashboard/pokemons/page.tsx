import { PokemonGrid, getPokemons } from '@/pokemons'

export const metadata = {
  title: 'Static Pokemon List',
  description: 'A List of SSG and SSR Pokemons'
}

export default async function PokemonsPage () {
  const pokemons = await getPokemons(151)
  return (
    <div className='flex flex-col'>
      <span className='text-7xl my-2 font-bold text-center'>
        <small className='text-4xl font-light'>Static</small>{' '}
        <strong>Pokemons</strong> List
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  )
}
