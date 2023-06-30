import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import { message } from "antd";
import { CONVERT } from "../convertDate";

const TicketSlide = createSlice({
  name: "ticketList",
  initialState: { status: "idle", tickets: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        console.log({ action });
        state.tickets = action.payload;
        state.status = "idle";
      });
  },
});

export const fetchTickets = createAsyncThunk(
  "tickets/fetchTickets",
  async (name: string) => {
    const docRef = collection(db, name); //tra ve collection
    const res = await getDocs(docRef);
    let newticket: any = [];
    res.forEach(async (doc) => {
      newticket.push({ ...doc.data(), ticketId: doc.id });
      // console.log(doc.id, " => ", doc.data());
      // console.log(newticket);
    });
    const data = newticket;
    // console.log(data);
    return data;
  }
);
export const editTickets = createAsyncThunk(
  "ticketList/editTickets",
  async (data: any) => {
    console.log(data.deadline, data.TicketId);

    const res = await updateDoc(doc(db, "tickets", `${data.TicketId}`), {
      deadline: data.deadline,
    });
    console.log(res);

    return res;
  }
);
export const filterTicket = createAsyncThunk(
  "ticketList/filterTicket",
  async (data: any) => {
    console.log(data.deadline, data.TicketId);

    const res = await updateDoc(doc(db, "tickets", `${data.TicketId}`), {
      deadline: CONVERT(data.deadline),
    });
    console.log(res);

    return res;
  }
);

export default TicketSlide;
