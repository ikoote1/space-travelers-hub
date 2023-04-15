import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
    joinedMissions: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => ({ ...state, status: 'loading' }))
      .addCase(fetchMissions.fulfilled, (state, action) => ({ ...state, status: 'succeeded', missions: action.payload }))
      .addCase(fetchMissions.rejected, (state, action) => ({ ...state, status: 'failed', error: action.error.message }));
  },

});

export default missionsSlice.reducer;
