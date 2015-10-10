import { compose, createStore, applyMiddleware } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import promiseMiddleware from 'redux-promise';
import createLogger from 'redux-logger';
import app from '../reducers/AppReducer';

const logger = createLogger();
const finalCreateStore = compose(
  applyMiddleware(promiseMiddleware, logger),
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

const store = finalCreateStore(app);
export default store;
