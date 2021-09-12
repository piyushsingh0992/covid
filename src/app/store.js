import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../container/home/newsSlice";
import casesReducer from "../container/home/casesSlice";
import authReducer from "../container/login/authSlice";
export const store = configureStore({
  reducer: {
    news: newsReducer,
    cases: casesReducer,
    auth: authReducer,
  },
});
