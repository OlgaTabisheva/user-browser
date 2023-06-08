import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';;

export const fetchUsers = createAsyncThunk(
  'fetchUsers',
    async () => {
    console.log("fetchUsers")
      const { data } = await axios.get(`https://63c98c0a904f040a9660965d.mockapi.io/users`, {
      });
      console.log(data)
      return data;
    },
);