import {configureStore} from '@reduxjs/toolkit';
import usersSlice from "./slices/userSlice";
import tokenSlice from "./slices/tokenSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    token: tokenSlice
  },
});

