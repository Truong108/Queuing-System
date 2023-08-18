import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../firebase/firebaseAPI";
import { collection, getDocs } from "firebase/firestore";
import { ThietBi } from "../../Interface/Thietbi";
import { addDevice, updateDevice } from "./deviceSlice";

export const fetchThietBi = createAsyncThunk("thietbi/fetchData", async () => {
    const querySnapshot = await getDocs(collection(api, 'thietbi'));
    return querySnapshot.docs.map((doc) => ({id:doc.id, ...doc.data()}as ThietBi) );
  });
  const deviceReducer = createSlice({
    name: 'thietbi',
    initialState: { devices: [] as ThietBi[] },
    reducers: {},
    extraReducers(builder) {
      builder.addCase(fetchThietBi.fulfilled, (state, action) => {
        state.devices = action.payload;
      })
      .addCase(updateDevice.fulfilled, (state, action) =>{
          state.devices = [...state.devices, action.payload]
      })
      .addCase(addDevice.fulfilled, (state, action)=>{
        state.devices = action.payload
      });
    },
  });
  
  export default deviceReducer.reducer;
  