import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
import authReducer from "./auchSlice";

export default configureStore({
  reducer: {
    users: useReducer,
    auth: authReducer,
  },
});
