import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import authReducer from '../redux/Login/authSlice'; // Import your authReducer
import deviceReducer from "../redux/Device/deviceReducer";
import serviceReducer from "../redux/Service/serviceReducer";
import chitietserviceReducer from "../redux/Service/chitietReducer";
import capsoReducer from "../redux/GrantNumber/grantNumberReducer";
import baocaoReducer from "../redux/Report/reportReducer";
import vaitroReducer from "../redux/SettingVaitro/vaitroReducer";
import accountReducer from "../redux/SettingTaikhoan/accountReducer";
import nhatkyReducer from "../redux/SettingNhatky/nhatkyReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    device: deviceReducer,
    service: serviceReducer,
    chitietservice: chitietserviceReducer,
    capso: capsoReducer,
    baocao: baocaoReducer,
    vaitro: vaitroReducer,
    account: accountReducer,
    nhatky: nhatkyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
