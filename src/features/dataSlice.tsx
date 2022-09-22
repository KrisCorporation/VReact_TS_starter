import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    storeData: {},
  },
  reducers: {
    init: (state, actions) => {
      state.storeData = actions.payload;
    }
  },
});

export const { init} = dataSlice.actions;
export default dataSlice.reducer;