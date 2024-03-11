import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import recomendationSlice from "./recomendationSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    searchRecomendation: recomendationSlice,
    search: searchSlice,
  },
});
export default store;
