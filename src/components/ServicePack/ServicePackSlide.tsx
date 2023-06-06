import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';
import { message } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { ramdomcode } from '../randomcode';
const ServicePackSlide = createSlice({
  name: 'servicepacklist',
  initialState: { status: 'idle', servicepacks: [] },
  reducers: {
      fetchServicePack: (state:any, action:any) => {
      state.push(action.payload);
    }, // action creators

    addServicePack: (state:any, action:any) => {
      state.push(action.payload);
    }, // action creators
    // toggleTodoStatus: (state, action) => {
    //   const currentTicket = state.find((ticket:any) => ticket.id === action.payload);
    //   if (currentTicket) {
    //     currentTicket.completed = !currentTicket.completed;
    //   }
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchServicePack.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchServicePack.fulfilled, (state, action) => {
        console.log({ action });
        state.servicepacks = action.payload;
        state.status = 'idle';
      })
      .addCase(addNewServicePack.fulfilled, (state:any, action:any) => {
        // state.servicepacks.push( action.payload);
      })
  },
});

export const fetchServicePack= createAsyncThunk('servicepacks/fetchServicePack', async () => {
  const docRef = collection(db, "servicepacks"); //tra ve collection
  const res = await getDocs(docRef);
  let newservicepack: any = [];
  let count = 1;
  res.forEach( async (doc) => {
      newservicepack.push({...doc.data(),stt:count++}); 
      console.log(doc.id, " => ", doc.data());
      console.log(newservicepack);
    });
  const data = newservicepack;
  console.log(data);
  return data;
});

export const addNewServicePack = createAsyncThunk(
    'servicepacks/addNewServicePack',
    async (data:any) => {
    console.log(`${data.deadlinetime.hour()}:${data.deadlinetime.minute()}:${data.deadlinetime.second()} `);
    await addDoc(collection(db, "servicepacks"), {             
      // code: uuidv4().slice(0, 12),
      code: ramdomcode(12),
      name: data.name,
      time: `${data.startdate.date()}/${data.startdate.month()}/${data.startdate.year()} ${data.starttime.hour()}:${data.starttime.minute()}:${data.starttime.second()}`,
      deadline: `${data.deadlinedate.date()}/${data.deadlinedate.month()}/${data.deadlinedate.year()} ${data.deadlinetime.hour()}:${data.deadlinetime.minute()}:${data.deadlinetime.second()}`,
      price: `${data.price} VNĐ`,
      pricecombo: `${data.pricecombo} VNĐ/${data.quantity} Vé`,
      status: data.status,
    })
      console.log({ data });
      // return data;
    }
  );
/*
  => todos/fetchTodos/pending
  => todos/fetchTodos/fullfilled
  => todos/fetchTodos/rejected
*/

export default ServicePackSlide;

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