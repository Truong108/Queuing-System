import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../firebase/firebaseAPI";
import { collection, getDocs } from "firebase/firestore";
import { Nhatky } from "../../Interface/Nhatky";

export const fetchNhatky = createAsyncThunk("nhatky/fetchData", async () => {
    const querySnapshot = await getDocs(collection(api, 'nhatky'));
    return querySnapshot.docs.map((doc) => doc.data() as Nhatky);
  });
  const nhatkyReducer = createSlice({
    name: 'nhatky',
    initialState: { nhatky: [] as Nhatky[] },
    reducers: {},
    extraReducers(builder) {
      builder.addCase(fetchNhatky.fulfilled, (state, action) => {
        state.nhatky = action.payload;
      });
    },
  });
  
  export default nhatkyReducer.reducer;
  