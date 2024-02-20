import { Title } from '@/components'
import { FavPokemonsGrid } from '@/pokemons'

export const metadata = {
  title: 'Favorites',
  description: 'Your favorites pokemons'
}

export default async function FavoritesPage () {
  return (
    <div className='flex flex-col'>
      <Title title='PokeFav' pre='Global State' />
      <FavPokemonsGrid />
    </div>
  )
}
