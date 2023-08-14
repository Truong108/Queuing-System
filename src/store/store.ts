import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import authReducer from '../redux/Login/authSlice'; // Import your authReducer
import deviceReducer from "../redux/Device/deviceReducer";
import serviceReducer from "../redux/Service/serviceReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    device: deviceReducer,
    service: serviceReducer,
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
