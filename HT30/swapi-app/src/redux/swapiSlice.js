import { createSlice } from '@reduxjs/toolkit';
import { fetchSwapiData } from './swapiThunks';

const swapiSlice = createSlice({
  name: 'swapi',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearData: (state) => {
      state.data = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSwapiData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSwapiData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchSwapiData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearData } = swapiSlice.actions;

export default swapiSlice.reducer;
