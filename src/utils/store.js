import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import recomendationSlice from "./recomendationSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    searchRecomendation: recomendationSlice,
  },
});
export default store;
