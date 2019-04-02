import { ReducerState } from '../reducers';

const selector = (state: ReducerState) => state.currency || {};

export const baseCurrencySelector = (state: ReducerState) =>
  selector(state).baseCurrency;

export const quoteCurrencySelector = (state: ReducerState) =>
  selector(state).quoteCurrency;

export const amountSelector = (state: ReducerState) => selector(state).amount;

export const errorSelector = (state: ReducerState) => selector(state).error;

export const conversionsSelector = (state: ReducerState) =>
  selector(state).conversions || {};
