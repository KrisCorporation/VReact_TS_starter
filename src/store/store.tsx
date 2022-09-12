import { combineReducers, configureStore } from '@reduxjs/toolkit'
import nodeReducer from '../feature/test/nodesSlice'
import otherReducer from '../feature/test/otherSlice'


const reducers = combineReducers({

    nodeReducer,
    otherReducer

})

export default configureStore({
    reducer: reducers,
})