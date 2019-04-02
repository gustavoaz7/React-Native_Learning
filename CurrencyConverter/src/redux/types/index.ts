import { Reducer } from 'redux';
import rootReducer from '../reducers';

export type ReducerState = typeof rootReducer extends Reducer<infer S>
  ? S
  : never;

export type ExtractActions<AC> = AC extends () => infer A
  ? A
  : (AC extends (payload: any) => infer A ? A : never);

export interface IAction<T extends string, P> {
  readonly type: T;
  readonly payload: P;
}

// TODO: How to create a type from all elements in a string array
export type TCurrencies =
  | 'AUD'
  | 'BGN'
  | 'BRL'
  | 'CAD'
  | 'CHF'
  | 'CNY'
  | 'CZK'
  | 'DKK'
  | 'EUR'
  | 'GBP'
  | 'HKD'
  | 'HRK'
  | 'HUF'
  | 'IDR'
  | 'ILS'
  | 'INR'
  | 'ISK'
  | 'JPY'
  | 'KRW'
  | 'MXN'
  | 'MYR'
  | 'NOK'
  | 'NZD'
  | 'PHP'
  | 'PLN'
  | 'RON'
  | 'RUB'
  | 'SEK'
  | 'SGD'
  | 'THB'
  | 'TRY'
  | 'USD'
  | 'ZAR';
