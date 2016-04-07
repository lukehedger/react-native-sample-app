import React, { Component, View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// actions
import * as ContactsActions from '../actions/contacts';

// components
import createWelcome from '../components/welcome';

class LaunchContainer extends Component {

  componentDidMount() {

    // TODO - this is just a test container really with some tests in it...

    const { fetchContactsIfNeeded } = this.props.contactsActions;

    fetchContactsIfNeeded()

  }

  render() {

    const { contacts, isFetching, status, errorMessage } = this.props;
    const { Platform } = React;

    const Welcome = createWelcome(React);

    return (
      <Welcome platform={Platform.OS} />
    );

  }

}

function mapStateToProps(state) {

  return {
    ...state
  };

}

function mapDispatchToProps(dispatch) {

  return {
    contactsActions: bindActionCreators(ContactsActions, dispatch)
  };

}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchContainer);
