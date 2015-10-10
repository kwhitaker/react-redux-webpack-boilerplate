import React, { Component } from 'react';
import { connect } from 'react-redux';

class TestApp extends Component {
  _handleClick(evt) {
    evt.preventDefault();
    console.log('click!');
  }

  render() {
    return (
      <div>
        <h1>App1</h1>
        <a onClick={this._handleClick.bind(this)}>
          Logout
        </a>
      </div>
    );
  }
}

TestApp.propsTypes = {
  dispatch: React.PropTypes.func.isRequired,
};

export default connect()(TestApp);
