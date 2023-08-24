import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import api from '../../firebase/firebaseAPI'; // Đảm bảo đường dẫn đúng
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
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

export const updateVaitro = createAsyncThunk("vaitro/updateVaitro", 
async (vaitro : any) => {
    const docRef = doc(collection(api,"vaitro"), vaitro.id)
    await updateDoc(docRef, vaitro)
    return vaitro

})

export const addVaitro = createAsyncThunk("vaitro/addVaitro", 
async (vaitro : any) => {
    const docRef = await addDoc(collection(api, "vaitro"), vaitro)
    return {...vaitro, id:docRef.id}
})

export const { fetchVaitroSuccess } = vaitroSlice.actions;
export default vaitroSlice.reducer;


