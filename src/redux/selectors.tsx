import { createSelector } from '@reduxjs/toolkit';

import React from 'react'
export const searchComponentSelector = (state:any) => state.filtersComponent.search;
export const ticketListSelector = (state:any) => state.ticketList.tickets;
export const servicePackListSelector = (state:any) => state.servicepacklist.servicepacks;

export const searchNameSelector = (state:any) => state.filters.searchName;
export const filterStatusSelector = (state:any) => state.filters.status;
export const ticketsRemainingSelector = createSelector(
  ticketListSelector,
  searchComponentSelector,
  searchNameSelector,
  filterStatusSelector,
  (ticketList:any,searchText:any) => {
    // return ticketList.filter((ticket:any) => {
    //   if (status === 'All') {
    //     return  ticket.nameevent.includes(searchName) && ticket.type==typeticket && ticket.id.includes(searchText)
    //   }
    //   return (
    //     ticket.nameevent.includes(searchName) &&
    //     (status === 'Checked' ? ticket.statuscheck==true : ticket.statuscheck==false) && ticket.type ==typeticket && ticket.id.includes(searchText)
    //   );
    // });
    return ticketList.filter((ticket:any) => {
      return (
        ticket.id.includes(searchText)
      );
    });
  }
);
export const ticketsSelector = createSelector(
  ticketListSelector,
  searchComponentSelector,
  searchNameSelector,
  filterStatusSelector,
  (ticketList:any,searchText:any,searchName:any ,status:any) => {
    console.log(status);
    console.log(searchName);
    
    // return ticketList.filter((ticket:any) => {
    //   // return (
    //   //   // ticket.nameevent.includes(searchName)
    //   //   ticket.statuscheck==true
    //   // );
    // });
    return ticketList.filter((ticket:any) => {
      if (status === 'All') {
        return  ticket.nameevent.includes(searchName) && ticket.id.includes(searchText)
      }
      return (
        ticket.nameevent.includes(searchName) &&
        (status === 'Checked' ? ticket.statuscheck==true : ticket.statuscheck==false) &&  ticket.id.includes(searchText)
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
//         return ticket.nameevent.includes(searchText) 
//         // && ticket.type.includes(typeticket)
//       }

//       return (
//         ticket.nameevent.includes(searchText) && 
//         (status === 'Checked' ? ticket.statuscheck : !ticket.statuscheck) 
//         // ticket.type.includes(typeticket)
//       );
//     });
//   }
// );
// export const servicepackRemainingSelector = createSelector(
//   servicePackListSelector,(servicepacklist:any) => {
//     return servicepacklist
//   }
// );