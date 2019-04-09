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

export type TThemeColors = 'Default' | 'Blue' | 'Orange' | 'Green' | 'Purple';

export type TThemes = {
  [key in TThemeColors]: {
    backgroundColor: string;
    color: string;
  }
};

export interface ICurrencyApi {
  base: TCurrencies;
  date: string;
  rates: { [key in TCurrencies]: number };
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
