import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { TodoApp } from './reducers';
import { todos } from '../mocks';

const persistConfig = {
  key: 'todos-redux-root',
  storage,
  debug: true,
};
const persistedReducer = persistReducer(persistConfig, TodoApp);

/* eslint-disable no-underscore-dangle */
const store = createStore(
  persistedReducer,
  // { todos, visFilter: 'ALL' },
  undefined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

const persistor = persistStore(store);

export { store, persistedReducer, persistor };
