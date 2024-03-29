import { PokemonCard, type SimplePokemon } from '..'

interface Props {
  pokemons: SimplePokemon[]
}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className='flex flex-wrap gap-10 p-4 items-center justify-center'>
      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}
