import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import student from './student/sagas';
import helpList from './helpList/sagas';

export default function* rootSaga() {
  return yield all([auth, student, helpList]);
}
