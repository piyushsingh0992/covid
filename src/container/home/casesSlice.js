import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { current } from "immer";
import axios from "axios";
export let getCases = createAsyncThunk(
  "cases/getCases",
  async (dummy, { fulfillWithValue, rejectWithValue }) => {
    try {
      let response = await axios.get(
        "https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true"
      );
      const india = {
        activeCases: response.data.activeCases,
        newInfected: response.data.activeCasesNew,
        recovered: response.data.recovered,
        newRecovered: response.data.recoveredNew,
        totalInfected: response.data.totalCases,
        region: "India",
      };
      let casesArray = response.data.regionData;
      casesArray.unshift(india);
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
