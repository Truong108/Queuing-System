import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../store/store'; // Đảm bảo đường dẫn đúng
import api from '../../firebase/firebaseAPI'; // Đảm bảo đường dẫn đúng
import { collection, getDocs } from "firebase/firestore";
import { Dichvu } from '../../Interface/Dichvu';

interface ServiceState {
  service: Dichvu[];
}

const initialState: ServiceState = {
  service: [],
};

const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    fetchServiceSuccess(state, action: PayloadAction<Dichvu[]>) {
      state.service = action.payload;
    },
  },
});

export const { fetchServiceSuccess } = serviceSlice.actions;
export default serviceSlice.reducer;

export const fetchService = (): AppThunk => async (dispatch) => {
  try {
    const serviceRef = collection(api, 'dichvu');
    const querySnapshot = await getDocs(serviceRef);
    const serviceArray: Dichvu[] = querySnapshot.docs.map((doc) => ({
        firebaseId: doc.id,
        ...doc.data() as Dichvu,
      }));
    dispatch(fetchServiceSuccess(serviceArray));
  } catch (error) {
    console.error(error);
  }
};
