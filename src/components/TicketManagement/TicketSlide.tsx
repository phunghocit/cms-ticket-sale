import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';
import { message } from 'antd';

const TicketSlide = createSlice({
  name: 'ticketList',
  initialState: { status: 'idle', tickets: [] },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        console.log({ action });
        state.tickets = action.payload;
        state.status = 'idle';
      })

  },
});

export const fetchTickets= createAsyncThunk('tickets/fetchTickets', async () => {
  const docRef = collection(db, "tickets"); //tra ve collection
  const res = await getDocs(docRef);
  let newticket: any = [];
  res.forEach( async (doc) => {
      newticket.push({...doc.data()}); 
      // console.log(doc.id, " => ", doc.data());
      // console.log(newticket);
    });
  const data = newticket;
  // console.log(data);
  return data;
});

export default TicketSlide;

