import AuthSliceInitialState from './slices/auth/state.types';
import AuthSliceReducer from './slices/auth/reducer.types';
import Credential from './payload.types';

export interface AuthPayloads {
  Credential: Credential;
}

export type {AuthSliceInitialState, AuthSliceReducer};
