import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../firebase/firebaseAPI";
import { collection, getDocs } from "firebase/firestore";
import { Dichvu } from "../../Interface/service/Dichvu";
import { addService, updateService } from "./serviceSlice";

export const fetchDichvu = createAsyncThunk("dichvu/fetchData", async () => {
    const querySnapshot = await getDocs(collection(api, 'dichvu'));
    return querySnapshot.docs.map((doc) => ({id:doc.id, ...doc.data()}as Dichvu) );
  });
  const serviceReducer = createSlice({
    name: 'dichvu',
    initialState: { service: [] as Dichvu[] },
    reducers: {},
    extraReducers(builder) {
      builder.addCase(fetchDichvu.fulfilled, (state, action) => {
        state.service = action.payload;
      })
      .addCase(updateService.fulfilled, (state, action) =>{
        state.service = [...state.service, action.payload]
    })
    .addCase(addService.fulfilled, (state, action)=>{
      state.service = action.payload
    });
    },
  });
  
  export default serviceReducer.reducer;
  