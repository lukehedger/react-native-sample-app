import { CONTACTS_GET_ALL, CONTACTS_SUCCESS, CONTACTS_ERROR, CONTACTS_STORAGE_SUCCESS, CONTACTS_STORAGE_ERROR } from '../constants/actions';

const initialState = {
  isFetching: false,
  fetched: false,
  cached: false,
  error: null,
  contacts: []
};

export default function contacts(state = initialState, action) {

  switch (action.type) {

    case CONTACTS_GET_ALL:
      return Object.assign({}, state, {
        isFetching: true,
        fetched: false,
        error: null
      });

    case CONTACTS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        fetched: true,
        ...action.contacts
      });

    case CONTACTS_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        fetched: false,
        ...action.error
      });

    case CONTACTS_STORAGE_SUCCESS:
      return Object.assign({}, state, {
        cached: true
      });

    case CONTACTS_STORAGE_ERROR:
      return Object.assign({}, state, {
        cached: false,
        ...action.error
      });

    default:
      return state;

  }

}
