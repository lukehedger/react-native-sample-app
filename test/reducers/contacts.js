import test from 'tape';
import reducer from '../../app/reducers/contacts'
import * as types from '../../app/constants/actions';

test('Reducers:Contacts - contacts reducer default output', assert => {

  const state = {
    isFetching: false,
    status: null,
    error: null,
    contacts: []
  };

  const actual = reducer(undefined, {});
  const expected = state;

  assert.deepEqual(actual, expected,
    'reducer() should return initial state');

  assert.end();

});

test('Reducers:Contacts - contacts reducer get all output', assert => {

  const state = {
    isFetching: true
  };

  const actual = reducer({}, {type: types.CONTACTS_GET_ALL});
  const expected = state;

  assert.deepEqual(actual, expected,
    'reducer() should return get all state');

  assert.end();

});

test('Reducers:Contacts - contacts reducer success output', assert => {

  const state = {
    isFetching: false,
    status: 'OK'
  };

  const actual = reducer({}, {type: types.CONTACTS_SUCCESS});
  const expected = state;

  assert.deepEqual(actual, expected,
    'reducer() should return success state');

  assert.end();

});

test('Reducers:Contacts - contacts reducer error output', assert => {

  const state = {
    isFetching: false,
    status: 'ERROR'
  };

  const actual = reducer({}, {type: types.CONTACTS_ERROR});
  const expected = state;

  assert.deepEqual(actual, expected,
    'reducer() should return error state');

  assert.end();

});
