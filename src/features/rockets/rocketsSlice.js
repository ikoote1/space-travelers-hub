import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v4/rockets';

export const getRockets = createAsyncThunk('rocket/getRockets',
  async (_, { rejectWithValue }) => {
    try {
      const resp = await axios.get(url);
      const rockets = resp.data.map((rocket) => ({
        ...rocket,
        reserved: false,
      }));
      return rockets;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  });


const rocketsSlice = createSlice(
  {
    name: 'rocket',
    initialState: {
      rocketStore: [],
      isLoading: true,
    },
    reducers: {
      reserveRockets: (state, action) => {
        const newrockets = (state.rocketStore.map((rocket) => {
          if (rocket.id !== action.payload) return rocket;
          return { ...rocket, reserved: true };
        }));
        return ({
          ...state,
          rocketStore: newrockets,
        });
      },
      cancelRockets: (state, action) => {
        const newrockets = (state.rocketStore.map((rocket) => {
          if (rocket.id !== action.payload) return rocket;
          return { ...rocket, reserved: false };
        }));
        return ({
          ...state,
          rocketStore: newrockets,
        });
      },
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

export const { reserveRockets, cancelRockets } = rocketsSlice.actions;

export default rocketsSlice.reducer;
