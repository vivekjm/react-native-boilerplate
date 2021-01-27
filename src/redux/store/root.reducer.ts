import {authSlice} from '../slices/auth.slice';

import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
});