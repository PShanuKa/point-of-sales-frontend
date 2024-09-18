import { configureStore } from '@reduxjs/toolkit'
import ThemeSlice from './features/ThemeSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      theme : ThemeSlice
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']