import { RootState } from "./../../store";
import authApi from "@/services/auth.service";
import { LoginResponse } from "@/services/dtos/User.dto";
import { createSlice } from "@reduxjs/toolkit";

type AuthState = LoginResponse & {};

const initialState: AuthState = {
  refreshToken: "",
  accessToken: "",
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearAuth: (state) => {
      state.user = null;
      state.accessToken = "";
      state.refreshToken = "";
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, action) => {
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
      }
    );
  },
});

export const UserSelector = (state: RootState) => state.auth.user;
export const authAction = authSlice.actions;
export default authSlice.reducer;
