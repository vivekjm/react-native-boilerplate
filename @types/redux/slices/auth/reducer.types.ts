import AuthSliceInitialState from './state.types';
import {CaseReducer, PayloadAction} from '@reduxjs/toolkit';

type AuthSliceReducer<Payload> = CaseReducer<
  AuthSliceInitialState,
  PayloadAction<Payload>
>;

export default AuthSliceReducer;
