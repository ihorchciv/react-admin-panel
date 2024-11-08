import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    data: [
      {
        id: "1",
        name: "John",
        password: "12345",
        email: "john@mail.com",
      },
      {
        id: "2",
        name: "Jack",
        password: "67890",
        email: "jack@mail.com",
      },
      {
        id: "3",
        name: "Simon",
        password: "346712345",
        email: "simon@mail.com",
      },
      {
        id: "4",
        name: "Limon",
        password: "345gwer5",
        email: "limonimo@mail.com",
      },
      {
        id: "5",
        name: "1",
        password: "1",
        email: "1",
      },
    ],
  },
  reducers: {
    removeUser: (state, action) => {
      state.data.splice(action.payload, 1);
    },

    editUser: (state, action) => {
      let currentUserIdx = state.data.findIndex(
        (user) => user.id === action.payload.id
      );
      state.data[currentUserIdx] = action.payload;
    },

    addUser: (state, action) => {
      state.data.push({ ...action.payload, id: uuidv4() });
    },
  },
});

export const { removeUser, editUser, addUser } = userSlice.actions;
export const selectAllUsers = (state) => state.users.data;
export default userSlice.reducer;
