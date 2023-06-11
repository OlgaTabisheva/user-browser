import {createSlice, current} from "@reduxjs/toolkit";

const initialState = {
  likes: [],
};
const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    setLike(state, action) {
      if (!state.likes.includes(action.payload)) {
        state.likes = [...state.likes, action.payload];
      } else {
        state.likes = state.likes.filter((card) => (card !== action.payload))
      }
      localStorage.setItem('likes', JSON.stringify(state.likes))
      console.log(state.likes)
    },
    loadLikes(state, action){
      const loadLikes = localStorage.getItem('likes')
      if (loadLikes) {
        state.likes = JSON.parse(loadLikes);
      }
    },
  }
});
export const {setLike, loadLikes } = likeSlice.actions;
export default likeSlice.reducer;