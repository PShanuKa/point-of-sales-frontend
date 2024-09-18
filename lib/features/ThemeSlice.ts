import { createSlice } from '@reduxjs/toolkit'

export interface ThemeState {
  openHorizontalNav: boolean
  openMobileNav: boolean
}

const initialState: ThemeState = {
  openHorizontalNav: false,
  openMobileNav: false
}

export const ThemeSlice = createSlice({
  name: 'Theme',
  initialState,
  reducers: {
    horizontalToggle: (state) => {
      state.openHorizontalNav = !state.openHorizontalNav
    },
    mobileNavToggle: (state) => {
      state.openMobileNav = !state.openMobileNav
    },
  },
})


export const { horizontalToggle,mobileNavToggle } = ThemeSlice.actions

export default ThemeSlice.reducer