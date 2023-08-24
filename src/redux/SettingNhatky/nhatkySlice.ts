import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../store/store'; // Đảm bảo đường dẫn đúng
import api from '../../firebase/firebaseAPI'; // Đảm bảo đường dẫn đúng
import { addDoc, collection, getDocs } from "firebase/firestore";
import { Nhatky } from '../../Interface/Nhatky';

interface NhatkyState {
  nhatky: Nhatky[];
}

const initialState: NhatkyState = {
  nhatky: [],
};

const nhatkySlice = createSlice({
  name: 'nhatky',
  initialState,
  reducers: {
    fetchNhatkySuccess(state, action: PayloadAction<Nhatky[]>) {
      state.nhatky = action.payload;
    },
  },
});

export const addNhatky = createAsyncThunk("nhatky/addNhatky", 
async (nhatky : any) => {
    const docRef = await addDoc(collection(api, "nhatky"), nhatky)
    return {...nhatky, id:docRef.id}
})
export const { fetchNhatkySuccess } = nhatkySlice.actions;
export default nhatkySlice.reducer;

export const fetchNhatky= (): AppThunk => async (dispatch) => {
  try {
    const nhatkyRef = collection(api, 'nhatky');
    const querySnapshot = await getDocs(nhatkyRef);
    const nhatkyArray: Nhatky[] = querySnapshot.docs.map((doc) => ({
        firebaseId: doc.id,
        ...doc.data() as Nhatky,
      }));
    dispatch(fetchNhatkySuccess(nhatkyArray));
  } catch (error) {
    console.error(error);
  }
};
