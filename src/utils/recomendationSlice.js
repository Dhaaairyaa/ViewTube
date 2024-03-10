import { createSlice } from "@reduxjs/toolkit";

const recomendationSlice = createSlice({
  name: "recomendationSlice",
  initialState: {
    showrecomendation: false,
  },
  reducers: {
    toggleRecomendation: (state) => {
      state.showrecomendation = true;
    },
    closeRecomendation: (state) => {
      state.showrecomendation = false;
    },
  },
});
export const { toggleRecomendation, closeRecomendation } =
  recomendationSlice.actions;
export default recomendationSlice.reducer;
