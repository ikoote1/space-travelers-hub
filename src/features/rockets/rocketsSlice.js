import { createSlice } from '@reduxjs/toolkit';
import rocketStore from '../../components/rocketStore';

const url = `https://api.spacexdata.com/v4/rockets`

export const getRockets = createAsyncThunk("rocket/getRockets",
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
      rocketStore,
      isLoading: true,
    },
  },
);

export default rocketsSlice.reducer;
