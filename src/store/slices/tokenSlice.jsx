import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  token: [],
  res: 'none',
};

const tokenSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    tokenFetched(state, action) {
      state.token = action.payload;
      localStorage.setItem('JWT', state.token.access_token);
      state.res = "success";
    },
    setErrorToken(state) {
      state.res = "failed";
    },
  }
});
export const {tokenFetched, setErrorToken} = tokenSlice.actions;
export default tokenSlice.reducer;