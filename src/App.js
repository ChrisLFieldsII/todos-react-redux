import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './App.css';
import { store, persistor } from './redux';
import {
  VisTodoListContainer,
  HeaderContainer,
  FooterContainer,
} from './containers';

window.store = store;

function logState() {
  console.log('======== STORE UPDATED =======');
  console.log(store.getState());
}

store.subscribe(logState);

function Loading() {
  return (
    <div>
      <p>Loading...</p>
    </div>
  );
}

function App() {
  return (
    <div id="appContainer">
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <HeaderContainer />
          <VisTodoListContainer />
          <FooterContainer />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
