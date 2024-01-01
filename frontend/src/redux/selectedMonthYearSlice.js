import { createSlice } from '@reduxjs/toolkit'

export const selectedMonthYearSlice = createSlice({
  name: 'monthYear',
  initialState: {
    selectedMonthYear: ''
  },
  reducers: {
    setMonthYear: (state, action) => {
      state.selectedMonthYear = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setMonthYear } = selectedMonthYearSlice.actions;

export default selectedMonthYearSlice.reducer