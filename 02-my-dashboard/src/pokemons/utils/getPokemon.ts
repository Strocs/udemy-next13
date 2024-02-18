import { notFound } from "next/navigation"
import { Pokemon } from ".."

export const getPokemon = async (query: string): Promise<Pokemon> => {
  try {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`, {
      cache: 'force-cache'
    }).then(res => res.json())

    return pokemon
  } catch (error) {
    notFound()
  }
}