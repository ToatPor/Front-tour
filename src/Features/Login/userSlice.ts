import { createSlice } from "@reduxjs/toolkit";

const initialStateAccount = {
  userName: "",
  photo: "",
};
const userSlice = createSlice({
  name: "user",
  initialState: initialStateAccount,
  reducers: {
    // userLogin: {
    //   prepare(name: string, photo: string) {
    //     return { payload: { name, photo } };
    //   },
    //   reducer(state, action) {
    //     state.userName = action.payload.name;
    //     state.photo = action.payload.photo;
    //   },
    // },
    userLogin(state, action) {
      state.userName = action.payload.name;
    },
  },
});

export const { userLogin } = userSlice.actions;
export default userSlice.reducer;
