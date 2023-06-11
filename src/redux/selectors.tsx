import { createSelector } from '@reduxjs/toolkit';

import React from 'react'
export const searchTextSelector = (state:any) => state.filters.search;

export const ticketListSelector = (state:any) => state.ticketList.tickets;
export const servicePackListSelector = (state:any) => state.servicepacklist.servicepacks;
export const ticketsRemainingSelector = createSelector(
  ticketListSelector,
  searchTextSelector,
  // (ticketList:any) => {
  //   return ticketList
  // }

  (ticketList:any,searchText:any) => {
    
    return ticketList.filter((ticket:any) => {
      return (
        ticket.id.includes(searchText)
      );
    });
  }
);
export const servicepackRemainingSelector = createSelector(
  servicePackListSelector,(servicepacklist:any) => {
    return servicepacklist
  }
);
// import { createSelector } from '@reduxjs/toolkit';

// import React from 'react'
// export const searchTextSelector = (state:any) => state.filters.search;
// export const filterStatusSelector = (state:any) => state.filters.status;
// export const filterTypeSelector = (state:any) => state.filters.typeticket;

// export const ticketListSelector = (state:any) => state.ticketList.tickets;
// export const servicePackListSelector = (state:any) => state.servicepacklist.servicepacks;
// export const ticketsRemainingSelector = createSelector(
//   ticketListSelector,
//   searchTextSelector,
//   filterTypeSelector,
//   filterStatusSelector,
//   // (ticketList:any) => {
//   //   return ticketList
//   // }

//   (ticketList:any,searchText:any,status:any,typeticket:number) => {
//     return ticketList.filter((ticket:any) => {
//       if (status === 'All') {
//         return ticket.nameevent.includes(searchText) && ticket.type.includes(typeticket)
//       }

//       return (
//         ticket.nameevent.includes(searchText) && 
//         (status === 'Checked' ? ticket.statuscheck : !ticket.statuscheck) &&
//         ticket.type.includes(typeticket)
//       );
//     });
//   }
// );
// export const servicepackRemainingSelector = createSelector(
//   servicePackListSelector,(servicepacklist:any) => {
//     return servicepacklist
//   }
// );