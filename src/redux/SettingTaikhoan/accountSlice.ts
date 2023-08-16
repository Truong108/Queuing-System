import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../store/store'; // Đảm bảo đường dẫn đúng
import api from '../../firebase/firebaseAPI'; // Đảm bảo đường dẫn đúng
import { collection, getDocs } from "firebase/firestore";
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

export const { fetchAccountSuccess } = accountSlice.actions;
export default accountSlice.reducer;

export const fetchAccount = (): AppThunk => async (dispatch) => {
  try {
    const accountRef = collection(api, 'taikhoan');
    const querySnapshot = await getDocs(accountRef);
    const accountArray: Account[] = querySnapshot.docs.map((doc) => ({
        firebaseId: doc.id,
        ...doc.data() as Account,
      }));
    dispatch(fetchAccountSuccess(accountArray));
  } catch (error) {
    console.error(error);
  }
};
