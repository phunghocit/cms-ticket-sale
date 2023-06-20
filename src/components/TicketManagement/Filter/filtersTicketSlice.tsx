import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "filterticket",
  initialState: {
    date: [],
    status: [],
    gate: [],
  },
  reducers: {
    dateFilterChange: (state, action) => {
      console.log(action.payload);

      state.date = action.payload;
      console.log(state.date);
    },
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    },
    gateFilterChange: (state, action) => {
      // mutation || IMMER
      state.gate = action.payload;
    },
  },
});
