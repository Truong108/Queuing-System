import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../firebase/firebaseAPI";
import { collection, getDocs } from "firebase/firestore";
import { Account } from "../../Interface/Taikhoan";

export const fetchAccount = createAsyncThunk("account/fetchData", async () => {
    const querySnapshot = await getDocs(collection(api, 'taikhoan'));
    return querySnapshot.docs.map((doc) => doc.data() as Account);
  });
  const accountReducer = createSlice({
    name: 'account',
    initialState: { account: [] as Account[] },
    reducers: {},
    extraReducers(builder) {
      builder.addCase(fetchAccount.fulfilled, (state, action) => {
        state.account = action.payload;
      });
    },
  });
  
  export default accountReducer.reducer;
  