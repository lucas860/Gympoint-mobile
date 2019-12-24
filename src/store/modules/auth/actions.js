export function signInRequest(registrationId) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { registrationId },
  };
}

export function signInSuccess(registrationId, studentId) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { registrationId, studentId },
  };
}
