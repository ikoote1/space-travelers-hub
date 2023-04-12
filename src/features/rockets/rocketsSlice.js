import { createSlice } from '@reduxjs/toolkit';

const rocketsSlice = createSlice(
  {
    name: 'rocket',
    initialState: {
      rocketStore: [],
    },
  },
);

export default rocketsSlice.reducer;
