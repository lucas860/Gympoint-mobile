import produce from 'immer';

const INITIAL_STATE = {
  registration: null,
  student: null,
};

export default function student(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.registration = action.payload.registrationId;
        draft.student = action.payload.studentId;
        break;
      }
      default:
    }
  });
}
