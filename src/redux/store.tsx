import { configureStore } from "@reduxjs/toolkit";
import TicketSlide from "../components/TicketManagement/TicketSlide";
import ServicePackSlide from "../components/ServicePack/ServicePackSlide";
import filtersSlice from "../components/TicketCheck/Filters/filtersSlice";
import filtersComponentSlide from "../components/filtersComponentSlide";
import filtersTicketSlice from "../components/TicketManagement/Filter/filtersTicketSlice";

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    filterticket: filtersTicketSlice.reducer,
    filtersComponent: filtersComponentSlide.reducer,
    ticketList: TicketSlide.reducer,
    servicepacklist: ServicePackSlide.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
