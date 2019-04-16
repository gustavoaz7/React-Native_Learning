import React from 'react';
import AppContainer from './config/routes';
import Providers from './Providers';

export default function App() {
  return (
    <Providers>
      <AppContainer />
    </Providers>
  );
}
