import { combineReducers, Reducer } from 'redux';

import { currenciesReducer } from './currency';

const rootReducer = combineReducers({
  currency: currenciesReducer,
});

export type ReducerState = typeof rootReducer extends Reducer<infer S>
  ? S
  : never;

export default rootReducer;
