import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSwapiData = createAsyncThunk('swapi/fetchSwapiData', async (url, { rejectWithValue }) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    return await response.json();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
