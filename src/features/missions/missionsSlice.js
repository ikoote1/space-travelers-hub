import { createSlice } from '@reduxjs/toolkit';

const missionsSlice = createSlice(
  {
    name: 'missions',
    initialState: {
      missionStore: [],
    },
  },
);

export default missionsSlice.reducer;
