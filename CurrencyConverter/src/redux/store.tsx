import React, { ReactNode, createContext, useContext, Fragment } from 'react';
import { createStore, Store } from 'redux';
import { ReactReduxContext, ReactReduxContextValue } from 'react-redux';

import reducer from './reducers';

interface IStoreProviderProps {
  children: ReactNode;
}

type ReducerState = typeof reducer;

type IStore = Store<ReducerState>;

export const StoreContext = createContext<IStore>(null as any);

export const StoreConsumer = StoreContext.Consumer;

export const StoreProvider = (props: IStoreProviderProps) => {
  const { store: storeContextValue }: ReactReduxContextValue = useContext(
    ReactReduxContext,
  );
  return <StoreContext.Provider {...props} value={storeContextValue} />;
};

export const useStore = () => useContext(StoreContext);

const store = createStore(reducer);

export default store;
