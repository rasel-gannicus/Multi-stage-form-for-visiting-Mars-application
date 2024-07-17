import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
};

const pageRoutingSlice = createSlice({
  name: "pageRouting",
  initialState,
  reducers: {
    goToPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { goToPage } = pageRoutingSlice.actions;
export default pageRoutingSlice.reducer;
