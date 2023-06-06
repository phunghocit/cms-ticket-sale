import { createSelector } from '@reduxjs/toolkit';

import React from 'react'
export const ticketListSelector = (state:any) => state.ticketList.tickets;
export const servicePackListSelector = (state:any) => state.servicepacklist.servicepacks;
export const ticketsRemainingSelector = createSelector(
  ticketListSelector,(ticketList:any) => {
    return ticketList
  },
);
export const servicepackRemainingSelector = createSelector(
  servicePackListSelector,(servicepacklist:any) => {
    return servicepacklist
  }
);