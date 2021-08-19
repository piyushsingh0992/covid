import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { current } from "immer";
import axios from "axios";
export let getNews = createAsyncThunk(
  "news/getNews",
  async (keyword, { fulfillWithValue, rejectWithValue }) => {
    try {
      let response = await axios.get(
        `https://newsapi.org/v2/everything?q=${keyword}&apiKey=53d557883f7e47cf99e165c84f479033`
      );
      let newsArray = response.data.articles;
      return fulfillWithValue({ newsArray });
    } catch (error) {}
    rejectWithValue({ message: `No news Found for ${keyword}` });
  }
);

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    status: "idle",
    message: null,
    newsArray: [],
  },
  reducers: {},
  extraReducers: {
    [getNews.pending]: (state) => {
      state.status = "loading";
    },
    [getNews.fulfilled]: (state, action) => {
      state.newsArray = action.payload.newsArray;
      state.status = "fullfilled";
    },
    [getNews.rejected]: (state, action) => {
      state.message = action.payload.message;
      state.status = "rejected";
    },
  },
});

export const {} = newsSlice.actions;

export default newsSlice.reducer;
