import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SpellsState {
  value: number;
  listFavorite: string[];
}

const initialState: SpellsState = {
  value: 0,
  listFavorite: []
}

export const spellsSlice = createSlice({
  name: 'spells',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    mutateFavorites: (state,  action: PayloadAction<string>) => {
      if(state.listFavorite.indexOf(action.payload) > -1) {
          state.listFavorite = [...state.listFavorite.filter(item => item !== action.payload)]
          // alert("Removed spell from Favorite list")
      } else {
        state.listFavorite.push(action.payload)
        state.listFavorite = [...state.listFavorite]
        // alert("Added spell into favorite list")
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, mutateFavorites } = spellsSlice.actions

export default spellsSlice.reducer