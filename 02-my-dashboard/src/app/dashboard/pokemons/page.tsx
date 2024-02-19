import { Title } from '@/components'
import { PokemonGrid, getPokemons } from '@/pokemons'

export const metadata = {
  title: 'Static Pokemon List',
  description: 'A List of SSG and SSR Pokemons'
}

export default async function PokemonsPage () {
  const pokemons = await getPokemons(151)
  return (
    <div className='flex flex-col'>
      <Title title='Pokemons' pre='Static' />
      <PokemonGrid pokemons={pokemons} />
    </div>
  )
}
