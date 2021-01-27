import {createSlice} from '@reduxjs/toolkit';
import {
  AuthSliceInitialState,
  AuthSliceReducer,
  AuthPayloads,
} from '../../../@types/redux';

const initialState: AuthSliceInitialState = {};

const login: AuthSliceReducer<AuthPayloads['Credential']> = (state, action) => {
  if (action.payload.email && action.payload.password) {
    state.credential = action.payload;
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login,
  },
});

export {authSlice};
