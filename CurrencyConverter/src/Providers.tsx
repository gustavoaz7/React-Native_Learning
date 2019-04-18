import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AlertProvider } from './components/Alert';
import { ReduxStoreProvider } from './redux/context';
import { configureStore } from './redux/store';

const { store, persistor } = configureStore();

interface IProviderPRops {
  children: ReactNode;
}

export default function Providers({ children }: IProviderPRops) {
  return (
    <Provider store={store}>
      <ReduxStoreProvider>
        <PersistGate loading={null} persistor={persistor}>
          <AlertProvider>{children}</AlertProvider>
        </PersistGate>
      </ReduxStoreProvider>
    </Provider>
  );
}
