import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../redux/type';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload, loading: false };
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;
