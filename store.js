import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import hotelApp from './reducers';
import rootSaga from './sagas';
import reducer from './reducers'

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}) {

  const middlewares = [
    sagaMiddleware,
    createLogger()
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  const store = createStore(
    reducer,
    compose(...enhancers)
  );

  // Create hook for async sagas
  store.runSaga = sagaMiddleware.run(rootSaga);

  return store;
}