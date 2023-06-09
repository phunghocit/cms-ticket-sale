import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addDoc, collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';
import { message } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { ramdomcode } from '../randomcode';
const ServicePackSlide = createSlice({
  name: 'servicepacklist',
  initialState: { status: 'idle', servicepacks: [],service:[] },
  reducers: {
    //   fetchServicePack: (state:any, action:any) => {
    //   // state.push(action.payload);
    //   state.servicepacks = action.payload;
      
    // }, // action creators

    // addServicePack: (state:any, action:any) => {
    //   state.push(action.payload);
    // },
    // updateServicePack: (state:any, action:any) => {
    //   state.push(action.payload);
    // },
    // filterServicePack: (state:any, action:any) => {
    //   state.push(action.payload);


    // },
    
    // action creators
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
        state.servicepacks.push( action.payload);
      })
      .addCase(updateServicePack.fulfilled, (state:any, action:any) => {
        state.servicepacks.push( action.payload);
      })
      .addCase(filterServicePack.fulfilled, (state:any, action:any) => {
        state.service= action.payload;
      })
  },
});

export const fetchServicePack= createAsyncThunk('servicepacks/fetchServicePack', async () => {
  const docRef = collection(db, "servicepacks"); //tra ve collection
  const res = await getDocs(docRef);
  let newservicepack: any = [];
  let count = 1;
  res.forEach( async (doc) => {
      newservicepack.push({...doc.data(),id:doc.id,stt:count++}); 
      // console.log(doc.id, " => ", doc.data());
      // console.log(newservicepack);
    });
  return newservicepack;
});

export const addNewServicePack = createAsyncThunk(
    'servicepacks/addNewServicePack',
    async (data:any) => {
      console.log(data);
      
    // console.log(`${data.deadlinetime.hour()}:${data.deadlinetime.minute()}:${data.deadlinetime.second()} `);
    const rest = await addDoc(collection(db, "servicepacks"), {             
      // code: uuidv4().slice(0, 12),
      code: data.code,
      name: data.name,
      startdate:data.startdate,
      starttime:data.starttime,
      deadlinedate:data.deadlinedate,
      deadlinetime:data.deadlinetime,
      price: data.price,
      pricecombo: data.pricecombo,
      quantity:data.quantity,
      status: data.status,
    })
    console.log(rest);
      // console.log({ data });
      return data;
    }
  );
  export const updateServicePack = createAsyncThunk(
    'servicepacks/updateServicePack',
    async (data:any,id:any) => {
    await updateDoc(doc(db, "servicepacks",`${id}`), {
      // code: uuidv4().slice(0, 12),
      // code: ramdomcode(12),
      code: data.code,
      name: data.name,
      startdate:data.startdate,
      starttime:data.starttime,
      deadlinedate:data.deadlinedate,
      deadlinetime:data.deadlinetime,
      price: data.price,
      pricecombo: data.pricecombo,
      quantity:data.quantity,
      status: data.status,
    })
      console.log({ data });
      // return data;
    }
  );
  export const filterServicePack = createAsyncThunk(
    'servicepacks/filterServicePack',
    async (id:any) => {
      const res = await getDoc(doc(db, "servicepacks",`${id}`));
      const data =res.data()
      console.log(data);
      
      return data;
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