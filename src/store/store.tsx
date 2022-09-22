import { combineReducers, configureStore } from '@reduxjs/toolkit'
import dataReducer from '../features/dataSlice'

const reducers = combineReducers({

    dataReducer,
    // otherReducer

})

export default configureStore({
    reducer: reducers,
})