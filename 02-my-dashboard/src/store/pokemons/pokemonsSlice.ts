import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { SimplePokemon } from '@/pokemons';

interface FavPokemonState {
  [key: string]: SimplePokemon
}

interface PokemonState {
  favorites: FavPokemonState
}


// const getInitialState = (): FavPokemonState => {
//   // if (typeof localStorage === 'undefined') return {}
//   const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}')
//   return favorites
// }

const initialState: PokemonState = {
  // '1': { id: '1', name: 'bulbasaur' },
  // '2': { id: '2', name: 'ivysaur' },
  // '3': { id: '3', name: 'venusaur' },
  // ...getInitialState()
  favorites: {}
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritePokemons(state, { payload }: PayloadAction<FavPokemonState>) {
      state.favorites = payload
    },
    toggleFavorite(state, { payload }: PayloadAction<SimplePokemon>) {

      state.favorites[payload.id]
        ?
        delete state.favorites[payload.id]
        :
        state.favorites[payload.id] = payload

      //! No se debe hacer en Redux, ya que es un efecto secundario y el reducer debería ser una función pura
      // localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites))
    }
  }
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions

export default pokemonsSlice.reducer