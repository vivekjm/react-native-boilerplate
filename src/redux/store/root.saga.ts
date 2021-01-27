import {all} from 'redux-saga/effects';
import {authSaga} from '../sagas/auth.saga';

function* rootSaga() {
  yield all([authSaga()]);
}

export {rootSaga};
