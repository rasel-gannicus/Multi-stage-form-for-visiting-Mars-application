import { createSlice } from "@reduxjs/toolkit";

export interface TCurrentPage {
  currentPage: number | string | null | undefined;
}

const initialState: TCurrentPage = {
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
