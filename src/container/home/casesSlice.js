import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { current } from "immer";
import axios from "axios";
import { position } from "../../assets/position";
export let getCases = createAsyncThunk(
  "cases/getCases",
  async (dummy, { fulfillWithValue, rejectWithValue }) => {
    try {
      let response = await axios.get("https://data.covid19india.org/data.json");
      let casesArray = response.data.statewise;
      casesArray[0].state = "India";
      casesArray = casesArray
        .map((item) => {
          item.position = position[item.statecode];
          return item;
        })
        .filter((item) => {
          return item.statecode !== "UN";
        });
      return fulfillWithValue({ casesArray });
    } catch (error) {}
    rejectWithValue();
  }
);

export const casesSlice = createSlice({
  name: "cases",
  initialState: {
    status: "idle",
    message: null,
    casesArray: [],
  },
  reducers: {},
  extraReducers: {
    [getCases.pending]: (state) => {
      state.status = "loading";
    },
    [getCases.fulfilled]: (state, action) => {
      state.casesArray = action.payload.casesArray;
      state.status = "fullfilled";
    },
    [getCases.rejected]: (state, action) => {
      state.message = action.payload.message;
      state.status = "rejected";
    },
  },
});

export const {} = casesSlice.actions;

export default casesSlice.reducer;
