import { combineReducers, configureStore } from '@reduxjs/toolkit'
import nodeReducer from '../feature/test/nodesSlice'


export default configureStore({
    reducer : nodeReducer
})