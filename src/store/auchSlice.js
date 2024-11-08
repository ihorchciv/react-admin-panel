import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    logIn: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { logIn } = authSlice.actions;
export const selectAuthUsers = (state) => state.auth.user;
export default authSlice.reducer;
