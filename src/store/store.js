import {configureStore} from '@reduxjs/toolkit';
import usersSlice from "./slices/userSlice";
import tokenSlice from "./slices/tokenSlice";
import likeSlice from "./slices/likeSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    token: tokenSlice,
    likes: likeSlice,
  },
});

