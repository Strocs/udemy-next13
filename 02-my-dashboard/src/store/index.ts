import { type Middleware, configureStore } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

import counterSlice from './counter/counterSlice'
import pokemonsSlice from './pokemons/pokemonsSlice'
import { localStorageMiddleware } from './middlewares/localStorageMiddleware'

export const store = configureStore({
  reducer: {
    counterSlice,
    pokemonsSlice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(localStorageMiddleware as Middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
