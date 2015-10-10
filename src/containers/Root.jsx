import React, { Component } from 'react';
import { Provider } from 'react-redux';
import TestApp from './TestApp.jsx';

export default class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <TestApp />
      </Provider>
    );
  }
}

Root.propTypes = {
  store: React.PropTypes.object.isRequired,
};
