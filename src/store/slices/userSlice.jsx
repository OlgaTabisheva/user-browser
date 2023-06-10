import {createSlice, current} from "@reduxjs/toolkit";

const addUsersCount = 4;
const InitialUsersCount = 8;
const initialState = {
  users: [],
  viewUsers: [],
  res: 'none',
  viewCounter: 0
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    usersFetched(state, action) {
      state.users = action.payload;
      state.viewUsers = action.payload.slice(0, InitialUsersCount);
      state.viewCounter = InitialUsersCount;
      state.res = "success";
    },
    addMoreUsers(state, action) {
      if (state.viewCounter <= state.users.length) {
        state.viewUsers = state.viewUsers.concat(state.users.slice(state.viewCounter, state.viewCounter + addUsersCount));
        state.viewCounter += addUsersCount
      }
      state.res = "success";
    },
    setError(state) {
      state.res = "failed";
    },
  }
});
export const {usersFetched, setError, addMoreUsers} = usersSlice.actions;
export default usersSlice.reducer;