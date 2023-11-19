import { createSlice } from '@reduxjs/toolkit';
import { fetchUser } from './userActions';


const initialState = {
  users: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      });
    builder.addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message
      });    
  },
})

export default usersSlice.reducer
