import { Title } from '@/components'
import { PokemonGrid } from '@/pokemons'

export const metadata = {
  title: 'Favorites',
  description: ''
}

export default async function FavoritesPage () {
  return (
    <div className='flex flex-col'>
      <Title title='PokeFav' pre='Global State' />
      <PokemonGrid pokemons={[]} />
    </div>
  )
}
