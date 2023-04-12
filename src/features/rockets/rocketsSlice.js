import { createSlice } from '@reduxjs/toolkit';
import rocketStore from '../../components/rocketStore';

const rocketsSlice = createSlice(
  {
    name: 'rocket',
    initialState: {
      rocketStore,
    },
  },
);

export default rocketsSlice.reducer;
