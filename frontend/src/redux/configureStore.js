import { configureStore } from '@reduxjs/toolkit'
import dateReducer from '../redux/selectedDateSlice'
import monthYearReducer from '../redux/selectedMonthYearSlice'
import userReducer from '../redux/curUserSlice'
export default configureStore({
  reducer: {
    date: dateReducer,
    monthYear: monthYearReducer,
    user: userReducer
  }
})