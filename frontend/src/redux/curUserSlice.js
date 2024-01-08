import { createSlice } from '@reduxjs/toolkit'

export const curUserSlice = createSlice({
  name: 'user',
  initialState: {
    curUser: ''
  },
  reducers: {
    setUser: (state, action) => {
      state.curUser = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUser } = curUserSlice.actions;

export default curUserSlice.reducer