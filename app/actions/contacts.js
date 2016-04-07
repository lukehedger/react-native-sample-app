import * as actions from '../constants/actions';

function fetchContacts() {
  return {
    type: actions.CONTACTS_FETCH
  };
}

function contactsSuccess(contacts) {
  return {
    type: actions.CONTACTS_SUCCESS,
    contacts
  };
}

function contactsError(error) {
  return {
    type: actions.CONTACTS_ERROR,
    error
  };
}

function contactsStorageSuccess() {
  return {
    type: actions.CONTACTS_STORAGE_SUCCESS
  };
}

function contactsStorageError(error) {
  return {
    type: actions.CONTACTS_STORAGE_ERROR,
    error
  };
}

export function fetchContactsIfNeeded() {
  return {
    type: actions.CONTACTS_SHOULD_FETCH
  };
}
