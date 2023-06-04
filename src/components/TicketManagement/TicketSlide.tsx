import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';

const TicketSlide = createSlice({
  name: 'ticketList',
  initialState: { status: 'idle', tickets: [] },
  reducers: {
    //     fetchTicket: (state:any, action:any) => {
    //   state.push(action.payload);
    // }, // action creators
    // IMMER
    // addTodo: (state, action) => {
    //   state.push(action.payload);
    // }, // action creators
    // toggleTodoStatus: (state, action) => {
    //   const currentTicket = state.find((ticket:any) => ticket.id === action.payload);
    //   if (currentTicket) {
    //     currentTicket.completed = !currentTicket.completed;
    //   }
    // },
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