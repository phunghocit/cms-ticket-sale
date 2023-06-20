import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import { message } from "antd";
import { v4 as uuidv4 } from "uuid";
import { ramdomcode } from "../randomcode";
const ServicePackSlide = createSlice({
  name: "servicepacklist",
  initialState: { status: "idle", servicepacks: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServicePack.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchServicePack.fulfilled, (state, action) => {
        console.log({ action });
        state.servicepacks = action.payload;
        state.status = "idle";
      });
    // .addCase(addNewServicePack.fulfilled, (state:any, action:any) => {
    //   state.servicepacks.push( action.payload);
    // })
    // .addCase(updateServicePack.fulfilled, (state:any, action:any) => {
    //   let currentservicepack = state.servicepacks.find((servicepack:any) => servicepack.id === action.payload);
    //   currentservicepack = action.payload;
    // })
    // .addCase(updateServicePack.fulfilled, (state, { payload }) => {
    //   state.entities[payload.id] = payload})
  },
});

export const fetchServicePack = createAsyncThunk(
  "servicepacks/fetchServicePack",
  async () => {
    const docRef = collection(db, "servicepacks"); //tra ve collection
    const res = await getDocs(docRef);
    let newservicepack: any = [];
    let count = 1;
    console.log(res);

    res.forEach(async (doc) => {
      newservicepack.push({ ...doc.data(), id: doc.id, stt: count++ });
      console.log(doc.id, " => ", doc.data());
      console.log(newservicepack);
    });
    return newservicepack;
  }
);

export const addNewServicePack = createAsyncThunk(
  "servicepacklist/addNewServicePack",
  async (data: any) => {
    console.log(data);

    // console.log(`${data.deadlinetime.hour()}:${data.deadlinetime.minute()}:${data.deadlinetime.second()} `);
    const rest = await addDoc(collection(db, "servicepacks"), {
      // code: uuidv4().slice(0, 12),
      code: data.code,
      name: data.name,
      startdate: data.startdate,
      starttime: data.starttime,
      deadlinedate: data.deadlinedate,
      deadlinetime: data.deadlinetime,
      price: data.price,
      pricecombo: data.pricecombo,
      quantity: data.quantity,
      status: data.status,
    });
    console.log(rest);
    // console.log({ data });
    return data;
  }
);
export const updateServicePack = createAsyncThunk(
  "servicepacklist/updateServicePack",
  async (data: any) => {
    console.log(data.ServiceId);

    const res = await updateDoc(doc(db, "servicepacks", `${data.ServiceId}`), {
      // code: uuidv4().slice(0, 12),
      // code: ramdomcode(12),
      // name: data.name,
      codeevent: data.codeevent,
      nameevent: data.nameevent,
      startdate: data.startdate,
      starttime: data.starttime,
      deadlinedate: data.deadlinedate,
      deadlinetime: data.deadlinetime,
      price: data.price,
      pricecombo: data.pricecombo,
      quantity: data.quantity,
      status: data.status,
    });
    console.log({ data });
    return res;
  }
);
// export const filterServicePack = createAsyncThunk(
//   'servicepacks/filterServicePack',
//   async (id:any) => {
//     const res = await getDoc(doc(db, "servicepacks",`${id}`));
//     const data =res.data()
//     console.log(data);

//     return data;
//   }
// );
/*
  => todos/fetchTodos/pending
  => todos/fetchTodos/fullfilled
  => todos/fetchTodos/rejected
*/
// export const searchFilterChange= createAsyncThunk('filters/searchFilterChange',
// async (data:any) => {
//   const docRef = collection(db, "tickets"); //tra ve collection
//   const res = await getDocs(docRef);
//   let newticket: any = [];

//   res.forEach( async (doc) => {
//     if (data.status=='All' && doc.data().nameevent.includes(data.searchName) && doc.data().type==data.typeticket ) {
//     newticket.push({...doc.data()});

//     }else if (data.status=='Checked' && doc.data().statuscheck==true && doc.data().nameevent.includes(data.searchName) && doc.data().type==data.typeticket ) {
//       newticket.push({...doc.data()});
//     }else if (data.status=='Uncheck' && doc.data().statuscheck==false && doc.data().nameevent.includes(data.searchName) && doc.data().type==data.typeticket) {
//       newticket.push({...doc.data()});
//     }
//     else{

//     }
//     // console.log(doc.id, " => ", doc.data());
//     console.log(newticket);
//   });
// // const data = newticket;
// // console.log(data);
// return newticket;
// });

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
