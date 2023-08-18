import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThietBi } from '../../Interface/Thietbi'; // Đảm bảo đường dẫn đúng
import api from '../../firebase/firebaseAPI'; // Đảm bảo đường dẫn đúng
import { collection,doc, updateDoc, addDoc } from "firebase/firestore";

interface DeviceState {
  devices: ThietBi[];
}

const initialState: DeviceState = {
  devices: [],
};

const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    fetchDevicesSuccess(state, action: PayloadAction<ThietBi[]>) {
      state.devices = action.payload;
    },
  },
});

export const updateDevice = createAsyncThunk("thietbi/updateDevice", 
async (device : any) => {
    const docRef = doc(collection(api,"thietbi"), device.id)
    await updateDoc(docRef, device)
    return device

})

export const addDevice = createAsyncThunk("thietbi/addDevice", 
async (device : any) => {
    const docRef = await addDoc(collection(api, "thietbi"), device)
    return {...device, id:docRef.id}
})
export const { fetchDevicesSuccess } = deviceSlice.actions;
export default deviceSlice.reducer;

