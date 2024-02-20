import type { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from '../index';

export const localStorageMiddleware = (state: MiddlewareAPI) => {
  return (next: Dispatch) => (action: Action) => {

    next(action)

    if (action.type === 'pokemons/toggleFavorite') {
      const { pokemonsSlice } = state.getState() as RootState
      localStorage.setItem('favorite-pokemons', JSON.stringify(pokemonsSlice.favorites))
    }

  }
}