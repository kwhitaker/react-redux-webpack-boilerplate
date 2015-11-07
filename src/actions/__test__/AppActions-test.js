/* global describe it */
import * as actions from '../AppActions';
import * as types from '../../constants/AppActionTypes';
import expect from 'expect';

describe('App actions', () => {
  const testNotification = {
    type: 'error',
    message: 'some message',
  };

  const testTransition = {
    start: 'page1',
    end: 'page2',
  };

  it('should create an action to receive notifications', () => {
    const expectedAction = {
      type: types.RECEIVE_NOTIFICATION,
      payload: {
        notification: testNotification,
      },
    };

    expect(actions.receiveNotification(testNotification))
      .toEqual(expectedAction);
  });

  it('should create an action to start a transition', () => {
    const expectedAction = {
      type: types.TRANSITION_PAGE_START,
      payload: {
        transition: testTransition,
      },
    };

    expect(actions.startPageTransition(testTransition))
      .toEqual(expectedAction);
  });

  it('should create an action to end a transition', () => {
    const expectedAction = {
      type: types.TRANSITION_PAGE_END,
    };

    expect(actions.endPageTransition()).toEqual(expectedAction);
  });
});
