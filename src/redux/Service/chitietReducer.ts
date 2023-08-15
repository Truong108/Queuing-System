import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../firebase/firebaseAPI";
import { collection, getDocs } from "firebase/firestore";
import { Chitiet } from "../../Interface/service/Chitiet";

export const fetchChitietDichvu = createAsyncThunk("chitietdichvu/fetchData", async () => {
    const querySnapshot = await getDocs(collection(api, 'chitietdichvu'));
    return querySnapshot.docs.map((doc) => doc.data() as Chitiet);
  });
  const chitietserviceReducer = createSlice({
    name: 'ctdichvu',
    initialState: { chitietservice: [] as Chitiet[] },
    reducers: {},
    extraReducers(builder) {
      builder.addCase(fetchChitietDichvu.fulfilled, (state, action) => {
        state.chitietservice = action.payload;
      });
    },
  });
  
  export default chitietserviceReducer.reducer;
  