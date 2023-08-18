import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../firebase/firebaseAPI";
import { collection, getDocs } from "firebase/firestore";
import { Login } from "../../Interface/Login";


export const fetchLogin = createAsyncThunk("dangnhap/fetchLogin", async () => {
    const querySnapshot = await getDocs(collection(api, 'dangnhap'));
    return querySnapshot.docs.map((doc) =>({id:doc.id, ...doc.data()as Login}) );
  });

 const loginSlice = createSlice({
  name: "dangnhap",
  initialState: { login: [] as Login[] },
    reducers: {},
    extraReducers(builder) {
      builder.addCase(fetchLogin.fulfilled, (state, action) => {
        state.login = action.payload;
      });
    },
  });

export default loginSlice.reducer;
