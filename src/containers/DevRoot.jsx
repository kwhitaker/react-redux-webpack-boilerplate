import React, { Component } from 'react';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import Root from './Root.jsx';

export default class DevRoot extends Component {
  render() {
    return (
      <div>
        <Root store={this.props.store} />
        <DebugPanel top right bottom>
          <DevTools store={this.props.store} monitor={LogMonitor} />
        </DebugPanel>
      </div>
    );
  }
}

DevRoot.propTypes = {
  store: React.PropTypes.object.isRequired,
};
