import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../redux/authReducer'; // Import your authReducer

const rootReducer = combineReducers({
  auth: authReducer,
  // ... other reducers if any
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
