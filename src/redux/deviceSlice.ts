import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThietBi } from '../Interface/Thietbi'; // Đảm bảo đường dẫn đúng
import { AppThunk } from '../store/store'; // Đảm bảo đường dẫn đúng
import api from '../firebase/firebaseAPI'; // Đảm bảo đường dẫn đúng
import { collection, getDocs } from "firebase/firestore";

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

export const { fetchDevicesSuccess } = deviceSlice.actions;
export default deviceSlice.reducer;

export const fetchDevices = (): AppThunk => async (dispatch) => {
  try {
    const devicesRef = collection(api, 'thietbi');
    const querySnapshot = await getDocs(devicesRef);
    const devicesArray: ThietBi[] = querySnapshot.docs.map((doc) => ({
        firebaseId: doc.id,
        ...doc.data() as ThietBi,
      }));
    dispatch(fetchDevicesSuccess(devicesArray));
  } catch (error) {
    console.error(error);
  }
};
