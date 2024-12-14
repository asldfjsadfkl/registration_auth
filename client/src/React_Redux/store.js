import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Reducers'
import listReducer from './listReducer'
export const store = configureStore({
    reducer: {
        user: userReducer,
        list: listReducer
    }

})


export default store