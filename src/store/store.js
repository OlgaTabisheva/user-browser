import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import usersSlice from "./slices/userSlice";
export const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});

