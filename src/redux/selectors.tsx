import { createSelector } from "@reduxjs/toolkit";

import React from "react";
import { CONVERT } from "../components/convertDate";
import { elements } from "chart.js";
interface ticket {
  code: string;
  datesell: string;
  dateused: string;
  deadline: string;
  gate: number;
  id: string;
  nameevent: string;
  statuscheck: boolean;
  type: string;
}
//data tickets
export const ticketListSelector = (state: any) => state.ticketList.tickets;

//filter all coponent by number ticket
export const searchComponentSelector = (state: any) =>
  state.filtersComponent.search;
//check ticket management
export const dateSelector = (state: any) => state.filterticket.date;
export const statusSelector = (state: any) => state.filterticket.status;
export const gateSelector = (state: any) => state.filterticket.gate;

//check ticket
export const searchNameSelector = (state: any) => state.filters.searchName;
export const filterStatusSelector = (state: any) => state.filters.status;
export const filterDateSelector = (state: any) => state.filters.date;
//servicePack
export const servicePackListSelector = (state: any) =>
  state.servicepacklist.servicepacks;
  export const searchServiceSelector = (state: any) =>
  state.servicepacklist.searchName;
export const ticketsRemainingSelector = createSelector(
  ticketListSelector,
  searchComponentSelector,
  dateSelector,
  statusSelector,
  gateSelector,
  (ticketList: any, searchText: any, date: any, status: any, gate: any) => {
    console.log(status);
    ticketList.filter((ticket: any) => {
      console.log(status.length ? status.includes(ticket.statusused) : ticket);
    });
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
    return ticketList.filter((ticket: any) => {
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
    ticketList: any,
    searchText: any,
    searchName: any,
    status: any,
    date: any
  ) => {
    console.log(status);
    console.log(searchName);
    return ticketList.filter((ticket: any) => {
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
  (servicepacklist: any,searchName:any) => {
    return servicepacklist.filter((service: any) => {
      return service.code.includes(searchName)
    })
  }
);
