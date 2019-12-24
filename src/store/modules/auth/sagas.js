import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '~/services/api';

import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  const { registrationId } = payload;

  const response = yield call(api.get, `/registration/${registrationId}`);

  const { id, student_id } = response.data;

  yield put(signInSuccess(id, student_id));
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
