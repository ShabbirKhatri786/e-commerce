import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",  // Initial query is empty
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.query = action.payload; // Set search query in state
    },
  },
});

export const { setSearchQuery } = searchSlice.actions;

export default searchSlice.reducer;
