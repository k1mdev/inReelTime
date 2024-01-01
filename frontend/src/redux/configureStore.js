import { configureStore } from '@reduxjs/toolkit'
import dateReducer from '../redux/selectedDateSlice'
import monthYearReducer from '../redux/selectedMonthYearSlice'

export default configureStore({
  reducer: {
    date: dateReducer,
    monthYear: monthYearReducer
  }
})