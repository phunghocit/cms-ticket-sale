import { createSlice } from "@reduxjs/toolkit";
export default createSlice({
  name: "filters",
  initialState: {
    searchName: "",
    status: "All",
    date: [],
  },
  reducers: {
    searchFilterChange: (state, action) => {
      // mutation || IMMER
      state.searchName = action.payload;
    },
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    },
    dateFilterChange: (state, action) => {
      state.date = action.payload;
    },
  },
});
