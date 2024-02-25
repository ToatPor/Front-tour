import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Features/Login/userSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
