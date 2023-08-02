import { createSlice } from '@reduxjs/toolkit';

export const locationsSlice = createSlice({
  name: 'locations',
  initialState: [],
  reducers: {
    addLocations(state, action) {
      console.log(action.payload);
    },
  },
});

export const { addLocations } = locationsSlice.actions;
export default locationsSlice.reducer;
