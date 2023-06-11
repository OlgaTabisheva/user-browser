import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  token: '',
  isSignIn: false,
};

const tokenSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    tokenFetched(state, action) {
      state.token = action.payload;
      localStorage.setItem('JWT', state.token.access_token);
      state.isSignIn = true
    },
    logOut(state, action) {
      state.token = '';
      localStorage.removeItem('JWT');
      state.isSignIn = false
    },
  }
});
export const {tokenFetched, logOut} = tokenSlice.actions;
export default tokenSlice.reducer;