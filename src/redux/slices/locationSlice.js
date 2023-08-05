import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coord: null,
};

export const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    addLocations(state, action) {
      state.coord = action.payload;
    },
  },
});

export const { addLocations } = locationsSlice.actions;
export default locationsSlice.reducer;
