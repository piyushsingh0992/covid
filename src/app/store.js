import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../container/home/newsSlice";
import casesReducer from "../container/home/casesSlice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    cases: casesReducer,
  },
});
