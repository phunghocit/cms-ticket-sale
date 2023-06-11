// const initState = {
//   search: '',
//   status: 'All',
//   priorities: [],
// };

// const filtersReducer = (state = initState, action) => {
//   switch (action.type) {
//     case 'filters/searchFilterChange':
//       return {
//         ...state,
//         search: action.payload,
//       };

//     case 'filters/statusFilterChange':
//       return {
//         ...state,
//         status: action.payload
//       }

//     case 'filters/prioritiesFilterChange':
//       return {
//         ...state,
//         priorities: action.payload
//       }
//     default:
//       return state;
//   }
// };

// export default filtersReducer;

import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
  name: 'filters',
  initialState: {
    search: '',
    status: 'All',
    typeticket: 0,
  },
  reducers: {
    searchFilterChange: (state, action) => {
      // mutation || IMMER
      state.search = action.payload;
    },
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    },
    typeFilterChange: (state, action) => {
      state.typeticket = action.payload;
    },
  },
});

