import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../store/store'; // Đảm bảo đường dẫn đúng
import api from '../../firebase/firebaseAPI'; // Đảm bảo đường dẫn đúng
import { collection, getDocs } from "firebase/firestore";
import { Chitiet } from '../../Interface/service/Chitiet';


interface ChitietServiceState {
  chitietservice: Chitiet[];
}

const initialState: ChitietServiceState = {
  chitietservice: [],
};

const chitietserviceSlice = createSlice({
  name: 'chitietservice',
  initialState,
  reducers: {
    fetchChitietServiceSuccess(state, action: PayloadAction<Chitiet[]>) {
      state.chitietservice = action.payload;
    },
  },
});

export const { fetchChitietServiceSuccess } = chitietserviceSlice.actions;
export default chitietserviceSlice.reducer;

export const fetchchitietService = (): AppThunk => async (dispatch) => {
  try {
    const chitietserviceRef = collection(api, 'chitietdichvu');
    const querySnapshot = await getDocs(chitietserviceRef);
    const chitietserviceArray: Chitiet[] = querySnapshot.docs.map((doc) => ({
        firebaseId: doc.id,
        ...doc.data() as Chitiet,
      }));
    dispatch(fetchChitietServiceSuccess(chitietserviceArray));
  } catch (error) {
    console.error(error);
  }
};
