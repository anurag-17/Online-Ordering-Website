"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ad_token: null,
  isLoggedIn : true ,
  chef_auth: null,
  isChefLoggedIn : true ,
  ad_details: null,
  chef_details: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.ad_token = action.payload;
      state.isLoggedIn = true;
      
    },
    removeToken: (state, action) => {
      state.ad_token = null;
      state.isLoggedIn = false;
    },
    setChefToken: (state, action) => {
      state.chef_auth = action.payload;
      state.isChefLoggedIn = true;
      
    },
    removeChefToken: (state, action) => {
      state.chef_auth = null;
      state.isChefLoggedIn = false;
    },
    adDetails : (state, action) => {
        state.ad_details = action.payload;
    },
    rem_AdDetails: (state, action) => {
      state.ad_details = null;
    },
    chefDetails : (state, action) => {
        state.chef_details = action.payload;
    },
    rem_chefDetails: (state, action) => {
      state.chef_details = null;
    },
  },
});

export const { setToken, removeToken, adDetails,rem_AdDetails,setChefToken,removeChefToken ,chefDetails,rem_chefDetails} = authSlice.actions;

export default authSlice.reducer;
