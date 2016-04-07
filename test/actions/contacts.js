import test from 'tape';
import * as actions from '../../app/actions/contacts';
import * as types from '../../app/constants/actions';

test('Actions:Contacts - getAllContacts action output', assert => {

  const actual = actions.getAllContacts();
  const expected = {type: types.CONTACTS_GET_ALL};

  assert.deepEqual(actual, expected,
    'getAllContacts() should create action to get all contacts');

  assert.end();

});

test('Actions:Contacts - contactsSuccess action output', assert => {

  const contacts = [];

  const actual = actions.contactsSuccess(contacts);
  const expected = {type: types.CONTACTS_SUCCESS, contacts};

  assert.deepEqual(actual, expected,
    'contactsSuccess() should create action to send contacts data to the store');

  assert.end();

});

test('Actions:Contacts - contactsError action output', assert => {

  const error = {};

  const actual = actions.contactsError(error);
  const expected = {type: types.CONTACTS_ERROR, error};

  assert.deepEqual(actual, expected,
    'contactsError() should create action to send error data to the store');

  assert.end();

});
