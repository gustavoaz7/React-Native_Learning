import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { AlertProvider } from './components/Alert';
import store, { ReduxStoreProvider } from './redux/store';

interface IProviderPRops {
  children: ReactNode;
}

export default function Providers({ children }: IProviderPRops) {
  return (
    <Provider store={store}>
      <ReduxStoreProvider>
        <AlertProvider>{children}</AlertProvider>
      </ReduxStoreProvider>
    </Provider>
  );
}
