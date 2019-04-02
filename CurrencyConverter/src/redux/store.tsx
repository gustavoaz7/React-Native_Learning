import React, { ReactNode, createContext, useContext } from 'react';
import { createStore, Store } from 'redux';
import { ReactReduxContext, ReactReduxContextValue } from 'react-redux';

import reducer, { ReducerState } from './reducers';

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

const store = createStore(reducer);

export default store;
