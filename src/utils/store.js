import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import recomendationSlice from "./recomendationSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    searchRecomendation: recomendationSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});
export default store;
