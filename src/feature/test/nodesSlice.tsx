import { createSlice } from "@reduxjs/toolkit";

export const nodesSlice = createSlice({
    name: 'nodes', 
    initialState : {
        storeNodes : {}
    },
    reducers : {
        init : (state,actions) =>{
            state.storeNodes = actions.payload;
            console.log(actions.payload)
        },
        addPin: (state) =>{

        }
    }
})

export const {init, addPin} = nodesSlice.actions
export default nodesSlice.reducer