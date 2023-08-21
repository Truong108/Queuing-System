import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../firebase/firebaseAPI";
import { collection, getDocs } from "firebase/firestore";
import { Account } from "../../Interface/Taikhoan";
import { addAccount, updateAccount } from "./accountSlice";

export const fetchAccount = createAsyncThunk("account/fetchData", async () => {
    const querySnapshot = await getDocs(collection(api, 'taikhoan'));
    return querySnapshot.docs.map((doc) => ({id:doc.id, ...doc.data()}as Account) );
  });
  const accountReducer = createSlice({
    name: 'account',
    initialState: { account: [] as Account[] },
    reducers: {},
    extraReducers(builder) {
      builder.addCase(fetchAccount.fulfilled, (state, action) => {
        state.account = action.payload;
      })
      .addCase(updateAccount.fulfilled, (state, action) =>{
        state.account = [...state.account, action.payload]
    })
    .addCase(addAccount.fulfilled, (state, action)=>{
      state.account = action.payload
    });
    },
  });
  
  export default accountReducer.reducer;
  