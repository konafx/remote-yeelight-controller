import {createSlice} from '@reduxjs/toolkit'
import type { RootState } from 'store'

// Define a type for the slice state
interface AssassinState {
  value: boolean,
};

// Define the initial state using that type
const initialState: AssassinState = {
  value: false,
};

export const assassinSlice = createSlice({
  name: 'assassin',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
      activate: (state) => {
        state.value = true
      },
      deactivate: (state) => {
        state.value = false
      },
    },
});

export const { activate, deactivate } = assassinSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectActivenessAssassin = (state: RootState) => state.assassin.value

export default assassinSlice.reducer;

/*
 * TODO
 * - [ ] assassinがアクセス可能なdevice
 * - [ ] assassin自信の情報（名前など）
 * - [ ] assassinがアクセス可能なdeviceの状態
 *   - これはいらないか？別のsliceを作るべきか
 */
