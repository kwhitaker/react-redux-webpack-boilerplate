/* global __DEV__ */
import 'babel-core/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './stores/index';

let component;
if (__DEV__) {
  const DevRoot = require('./containers/DevRoot');
  component = React.createElement(DevRoot, {store: store});
} else {
  const Root = require('./containers/Root');
  component = React.createElement(Root, {store: store});
}

ReactDOM.render(
  component,
  document.getElementById('app'));
