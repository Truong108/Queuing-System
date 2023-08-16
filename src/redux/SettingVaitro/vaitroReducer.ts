import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../firebase/firebaseAPI";
import { collection, getDocs } from "firebase/firestore";
import { Caidatvaitro } from "../../Interface/Caidatvaitro";


export const fetchVaitro = createAsyncThunk("vaitro/fetchData", async () => {
    const querySnapshot = await getDocs(collection(api, 'vaitro'));
    return querySnapshot.docs.map((doc) => doc.data() as Caidatvaitro);
  });
  const vaitroReducer = createSlice({
    name: 'vaitro',
    initialState: { vaitro: [] as Caidatvaitro[] },
    reducers: {},
    extraReducers(builder) {
      builder.addCase(fetchVaitro.fulfilled, (state, action) => {
        state.vaitro = action.payload;
      });
    },
  });
  
  export default vaitroReducer.reducer;
  