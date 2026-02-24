import { createSlice } from "@reduxjs/toolkit";
import reducer from "./movieListSlice";

const savedUser = JSON.parse(localStorage.getItem("user"));

export const userSlice = createSlice({
  name: "user",

  initialState: {
    isLoggedIn: !!savedUser,
    userInfo: savedUser || null,
  },

  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userInfo = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userInfo = null;
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
