import produce from 'immer';

const INITIAL_STATE = {
  reload: false,
};

export default function helpList(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@helpList/RELOAD_REQUEST': {
        draft.reload = true;
        break;
      }
      case '@helpList/RELOAD_SUCCESS': {
        draft.reload = false;
        break;
      }
      default:
    }
  });
}
