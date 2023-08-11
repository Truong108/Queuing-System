import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../firebase/firebaseAPI";
import { collection, getDocs } from "firebase/firestore";

interface LoginAction {
  tennd: string;
  tendn: string;
  mk: string;
  email: string;
  vaitro: string;
  sodt: number;
}

export const fetchData = createAsyncThunk<LoginAction[]>(
  "login-queuing/fetchData",
  async () => {
    const querySnapshot = await getDocs(collection(api, "login-queuing"));
    return querySnapshot.docs.map((doc) => doc.data() as LoginAction);
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: { dataLogin: [] as LoginAction[] },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.dataLogin = action.payload;
    });
  },
});

export default loginSlice.reducer;
