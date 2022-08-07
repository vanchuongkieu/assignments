import { RootState } from "./../../store";
import authApi from "@/services/auth.service";
import { LoginResponse } from "@/services/dtos/User.dto";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = LoginResponse & {
  authenticated: boolean;
};

const initialState: AuthState = {
  refreshToken: "",
  accessToken: "",
  user: null,
  authenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearAuth: (state) => {
      state.user = null;
      state.accessToken = "";
      state.refreshToken = "";
      state.authenticated = false;
    },
    authenticated: (state, action: PayloadAction<boolean>) => {
      state.authenticated = action.payload;
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
export const AuthenticatedSelector = (state: RootState) =>
  state.auth.authenticated;
export const authAction = authSlice.actions;
export default authSlice.reducer;
