import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppContainer from './config/routes';
import { AlertProvider } from './components/Alert';
import store, { ReduxStoreProvider } from './redux/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxStoreProvider>
          <AlertProvider>
            <AppContainer />
          </AlertProvider>
        </ReduxStoreProvider>
      </Provider>
    );
  }
}
