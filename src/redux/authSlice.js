import { createSlice } from '@reduxjs/toolkit';
import { api } from 'services/contacts-api';

const initialState = {
  user: { name: null, email: null },
  isLoggedIn: false,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addMatcher(api.endpoints.signup.matchFulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addMatcher(api.endpoints.login.matchFulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addMatcher(api.endpoints.logout.matchFulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addMatcher(
        api.endpoints.refresh.matchFulfilled,
        (state, { payload }) => {
          state.user = payload;
          state.isLoggedIn = true;
        }
      );
  },
});

export default authSlice.reducer;

export const authSelectors = {
  getIsLoggedIn: state => state.auth.isLoggedIn,
  getUserName: state => state.auth.user.name,
  getUserMail: state => state.auth.user.email,
  getToken: state => state.auth.token,
};
