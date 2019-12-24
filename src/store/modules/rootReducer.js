import { combineReducers } from 'redux';

import auth from './auth/reducer';
import student from './student/reducer';
import helpList from './helpList/reducer';

export default combineReducers({
  auth,
  student,
  helpList,
});
