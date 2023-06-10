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
    //   .addCase(addNewTicketPack.fulfilled, (state:any, action:any) => {
    //     state.tickets.push( action.payload);
    //   })
  },
});

export const fetchTickets= createAsyncThunk('tickets/fetchTickets', async () => {
  const docRef = collection(db, "TicketManagement"); //tra ve collection
  const res = await getDocs(docRef);
  let newticket: any = [];
  let count = 1;
  res.forEach( async (doc) => {
      newticket.push({...doc.data(),stt:count++}); 
      console.log(doc.id, " => ", doc.data());
      console.log(newticket);
    });
  const data = newticket;
  console.log(data);
  return data;
});

// export const addNewTicketPack = createAsyncThunk(
//     'tickets/addNewTicketPack',
//     async (data:any) => {
//     // console.log(data);
//     await addDoc(collection(db, "ticketpack"), {
//       code: data.code,
//       name: data.name,
//       time: data.time,
//       deadline: data.deadline,
//       status: data.status,
//       timesell: data.timesell,
//       timeused: data.timeused,
//     })
//       console.log({ data });
//       return data.tickets;
//     }
//   );
/*
  => todos/fetchTodos/pending
  => todos/fetchTodos/fullfilled
  => todos/fetchTodos/rejected
*/

export default TicketSlide;

// action (object) va action creators () => { return action }
// thunk action (function) va thunk action creators () => { return thunk action  }

// export function addTodos(todo) { // thunk function - thunk action
//   return function addTodosThunk(dispatch, getState) {
//     console.log('[addTodosThunk]', getState());
//     console.log({todo});
//     // custom
//     todo.name = 'Tung Test Updated';
//     dispatch(todosSlice.actions.addTodo(todo));

//     console.log('[addTodosThunk after]', getState())
//   }
// }