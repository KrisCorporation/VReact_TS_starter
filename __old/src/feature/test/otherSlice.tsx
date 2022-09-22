import { createSlice } from "@reduxjs/toolkit";

type selectedItemType = {
  id: string;
  nodeId: number;
  itemId: number;
};

export const otherSlice = createSlice({
  name: "other",
  initialState: {
    storeOther: {
      selectedItem: [],
      itemOffset:[]
    },
  },
  reducers: {
    initOther: (state, actions) => {
      state.storeOther = actions.payload;
    },
    addOther: (state, actions) => {
      state.storeOther.selectedItem.push(actions.payload);
    },
    removeOther: (state, actions) => {
      state.storeOther.selectedItem = state.storeOther.selectedItem.filter(
        (item:any) => item.id != actions.payload.id
      );
    },
    initOffset: (state,actions)=>{
      state.storeOther.itemOffset.push(actions.payload)
    }
  },
});

export const { initOffset, initOther, addOther, removeOther } = otherSlice.actions;
export default otherSlice.reducer;
