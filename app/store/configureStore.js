import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import sagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import rootReducer from '../reducers';

const logger = createLogger({collapsed: true});
const sagas = sagaMiddleware(rootSaga);

const finalCreateStore = compose(
  applyMiddleware(sagas, logger)
)(createStore);

export default function configureStore(initialState = {}) {

  const store = finalCreateStore(rootReducer, initialState);

  return store;

}
