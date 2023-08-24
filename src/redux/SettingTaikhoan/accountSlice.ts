import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import api from '../../firebase/firebaseAPI'; // Đảm bảo đường dẫn đúng
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { Account } from '../../Interface/Taikhoan';


interface AccountState {
  account: Account[];
}

const initialState: AccountState = {
  account: [],
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    fetchAccountSuccess(state, action: PayloadAction<Account[]>) {
      state.account = action.payload;
    },
  },
});
export const updateAccount = createAsyncThunk("account/updateAccount", 
async (account : any) => {
    const docRef = doc(collection(api,"taikhoan"), account.id)
    await updateDoc(docRef, account)
    return account
})
export const addAccount = createAsyncThunk("accountadd/addAccount", 
async (accountadd : any) => {
    const docRef = await addDoc(collection(api, "taikhoan"), accountadd)
    await updateDoc(docRef, accountadd)
    return {...accountadd, id:docRef.id}
})

export const forgotpasswordLogin = createAsyncThunk("dangnhap/forgotpasswordLogin", 
async (login : any) => {
    const docRef = doc(collection(api,"dangnhap"), login.id)
    await updateDoc(docRef, login)
    return login
})

export const { fetchAccountSuccess } = accountSlice.actions;
export default accountSlice.reducer;

