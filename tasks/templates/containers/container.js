import React, { Component, View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// TODO - import some actions
import * as SomeActions from '../actions/some';

// TODO - import some pure components
import createSomeComponent from '../components/some';

class <%= module %>Container extends Component {

  render() {

    // TODO - create component
    const SomeComponent = createSomeComponent(React);

    return (
      <SomeComponent />
    );

  }

}

function mapStateToProps(state) {

  return {
    ...state
  };

}

function mapDispatchToProps(dispatch) {

  // TODO - bind some actions to the container
  return bindActionCreators(SomeActions, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(<%= module %>Container);
