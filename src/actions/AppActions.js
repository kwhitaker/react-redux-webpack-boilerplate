import * as actions from '../constants/AppActionTypes';

export function receiveNotification(notification) {
  return {
    type: actions.RECEIVE_NOTIFICATION,
    payload: {
      notification,
    },
  };
}

// @param {transition} {start:'page1', end:'page2'}
export function startPageTransition(transition) {
  return {
    type: actions.TRANSITION_PAGE_START,
    payload: {
      transition,
    },
  };
}

export function endPageTransition() {
  return { type: actions.TRANSITION_PAGE_END };
}
