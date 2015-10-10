import { fromJS } from 'immutable';
import * as actions from '../constants/AppActionTypes';

const initialState = fromJS({
  notification: undefined,
  transition: undefined,
});

export default function app(state = initialState, action) {
  switch (action.type) {
  case actions.RECEIVE_NOTIFICATION:
    return state.set('notification', fromJS(action.payload.notification));

  case actions.CLEAR_NOTIFICATION:
    return state.set('notification', undefined);

  case actions.TRANSITION_PAGE_START:
    return state.set('transition', fromJS(action.payload.transition));

  case actions.TRANSITION_PAGE_END:
    return state.set('transition', undefined);

  default:
    return state;
  }
}
