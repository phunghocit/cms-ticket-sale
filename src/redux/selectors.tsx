import { createSelector } from "@reduxjs/toolkit";

import React from "react";
import { CONVERT } from "../components/convertDate";
import { elements } from "chart.js";
import { RootState } from "./store";
import { servicepack, ticket } from "../components/interface";
//data tickets
export const ticketListSelector = (state: any) => state.ticketList.tickets ;
// state.ticketList.tickets
//filter all coponent by number ticket
export const searchComponentSelector = (state: RootState) =>
  state.filtersComponent.search;
//check ticket management
export const dateSelector = (state: RootState) => state.filterticket.date;
export const statusSelector = (state: RootState) => state.filterticket.status;
export const gateSelector = (state: RootState) => state.filterticket.gate;

//check ticket
export const searchNameSelector = (state: RootState) => state.filters.searchName;
export const filterStatusSelector = (state: RootState) => state.filters.status;
export const filterDateSelector = (state: RootState) => state.filters.date;
//servicePack
export const servicePackListSelector = (state: RootState) =>
  state.servicepacklist.servicepacks;
  export const searchServiceSelector = (state: RootState) =>
  state.servicepacklist.searchName;
export const ticketsRemainingSelector = createSelector(
  ticketListSelector,
  searchComponentSelector,
  dateSelector,
  statusSelector,
  gateSelector,
  (ticketList: never[], searchText: string, date: string[], status: string[], gate: string[]|any) => {
    // console.log(status);
    // ticketList.filter((ticket: ticket) => {
    //   console.log(status.length ? status.includes(ticket.statusused) : ticket);
    // });
    const checkStatusTicket = (item: ticket) => {
      const today = Date();
      if (item.dateused != "") {
        return "Đã sử dụng";
      } else if (
        item.dateused === "" &&
        CONVERT(item.deadline) < CONVERT(today)
      ) {
        return "Hết hạn";
      } else {
        return "Chưa sử dụng";
      }
    };
    const checkGateTicket = (item: ticket) => {
      if (item.gate === 1) {
        return "Cổng 1";
      }
      if (item.gate === 2) {
        return "Cổng 2";
      }
      if (item.gate === 3) {
        return "Cổng 3";
      }
      if (item.gate === 4) {
        return "Cổng 4";
      }
      if (item.gate === 5) {
        return "Cổng 5";
      }
    };
    return ticketList.filter((ticket: ticket) => {
      // console.log(ticket.statusused);

      return (
        // (status.length >0 ? check(status):true) &&
        (status.length ? status.includes(checkStatusTicket(ticket)) : true) &&
        (gate.length ? gate.includes(checkGateTicket(ticket)) : true) &&
        (date.length
          ? ticket.datesell >= date[0] && ticket.datesell <= date[1]
          : true) &&
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
  filterDateSelector,
  (
    ticketList: never[],
    searchText: string,
    searchName: string,
    status: string,
    date: never[]|any,
  ) => {
    console.log(status);
    console.log(searchName);
    return ticketList.filter((ticket: ticket) => {
      if (status === "All") {
        return (
          (date.length > 0
            ? ticket.dateused >= date[0] && ticket.dateused <= date[1]
            : ticket) &&
          ticket.nameevent.includes(searchName) &&
          ticket.id.includes(searchText)
        );
      }
      return (
        // ticket.nameevent.includes(searchName) &&
        (date.length > 0
          ? ticket.dateused >= date[0] && ticket.dateused <= date[1]
          : ticket) &&
        ticket.nameevent.includes(searchName) &&
        (status === "Checked"
          ? ticket.statuscheck == true
          : ticket.statuscheck == false) &&
        ticket.id.includes(searchText)
      );
    });
  }
);
export const servicepackRemainingSelector = createSelector(
  servicePackListSelector,
  searchServiceSelector,
  (servicepacklist: never[],searchName:string) => {
    return servicepacklist.filter((service: servicepack) => {
      return service.code.includes(searchName)
    })
  }
);
