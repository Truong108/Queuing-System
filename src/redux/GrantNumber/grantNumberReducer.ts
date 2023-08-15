import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../firebase/firebaseAPI";
import { collection, getDocs } from "firebase/firestore";
import { CapSo } from "../../Interface/Capso";

export const fetchCapso = createAsyncThunk("capso/fetchData", async () => {
    const querySnapshot = await getDocs(collection(api, 'capso'));
    return querySnapshot.docs.map((doc) => doc.data() as CapSo);
  });
  const capsoReducer = createSlice({
    name: 'capso',
    initialState: { capso: [] as CapSo[] },
    reducers: {},
    extraReducers(builder) {
      builder.addCase(fetchCapso.fulfilled, (state, action) => {
        state.capso = action.payload;
      });
    },
  });
  
  export default capsoReducer.reducer;
  