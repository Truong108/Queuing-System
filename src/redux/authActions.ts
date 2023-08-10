import { Dispatch } from 'redux';

import { AuthActionTypes, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from './authActionTypes';
import { signIn  } from '../firebase/firebaseAPI'; 

export const loginRequest = (): AuthActionTypes => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (): AuthActionTypes => ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = (error: string): AuthActionTypes => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const loginUser = (tendn: string, password: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(loginRequest());

    try {
      const response = await signIn(tendn, password); // Đã sửa lại thành signIn
      if (response.success) {
        dispatch(loginSuccess());
      } else {
        dispatch(loginFailure('Tên đăng nhập hoặc mật khẩu không đúng'));
      }
    } catch (error) {
      dispatch(loginFailure('Đã xảy ra lỗi trong quá trình đăng nhập'));
    }
  };
};
