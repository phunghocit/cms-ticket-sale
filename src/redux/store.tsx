import { configureStore } from '@reduxjs/toolkit';
import TicketSlide from '../components/TicketManagement/TicketSlide';
import ServicePackSlide from '../components/ServicePack/ServicePackSlide';


const store = configureStore({
  reducer: {
    // filters: filtersSlice.reducer,
    ticketList: TicketSlide.reducer,
    servicepacklist:ServicePackSlide.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch