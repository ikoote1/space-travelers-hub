import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v4/rockets';

export const getRockets = createAsyncThunk('rocket/getRockets', async () => {
  try {
    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch (err) {
    return err;
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
