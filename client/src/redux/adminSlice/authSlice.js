"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  ad_details: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    removeToken: (state, action) => {
      state.token = null;
    },
    adDetails : (state, action) => {
        state.ad_details = action.payload;
    },
    rem_AdDetails: (state, action) => {
      state.ad_details = null;
    },
  },
});

export const { setToken, removeToken, adDetails,rem_AdDetails } = authSlice.actions;

export default authSlice.reducer;
