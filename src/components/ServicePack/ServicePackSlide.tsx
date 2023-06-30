import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import { servicepack } from "../interface";
const ServicePackSlide = createSlice({
  name: "servicepacklist",
  initialState: { status: "idle", servicepacks: [],searchName: "" },
  reducers: {
    searchFilterChange: (state, action) => {
      // mutation || IMMER
      state.searchName = action.payload;
    }
  },
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
    console.log(res);

    res.forEach(async (doc) => {
      newservicepack.push({ ...doc.data(), id: doc.id});
      console.log(doc.id, " => ", doc.data());
      console.log(newservicepack);
    });
    return newservicepack;
  }
);

export const addNewServicePack = createAsyncThunk(
  "servicepacklist/addNewServicePack",
  async (data: servicepack) => {
    console.log(data);
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
    // console.log(rest);
    return data;
  }
);
export const updateServicePack = createAsyncThunk(
  "servicepacklist/updateServicePack",
  async (data: servicepack) => {
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
export default ServicePackSlide;
