import React, { Component } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions as routerActions, NavBar, Route, Router, Schema, TabBar, TabRoute } from 'react-native-router-redux';

// containers
import Launch from '../containers/Launch';

class App extends Component {

  render() {

    return (
      <Router {...this.props} initial="launch">
        {/*<Schema name="default" {...defaultSchema} />*/}
        <Route name="launch" component={Launch} />
      </Router>
    );

  }

}

function mapStateToProps(state) {

  return {
    router: state.router
  };

}

function mapDispatchToProps(dispatch) {

  return {
    actions: bindActionCreators({
      ...routerActions,
    }, dispatch)
  };

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
