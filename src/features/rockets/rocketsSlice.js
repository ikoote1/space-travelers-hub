import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v4/rockets';

export const getRockets = createAsyncThunk('rocket/getRockets',
  async () => {
    try {
      const resp = await axios.get(url);
      console.log(resp.data);
      return resp.data;
    } catch (error) {
      return error;
    }
  });

const rocketsSlice = createSlice(
  {
    name: 'rocket',
    initialState: {
      rocketStore: [],
      isLoading: true,
    },
    extraReducers: (builder) => {
      builder
        .addCase(getRockets.pending, (state) => ({
          ...state,
          isLoading: true,
        }))
        .addCase(getRockets.fulfilled, (state, action) => (
          {
            ...state,
            isLoading: false,
            rocketStore: action.payload,
          }))
        .addCase(getRockets.rejected, (state) => ({
          ...state,
          isLoading: false,
          error: 'state error',
        }));
    },
  },
);

export default rocketsSlice.reducer;
