import { fork } from 'redux-saga/effects';
import contacts from './contacts';

// export the root saga containing forks of the app's sagas
export default function* root() {
  yield fork(contacts)
}
