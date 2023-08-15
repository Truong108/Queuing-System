import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../store/store'; // Đảm bảo đường dẫn đúng
import api from '../../firebase/firebaseAPI'; // Đảm bảo đường dẫn đúng
import { collection, getDocs } from "firebase/firestore";
import { CapSo } from '../../Interface/Capso';

interface CapsoState {
  capso: CapSo[];
}

const initialState: CapsoState = {
  capso: [],
};

const capsoSlice = createSlice({
  name: 'capso',
  initialState,
  reducers: {
    fetchCapsoSuccess(state, action: PayloadAction<CapSo[]>) {
      state.capso = action.payload;
    },
  },
});

export const { fetchCapsoSuccess } = capsoSlice.actions;
export default capsoSlice.reducer;

export const fetchCapso = (): AppThunk => async (dispatch) => {
  try {
    const capsoRef = collection(api, 'capso');
    const querySnapshot = await getDocs(capsoRef);
    const capsoArray: CapSo[] = querySnapshot.docs.map((doc) => ({
        firebaseId: doc.id,
        ...doc.data() as CapSo,
      }));
    dispatch(fetchCapsoSuccess(capsoArray));
  } catch (error) {
    console.error(error);
  }
};
