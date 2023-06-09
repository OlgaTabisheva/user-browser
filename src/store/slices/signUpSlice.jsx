import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  signUp: [],
  res: 'none',
};

const usersSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    setSignUp(state, action) {
      state.users = action.payload;
      state.res = "success";
    },
    setErrorSignUp(state) {
      state.res = "failed";
    },
  }
});
export const {setSignUp, setErrorSignUp} = usersSlice.actions;
export default usersSlice.reducer;