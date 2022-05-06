import { createSlice } from "@reduxjs/toolkit";

const dataJsonplaceholderSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    rememberData: [],
    cellCountInOnePage: 10,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setrememberData: (state, action) => {
      state.rememberData = action.payload;
    },
  },
});

export const { setData, setrememberData } = dataJsonplaceholderSlice.actions;
export default dataJsonplaceholderSlice.reducer;
