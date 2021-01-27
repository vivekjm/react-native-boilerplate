
import { takeEvery } from 'redux-saga/effects';

function* login() {

}

export function* authSaga() {
  yield takeEvery('auth/login', login);
}
