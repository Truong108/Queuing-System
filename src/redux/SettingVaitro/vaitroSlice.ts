import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../store/store'; // Đảm bảo đường dẫn đúng
import api from '../../firebase/firebaseAPI'; // Đảm bảo đường dẫn đúng
import { collection, getDocs } from "firebase/firestore";
import { Caidatvaitro } from '../../Interface/Caidatvaitro';


interface VaitroState {
  vaitro: Caidatvaitro[];
}

const initialState: VaitroState = {
  vaitro: [],
};

const vaitroSlice = createSlice({
  name: 'vaitro',
  initialState,
  reducers: {
    fetchVaitroSuccess(state, action: PayloadAction<Caidatvaitro[]>) {
      state.vaitro = action.payload;
    },
  },
});

export const { fetchVaitroSuccess } = vaitroSlice.actions;
export default vaitroSlice.reducer;

export const fetchVaitro = (): AppThunk => async (dispatch) => {
  try {
    const vaitroRef = collection(api, 'vaitro');
    const querySnapshot = await getDocs(vaitroRef);
    const vaitroArray: Caidatvaitro[] = querySnapshot.docs.map((doc) => ({
        firebaseId: doc.id,
        ...doc.data() as Caidatvaitro,
      }));
    dispatch(fetchVaitroSuccess(vaitroArray));
  } catch (error) {
    console.error(error);
  }
};
