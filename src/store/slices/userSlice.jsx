import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  users: [],
  res: 'none',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    usersFetched(state, action) {
      state.users = action.payload;
      state.res = "success";
    },
    setError(state) {
      state.res = "failed";
    },
  }
});
export const {usersFetched, setError} = usersSlice.actions;
export default usersSlice.reducer;