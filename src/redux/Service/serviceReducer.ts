import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../firebase/firebaseAPI";
import { collection, getDocs } from "firebase/firestore";
import { Dichvu } from "../../Interface/Dichvu";

export const fetchDichvu = createAsyncThunk("dichvu/fetchData", async () => {
    const querySnapshot = await getDocs(collection(api, 'dichvu'));
    return querySnapshot.docs.map((doc) => doc.data() as Dichvu);
  });
  const serviceReducer = createSlice({
    name: 'dichvu',
    initialState: { service: [] as Dichvu[] },
    reducers: {},
    extraReducers(builder) {
      builder.addCase(fetchDichvu.fulfilled, (state, action) => {
        state.service = action.payload;
      });
    },
  });
  
  export default serviceReducer.reducer;
  