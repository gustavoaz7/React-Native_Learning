import React, { Component } from 'react';
import AppContainer from './config/routes';
import { AlertProvider } from './components/Alert';

export default class App extends Component {
  render() {
    return (
      <AlertProvider>
        <AppContainer />
      </AlertProvider>
    );
  }
}
