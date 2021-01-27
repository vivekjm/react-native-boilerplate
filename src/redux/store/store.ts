import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {rootReducer} from './root.reducer';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './root.saga';

const sagaMiddleWare = createSagaMiddleware();

const middleware = [sagaMiddleWare, ...getDefaultMiddleware()];

if (__DEV__) {
  middleware.push(logger);
}

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export {store};

sagaMiddleWare.run(rootSaga);
