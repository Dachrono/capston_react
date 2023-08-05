import { configureStore } from '@reduxjs/toolkit';
import locationsSliceReducer from './slices/locationSlice';
import contentSliceReducer from './slices/contentSlice';

const store = configureStore({
  reducer: {
    locations: locationsSliceReducer,
    weather: contentSliceReducer,
  },
});

export default store;
