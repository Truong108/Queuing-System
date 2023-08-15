import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../firebase/firebaseAPI";
import { collection, getDocs } from "firebase/firestore";
import { BaoCao } from "../../Interface/Baocao";

export const fetchBaoCao = createAsyncThunk("baocao/fetchData", async () => {
    const querySnapshot = await getDocs(collection(api, 'baocao'));
    return querySnapshot.docs.map((doc) => doc.data() as BaoCao);
  });
  const reportReducer = createSlice({
    name: 'baocao',
    initialState: { report: [] as BaoCao[] },
    reducers: {},
    extraReducers(builder) {
      builder.addCase(fetchBaoCao.fulfilled, (state, action) => {
        state.report = action.payload;
      });
    },
  });
  
  export default reportReducer.reducer;
  