import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchWeather = createAsyncThunk('get/fetchWeater', async (data) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0]}&lon=${data[1]}&appid=51903752f2f3a2eaaa161c3edac60b3f`);
    return [response.data, data[2]];
  } catch (error) {
    return Promise.reject(error);
  }
});

const initialState = {
  weatherData: [],
  isLoading: false,
  error: null,
};

export const contentSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => ({
        ...state,
        isLoading: true,
      }))

      .addCase(fetchWeather.fulfilled, (state, action) => {
        const retData = {
          name: action.payload[1],
          sky: action.payload[0].weather[0].description,
          temp: action.payload[0].main,
        };
        state.isLoading = false;
        if (state.weatherData.length < 18) state.weatherData.push(retData);
      })
      .addCase(fetchWeather.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: 'Error',
      }));
  },
});

export default contentSlice.reducer;
