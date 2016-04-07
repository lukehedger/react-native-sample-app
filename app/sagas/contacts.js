import { takeEvery } from 'redux-saga';
import { put, call, fork, select } from 'redux-saga/effects';
import * as actions from '../constants/actions';
import { getAll, saveAsyncStorage } from '../services/contacts';

function* setCache() {

  const state = yield select(state => state.contacts);

  try {
    const cache = yield call(saveAsyncStorage, state.contacts);
    yield put({ type: actions.CONTACTS_STORAGE_SUCCESS});
  } catch (error) {
    yield put({ type: actions.CONTACTS_STORAGE_ERROR, error});
  }

}

function* shouldFetch() {

  const { fetched, cached } = yield select(state => state.contacts);

  if (!fetched && !cached) {

    try {
      const contacts = yield call(getAll);
      yield put({ type: actions.CONTACTS_SUCCESS, contacts});
      yield fork(setCache);
    } catch (error) {
      yield put({ type: actions.CONTACTS_ERROR, error});
    }

  }

}

export default function* contacts() {

  yield takeEvery(actions.CONTACTS_SHOULD_FETCH, shouldFetch);

}
