import { configureStore } from '@reduxjs/toolkit';
import TicketSlide from '../components/TicketManagement/TicketSlide';


const store = configureStore({
  reducer: {
    // filters: filtersSlice.reducer,
    ticketList: TicketSlide.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch