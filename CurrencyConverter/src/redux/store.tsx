import React, { ReactNode, createContext, useContext } from 'react';
import { createStore, Store } from 'redux';
import { ReactReduxContext, ReactReduxContextValue } from 'react-redux';

import rootReducer from './reducers';
import { ReducerState } from './types';

interface IReduxStoreProviderProps {
  children: ReactNode;
}

type IStore = Store<ReducerState>;

export const ReduxStoreContext = createContext<IStore>(null as any);

export const ReduxStoreConsumer = ReduxStoreContext.Consumer;

export const ReduxStoreProvider = (props: IReduxStoreProviderProps) => {
  const { store: storeContextValue }: ReactReduxContextValue = useContext(
    ReactReduxContext,
  );
  return <ReduxStoreContext.Provider {...props} value={storeContextValue} />;
};

export const useReduxStore = () => useContext(ReduxStoreContext);

const store = createStore(rootReducer);

export default store;
