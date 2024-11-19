import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { getFromLocalStorage, saveToLocalStorage } from "./localStorage";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    data: getFromLocalStorage("users") || [
      {
        name: "1",
        password: "1",
        email: "1",
        id: "1",
      },
    ],
  },
  reducers: {
    removeUser: (state, action) => {
      state.data.splice(action.payload, 1);
      saveToLocalStorage("users", state.data);
    },

    editUser: (state, action) => {
      let currentUserIdx = state.data.findIndex(
        (user) => user.id === action.payload.id
      );
      if (currentUserIdx !== -1) {
        state.data[currentUserIdx] = action.payload;
        saveToLocalStorage("users", state.data);
      }
    },

    addUser: (state, action) => {
      const newUser = { ...action.payload, id: uuidv4() };
      state.data.push(newUser);
      saveToLocalStorage("users", state.data);
    },
  },
});

export const { removeUser, editUser, addUser } = userSlice.actions;
export const selectAllUsers = (state) => state.users.data;
export default userSlice.reducer;
