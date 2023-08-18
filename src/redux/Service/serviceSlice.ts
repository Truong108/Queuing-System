import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import api from '../../firebase/firebaseAPI'; // Đảm bảo đường dẫn đúng
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { Dichvu } from '../../Interface/service/Dichvu';

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

export const updateService = createAsyncThunk("dichvu/updateService", 
async (service : any) => {
    const docRef = doc(collection(api,"dichvu"), service.id)
    await updateDoc(docRef, service)
    return service

})

export const addService = createAsyncThunk("dichvu/addService", 
async (service : any) => {
    const docRef = await addDoc(collection(api, "dichvu"), service)
    return {...service, id:docRef.id}
})
export const { fetchServiceSuccess } = serviceSlice.actions;
export default serviceSlice.reducer;

