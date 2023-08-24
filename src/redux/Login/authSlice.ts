import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../store/store'; // Đảm bảo đường dẫn đúng
import api from '../../firebase/firebaseAPI'; // Đảm bảo đường dẫn đúng
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { Login } from '../../Interface/Login';

interface LoginState {
  login: Login[];
}

const initialState: LoginState = {
  login: [],
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    fetchLoginSuccess(state, action: PayloadAction<Login[]>) {
      state.login = action.payload;
    },
  },
});
export const forgotpasswordLogin = createAsyncThunk("dangnhap/forgotpasswordLogin", 
async (login : any) => {
    const docRef = doc(collection(api,"dangnhap"), login.id)
    await updateDoc(docRef, login)
    return login
})

export const { fetchLoginSuccess } = loginSlice.actions;
export default loginSlice.reducer;

export const fetchLogin = (): AppThunk => async (dispatch) => {
  try {
    const loginfromRef = collection(api, 'dangnhap');
    const querySnapshot = await getDocs(loginfromRef);
    const loginFrom: Login[] = querySnapshot.docs.map((doc) => ({
        firebaseId: doc.id,
        ...doc.data() as Login,
      }));
    dispatch(fetchLoginSuccess(loginFrom));
  } catch (error) {
    console.error(error);
  }
};
