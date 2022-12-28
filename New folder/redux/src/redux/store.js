import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./_couter"
const store = configureStore({
    reducer: {
        counterReducer,
    }
  })

  export default store;