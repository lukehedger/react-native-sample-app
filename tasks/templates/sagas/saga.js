import { take, put, call } from 'redux-saga/effects';

// TODO - import some action constants
import { SOME_ACTION } from '../constants/actions';

export default function* <%= module %>() {

  yield take(SOME_ACTION);

}
