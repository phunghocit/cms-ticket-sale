import { createSelector } from '@reduxjs/toolkit';

import React from 'react'
export const ticketListSelector = (state:any) => state.ticketList.tickets;
export const todosRemainingSelector = createSelector(
  ticketListSelector,(ticketList) => {
    return ticketList
  }

);