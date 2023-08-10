import { AuthActionTypes, AuthState, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from './authActionTypes';

const initialState: AuthState = {
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, error: null };
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;
