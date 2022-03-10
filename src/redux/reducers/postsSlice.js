import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    value: 0,
  },
  reducers: {
    setPosts: (state) => {
      state.value += 1;
    },
  },
});

export const { setPosts } = postsSlice.actions;

export default postsSlice.reducer;
