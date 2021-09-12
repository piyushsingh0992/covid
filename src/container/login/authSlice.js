import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiCall } from "../../apiCall";
import { current } from "immer";

export let signingUp = createAsyncThunk(
  "auth/signingUp",
  async (signUpDetails, { fulfillWithValue, rejectWithValue }) => {
    let response = await apiCall("POST", "auth/create", signUpDetails);

    if (response.success) {
      return fulfillWithValue(response);
    } else {
      return rejectWithValue(response);
    }
  }
);

export let signingIn = createAsyncThunk(
  "auth/signingIn",
  async (signInDetails, { fulfillWithValue, rejectWithValue }) => {
    let response = await apiCall("POST", "auth/", signInDetails);

    if (response.success) {
      return fulfillWithValue(response);
    } else {
      return rejectWithValue(response);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "idle",
    message: null,
    token: null,
    userDetails: {},
  },
  reducers: {
    resetauthSlice: (state) => {
      state = {
        status: "idle",
        message: null,
        token: null,
        userDetails: {},
      };
    },
  },
  extraReducers: {
    [signingUp.pending]: (state) => {
      state.status = "loading";
    },
    [signingUp.fulfilled]: (state, action) => {
      state.status = "fullfilled";
      state.message = action.payload.message;
    },
    [signingUp.rejected]: (state, action) => {
      state.status = "rejected";
      state.message = action.payload.message;
    },

    [signingIn.pending]: (state) => {
      state.status = "loading";
    },
    [signingIn.fulfilled]: (state, action) => {
      state.status = "fullfilled";
      state.message = action.payload.message;
      state.token = action.payload.data.token;
      state.userDetails = action.payload.data.userDetails;
    },
    [signingIn.rejected]: (state, action) => {
      state.status = "rejected";
      state.message = action.payload.message;
    },
  },
});

export const { resetauthSlice } = authSlice.actions;

export default authSlice.reducer;
