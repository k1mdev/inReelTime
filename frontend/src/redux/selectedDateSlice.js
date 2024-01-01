import { createSlice } from '@reduxjs/toolkit'

export const selectedDateSlice = createSlice({
  name: 'date',
  initialState: {
    selectedDate: ''
  },
  reducers: {
    setDate: (state, action) => {
      state.selectedDate = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setDate } = selectedDateSlice.actions;

export default selectedDateSlice.reducer