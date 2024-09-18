import { createSlice } from '@reduxjs/toolkit'

export interface ThemeState {
  openHorizontalNav: boolean
  
}

const initialState: ThemeState = {
  openHorizontalNav: false,
  
}

export const ThemeSlice = createSlice({
  name: 'Theme',
  initialState,
  reducers: {
    horizontalToggle: (state) => {
      state.openHorizontalNav = !state.openHorizontalNav
    },
    
  },
})


export const { horizontalToggle } = ThemeSlice.actions

export default ThemeSlice.reducer